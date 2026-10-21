import type { MetadataRoute } from "next";
import { routes, siteUrl, isSanityConfigured } from "@/config/site";
import { getPublishedArticles } from "@/content/blog";
import { getArticleSlugs } from "@/lib/sanity/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}${routes.home}`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}${routes.services}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}${routes.pricing}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}${routes.portfolio}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}${routes.about}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}${routes.blog}`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}${routes.contact}`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}${routes.privacy}`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  let articleRoutes: MetadataRoute.Sitemap = [];

  if (isSanityConfigured()) {
    const slugs = await getArticleSlugs();
    articleRoutes = slugs.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    }));
  } else {
    articleRoutes = getPublishedArticles().map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: article.publishedAt ? new Date(article.publishedAt) : now,
      changeFrequency: "monthly",
      priority: 0.5,
    }));
  }

  return [...staticRoutes, ...articleRoutes];
}