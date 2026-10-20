import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { contact, business, routes } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Joshi Software Solutions collects, uses, and handles information submitted through this website.",
  path: routes.privacy,
});

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-slate-border bg-white">
        <div className="container-content py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              Legal
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-muted">
              This policy explains what information this website collects, why,
              and how it is handled. It reflects the current implementation and
              should be reviewed before launch and whenever the site changes.
            </p>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="max-w-3xl space-y-10 text-base leading-relaxed text-slate-muted">
          <div>
            <h2 className="text-xl font-semibold text-navy">Information we collect</h2>
            <p className="mt-3">
              When you submit the contact form, we collect the information you
              provide: your name, email address, the service you are interested
              in, and your project description. You may optionally provide a
              budget range and preferred timeline. We do not ask for sensitive
              personal information through this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy">Why we collect it</h2>
            <p className="mt-3">
              The information is used solely to respond to your enquiry and to
              understand the project you would like to discuss. We do not use it
              for unrelated marketing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy">
              How submissions are delivered
            </h2>
            <p className="mt-3">
              Contact form submissions are sent directly from your browser to{" "}
              <a
                href="https://web3forms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue link-underline"
              >
                Web3Forms
              </a>
              , a form-handling service that delivers the enquiry to our business
              email address. Your details are transmitted to Web3Forms for this
              purpose and are subject to their privacy practices. We do not store
              submission data in a database on this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy">Hosting and logs</h2>
            <p className="mt-3">
              This website is hosted on a third-party hosting provider. As with
              most hosting services, the provider may automatically record
              standard technical information such as IP address, browser type,
              and request timestamps in server logs for security and operational
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy">Cookies and analytics</h2>
            <p className="mt-3">
              This website does not currently set advertising or tracking
              cookies, and no analytics service is enabled. If analytics are
              introduced in future, this policy will be updated to describe what
              is collected and how, before the change takes effect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy">Data retention</h2>
            <p className="mt-3">
              Enquiry information is retained in our email correspondence only for
              as long as needed to respond to and manage the enquiry. Delivery of
              the message is handled by Web3Forms, so retention on their side is
              governed by their own policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy">Your choices</h2>
            <p className="mt-3">
              You can ask us to delete enquiry information we hold about you, or
              request a copy of it, by contacting us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              For questions about this policy or how your information is handled,
              contact {business.name} at{" "}
              <a href={contact.emailHref} className="text-blue link-underline">
                {contact.email}
              </a>
              .
            </p>
          </div>

          <p className="rounded-md border border-slate-border bg-slate-light px-4 py-3 text-sm">
            This privacy policy is a draft and must be reviewed against the final
            hosting, form, and analytics configuration before launch.
          </p>
        </div>
      </Section>
    </>
  );
}
