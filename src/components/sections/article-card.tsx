import Link from "next/link";
import type { Article } from "@/content/blog";
import { formatArticleDate } from "@/content/blog";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex h-full flex-col border-t border-slate-border pt-6">
      {article.publishedAt ? (
        <time
          dateTime={article.publishedAt}
          className="text-xs font-medium uppercase tracking-[0.12em] text-slate-muted"
        >
          {formatArticleDate(article.publishedAt)}
        </time>
      ) : null}
      <h3 className="mt-3 text-lg font-semibold text-navy">
        <Link href={`/blog/${article.slug}`} className="link-underline">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-muted">
        {article.description}
      </p>
      <Link
        href={`/blog/${article.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue link-underline"
      >
        Read article
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
