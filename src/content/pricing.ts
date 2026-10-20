/**
 * Pricing configuration.
 *
 * Do not invent prices. Any rate that has not been approved must keep
 * `amount: null` and `published: false`, which renders an "On request" or
 * "Pricing to be confirmed" state instead of a number.
 *
 * Project fees are separate from external costs such as domain registration,
 * hosting, and paid third-party integrations.
 */

export type PriceEntry = {
  id: string;
  service: string;
  /** Approved starting amount in INR, or null when not yet approved. */
  amount: number | null;
  /** Human-readable unit, e.g. "per project" or "per month". */
  unit: string;
  /** What the starting price covers. */
  includes: string[];
  published: boolean;
};

export const prices: PriceEntry[] = [
  {
    id: "landing-pages",
    service: "Landing Pages",
    amount: null,
    unit: "per project",
    includes: ["Single-page design and build", "Responsive layout", "Enquiry form"],
    published: false,
  },
  {
    id: "business-websites",
    service: "Business Websites",
    amount: null,
    unit: "per project",
    includes: ["Multi-page structure", "Responsive design", "Contact form", "Basic SEO setup"],
    published: false,
  },
  {
    id: "website-maintenance",
    service: "Website Maintenance",
    amount: null,
    unit: "per month",
    includes: ["Updates and dependency maintenance", "Bug fixes", "Small content changes"],
    published: false,
  },
  {
    id: "ui-graphic-design",
    service: "UI and Graphic Design",
    amount: null,
    unit: "per project",
    includes: ["Interface or graphic design", "Reusable component styles", "Handover files"],
    published: false,
  },
];

export const customSoftwarePricing = {
  service: "Custom Software and Web Applications",
  note:
    "Custom applications are quoted per project after a short discovery conversation, because scope varies considerably.",
} as const;

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getPrice(id: string): PriceEntry | undefined {
  return prices.find((entry) => entry.id === id);
}
