import { sanityFetch } from "@/lib/sanity/client";
import {
  articleQuery,
  articlesQuery,
  articleSlugsQuery,
  articleCategoriesQuery,
  featuredArticleQuery,
  relatedArticlesQuery,
} from "@/lib/sanity/queries";
import type { SanityArticle } from "@/lib/sanity/types";

export type { SanityArticle, SanityAuthor, SanityImage } from "@/lib/sanity/types";
export { formatSanityDate } from "@/lib/sanity/format";

export async function getArticle(slug: string): Promise<SanityArticle | null> {
  return sanityFetch<SanityArticle>({
    query: articleQuery,
    params: { slug },
    tags: [`article-${slug}`],
  });
}

export async function getArticles(): Promise<SanityArticle[]> {
  return (
    (await sanityFetch<SanityArticle[]>({
      query: articlesQuery,
      tags: ["articles"],
    })) ?? []
  );
}

export async function getFeaturedArticle(): Promise<SanityArticle | null> {
  return sanityFetch<SanityArticle>({
    query: featuredArticleQuery,
    tags: ["featured-article"],
  });
}

export async function getArticleSlugs(): Promise<string[]> {
  const result = await sanityFetch<{ slug: string }[]>({
    query: articleSlugsQuery,
    tags: ["article-slugs"],
  });

  return result?.map((item) => item.slug) ?? [];
}

export async function getCategories(): Promise<string[]> {
  const result = await sanityFetch<string[]>({
    query: articleCategoriesQuery,
    tags: ["categories"],
  });

  return (result ?? []).filter(Boolean).sort((a, b) => a.localeCompare(b));
}

export async function getRelatedArticles(
  category: string,
  currentId: string,
  limit = 3,
): Promise<SanityArticle[]> {
  return (
    (await sanityFetch<SanityArticle[]>({
      query: relatedArticlesQuery,
      params: { category, id: currentId, limit },
      tags: [`related-${currentId}`],
    })) ?? []
  );
}
