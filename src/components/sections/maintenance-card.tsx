import { ButtonLink } from "@/components/ui/button";
import { routes } from "@/config/site";
import { formatInr, type MaintenancePlan } from "@/content/pricing";

export function MaintenanceCard({ plan }: { plan: MaintenancePlan }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-border bg-white p-6">
      <h3 className="text-base font-semibold text-navy">{plan.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-muted">
        {plan.idealFor}
      </p>

      <div className="mt-5">
        <span className="text-2xl font-semibold text-navy">
          {plan.published && plan.amount !== null ? formatInr(plan.amount) : "On request"}
        </span>
        <span className="ml-1.5 text-sm text-slate-muted">/ mo</span>
      </div>

      <ul className="mt-5 flex-1 space-y-2.5">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-slate-muted">
            <span aria-hidden="true" className="mt-0.5 text-blue">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <ButtonLink href={routes.contact} variant="secondary" className="w-full">
          Enquire
        </ButtonLink>
      </div>
    </article>
  );
}
