import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/sections/article-card";
import { CtaSection } from "@/components/sections/cta-section";
import { PortableTextRenderer } from "@/components/portable-text/PortableTextRenderer";
import { business, isSanityConfigured, routes, siteUrl } from "@/config/site";
import { extractHeadings, formatSanityDate } from "@/lib/sanity/format";
import { sanityImageUrl } from "@/lib/sanity/image";
import type { SanityArticle } from "@/lib/sanity/types";
import {
  getArticle,
  getArticleSlugs,
  getRelatedArticles,
} from "@/lib/sanity/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  if (!isSanityConfigured()) return [];

  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  const url = `${siteUrl}/blog/${article.slug.current}`;
  const title = article.seoTitle || article.title;
  const description = article.seoDescription || article.excerpt;
  const image = article.socialImage || article.coverImage;
  const imageUrl = image ? sanityImageUrl(image, 1200) : "";

  return {
    title: article.seoTitle ? { absolute: title } : article.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: business.name,
      title,
      description,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: article.author?.name ? [article.author.name] : [business.name],
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

function buildArticleJsonLd(article: SanityArticle) {
  const url = `${siteUrl}/blog/${article.slug.current}`;
  const image = article.socialImage || article.coverImage;
  const imageUrl = image ? sanityImageUrl(image, 1200) : "";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author?.name || business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

function buildBreadcrumbJsonLd(article: SanityArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteUrl}/blog/${article.slug.current}`,
      },
    ],
  };
}

function ArticleMeta({ article }: { article: SanityArticle }) {
  const portrait = article.author?.portrait
    ? sanityImageUrl(article.author.portrait, 64)
    : "";

  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-muted">
      {article.author?.name && (
        <span className="flex items-center gap-2">
          {portrait && (
            <Image
              src={portrait}
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          <span className="font-medium text-navy">{article.author.name}</span>
        </span>
      )}
      {article.publishedAt && (
        <time dateTime={article.publishedAt}>
          {formatSanityDate(article.publishedAt)}
        </time>
      )}
      {article.updatedAt && article.updatedAt !== article.publishedAt && (
        <span>Updated {formatSanityDate(article.updatedAt)}</span>
      )}
    </div>
  );
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const related = await getRelatedArticles(article.category, article._id, 3);
  const headings = extractHeadings(article.body);
  const coverUrl = sanityImageUrl(article.coverImage, 1400);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleJsonLd(article)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbJsonLd(article)),
        }}
      />

      <article className="bg-white">
        <nav
          aria-label="Breadcrumb"
          className="border-b border-slate-border bg-white"
        >
          <div className="container-content py-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-muted">
              <li>
                <Link
                  href={routes.home}
                  className="text-blue link-underline hover:text-navy"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={routes.blog}
                  className="text-blue link-underline hover:text-navy"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-navy">
                {article.title}
              </li>
            </ol>
          </div>
        </nav>

        <div className="container-content py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href={routes.blog}
              className="text-sm font-medium text-blue link-underline"
            >
              &larr; Back to blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Link
                href={`/blog?category=${encodeURIComponent(article.category)}`}
                className="rounded-full bg-blue px-3 py-1 text-xs font-medium text-white"
              >
                {article.category}
              </Link>
              {article.tags?.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-border bg-white px-3 py-1 text-xs text-slate-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-muted">
              {article.excerpt}
            </p>

            <ArticleMeta article={article} />

            {coverUrl && (
              <div className="mt-10 overflow-hidden rounded-xl border border-slate-border">
                <Image
                  src={coverUrl}
                  alt={article.coverImage?.alt || article.title}
                  width={1400}
                  height={788}
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full"
                />
              </div>
            )}
          </div>

          <div className="mx-auto mt-12 max-w-3xl lg:grid lg:max-w-5xl lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14">
            <div className="max-w-3xl">
              <PortableTextRenderer blocks={article.body} />
            </div>

            {headings.length > 0 && (
              <aside className="hidden lg:block" aria-label="Table of contents">
                <nav className="sticky top-24">
                  <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                    Contents
                  </h2>
                  <ul className="space-y-2 border-l border-slate-border">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className={`-ml-px block border-l border-transparent py-0.5 text-sm text-slate-muted transition-colors hover:border-blue hover:text-blue ${
                            heading.level === 3 ? "pl-6" : "pl-4"
                          }`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-border bg-slate-light">
          <div className="container-content py-16 sm:py-20">
            <h2 className="text-2xl font-semibold text-navy">
              Related articles
            </h2>
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item._id} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection heading="Have a project in mind? Let's talk." />
    </>
  );
}
