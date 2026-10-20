import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { contact, business, routes } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Discuss your project with Joshi Software Solutions. Send an enquiry, email us, or message us on WhatsApp.",
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-border bg-white">
        <div className="container-content py-16 sm:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Discuss your project"
            intro="Tell us what you need and we'll suggest a practical way forward. We usually reply within one business day."
          />
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div className="max-w-2xl">
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="rounded-lg border border-slate-border bg-slate-light p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                Email
              </h2>
              <a
                href={contact.emailHref}
                className="mt-2 block text-base text-blue link-underline"
              >
                {contact.email}
              </a>
            </div>

            <div className="rounded-lg border border-slate-border bg-slate-light p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                WhatsApp
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                Prefer a quick chat? Send us a message directly.
              </p>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-base text-blue link-underline"
              >
                Message {contact.whatsappDisplay}
              </a>
            </div>

            <div className="rounded-lg border border-slate-border p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">
                Working hours
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                Monday to Saturday, 10:00–19:00 IST. Messages received outside
                these hours are answered the next working day.
              </p>
            </div>

            <p className="text-xs leading-relaxed text-slate-muted">
              By submitting the form you agree that {business.name} may use the
              information provided to respond to your enquiry. See our{" "}
              <a href={routes.privacy} className="text-blue link-underline">
                Privacy Policy
              </a>
              .
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
