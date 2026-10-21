"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogCover } from "@/components/art/blog-cover";
import { ArticleCard } from "@/components/sections/article-card";
import { CtaSection } from "@/components/sections/cta-section";
import { formatSanityDate } from "@/lib/sanity/format";
import { sanityImageUrl } from "@/lib/sanity/image";
import type { SanityArticle } from "@/lib/sanity/types";

type BlogPageClientProps = {
  initialFeatured: SanityArticle | null;
  initialArticles: SanityArticle[];
  initialCategories: string[];
  initialCategory?: string;
};

export function BlogPageClient({
  initialFeatured,
  initialArticles,
  initialCategories,
  initialCategory,
}: BlogPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory && initialCategories.includes(initialCategory)
      ? initialCategory
      : "all",
  );

  const categoryCounts = useMemo(() => {
    return initialArticles.reduce<Record<string, number>>((counts, article) => {
      counts[article.category] = (counts[article.category] || 0) + 1;
      return counts;
    }, {});
  }, [initialArticles]);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "all") return initialArticles;
    return initialArticles.filter(
      (article) => article.category === selectedCategory,
    );
  }, [initialArticles, selectedCategory]);

  const showFeatured =
    initialFeatured !== null &&
    (selectedCategory === "all" ||
      initialFeatured.category === selectedCategory);

  const gridArticles = showFeatured
    ? filteredArticles.filter(
        (article) => article._id !== initialFeatured._id,
      )
    : filteredArticles;

  const featuredCover = initialFeatured
    ? sanityImageUrl(initialFeatured.coverImage, 1400)
    : "";

  return (
    <>
      <section className="border-b border-slate-border bg-white">
        <div className="container-content py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              Journal
            </p>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Notes and guides
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-muted">
              Practical writing on websites, software planning, performance,
              SEO, and design for small businesses.
            </p>
          </div>
        </div>
      </section>

      {initialCategories.length > 0 && (
        <nav
          aria-label="Filter articles by category"
          className="border-b border-slate-border bg-white"
        >
          <div className="container-content flex flex-wrap gap-2 py-5">
            {["all", ...initialCategories].map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === "all"
                  ? initialArticles.length
                  : categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-navy text-white"
                      : "bg-slate-light text-navy hover:bg-slate-border"
                  }`}
                >
                  {category === "all" ? "All" : category}
                  <span
                    className={`ml-1.5 ${
                      isActive ? "text-white/60" : "text-slate-muted"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {showFeatured && initialFeatured && (
        <section className="border-b border-slate-border bg-slate-light">
          <div className="container-content py-16 sm:py-20">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              Featured article
            </p>
            <article className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <Link
                href={`/blog/${initialFeatured.slug.current}`}
                className="block overflow-hidden rounded-xl border border-slate-border bg-white"
              >
                <div className="aspect-[16/10]">
                  {featuredCover ? (
                    <Image
                      src={featuredCover}
                      alt={initialFeatured.coverImage?.alt || ""}
                      width={1400}
                      height={875}
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <BlogCover slug={initialFeatured.slug.current} />
                  )}
                </div>
              </Link>
              <div className="max-w-xl">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue px-3 py-1 text-xs font-medium text-white">
                    {initialFeatured.category}
                  </span>
                  {initialFeatured.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-border bg-white px-3 py-1 text-xs text-slate-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-semibold text-navy sm:text-4xl">
                  <Link
                    href={`/blog/${initialFeatured.slug.current}`}
                    className="link-underline"
                  >
                    {initialFeatured.title}
                  </Link>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-muted">
                  {initialFeatured.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-muted">
                  {initialFeatured.author?.name && (
                    <span>{initialFeatured.author.name}</span>
                  )}
                  {initialFeatured.publishedAt && (
                    <time dateTime={initialFeatured.publishedAt}>
                      {formatSanityDate(initialFeatured.publishedAt)}
                    </time>
                  )}
                </div>
                <Link
                  href={`/blog/${initialFeatured.slug.current}`}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue link-underline"
                >
                  Read article
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="container-content py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                {selectedCategory === "all" ? "All articles" : selectedCategory}
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Latest posts
              </h2>
            </div>
            {selectedCategory !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className="text-sm font-medium text-blue link-underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {gridArticles.length > 0 ? (
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {gridArticles.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-slate-border bg-slate-light px-6 py-12 text-center">
              <p className="text-slate-muted">
                {initialArticles.length === 0
                  ? "New articles are on the way. In the meantime, get in touch if you have a question about your website."
                  : "No other articles in this category yet."}
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
