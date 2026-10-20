import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaSection } from "@/components/sections/cta-section";
import { ArticleCard } from "@/components/sections/article-card";
import { BlogCover } from "@/components/art/blog-cover";
import {
  getArticle,
  getPublishedArticles,
  getRelatedArticles,
  formatArticleDate,
  type ArticleBlock,
} from "@/content/blog";
import { routes, siteUrl, business } from "@/config/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Article not found" };
  }
  const url = `${siteUrl}/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: business.name,
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "heading") {
    return <h2 className="mt-10 text-2xl font-semibold text-navy">{block.text}</h2>;
  }
  if (block.type === "list") {
    return (
      <ul className="mt-5 space-y-2.5">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-muted">
            <span aria-hidden="true" className="mt-0.5 text-blue">
              &middot;
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-5 text-base leading-relaxed text-slate-muted">{block.text}</p>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article);

  return (
    <>
      <article className="bg-white">
        <div className="container-content py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <Link href={routes.blog} className="text-sm font-medium text-blue link-underline">
              &larr; Back to blog
            </Link>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-muted">
              {article.publishedAt ? (
                <time dateTime={article.publishedAt}>
                  {formatArticleDate(article.publishedAt)}
                </time>
              ) : null}
              {article.tags.length > 0 ? <span aria-hidden="true">&middot;</span> : null}
              <span>{article.tags.join(", ")}</span>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-border">
              <div className="aspect-[2/1]">
                <BlogCover slug={article.slug} />
              </div>
            </div>

            <div className="mt-10">
              <p className="text-lg leading-relaxed text-navy">{article.description}</p>
              {article.blocks.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-slate-border bg-slate-light">
          <div className="container-content py-16">
            <h2 className="text-xl font-semibold text-navy">Related articles</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection />
    </>
  );
}
