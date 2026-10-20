import type { CSSProperties } from "react";

/**
 * Subtle decorative background patterns.
 *
 * Purely decorative: rendered with aria-hidden and non-interactive. Implemented
 * as inline SVG data URIs so there is no extra network request and no external
 * dependency. Keep these quiet — they should read as texture, not artwork.
 */

type PatternTone = "light" | "dark";

const styles: Record<PatternTone, { stroke: string; opacity: number }> = {
  light: { stroke: "#e2e8f0", opacity: 0.6 },
  dark: { stroke: "#ffffff", opacity: 0.06 },
};

export function GridPattern({
  tone = "light",
  className,
  size = 32,
}: {
  tone?: PatternTone;
  className?: string;
  size?: number;
}) {
  const { stroke, opacity } = styles[tone];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><path d='M ${size} 0 L 0 0 0 ${size}' fill='none' stroke='${stroke}' stroke-width='1'/></svg>`;
  const bg = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  const style: CSSProperties = { backgroundImage: bg, opacity };
  return (
    <div
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    />
  );
}

export function DotPattern({
  tone = "light",
  className,
  size = 22,
}: {
  tone?: PatternTone;
  className?: string;
  size?: number;
}) {
  const { stroke, opacity } = styles[tone];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><circle cx='1.5' cy='1.5' r='1.5' fill='${stroke}'/></svg>`;
  const bg = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  const style: CSSProperties = { backgroundImage: bg, opacity };
  return (
    <div
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    />
  );
}
