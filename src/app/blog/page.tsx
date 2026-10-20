import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";
import { ArticleCard } from "@/components/sections/article-card";
import { EmptyState } from "@/components/ui/empty-state";
import { getPublishedArticles } from "@/content/blog";
import { routes } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical notes on small-business websites, landing pages, custom software planning, maintenance, and design.",
  path: routes.blog,
});

export default function BlogPage() {
  const articles = getPublishedArticles();

  return (
    <>
      <section className="border-b border-slate-border bg-white">
        <div className="container-content py-16 sm:py-20">
          <SectionHeading
            eyebrow="Journal"
            title="Notes and guides"
            intro="Occasional writing on websites, software planning, maintenance, and design for small businesses."
          />
        </div>
      </section>

      <Section tone="white">
        {articles.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No articles published yet"
            description="We're preparing a few pieces on small-business websites, landing pages, custom software planning, and design. New writing will appear here as it's finished."
          >
            <ButtonLink href={routes.contact} variant="secondary">
              Get in touch instead
            </ButtonLink>
          </EmptyState>
        )}
      </Section>

      <CtaSection />
    </>
  );
}
