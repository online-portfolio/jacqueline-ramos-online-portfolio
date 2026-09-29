import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { ImagePlus, MoreVertical, Pencil, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Section } from "./data";

const MY_WORKS_STORAGE_KEY = "portfolio-my-works-photo";

type MyWorksPhoto = {
  id: string;
  url: string;
  details: string;
};

function createPhotoId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("Could not read the selected image."));
    };
    reader.onerror = () => reject(reader.error ?? new Error("Could not read the selected image."));
    reader.readAsDataURL(file);
  });
}

function useMyWorksPhoto() {
  const [photos, setPhotos] = useState<MyWorksPhoto[]>([]);
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const [editingPhotoId, setEditingPhotoId] = useState<string | null>(null);
  const [draftDetails, setDraftDetails] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(MY_WORKS_STORAGE_KEY);
      if (!stored) return;

      try {
        const parsed = JSON.parse(stored) as MyWorksPhoto[] | unknown;
        const loadedPhotos = Array.isArray(parsed)
          ? parsed.filter(
              (photo): photo is MyWorksPhoto =>
                typeof photo === "object" &&
                photo !== null &&
                typeof (photo as MyWorksPhoto).id === "string" &&
                typeof (photo as MyWorksPhoto).url === "string",
            )
          : [];
        const normalizedPhotos = loadedPhotos.map((photo) => ({ ...photo, details: photo.details ?? "" }));
        setPhotos(normalizedPhotos);
        setSelectedPhotoId(normalizedPhotos[0]?.id ?? null);
      } catch {
        const migratedPhoto = { id: createPhotoId(), url: stored, details: "" };
        setPhotos([migratedPhoto]);
        setSelectedPhotoId(migratedPhoto.id);
      }
    }
  }, []);

  const savePhotos = (nextPhotos: MyWorksPhoto[]) => {
    setPhotos(nextPhotos);
    window.localStorage.setItem(MY_WORKS_STORAGE_KEY, JSON.stringify(nextPhotos));
  };

  const choosePhoto = (photoId: string | null = null) => {
    setEditingPhotoId(photoId);
    inputRef.current?.click();
  };

  const handlePhotoChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    if (!selectedFiles.length) return;

    try {
      const dataUrls = await Promise.all(selectedFiles.map(readFileAsDataUrl));
      if (editingPhotoId) {
        const [replacement] = dataUrls;
        savePhotos(
          photos.map((photo) =>
            photo.id === editingPhotoId ? { ...photo, url: replacement } : photo,
          ),
        );
      } else {
        const newPhotos = [
          ...photos,
          ...dataUrls.map((url) => ({ id: createPhotoId(), url, details: "" })),
        ];
        savePhotos(newPhotos);
        setSelectedPhotoId(newPhotos[newPhotos.length - dataUrls.length]?.id ?? null);
      }
    } catch {
      // Ignore unreadable files and keep the existing saved work samples.
    }
    setEditingPhotoId(null);
    event.target.value = "";
  };

  const deletePhoto = (photoId: string) => {
    const nextPhotos = photos.filter((photo) => photo.id !== photoId);
    savePhotos(nextPhotos);
    setSelectedPhotoId(nextPhotos[0]?.id ?? null);
    setDraftDetails((current) => {
      const next = { ...current };
      delete next[photoId];
      return next;
    });
  };

  const deleteAllPhotos = () => {
    savePhotos([]);
    setSelectedPhotoId(null);
    setDraftDetails({});
  };

  const saveDetails = (photoId: string) => {
    savePhotos(
      photos.map((photo) =>
        photo.id === photoId
          ? { ...photo, details: draftDetails[photoId] ?? photo.details }
          : photo,
      ),
    );
  };

  return {
    photos,
    selectedPhotoId,
    setSelectedPhotoId,
    inputRef,
    choosePhoto,
    handlePhotoChange,
    deletePhoto,
    deleteAllPhotos,
    draftDetails,
    setDraftDetails,
    saveDetails,
  };
}

function MyWorksDetail({
  photos,
  selectedPhotoId,
  setSelectedPhotoId,
  inputRef,
  choosePhoto,
  handlePhotoChange,
  deletePhoto,
  deleteAllPhotos,
  draftDetails,
  setDraftDetails,
  saveDetails,
}: ReturnType<typeof useMyWorksPhoto>) {
  const [editingDetailsPhotoId, setEditingDetailsPhotoId] = useState<string | null>(null);
  const selectedId = selectedPhotoId ?? photos[0]?.id ?? null;

  const startEditing = () => {
    if (!selectedId) return;
    setSelectedPhotoId(selectedId);
    setEditingDetailsPhotoId(selectedId);
    choosePhoto(selectedId);
  };

  const removeSelected = () => {
    if (!selectedId) return;
    deletePhoto(selectedId);
    setEditingDetailsPhotoId(null);
  };

  const saveSelectedDetails = () => {
    if (!selectedId) return;
    saveDetails(selectedId);
    setEditingDetailsPhotoId(null);
  };

  return (
    <div className="space-y-5">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoChange}
        className="sr-only"
        aria-label="Choose a work photo"
      />
      {photos.length ? (
        <div className="max-h-[60dvh] space-y-5 overflow-y-auto pr-2">
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-none text-ink"
                  aria-label="My Works photo actions"
                >
                  <MoreVertical aria-hidden />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-44">
                <DropdownMenuItem onSelect={() => choosePhoto()}>
                  <ImagePlus aria-hidden />
                  Add photos
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={startEditing}>
                  <Pencil aria-hidden />
                  Edit selected photo
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={removeSelected}
                  className="text-destructive focus:text-destructive"
                >
                  <Trash2 aria-hidden />
                  Delete selected photo
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={deleteAllPhotos}
                  className="text-destructive focus:text-destructive"
                >
                  <Trash2 aria-hidden />
                  Delete all photos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {photos.map((photo, index) => {
            const details = draftDetails[photo.id] ?? photo.details;
            const isSelected = photo.id === selectedId;
            const isEditing = photo.id === editingDetailsPhotoId || !photo.details;
            return (
              <article
                key={photo.id}
                onClick={() => setSelectedPhotoId(photo.id)}
                className={`border bg-secondary/30 p-3 ${isSelected ? "border-ink" : "border-border"}`}
              >
                <div className="overflow-hidden border border-border bg-secondary">
                  <img
                    src={photo.url}
                    alt={`Work sample ${index + 1}`}
                    className="max-h-80 w-full object-contain"
                  />
                </div>
                <div className="mt-3 space-y-2">
                  <span className="micro-label">Work details</span>
                  {isEditing ? (
                    <>
                      <textarea
                        id={`work-details-${photo.id}`}
                        value={details}
                        onChange={(event) =>
                          setDraftDetails((current) => ({
                            ...current,
                            [photo.id]: event.target.value,
                          }))
                        }
                        placeholder="Describe this VA work sample..."
                        className="min-h-20 w-full resize-y border border-border bg-card px-3 py-2 text-sm text-ink outline-none placeholder:text-muted-foreground focus:border-ink"
                      />
                      <Button type="button" size="sm" onClick={saveSelectedDetails}>
                        <Save aria-hidden />
                        Save details
                      </Button>
                    </>
                  ) : (
                    <p className="border-l-2 border-accent bg-card px-3 py-2 text-sm leading-relaxed text-ink-soft">
                      {photo.details || "No details saved."}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="flex min-h-40 justify-end" aria-label="No work photos">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 rounded-none text-ink"
                aria-label="My Works photo actions"
              >
                <MoreVertical aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-44">
              <DropdownMenuItem onSelect={() => choosePhoto()}>
                <ImagePlus aria-hidden />
                Add photos
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
}

export function DetailPanel({
  section,
  onClose,
}: {
  section: Section | null;
  onClose: () => void;
}) {
  const myWorksPhoto = useMyWorksPhoto();

  return (
    <Dialog open={!!section} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[88dvh] gap-0 overflow-y-auto rounded-none border-border bg-card p-0 sm:max-w-2xl">
        {section && (
          <>
            <DialogHeader className="border-b border-border bg-secondary/60 px-6 py-5 text-left">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="micro-label">{section.micro}</span>
                  <DialogTitle className="text-2xl leading-tight text-ink">
                    {section.label}
                  </DialogTitle>
                  <div className={`mt-2 h-1 w-12 ${section.tone}`} aria-hidden />
                </div>
              </div>
            </DialogHeader>
            <div className="px-6 py-6">
              {section.detailType === "my-works" ? (
                <MyWorksDetail {...myWorksPhoto} />
              ) : (
                section.detail
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
