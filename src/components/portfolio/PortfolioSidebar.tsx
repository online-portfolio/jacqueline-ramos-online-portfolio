import { BriefcaseBusiness, Linkedin, MapPin, Mail } from "lucide-react";
import { PROFILE, SECTIONS } from "./data";

export function SidebarBody({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <div className="flex min-h-full flex-col gap-6 p-5 sm:p-6">
      <div className="text-center">
        <div className="relative mx-auto w-fit">
          <div className="absolute -top-2 -left-2 size-3 bg-peach" aria-hidden />
          <div className="absolute -right-2 -bottom-2 size-3 bg-sage" aria-hidden />
          <img
            src="/profile.png"
            alt={`${PROFILE.name}, ${PROFILE.title}`}
            width={816}
            height={816}
            className="size-28 border border-border object-cover"
          />
        </div>
        <h2 className="mt-4 text-lg leading-tight font-semibold text-ink">{PROFILE.name}</h2>
        <p className="mt-1 text-sm text-ink-soft">{PROFILE.title}</p>
        <p className="micro-label mt-2 block">{PROFILE.subtitle}</p>
        <div className="mt-4 flex justify-center gap-2">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`}
            target="_blank"
            rel="noreferrer"
            title="Email Jacqueline"
            aria-label="Email Jacqueline Ramos"
            className="inline-flex size-8 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
          >
            <Mail className="size-4" aria-hidden />
          </a>
          <a
            href={PROFILE.socials.upwork}
            target="_blank"
            rel="noreferrer"
            title="Upwork profile"
            aria-label="Open Upwork profile"
            className="inline-flex size-8 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
          >
            <BriefcaseBusiness className="size-4" aria-hidden />
          </a>
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn profile"
            aria-label="Open LinkedIn profile"
            className="inline-flex size-8 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
          >
            <Linkedin className="size-4" aria-hidden />
          </a>
        </div>
      </div>

      <div className="pixel-divider" aria-hidden />

      <div className="space-y-2 text-sm text-ink-soft">
        <p className="flex items-center gap-2">
          <MapPin className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          {PROFILE.location}
        </p>
      </div>

      <nav className="flex-1">
        <span className="micro-label">Navigate</span>
        <ul className="mt-3 space-y-1">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => onNavigate(section.id)}
                className="group flex w-full items-center gap-3 border border-transparent px-3 py-2 text-left text-sm text-ink-soft transition-colors hover:border-border hover:bg-secondary hover:text-ink"
              >
                <span className={`size-2 shrink-0 ${section.tone}`} aria-hidden />
                <span className="truncate">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
        AVAILABLE FOR REMOTE WORK
      </p>
    </div>
  );
}
