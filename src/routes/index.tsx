import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SidebarBody } from "@/components/portfolio/PortfolioSidebar";
import { SectionCard } from "@/components/portfolio/SectionCard";
import { DetailPanel } from "@/components/portfolio/DetailPanel";
import { EXPERTISE, HIGHLIGHTS, PROFILE, SECTIONS } from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jacqueline Ramos — Licensed Professional Teacher & Virtual Assistant" },
      {
        name: "description",
        content:
          "Portfolio of Jacqueline Ramos, Licensed Professional Teacher and Teacher III at the Department of Education, offering administrative support, virtual assistance, and online ESL teaching.",
      },
      {
        property: "og:title",
        content: "Jacqueline Ramos — Educator & Administrative Support Professional",
      },
      {
        property: "og:description",
        content:
          "12+ years of documentation, scheduling, reporting, record management, and online teaching experience — now supporting remote teams as a Virtual Assistant.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const active = SECTIONS.find((s) => s.id === activeId) ?? null;

  const open = (id: string) => {
    setMobileNavOpen(false);
    setActiveId(id);
  };

  return (
    <div className="min-h-screen bg-background text-ink">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-white/80 px-4 py-3 shadow-[0_8px_24px_rgba(37,99,235,0.06)] backdrop-blur lg:hidden">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{PROFILE.name}</p>
          <p className="truncate micro-label">{PROFILE.title}</p>
        </div>
        <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <SheetTrigger
            aria-label="Open navigation"
            className="inline-flex size-10 items-center justify-center border border-border bg-secondary text-ink"
          >
            <Menu className="size-5" aria-hidden />
          </SheetTrigger>
          <SheetContent side="left" className="w-[86vw] max-w-xs overflow-y-auto bg-sidebar p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SidebarBody onNavigate={open} />
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 hidden h-screen w-[300px] overflow-y-auto border-r border-border bg-sidebar/90 shadow-[8px_0_24px_rgba(37,99,235,0.06)] lg:block">
        <SidebarBody onNavigate={open} />
      </aside>

      <main className="lg:pl-[300px]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 lg:py-10">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-lg border border-border bg-card/90 p-6 shadow-[0_18px_40px_rgba(37,99,235,0.08)] sm:p-9">
            <div className="pixel-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <div className="relative">
              <span className="micro-label">{PROFILE.kicker}</span>
              <h1 className="mt-4 max-w-3xl text-3xl leading-[1.15] font-semibold text-ink sm:text-4xl lg:text-[2.6rem]">
                {PROFILE.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                {PROFILE.intro}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => open("experience")}
                  className="w-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-ink-soft sm:w-auto"
                >
                  View My Experience
                </button>
                <button
                  type="button"
                  onClick={() => open("contact")}
                  className="inline-flex w-full items-center justify-center gap-2 border border-ink bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-secondary sm:w-auto"
                >
                  <Mail className="size-4" aria-hidden />
                  Contact Me
                </button>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="card-tile p-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 font-mono text-[11px] tracking-widest text-ink ${item.tone}`}
                    >
                      {item.value}
                    </span>
                    <p className="mt-2 text-sm leading-snug font-medium text-ink">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Expertise strip */}
          <section className="mt-6 rounded-lg border border-border bg-secondary/80 p-5 shadow-[0_10px_24px_rgba(37,99,235,0.04)]">
            <span className="micro-label">How I Can Support</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {EXPERTISE.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 text-xs text-ink"
                  >
                    <Icon className="size-3.5 text-muted-foreground" aria-hidden />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </section>

          {/* Card grid */}
          <section className="mt-6">
            <div className="flex items-center gap-3">
              <span className="micro-label">Explore</span>
              <span className="pixel-divider flex-1" aria-hidden />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {SECTIONS.map((section) => (
                <SectionCard key={section.id} section={section} onOpen={() => open(section.id)} />
              ))}
            </div>
          </section>

          <footer className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-ink">{PROFILE.name}</p>
              <p className="micro-label">Licensed Professional Teacher • Administrative & Remote Support</p>
            </div>
            <div className="flex gap-1" aria-hidden>
              <span className="size-2 bg-blue-pastel" />
              <span className="size-2 bg-sage" />
              <span className="size-2 bg-blush" />
              <span className="size-2 bg-lavender" />
              <span className="size-2 bg-peach" />
            </div>
          </footer>
        </div>
      </main>

      <DetailPanel section={active} onClose={() => setActiveId(null)} />
    </div>
  );
}
