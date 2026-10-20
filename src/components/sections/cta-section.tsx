import { ButtonLink } from "@/components/ui/button";
import { GridPattern } from "@/components/art/patterns";
import { routes, contact } from "@/config/site";

type CtaSectionProps = {
  heading?: string;
  text?: string;
  className?: string;
};

export function CtaSection({
  heading = "Have a project in mind?",
  text = "Tell us what you need, and let's discuss a practical solution.",
  className,
}: CtaSectionProps) {
  return (
    <section
      className={["relative overflow-hidden bg-navy text-white", className]
        .filter(Boolean)
        .join(" ")}
    >
      <GridPattern tone="dark" size={40} />
      <div className="container-content relative py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href={routes.contact} variant="light" size="lg">
              Discuss Your Project
            </ButtonLink>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
