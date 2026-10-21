export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type LocalArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt?: string;
  tags: string[];
  blocks: ArticleBlock[];
  published: boolean;
};

export const localArticles: LocalArticle[] = [];

export function getPublishedArticles(): LocalArticle[] {
  return localArticles
    .filter((article) => article.published && Boolean(article.publishedAt))
    .sort((a, b) => (a.publishedAt! < b.publishedAt! ? 1 : -1));
}

export function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
