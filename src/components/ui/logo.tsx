import Image from "next/image";
import Link from "next/link";
import { business, routes } from "@/config/site";

/**
 * Brand logo.
 *
 * The supplied artwork is a stacked (vertical) lockup, which does not fit the
 * 64px header bar. So the header shows the mark on its own beside the wordmark
 * text, while the footer has room for the full stacked lockup.
 *
 * `variant`:
 * - "mark" (default): cropped symbol + text wordmark, for the header.
 * - "full": the complete supplied logo artwork, for the footer.
 */
export function Logo({
  tone = "light",
  variant = "mark",
}: {
  tone?: "light" | "dark";
  variant?: "mark" | "full";
}) {
  const isDark = tone === "dark";

  if (variant === "full") {
    return (
      <Link
        href={routes.home}
        className="inline-flex rounded-sm"
        aria-label={`${business.name} home`}
      >
        <Image
          src="/logos/joshi-software-solutions-logo.png"
          alt={`${business.name} logo`}
          width={1536}
          height={1024}
          className="h-24 w-auto"
        />
      </Link>
    );
  }

  return (
    <Link
      href={routes.home}
      className="inline-flex items-center gap-2.5 rounded-sm"
      aria-label={`${business.name} home`}
    >
      <Image
        src="/logos/joshi-symbol.png"
        alt=""
        width={683}
        height={500}
        priority
        className="h-9 w-auto"
      />
      <span
        className={[
          "text-[0.95rem] font-semibold leading-tight",
          isDark ? "text-white" : "text-navy",
        ].join(" ")}
      >
        Joshi Software
        <span className={isDark ? "text-white/70" : "text-slate-muted"}> Solutions</span>
      </span>
    </Link>
  );
}
