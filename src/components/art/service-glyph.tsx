import type { SVGProps } from "react";

/**
 * Original line-art glyphs for each service.
 *
 * These are hand-built vector marks in the site's navy/cobalt system. They are
 * purely decorative (`aria-hidden`) and contain no text, logos, or UI elements.
 * Drawn on a 24x24 grid with a consistent 1.5 stroke.
 */

type GlyphProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

function BusinessWebsites(props: GlyphProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="15" rx="1.5" />
      <path d="M3 8h18" />
      <path d="M6 6.2h.01M8.2 6.2h.01" />
      <path d="M6.5 11.5h6" />
      <path d="M6.5 14.5h4" />
      <path d="M15.5 11.5v5M18 11.5v5" />
    </svg>
  );
}

function LandingPages(props: GlyphProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8 7h8" />
      <path d="M8 10.5h5" />
      <path d="M8 15.5h6" />
      <path d="M8.5 18h4" strokeWidth={2.4} />
    </svg>
  );
}

function CustomSoftware(props: GlyphProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M7.5 13l-2 2 2 2" />
      <path d="M16.5 13l2 2-2 2" />
      <path d="M13 12.5l-2 5" />
    </svg>
  );
}

function Maintenance(props: GlyphProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5a5 5 0 0 0-4.9 6l-3.6 3.6a1.4 1.4 0 0 0 0 2l2 2a1.4 1.4 0 0 0 2 0l3.6-3.6A5 5 0 0 0 20 8.4l-2.6 2.6-2.4-2.4L17.6 6A5 5 0 0 0 12 3.5Z" />
      <path d="M5 19.5l2.5-2.5" />
    </svg>
  );
}

function UiGraphicDesign(props: GlyphProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="13" height="10" rx="1.5" />
      <circle cx="17" cy="16.5" r="4" />
      <path d="M12.5 18.5l5-5" />
      <path d="M6 10.5l2-2 2 2" />
    </svg>
  );
}

const glyphs: Record<string, (props: GlyphProps) => React.ReactElement> = {
  "business-websites": BusinessWebsites,
  "landing-pages": LandingPages,
  "custom-software": CustomSoftware,
  "website-maintenance": Maintenance,
  "ui-graphic-design": UiGraphicDesign,
};

export function ServiceGlyph({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const Glyph = glyphs[id];
  if (!Glyph) return null;
  return <Glyph className={className} />;
}
