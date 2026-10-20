import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { PackageCard } from "@/components/sections/package-card";
import { MaintenanceCard } from "@/components/sections/maintenance-card";
import { ServicePriceTable } from "@/components/sections/service-price-table";
import { CtaSection } from "@/components/sections/cta-section";
import {
  websitePackages,
  maintenancePlans,
  maintenanceExclusions,
  pricingNote,
  customSoftwarePricing,
} from "@/content/pricing";
import { routes } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent starting prices for business websites, landing pages, maintenance, and design work from Joshi Software Solutions.",
  path: routes.pricing,
});

const rules = [
  "A 50% advance starts a fixed-price project, with the balance due at agreed milestones or before final handover.",
  "Every project has a written scope listing pages, functionality, revisions, deliverables, timeline, and exclusions.",
  "Additional features and revision rounds outside the agreed scope are billed separately.",
  "Domains and paid third-party accounts are kept in the client's name wherever possible.",
  "Quotes and invoices state clearly whether taxes apply.",
  "Maintenance is offered after launch but is never compulsory.",
  "We do not promise Google rankings, leads, sales, or business results.",
];

export default function PricingPage() {
  const packages = websitePackages.filter((pkg) => pkg.published);
  const plans = maintenancePlans.filter((plan) => plan.published);

  return (
    <>
      <section className="border-b border-slate-border bg-white">
        <div className="container-content py-16 sm:py-20">
          <SectionHeading
            eyebrow="Pricing"
            title="Clear starting prices"
            intro="A straightforward catalogue so you can tell whether we're a fit before you get in touch. Every quote is confirmed after a short conversation about scope."
          />
        </div>
      </section>

      {/* Website packages */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Website packages"
          title="Three ways to get started"
          intro="Pick the level that matches your needs today. We'll confirm the final price once the scope is clear."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <p className="mt-8 max-w-3xl rounded-md border border-slate-border bg-slate-light px-5 py-4 text-sm leading-relaxed text-slate-muted">
          {pricingNote}
        </p>
      </Section>

      {/* Individual service prices */}
      <Section tone="slate">
        <SectionHeading
          eyebrow="Individual services"
          title="Per-service starting prices"
          intro="Useful when you need a specific piece of work rather than a full package."
        />
        <div className="mt-10 max-w-3xl">
          <ServicePriceTable />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-muted">
          These are starting prices, not fixed quotes.
        </p>
      </Section>

      {/* Maintenance plans */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Maintenance"
          title="Monthly care plans"
          intro="Keep your site updated and supported after launch, on a clearly defined monthly scope."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <MaintenanceCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="mt-8 max-w-3xl rounded-md border border-slate-border bg-slate-light px-5 py-4 text-sm leading-relaxed text-slate-muted">
          {maintenanceExclusions} For Next.js sites, maintenance is scoped around
          the actual hosting platform and deployment setup.
        </p>
      </Section>

      {/* Custom software */}
      <Section tone="dark">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
              Custom software
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {customSoftwarePricing.service}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              {customSoftwarePricing.note}
            </p>
          </div>
          <div className="flex lg:justify-end">
            <ButtonLink href={routes.contact} variant="light" size="lg">
              Request a quote
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Pricing rules */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="How we work"
            title="Pricing rules that protect both sides"
            intro="Simple terms that keep projects predictable for you and sustainable for us."
          />
          <ul className="divide-y divide-slate-border border-t border-slate-border">
            {rules.map((rule) => (
              <li
                key={rule}
                className="flex gap-3 py-4 text-sm leading-relaxed text-slate-muted sm:text-base"
              >
                <span aria-hidden="true" className="mt-0.5 text-blue">
                  &rarr;
                </span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaSection
        heading="Not sure which package fits?"
        text="Tell us what you need, and we'll recommend the most sensible option for your budget and goals."
      />
    </>
  );
}
