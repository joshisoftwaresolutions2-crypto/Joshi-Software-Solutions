import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaSection } from "@/components/sections/cta-section";
import { AboutArt } from "@/components/art/about-art";
import { benefits, processSteps } from "@/content/process";
import { business } from "@/config/site";
import { routes } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "How Joshi Software Solutions works, what we focus on, and the kind of problems we help businesses solve.",
  path: routes.about,
});

/**
 * TODO(content): Add approved business details before launch:
 * - Founder name and short biography
 * - Year established
 * - Team size, if relevant
 * - Any qualifications, certifications, or awards you want published
 * Do not render these as public content until confirmed.
 */

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-border bg-white">
        <div className="container-content grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              About
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              A software studio focused on clear, useful work
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-muted">
              {business.name} designs and builds websites, landing pages, and
              custom web applications. We work with small and medium-sized
              businesses in Delhi NCR, organisations across India, and
              international clients who need dependable digital work.
            </p>
          </div>
          <AboutArt />
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Approach" title="How we think about the work" />
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-slate-muted">
            <p>
              Most businesses don&apos;t need the most complicated solution — they
              need the right one. We start by understanding the problem, then
              choose the simplest approach that solves it well and can be
              maintained afterwards.
            </p>
            <p>
              We keep communication direct. You deal with the people doing the
              work, decisions are made in the open, and progress is shared as it
              happens rather than at the end.
            </p>
            <p>
              We&apos;re careful about claims. We&apos;d rather describe exactly what a
              project includes than promise outcomes we can&apos;t control.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="slate">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Problems we help with"
            title="What clients typically come to us for"
          />
          <ul className="divide-y divide-slate-border border-t border-slate-border">
            {[
              "A first professional website for a new or growing business.",
              "A focused landing page for a specific service or campaign.",
              "A web tool to replace manual spreadsheets or repetitive work.",
              "Reliable maintenance for a site that has been neglected.",
              "A visual refresh where the design no longer matches the business.",
            ].map((item) => (
              <li key={item} className="flex gap-3 py-5 text-base leading-relaxed text-slate-muted">
                <span aria-hidden="true" className="mt-0.5 text-blue">
                  &rarr;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Principles"
          title="What you can expect from us"
        />
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="border-t border-slate-border pt-6">
              <h3 className="text-base font-semibold text-navy">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Process"
          title="A predictable way of working"
          intro="The same four stages apply whether the project is a single page or a larger application."
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

      <CtaSection
        heading="Want to talk it through?"
        text="Tell us about your business and what you're trying to achieve. We'll suggest a sensible way forward."
      />
    </>
  );
}
