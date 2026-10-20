import Link from "next/link";
import { business, routes } from "@/config/site";

/**
 * Logo placeholder component.
 *
 * Replace the inner mark and wordmark with the supplied JS monogram or official
 * logo when available. Keep the accessible name and link intact.
 */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <Link
      href={routes.home}
      className="inline-flex items-center gap-2.5 rounded-sm"
      aria-label={`${business.name} home`}
    >
      <span
        aria-hidden="true"
        className={[
          "flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold tracking-tight",
          isDark ? "bg-white text-navy" : "bg-navy text-white",
        ].join(" ")}
      >
        JS
      </span>
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
