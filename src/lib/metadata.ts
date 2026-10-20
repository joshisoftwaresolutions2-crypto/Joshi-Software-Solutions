import type { Metadata } from "next";
import { business, siteUrl } from "@/config/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute or root-relative Open Graph image path. */
  image?: string;
};

/** Build consistent per-route metadata with canonical URL and Open Graph tags. */
export function buildMetadata({
  title,
  description,
  path,
  image,
}: PageMetaInput): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: business.name,
      title: `${title} — ${business.name}`,
      description,
      url,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${business.name}`,
      description,
      images: image ? [image] : undefined,
    },
  };
}
