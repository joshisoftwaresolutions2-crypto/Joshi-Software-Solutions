import { ButtonLink } from "@/components/ui/button";
import { routes } from "@/config/site";
import { formatInr, type WebsitePackage } from "@/content/pricing";

export function PackageCard({ pkg }: { pkg: WebsitePackage }) {
  const { recommended } = pkg;
  return (
    <article
      className={[
        "flex h-full flex-col rounded-lg border bg-white p-6 sm:p-8",
        recommended
          ? "border-navy shadow-[0_1px_2px_rgba(16,24,40,0.04),0_16px_40px_-20px_rgba(16,24,40,0.35)]"
          : "border-slate-border",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-navy">{pkg.name}</h3>
        {recommended ? (
          <span className="rounded-full bg-navy px-3 py-1 text-xs font-medium text-white">
            Recommended
          </span>
        ) : (
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-slate-muted">
            {pkg.tier}
          </span>
        )}
      </div>

      <div className="mt-5">
        <span className="text-3xl font-semibold text-navy">
          {pkg.published && pkg.amount !== null ? formatInr(pkg.amount) : "On request"}
        </span>
        <span className="ml-2 text-sm text-slate-muted">/ {pkg.unit}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-muted">{pkg.idealFor}</p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-slate-muted">
            <span aria-hidden="true" className="mt-0.5 text-blue">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      {pkg.excludes && pkg.excludes.length > 0 ? (
        <div className="mt-6 border-t border-slate-border pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-slate-muted">
            Not included
          </p>
          <ul className="mt-2 space-y-1.5">
            {pkg.excludes.map((item) => (
              <li key={item} className="text-xs leading-relaxed text-slate-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6">
        <ButtonLink
          href={routes.contact}
          variant={recommended ? "primary" : "secondary"}
          className="w-full"
        >
          Get Started
        </ButtonLink>
      </div>
    </article>
  );
}
