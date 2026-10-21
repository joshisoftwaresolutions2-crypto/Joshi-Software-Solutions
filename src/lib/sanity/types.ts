import type { PortableTextBlock } from "@portabletext/react";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
  };
  alt?: string;
  caption?: string;
}

export interface SanityAuthor {
  name: string;
  portrait?: SanityImage;
}

export interface SanityArticle {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage?: SanityImage;
  category: string;
  tags?: string[];
  author?: SanityAuthor;
  publishedAt: string;
  updatedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: SanityImage;
  featured?: boolean;
  published?: boolean;
  body: PortableTextBlock[];
  _createdAt: string;
  _updatedAt: string;
}
