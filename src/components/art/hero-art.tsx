/**
 * Original hero composition.
 *
 * A hand-built editorial vector scene in the site palette: a layered browser
 * frame containing abstracted layout blocks (no real or fake project content),
 * a floating stats card, and soft geometric accents. Purely decorative
 * (aria-hidden) so screen readers skip it; all meaningful text lives in HTML.
 *
 * This intentionally does NOT depict a real or invented project screenshot.
 * Replace it with a genuine project screenshot only when the owner supplies one.
 */
export function HeroArt() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -inset-6 -z-10">
        <div className="absolute right-6 top-4 h-40 w-40 rounded-full bg-blue/5 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-navy/5 blur-2xl" />
      </div>

      <svg
        viewBox="0 0 520 420"
        className="h-auto w-full"
        role="presentation"
        focusable="false"
      >
        <defs>
          <linearGradient id="heroPanel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f8fafc" />
          </linearGradient>
          <linearGradient id="heroAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
          <filter id="heroShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="16"
              floodColor="#101828"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        {/* Back panel */}
        <g filter="url(#heroShadow)">
          <rect
            x="70"
            y="46"
            width="400"
            height="300"
            rx="14"
            fill="url(#heroPanel)"
            stroke="#e2e8f0"
          />
        </g>

        {/* Browser chrome */}
        <rect x="70" y="46" width="400" height="40" rx="14" fill="#f1f5f9" />
        <rect x="70" y="72" width="400" height="14" fill="#f1f5f9" />
        <line x1="70" y1="86" x2="470" y2="86" stroke="#e2e8f0" />
        <circle cx="94" cy="66" r="4.5" fill="#e2e8f0" />
        <circle cx="110" cy="66" r="4.5" fill="#e2e8f0" />
        <circle cx="126" cy="66" r="4.5" fill="#e2e8f0" />
        <rect x="146" y="60" width="180" height="12" rx="6" fill="#e2e8f0" />

        {/* Abstracted content: heading + copy */}
        <rect x="98" y="116" width="150" height="14" rx="7" fill="#101828" opacity="0.9" />
        <rect x="98" y="142" width="236" height="8" rx="4" fill="#cbd5e1" />
        <rect x="98" y="158" width="210" height="8" rx="4" fill="#cbd5e1" />
        <rect x="98" y="174" width="168" height="8" rx="4" fill="#cbd5e1" />

        {/* Buttons */}
        <rect x="98" y="198" width="104" height="30" rx="7" fill="url(#heroAccent)" />
        <rect
          x="212"
          y="198"
          width="92"
          height="30"
          rx="7"
          fill="#ffffff"
          stroke="#e2e8f0"
        />

        {/* Content grid */}
        <rect x="98" y="248" width="112" height="72" rx="9" fill="#f1f5f9" />
        <rect x="222" y="248" width="112" height="72" rx="9" fill="#f1f5f9" />
        <rect x="346" y="248" width="96" height="72" rx="9" fill="#f1f5f9" />
        <rect x="112" y="266" width="40" height="8" rx="4" fill="#cbd5e1" />
        <rect x="236" y="266" width="40" height="8" rx="4" fill="#cbd5e1" />
        <rect x="360" y="266" width="40" height="8" rx="4" fill="#cbd5e1" />
        <rect x="112" y="284" width="70" height="6" rx="3" fill="#e2e8f0" />
        <rect x="236" y="284" width="70" height="6" rx="3" fill="#e2e8f0" />
        <rect x="360" y="284" width="56" height="6" rx="3" fill="#e2e8f0" />

        {/* Floating metric card */}
        <g filter="url(#heroShadow)">
          <rect
            x="330"
            y="120"
            width="168"
            height="96"
            rx="12"
            fill="#ffffff"
            stroke="#e2e8f0"
          />
        </g>
        <rect x="348" y="140" width="64" height="8" rx="4" fill="#94a3b8" />
        <rect x="348" y="158" width="96" height="18" rx="6" fill="#101828" opacity="0.88" />
        {/* Simple ascending bars (abstract, not fabricated results) */}
        <rect x="348" y="192" width="14" height="12" rx="3" fill="#cbd5e1" />
        <rect x="368" y="184" width="14" height="20" rx="3" fill="#93b4f5" />
        <rect x="388" y="176" width="14" height="28" rx="3" fill="#2563eb" />

        {/* Cobalt accent square */}
        <rect x="52" y="150" width="44" height="44" rx="10" fill="#2563eb" opacity="0.1" />
        <rect x="62" y="160" width="24" height="24" rx="6" fill="#2563eb" opacity="0.9" />

        {/* Baseline accent */}
        <rect x="70" y="366" width="400" height="8" rx="4" fill="#f1f5f9" />
        <rect x="70" y="366" width="168" height="8" rx="4" fill="#2563eb" />
      </svg>
    </div>
  );
}
