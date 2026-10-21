import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import Image from "next/image";
import { blockToPlainText, slugifyHeading } from "@/lib/sanity/format";
import { sanityImageUrl } from "@/lib/sanity/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-5 text-base leading-relaxed text-slate-muted">
        {children}
      </p>
    ),
    h2: ({ children, value }) => {
      const id = slugifyHeading(blockToPlainText(value));
      return (
        <h2
          id={id || undefined}
          className="mt-10 scroll-mt-24 text-2xl font-semibold text-navy"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, value }) => {
      const id = slugifyHeading(blockToPlainText(value));
      return (
        <h3
          id={id || undefined}
          className="mt-8 scroll-mt-24 text-xl font-semibold text-navy"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="mt-6 text-lg font-semibold text-navy">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-blue bg-slate-light px-5 py-4 italic text-slate-muted">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2.5 pl-5 text-slate-muted">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-slate-muted">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "";
      const isExternal = /^https?:\/\//.test(href);

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue link-underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-navy">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-slate-light px-1.5 py-0.5 text-sm font-mono text-navy">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => {
      const source = value?.asset?._ref;
      const url = source ? sanityImageUrl(value, 1200) : "";

      if (!url) return null;

      return (
        <figure className="mt-10">
          <div className="overflow-hidden rounded-lg border border-slate-border bg-slate-light">
            <Image
              src={url}
              alt={value.alt || ""}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
              className="h-auto w-full"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-slate-muted">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableTextRenderer({
  blocks,
}: {
  blocks: Parameters<typeof PortableText>[0]["value"];
}) {
  return <PortableText value={blocks} components={components} />;
}
