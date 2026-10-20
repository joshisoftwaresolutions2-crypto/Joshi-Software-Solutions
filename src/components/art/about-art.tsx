/**
 * Original About-page illustration.
 *
 * An abstract editorial composition: overlapping panels, a process line, and
 * geometric accents that echo the brand palette. Decorative only (aria-hidden).
 * Contains no text, logos, people, or business claims.
 */
export function AboutArt() {
  return (
    <svg
      viewBox="0 0 460 340"
      className="h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="aboutPanel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f8fafc" />
        </linearGradient>
        <filter id="aboutShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="14"
            floodColor="#101828"
            floodOpacity="0.12"
          />
        </filter>
      </defs>

      {/* Base panel */}
      <rect x="24" y="40" width="300" height="220" rx="14" fill="#f1f5f9" />

      {/* Main panel */}
      <g filter="url(#aboutShadow)">
        <rect
          x="70"
          y="24"
          width="330"
          height="240"
          rx="14"
          fill="url(#aboutPanel)"
          stroke="#e2e8f0"
        />
      </g>

      {/* Panel content: abstract process steps */}
      <rect x="98" y="56" width="120" height="12" rx="6" fill="#101828" opacity="0.9" />
      <rect x="98" y="80" width="200" height="7" rx="3.5" fill="#cbd5e1" />
      <rect x="98" y="94" width="168" height="7" rx="3.5" fill="#cbd5e1" />

      {/* Process line */}
      <line x1="112" y1="150" x2="358" y2="150" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="112" cy="150" r="10" fill="#2563eb" />
      <circle cx="194" cy="150" r="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="276" cy="150" r="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="358" cy="150" r="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="104" y="176" width="16" height="6" rx="3" fill="#cbd5e1" />
      <rect x="186" y="176" width="16" height="6" rx="3" fill="#e2e8f0" />
      <rect x="268" y="176" width="16" height="6" rx="3" fill="#e2e8f0" />
      <rect x="350" y="176" width="16" height="6" rx="3" fill="#e2e8f0" />

      {/* Bottom chips */}
      <rect x="98" y="206" width="72" height="34" rx="8" fill="#f1f5f9" />
      <rect x="180" y="206" width="72" height="34" rx="8" fill="#f1f5f9" />
      <rect x="262" y="206" width="72" height="34" rx="8" fill="#f1f5f9" />
      <rect x="110" y="220" width="40" height="6" rx="3" fill="#cbd5e1" />
      <rect x="192" y="220" width="40" height="6" rx="3" fill="#cbd5e1" />
      <rect x="274" y="220" width="40" height="6" rx="3" fill="#cbd5e1" />

      {/* Accent square */}
      <rect x="336" y="196" width="52" height="52" rx="12" fill="#2563eb" opacity="0.12" />
      <rect x="348" y="208" width="28" height="28" rx="7" fill="#2563eb" />

      {/* Small floating tag */}
      <g filter="url(#aboutShadow)">
        <rect
          x="20"
          y="210"
          width="118"
          height="64"
          rx="12"
          fill="#ffffff"
          stroke="#e2e8f0"
        />
      </g>
      <rect x="36" y="226" width="52" height="7" rx="3.5" fill="#94a3b8" />
      <rect x="36" y="242" width="86" height="12" rx="6" fill="#101828" opacity="0.86" />
    </svg>
  );
}
