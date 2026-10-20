import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { business, routes, contact } from "@/config/site";
import { serviceLinks } from "@/content/services";

const navLinks = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services },
  { label: "Pricing", href: routes.pricing },
  { label: "Portfolio", href: routes.portfolio },
  { label: "About", href: routes.about },
  { label: "Blog", href: routes.blog },
  { label: "Contact", href: routes.contact },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-content py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {business.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Get in touch</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={contact.emailHref}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  WhatsApp {contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
            © {year} {business.name}. All rights reserved.
          </p>
          <Link
            href={routes.privacy}
            className="text-xs text-white/60 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
