import { ArrowUpRight } from "lucide-react";
import type { Section } from "./data";

export function SectionCard({ section, onOpen }: { section: Section; onOpen: () => void }) {
  const Icon = section.icon;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card-tile card-tile-hover group flex h-full flex-col p-5 text-left"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`inline-flex size-9 items-center justify-center ${section.tone}`}>
          <Icon className="size-4 text-ink" aria-hidden />
        </span>
        <span className="micro-label">{section.micro}</span>
      </div>
      <h3 className="mt-4 text-lg leading-snug font-semibold text-ink">{section.label}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{section.preview}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {section.previewBits.map((bit) => (
          <span
            key={bit}
            className="border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground"
          >
            {bit}
          </span>
        ))}
      </div>
      <span className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-[11px] tracking-widest text-muted-foreground uppercase transition-colors group-hover:text-ink">
        View details
        <ArrowUpRight className="size-3.5" aria-hidden />
      </span>
    </button>
  );
}
