/**
 * Blog content model.
 *
 * Articles are authored here as structured content blocks, which keeps the
 * project free of extra dependencies while still supporting draft/unpublished
 * handling, readable slugs, and genuine publication dates.
 *
 * IMPORTANT: Only articles with `published: true` and a genuine `publishedAt`
 * date are shown. Do not add a post until it is genuinely ready.
 */

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string, only set for genuinely published articles. */
  publishedAt?: string;
  tags: string[];
  blocks: ArticleBlock[];
  published: boolean;
};

/** Add real, finished articles here. */
export const articles: Article[] = [];

export function getPublishedArticles(): Article[] {
  return articles
    .filter((article) => article.published && Boolean(article.publishedAt))
    .sort((a, b) => (a.publishedAt! < b.publishedAt! ? 1 : -1));
}

export function hasPublishedArticles(): boolean {
  return getPublishedArticles().length > 0;
}

export function getArticle(slug: string): Article | undefined {
  return getPublishedArticles().find((article) => article.slug === slug);
}

export function getRelatedArticles(current: Article, limit = 3): Article[] {
  return getPublishedArticles()
    .filter((article) => article.slug !== current.slug)
    .filter((article) => article.tags.some((tag) => current.tags.includes(tag)))
    .slice(0, limit);
}

export function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}
