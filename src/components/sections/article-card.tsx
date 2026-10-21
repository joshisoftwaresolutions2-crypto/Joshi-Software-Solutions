import Image from "next/image";
import Link from "next/link";
import { BlogCover } from "@/components/art/blog-cover";
import { formatSanityDate } from "@/lib/sanity/format";
import { sanityImageUrl } from "@/lib/sanity/image";
import type { SanityArticle } from "@/lib/sanity/types";

export function ArticleCard({ article }: { article: SanityArticle }) {
  const href = `/blog/${article.slug.current}`;
  const coverUrl = sanityImageUrl(article.coverImage, 900);

  return (
    <article className="flex h-full flex-col">
      <Link
        href={href}
        className="mb-6 block overflow-hidden rounded-lg border border-slate-border bg-slate-light"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="aspect-[2/1]">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt=""
              width={900}
              height={450}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="h-full w-full object-cover"
            />
          ) : (
            <BlogCover slug={article.slug.current} />
          )}
        </div>
      </Link>
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-muted">
        <span className="text-blue">{article.category}</span>
        {article.publishedAt ? (
          <>
            <span aria-hidden="true">/</span>
            <time dateTime={article.publishedAt}>
              {formatSanityDate(article.publishedAt)}
            </time>
          </>
        ) : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-navy">
        <Link href={href} className="link-underline">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-muted">
        {article.excerpt}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue link-underline"
      >
        Read article
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
