/**
 * Blog cover art.
 *
 * A small set of original, abstract vector compositions, chosen deterministically
 * from an article's slug so each post gets a stable, distinct cover. Decorative
 * only (aria-hidden): covers contain no text and never depict fake screenshots.
 *
 * To use a real custom cover for a post, add an `image` to the article data and
 * render it instead — see src/content/blog.ts.
 */

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const palettes = [
  { bg: "#f1f5f9", ink: "#101828", accent: "#2563eb", soft: "#cbd5e1" },
  { bg: "#eff6ff", ink: "#101828", accent: "#1d4ed8", soft: "#bfdbfe" },
  { bg: "#f8fafc", ink: "#1d2939", accent: "#2563eb", soft: "#e2e8f0" },
];

export function BlogCover({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const h = hash(slug);
  const p = palettes[h % palettes.length];
  const variant = h % 3;
  const gradientId = `blogBg-${h % 1000}`;

  return (
    <svg
      viewBox="0 0 480 240"
      className={["h-full w-full", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.bg} />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="480" height="240" fill={`url(#${gradientId})`} />

      {variant === 0 ? (
        <g>
          <rect x="40" y="40" width="200" height="16" rx="8" fill={p.ink} opacity="0.85" />
          <rect x="40" y="72" width="150" height="10" rx="5" fill={p.soft} />
          <rect x="40" y="92" width="180" height="10" rx="5" fill={p.soft} />
          <rect x="300" y="48" width="140" height="140" rx="16" fill={p.accent} opacity="0.1" />
          <rect x="322" y="70" width="96" height="96" rx="12" fill={p.accent} />
          <rect x="40" y="150" width="90" height="30" rx="8" fill={p.accent} />
          <rect x="146" y="150" width="90" height="30" rx="8" fill="#ffffff" stroke={p.soft} />
        </g>
      ) : variant === 1 ? (
        <g>
          <circle cx="360" cy="120" r="86" fill={p.accent} opacity="0.1" />
          <circle cx="360" cy="120" r="54" fill={p.accent} opacity="0.85" />
          <rect x="40" y="60" width="220" height="16" rx="8" fill={p.ink} opacity="0.85" />
          <rect x="40" y="92" width="170" height="10" rx="5" fill={p.soft} />
          <rect x="40" y="112" width="200" height="10" rx="5" fill={p.soft} />
          <rect x="40" y="140" width="120" height="10" rx="5" fill={p.soft} />
        </g>
      ) : (
        <g>
          <rect x="40" y="48" width="180" height="144" rx="16" fill="#ffffff" stroke={p.soft} />
          <rect x="62" y="70" width="90" height="12" rx="6" fill={p.ink} opacity="0.85" />
          <rect x="62" y="94" width="136" height="8" rx="4" fill={p.soft} />
          <rect x="62" y="110" width="120" height="8" rx="4" fill={p.soft} />
          <rect x="62" y="140" width="70" height="24" rx="7" fill={p.accent} />
          <rect x="250" y="88" width="56" height="56" rx="12" fill={p.accent} opacity="0.12" />
          <rect x="316" y="60" width="56" height="56" rx="12" fill={p.accent} opacity="0.85" />
          <rect x="316" y="132" width="56" height="56" rx="12" fill={p.accent} opacity="0.12" />
        </g>
      )}
    </svg>
  );
}
