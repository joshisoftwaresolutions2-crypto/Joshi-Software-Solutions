import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";
import { EmptyState } from "@/components/ui/empty-state";
import { getPublishedProjects } from "@/content/projects";
import { routes } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { ProjectShot } from "@/components/sections/project-card";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Selected websites, landing pages, and web applications built by Joshi Software Solutions.",
  path: routes.portfolio,
});

export default function PortfolioPage() {
  const projects = getPublishedProjects();

  return (
    <>
      <section className="border-b border-slate-border bg-white">
        <div className="container-content py-16 sm:py-20">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            intro="Real projects, described honestly. Each entry explains the objective, our contribution, and the technologies used."
          />
        </div>
      </section>

      <Section tone="white">
        {projects.length > 0 ? (
          <div className="space-y-16">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                id={project.slug}
                className="grid gap-10 border-t border-slate-border pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
              >
                <div>
                  {project.screenshots.length > 0 ? (
                    <ProjectShot project={project} priority={index === 0} />
                  ) : null}
                </div>
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
                    {project.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-navy sm:text-3xl">
                    {project.name}
                  </h2>

                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                    Objective
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-muted">
                    {project.objective}
                  </p>

                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                    Our contribution
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-muted">
                    {project.contribution}
                  </p>

                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                    Technologies
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-slate-border bg-slate-light px-3 py-1 text-xs text-slate-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {(project.liveUrl || project.repoUrl) && (
                    <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue link-underline"
                        >
                          Visit live site &rarr;
                        </a>
                      ) : null}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue link-underline"
                        >
                          View source code &rarr;
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Portfolio in preparation"
            description="We're putting together genuine project write-ups and screenshots. Rather than show placeholder work, we'll publish these once they're ready."
          >
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href={routes.contact}>Ask about our work</ButtonLink>
              <ButtonLink href={routes.services} variant="secondary">
                Explore services
              </ButtonLink>
            </div>
          </EmptyState>
        )}
      </Section>

      <CtaSection />
    </>
  );
}
