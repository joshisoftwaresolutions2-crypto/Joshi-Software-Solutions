import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { isSanityConfigured, routes } from "@/config/site";
import { getArticles, getCategories, getFeaturedArticle } from "@/lib/sanity/articles";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical notes on small-business websites, landing pages, custom software planning, maintenance, and design.",
  path: routes.blog,
});

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

async function getBlogData() {
  if (!isSanityConfigured()) {
    return { featured: null, articles: [], categories: [] };
  }

  const [featured, articles, categories] = await Promise.all([
    getFeaturedArticle(),
    getArticles(),
    getCategories(),
  ]);

  return { featured, articles, categories };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const [{ featured, articles, categories }, query] = await Promise.all([
    getBlogData(),
    searchParams,
  ]);

  return (
    <BlogPageClient
      initialFeatured={featured}
      initialArticles={articles}
      initialCategories={categories}
      initialCategory={query.category}
    />
  );
}
