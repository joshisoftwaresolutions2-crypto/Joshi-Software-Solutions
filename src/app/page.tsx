import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { ServiceCard } from "@/components/sections/service-card";
import { PackageCard } from "@/components/sections/package-card";
import { ProjectCard } from "@/components/sections/project-card";
import { CtaSection } from "@/components/sections/cta-section";
import { FounderIntro } from "@/components/sections/founder-section";
import { EmptyState } from "@/components/ui/empty-state";
import { services } from "@/content/services";
import { getPublishedProjects } from "@/content/projects";
import { benefits } from "@/content/process";
import {
  websitePackages,
  maintenancePlans,
  formatInr,
  pricingNote,
} from "@/content/pricing";
import { routes } from "@/config/site";

export default function HomePage() {
  const projects = getPublishedProjects();
  const packages = websitePackages.filter((pkg) => pkg.published);
  const plans = maintenancePlans.filter((plan) => plan.published);

  return (
    <>
      <Hero />

      {/* 1. Services overview */}
      <Section id="services" tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Services"
            title="What we do"
            intro="A focused set of services covering the websites, tools, and design work most businesses actually need."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            <div className="flex items-start border-t border-slate-border pt-6">
              <ButtonLink href={routes.services} variant="secondary">
                See all services in detail
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Selected projects */}
      <Section tone="slate">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            intro="A selection of websites and web applications that show how we approach design, functionality, and problem-solving."
          />
          {projects.length > 0 ? (
            <ButtonLink href={routes.portfolio} variant="secondary">
              View full portfolio
            </ButtonLink>
          ) : null}
        </div>

        <div className="mt-10">
          {projects.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.slice(0, 4).map((project, index) => (
                <ProjectCard key={project.slug} project={project} priority={index === 0} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Portfolio coming soon"
              description="We're preparing screenshots and write-ups for recent projects. In the meantime, get in touch and we'll gladly walk you through relevant work."
            >
              <ButtonLink href={routes.contact}>Ask about our work</ButtonLink>
            </EmptyState>
          )}
        </div>
      </Section>

      {/* 3. Why work with us */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why work with us"
            title="Practical, straightforward collaboration"
            intro="No inflated claims — just the working habits that make a project go smoothly."
          />
          <ul className="divide-y divide-slate-border border-t border-slate-border">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="py-5">
                <h3 className="text-base font-semibold text-navy">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-muted">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 4. Founder introduction */}
      <Section tone="slate">
        <FounderIntro />
      </Section>

      {/* 5. Starting prices — packages and optional maintenance */}
      <Section tone="white" id="pricing">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Pricing"
            title="Starting prices"
            intro="Clear starting points for the most common projects. The final price is confirmed once the scope is agreed."
          />
          <ButtonLink href={routes.pricing} variant="secondary">
            See full pricing
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-navy">
              Optional monthly maintenance
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-muted">
              Keep your site looked after after launch, with updates, checks, and
              small changes.
            </p>
          </div>
          <ul className="divide-y divide-slate-border border-t border-slate-border">
            {plans.map((plan) => (
              <li
                key={plan.id}
                className="flex items-center justify-between gap-6 py-5"
              >
                <div>
                  <h3 className="text-base font-semibold text-navy">{plan.name}</h3>
                  <p className="mt-1 text-sm text-slate-muted">{plan.idealFor}</p>
                </div>
                <p className="whitespace-nowrap text-lg font-semibold text-navy">
                  {plan.published && plan.amount !== null
                    ? `${formatInr(plan.amount)}/mo`
                    : "On request"}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-3xl rounded-md border border-slate-border bg-slate-light px-5 py-4 text-sm leading-relaxed text-slate-muted">
          {pricingNote}
        </p>
      </Section>

      {/* 6. Contact call to action */}
      <CtaSection />
    </>
  );
}
