/**
 * Pricing configuration.
 *
 * All amounts here are approved starting prices. Do not invent prices: any rate
 * that has not been approved must keep `amount: null` and `published: false`,
 * which renders an "On request" state instead of a number.
 *
 * Project fees are separate from external costs such as domain registration,
 * paid hosting, third-party services, and additional work. These are intro
 * introductory rates and may be revised once actual delivery time is measured.
 */

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/* -------------------------------------------------------------------------- */
/* Website packages                                                            */
/* -------------------------------------------------------------------------- */

export type WebsitePackage = {
  id: string;
  name: string;
  tier: string;
  /** Approved starting amount in INR, or null when not yet approved. */
  amount: number | null;
  unit: string;
  /** Who the package suits. */
  idealFor: string;
  /** Feature list shown as included items. */
  includes: string[];
  /** Explicit exclusions, shown distinctly. */
  excludes?: string[];
  /** Featured on the site when true. */
  recommended: boolean;
  published: boolean;
};

export const websitePackages: WebsitePackage[] = [
  {
    id: "starter",
    name: "Starter",
    tier: "Entry-level",
    amount: 4999,
    unit: "per project",
    idealFor:
      "Individuals and small businesses that need a professional online presence.",
    includes: [
      "Up to 3 pages",
      "Responsive mobile and desktop design",
      "Business information and service sections",
      "WhatsApp and email contact links",
      "Basic on-page SEO",
      "One revision round",
      "Deployment assistance",
    ],
    excludes: [
      "Paid domain and paid hosting",
      "Copywriting",
      "Complex integrations",
      "Ongoing maintenance",
    ],
    recommended: false,
    published: true,
  },
  {
    id: "business",
    name: "Business",
    tier: "Recommended",
    amount: 9999,
    unit: "per project",
    idealFor: "Growing businesses that need a more complete website.",
    includes: [
      "Up to 5 pages",
      "Customised visual design",
      "Responsive layouts",
      "Contact or enquiry form",
      "WhatsApp integration",
      "Basic SEO and sitemap",
      "Social-sharing metadata",
      "Two revision rounds",
      "Deployment and handover",
    ],
    excludes: [
      "Client supplies approved text, branding, and images",
      "Third-party costs are separate",
    ],
    recommended: true,
    published: true,
  },
  {
    id: "business-plus",
    name: "Business Plus",
    tier: "Advanced",
    amount: 17999,
    unit: "per project",
    idealFor:
      "Businesses that need richer layouts and more functionality.",
    includes: [
      "Up to 8 pages",
      "More tailored page layouts and visual sections",
      "Portfolio, services, or blog setup",
      "Enquiry form integration",
      "Technical SEO foundations",
      "Performance and accessibility checks",
      "Three revision rounds",
      "Deployment and handover documentation",
    ],
    excludes: [
      "Advanced booking systems, payment integrations, custom dashboards, and substantial content creation require a separate quote",
    ],
    recommended: false,
    published: true,
  },
];

export function getWebsitePackage(id: string): WebsitePackage | undefined {
  return websitePackages.find((entry) => entry.id === id);
}

/* -------------------------------------------------------------------------- */
/* Service starting prices                                                     */
/* -------------------------------------------------------------------------- */

export type ServicePrice = {
  id: string;
  service: string;
  /** Approved starting amount in INR, or null when not yet approved. */
  amount: number | null;
  unit: string;
  note?: string;
};

export const servicePrices: ServicePrice[] = [
  { id: "single-landing-page", service: "Single landing page", amount: 2999, unit: "per page" },
  { id: "business-website", service: "Business website", amount: 4999, unit: "starting" },
  {
    id: "ui-page",
    service: "Custom UI page or screen design",
    amount: 1499,
    unit: "per screen",
  },
  {
    id: "small-graphic",
    service: "Small graphic design task",
    amount: 499,
    unit: "per task",
  },
  {
    id: "content-update",
    service: "Website content update",
    amount: 499,
    unit: "per task",
  },
  { id: "maintenance", service: "Website maintenance", amount: 999, unit: "per month" },
  {
    id: "custom-web-app",
    service: "Custom web application",
    amount: 15000,
    unit: "starting",
    note: "Quoted after discovery. Authentication, databases, dashboards, payments, or integrations can require a larger budget.",
  },
  { id: "additional-page", service: "Additional website page", amount: 1000, unit: "per page" },
];

/* -------------------------------------------------------------------------- */
/* Monthly maintenance plans                                                   */
/* -------------------------------------------------------------------------- */

export type MaintenancePlan = {
  id: string;
  name: string;
  idealFor: string;
  amount: number | null;
  unit: string;
  includes: string[];
  published: boolean;
};

export const maintenancePlans: MaintenancePlan[] = [
  {
    id: "basic-care",
    name: "Basic Care",
    idealFor: "Small, mostly static business websites",
    amount: 999,
    unit: "per month",
    includes: [
      "One small content update per month",
      "Basic link and contact-form check",
      "Basic deployment or availability check",
    ],
    published: true,
  },
  {
    id: "standard-care",
    name: "Standard Care",
    idealFor: "Businesses that need regular changes",
    amount: 2499,
    unit: "per month",
    includes: [
      "Up to two small content updates per month",
      "Monthly form and key-page checks",
      "Minor bug fixes within an agreed time allowance",
      "Basic performance review",
    ],
    published: true,
  },
  {
    id: "priority-care",
    name: "Priority Care",
    idealFor: "Sites requiring more regular support",
    amount: 4999,
    unit: "per month",
    includes: [
      "A defined monthly development/support allowance",
      "Priority handling during agreed working hours",
      "Routine checks and minor improvements",
      "Monthly work summary",
    ],
    published: true,
  },
];

export const maintenanceExclusions =
  "Maintenance plans do not include unlimited development, major redesigns, new features, paid hosting, or emergency 24/7 support.";

/* -------------------------------------------------------------------------- */
/* Shared notes and generic service prices (used by the services page)         */
/* -------------------------------------------------------------------------- */

export const pricingNote =
  "All packages are starting prices. Final pricing depends on project requirements, content readiness, functionality, and integrations. Domain registration, paid hosting, third-party services, and additional work are quoted separately.";

export const customSoftwarePricing = {
  service: "Custom Software and Web Applications",
  note:
    "Custom applications are quoted per project after a short discovery conversation. Authentication, databases, dashboards, payments, and third-party integrations can require a significantly larger budget than a standard website.",
} as const;

/**
 * Legacy per-service entries used by the services page sidebar. Kept in sync
 * with the approved starting prices above.
 */
export type PriceEntry = {
  id: string;
  service: string;
  amount: number | null;
  unit: string;
  includes: string[];
  published: boolean;
};

export const prices: PriceEntry[] = [
  {
    id: "landing-pages",
    service: "Landing Pages",
    amount: 2999,
    unit: "per page",
    includes: ["Single-page design and build", "Responsive layout", "Enquiry form"],
    published: true,
  },
  {
    id: "business-websites",
    service: "Business Websites",
    amount: 4999,
    unit: "per project",
    includes: ["Multi-page structure", "Responsive design", "Contact form", "Basic SEO setup"],
    published: true,
  },
  {
    id: "website-maintenance",
    service: "Website Maintenance",
    amount: 999,
    unit: "per month",
    includes: ["Updates and dependency maintenance", "Bug fixes", "Small content changes"],
    published: true,
  },
  {
    id: "ui-graphic-design",
    service: "UI and Graphic Design",
    amount: 1499,
    unit: "per screen",
    includes: ["Interface or graphic design", "Reusable component styles", "Handover files"],
    published: true,
  },
];

export function getPrice(id: string): PriceEntry | undefined {
  return prices.find((entry) => entry.id === id);
}
