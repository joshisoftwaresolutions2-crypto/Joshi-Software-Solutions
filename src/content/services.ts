import { routes } from "@/config/site";

export type Service = {
  /** Stable id used for section anchors and links. */
  id: string;
  name: string;
  /** One-line summary used on the homepage overview. */
  summary: string;
  /** Paragraph-level detail used on the services page. */
  detail: string;
  /** Who the service is a good fit for. */
  suitableFor: string;
  /** What the client can expect to receive. */
  deliverables: string[];
  /** How the engagement typically works. */
  engagement: string;
  /** Factors that influence the final price. */
  pricingFactors: string[];
};

export const services: Service[] = [
  {
    id: "business-websites",
    name: "Business Websites",
    summary:
      "A clear, credible website that explains what you do and makes it easy for customers to get in touch.",
    detail:
      "We design and build multi-page business websites with a strong structure, readable content, and a straightforward way for visitors to reach you. The focus is on clarity: what you offer, who you help, and how to contact you.",
    suitableFor:
      "Small and medium-sized businesses, professional services, and local firms that need a dependable online presence they can maintain.",
    deliverables: [
      "Page structure and content plan",
      "Responsive layout for mobile, tablet, and desktop",
      "Contact form and click-to-call or WhatsApp links",
      "Basic on-page SEO setup",
      "Handover documentation",
    ],
    engagement:
      "We start by understanding your business and the enquiries you want. From there we agree a page list and content, build the site, review it with you, and launch.",
    pricingFactors: [
      "Number of pages",
      "Whether content and copy are supplied or need to be written",
      "Custom features such as booking or enquiry routing",
      "Integration with existing tools",
    ],
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    summary:
      "A focused single page built to explain one offer well and turn visitors into enquiries.",
    detail:
      "A landing page concentrates on a single goal: a campaign, service, or product. We structure the page so the message is clear and the next step is obvious, without distracting navigation.",
    suitableFor:
      "Businesses running a specific campaign, promoting one service, or testing a new offer before building a full website.",
    deliverables: [
      "Single-page layout with clear sections",
      "Lead or enquiry form",
      "Fast, responsive presentation",
      "Basic performance and SEO setup",
    ],
    engagement:
      "We agree the single goal of the page, gather the content and any visuals, build it, and review it with you before it goes live.",
    pricingFactors: [
      "Amount of content and imagery",
      "Custom form or integration requirements",
      "Whether A/B testing variants are needed",
    ],
  },
  {
    id: "custom-software",
    name: "Custom Software and Web Applications",
    summary:
      "Practical web tools and applications built to fit a specific workflow or business problem.",
    detail:
      "When an off-the-shelf tool does not fit, we build a focused web application around the way your business actually works. This can range from an internal dashboard to a customer-facing tool.",
    suitableFor:
      "Businesses with a defined process that is handled manually, spread across spreadsheets, or poorly served by generic tools.",
    deliverables: [
      "A scoped set of features agreed in advance",
      "Working web application with authentication where required",
      "Data model and integrations as agreed",
      "Deployment and handover documentation",
    ],
    engagement:
      "Custom work starts with a discovery conversation to define scope. We agree a phased plan, build in stages, and review progress with you along the way.",
    pricingFactors: [
      "Number and complexity of features",
      "Number of user roles and integrations",
      "Data migration requirements",
      "Ongoing support needs",
    ],
  },
  {
    id: "website-maintenance",
    name: "Website Maintenance",
    summary:
      "Ongoing updates, fixes, and small improvements so your website stays reliable.",
    detail:
      "Websites need attention after launch. We handle updates, fix issues, and make small changes so your site stays current without you having to manage the technical side.",
    suitableFor:
      "Businesses with an existing website that needs regular updates but no longer has a reliable technical contact.",
    deliverables: [
      "Regular updates and dependency maintenance",
      "Bug fixes and small content changes",
      "Monitoring of core pages",
      "A clear report of what was done",
    ],
    engagement:
      "Maintenance is arranged on an ongoing basis. You send requests, we handle them within the agreed arrangement, and report back on completed work.",
    pricingFactors: [
      "Size and complexity of the website",
      "Frequency of updates",
      "Response-time expectations",
    ],
  },
  {
    id: "ui-graphic-design",
    name: "UI and Graphic Design",
    summary:
      "Interface design and visuals that make a product feel considered and easy to use.",
    detail:
      "We design interfaces and supporting graphics with attention to hierarchy, spacing, and clarity. The goal is design that supports the content rather than competing with it.",
    suitableFor:
      "Businesses that need a designed interface, brand-consistent graphics, or a visual refresh of an existing product.",
    deliverables: [
      "Interface layouts and design tokens",
      "Reusable component styles",
      "Supporting graphics as agreed",
      "Handover files ready for development",
    ],
    engagement:
      "We agree the scope of screens or assets, share early concepts for feedback, and refine to a final set ready for use.",
    pricingFactors: [
      "Number of screens or assets",
      "Level of detail and interaction design",
      "Whether existing brand guidelines must be followed",
    ],
  },
];

export const serviceLinks = services.map((service) => ({
  name: service.name,
  href: `${routes.services}#${service.id}`,
}));
