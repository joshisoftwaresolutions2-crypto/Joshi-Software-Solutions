import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { routes } from "@/config/site";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-content flex min-h-[60vh] flex-col justify-center py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-muted">
          The page you were looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={routes.home}>Back to home</ButtonLink>
          <ButtonLink href={routes.contact} variant="secondary">
            Contact us
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-slate-muted">
          Or browse our{" "}
          <Link href={routes.services} className="text-blue link-underline">
            services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
