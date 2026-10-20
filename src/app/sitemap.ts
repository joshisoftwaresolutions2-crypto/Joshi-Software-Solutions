import type { MetadataRoute } from "next";
import { routes, siteUrl } from "@/config/site";
import { getPublishedArticles } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const articleRoutes: MetadataRoute.Sitemap = getPublishedArticles().map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes];
}
