import { ButtonLink } from "@/components/ui/button";
import { HeroArt } from "@/components/art/hero-art";
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

        <HeroArt />
      </div>
    </section>
  );
}
