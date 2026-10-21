import type { PortableTextBlock } from "@portabletext/react";

export function formatSanityDate(iso: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function blockToPlainText(block: PortableTextBlock): string {
  if (!Array.isArray(block.children)) return "";

  return block.children
    .map((child) => {
      if (typeof child === "object" && child !== null && "text" in child) {
        const text = (child as { text?: unknown }).text;
        return typeof text === "string" ? text : "";
      }
      return "";
    })
    .join("");
}

export function extractHeadings(
  body: PortableTextBlock[] | null | undefined,
): { level: number; text: string; id: string }[] {
  if (!Array.isArray(body)) return [];

  return body.flatMap((block) => {
    if (block._type !== "block") return [];

    const style = block.style;
    if (style !== "h2" && style !== "h3") return [];

    const text = blockToPlainText(block).trim();
    if (!text) return [];

    return [
      {
        level: Number(style.slice(1)),
        text,
        id: slugifyHeading(text),
      },
    ];
  });
}
