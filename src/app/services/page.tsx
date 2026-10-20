import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";
import { services } from "@/content/services";
import { prices, customSoftwarePricing, formatInr } from "@/content/pricing";
import { routes } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Business websites, landing pages, custom web applications, website maintenance, and UI and graphic design from Joshi Software Solutions.",
  path: routes.services,
});

function priceFor(id: string) {
  return prices.find((price) => price.id === id);
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-border bg-white">
        <div className="container-content py-16 sm:py-20">
          <SectionHeading
            eyebrow="Services"
            title="Services built around real business needs"
            intro="Each engagement is scoped clearly, delivered in stages, and handed over with what you need to keep things running."
          />
        </div>
      </section>

      {services.map((service, index) => {
        const price = priceFor(service.id);
        const isAlt = index % 2 === 1;
        return (
          <Section
            key={service.id}
            id={service.id}
            tone={isAlt ? "slate" : "white"}
            bordered
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
                  Service {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
                  {service.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-muted">
                  {service.detail}
                </p>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                  Who it&apos;s for
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-muted">
                  {service.suitableFor}
                </p>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                  How the engagement works
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-muted">
                  {service.engagement}
                </p>

                <div className="mt-8">
                  <ButtonLink href={routes.contact} variant="primary">
                    Enquire about {service.name.toLowerCase()}
                  </ButtonLink>
                </div>
              </div>

              <aside className="rounded-lg border border-slate-border bg-white p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                  Possible deliverables
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-muted">
                      <span aria-hidden="true" className="mt-0.5 text-blue">
                        &rarr;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                  What affects the price
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.pricingFactors.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-muted">
                      <span aria-hidden="true" className="mt-0.5 text-blue">
                        &middot;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-slate-border pt-5">
                  <p className="text-xs uppercase tracking-[0.1em] text-slate-muted">
                    {price ? price.unit : "per project"}
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-navy">
                    {price && price.published && price.amount !== null
                      ? `From ${formatInr(price.amount)}`
                      : "Quoted on request"}
                  </p>
                </div>
              </aside>
            </div>
          </Section>
        );
      })}

      <Section tone="white" bordered>
        <div className="rounded-lg border border-slate-border bg-slate-light p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-navy">
            {customSoftwarePricing.service}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-muted">
            {customSoftwarePricing.note}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-muted">
            Project fees are separate from external costs such as domain
            registration, hosting, and paid third-party integrations.
          </p>
          <div className="mt-6">
            <ButtonLink href={routes.contact}>Discuss a custom project</ButtonLink>
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
