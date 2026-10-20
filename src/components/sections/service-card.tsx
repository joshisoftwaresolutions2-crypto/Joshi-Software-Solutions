import Link from "next/link";
import type { Service } from "@/content/services";
import { ServiceGlyph } from "@/components/art/service-glyph";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col border-t border-slate-border pt-6">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-light text-blue">
        <ServiceGlyph id={service.id} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-muted">
        {service.summary}
      </p>
      <Link
        href={`/services#${service.id}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue link-underline"
      >
        Learn more
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
