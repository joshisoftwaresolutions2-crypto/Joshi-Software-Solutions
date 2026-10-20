import { ButtonLink } from "@/components/ui/button";
import { routes, business } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-border bg-white">
      <div className="container-content grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
            {business.name}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            Digital solutions built around your business.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-muted">
            We build modern websites, landing pages, and custom web applications
            designed around your goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={routes.contact} size="lg">
              Discuss Your Project
            </ButtonLink>
            <ButtonLink href={routes.portfolio} variant="secondary" size="lg">
              Explore Our Work
            </ButtonLink>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

/**
 * Structured browser-frame composition. This is intentionally a neutral,
 * designed placeholder: it fills the visual area without inventing project
 * screenshots or brand assets. Replace the inner content with a real project
 * screenshot when assets are supplied.
 */
function HeroVisual() {
  return (
    <div className="relative">
      <div className="rounded-xl border border-slate-border bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04),0_12px_32px_-12px_rgba(16,24,40,0.18)]">
        <div className="flex items-center gap-2 border-b border-slate-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-border" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-border" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-border" aria-hidden="true" />
          <span className="ml-3 hidden h-5 flex-1 rounded bg-slate-light sm:block" aria-hidden="true" />
        </div>
        <div className="space-y-5 p-6 sm:p-8">
          <div className="h-3 w-1/3 rounded bg-navy/85" aria-hidden="true" />
          <div className="space-y-2.5">
            <div className="h-2.5 w-full rounded bg-slate-border" aria-hidden="true" />
            <div className="h-2.5 w-5/6 rounded bg-slate-border" aria-hidden="true" />
            <div className="h-2.5 w-2/3 rounded bg-slate-border" aria-hidden="true" />
          </div>
          <div className="flex gap-3 pt-1">
            <div className="h-9 w-32 rounded-md bg-blue" aria-hidden="true" />
            <div className="h-9 w-28 rounded-md border border-slate-border" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="aspect-square rounded-md bg-slate-light" aria-hidden="true" />
            <div className="aspect-square rounded-md bg-slate-light" aria-hidden="true" />
            <div className="aspect-square rounded-md bg-slate-light" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
