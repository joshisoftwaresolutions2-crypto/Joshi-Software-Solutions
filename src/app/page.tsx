import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { ServiceCard } from "@/components/sections/service-card";
import { ProjectCard } from "@/components/sections/project-card";
import { ArticleCard } from "@/components/sections/article-card";
import { CtaSection } from "@/components/sections/cta-section";
import { EmptyState } from "@/components/ui/empty-state";
import { services } from "@/content/services";
import { getPublishedProjects } from "@/content/projects";
import { getPublishedArticles } from "@/content/blog";
import { benefits, processSteps } from "@/content/process";
import { prices, customSoftwarePricing, formatInr } from "@/content/pricing";
import { routes } from "@/config/site";

export default function HomePage() {
  const projects = getPublishedProjects();
  const articles = getPublishedArticles();

  return (
    <>
      <Hero />

      {/* Services overview — editorial two-column intro beside a stacked list */}
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

      {/* Selected work */}
      <Section tone="slate">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects we've built"
            intro="A sample of recent work. Each project below was delivered for a real client."
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

      {/* Why work with us — numbered list against intro */}
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

      {/* Process — dark band with four steps */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Process"
          title="How a project runs"
          intro="Four clear stages, so you always know what is happening and what comes next."
          tone="dark"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.number} className="border-t border-white/15 pt-6">
              <span className="text-sm font-semibold text-blue-300">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Starting prices */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Pricing"
          title="Starting prices"
          intro="Indicative starting points for common projects. Every quote is confirmed after a short conversation about scope."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {prices.map((price) => (
            <div
              key={price.id}
              className="flex flex-col rounded-lg border border-slate-border p-6"
            >
              <h3 className="text-base font-semibold text-navy">{price.service}</h3>
              <p className="mt-3 text-2xl font-semibold text-navy">
                {price.published && price.amount !== null
                  ? formatInr(price.amount)
                  : "On request"}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-slate-muted">
                {price.unit}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-muted">
                {price.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-blue">
                      &middot;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-slate-border bg-slate-light px-6 py-5">
          <p className="text-sm leading-relaxed text-slate-muted">
            <span className="font-medium text-navy">
              {customSoftwarePricing.service}:
            </span>{" "}
            {customSoftwarePricing.note}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-muted">
            Project fees are separate from external costs such as domain
            registration, hosting, and paid third-party integrations.
          </p>
        </div>
      </Section>

      {/* Blog preview */}
      <Section tone="slate">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Journal"
            title="Notes and guides"
            intro="Occasional writing on websites, software planning, and design for small businesses."
          />
          {articles.length > 0 ? (
            <ButtonLink href={routes.blog} variant="secondary">
              Read the blog
            </ButtonLink>
          ) : null}
        </div>
        <div className="mt-10">
          {articles.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No articles published yet"
              description="We're preparing a few pieces on small-business websites, landing pages, and custom software planning. New writing will appear here."
            />
          )}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
