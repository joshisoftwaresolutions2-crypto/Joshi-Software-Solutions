"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { routes } from "@/config/site";

const navLinks = [
  { label: "Services", href: routes.services },
  { label: "Pricing", href: routes.pricing },
  { label: "Portfolio", href: routes.portfolio },
  { label: "About", href: routes.about },
  { label: "Blog", href: routes.blog },
  { label: "Contact", href: routes.contact },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href);

  // Focus trap and escape key handling
  useEffect(() => {
    if (!open) return;

    const nav = menuRef.current;
    const trigger = triggerRef.current;
    if (!nav) return;

    // Store the element that had focus before opening
    lastFocusedRef.current = document.activeElement as HTMLElement;

    // Focus the first focusable element in the menu
    const focusableElements = nav.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Handle escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    // Focus trap
    const handleFocus = (event: KeyboardEvent) => {
      const focusableElements = Array.from(
        nav.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    nav.addEventListener("keydown", handleFocus);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      nav.removeEventListener("keydown", handleFocus);
      // Restore focus to trigger button when closing
      if (trigger) {
        trigger.focus();
      }
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-border bg-white/95 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    isActive(link.href)
                      ? "text-navy font-medium"
                      : "text-slate-muted hover:text-navy",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={routes.contact} size="md">
            Discuss Your Project
          </ButtonLink>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav
          ref={menuRef}
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-slate-border bg-white md:hidden"
        >
          <ul className="container-content flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "block rounded-md px-3 py-3 text-base",
                    isActive(link.href) ? "text-navy font-medium" : "text-slate-muted",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-1 pb-1">
              <ButtonLink
                href={routes.contact}
                size="lg"
                className="w-full"
              >
                Discuss Your Project
              </ButtonLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
