/**
 * Central typed site configuration.
 *
 * All changeable business details live here so email, phone number, and site
 * URL can be updated in one place without touching page components.
 */

const DEFAULTS = {
  businessName: "Joshi Software Solutions",
  tagline: "Digital solutions built around your business.",
  email: "joshisoftwaresolutions2@gmail.com",
  phone: "+919716222967",
  siteUrl: "http://localhost:3000",
} as const;

function read(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : fallback;
}

function warnMissing(name: string, usedFallback: string): void {
  console.warn(
    `[config] Missing environment variable ${name}. Falling back to "${usedFallback}". ` +
      `Set it in .env.local (development) or your host's environment settings (production).`,
  );
}

export const business = {
  name: DEFAULTS.businessName,
  tagline: DEFAULTS.tagline,
  email: read(process.env.NEXT_PUBLIC_BUSINESS_EMAIL, DEFAULTS.email),
  phone: read(process.env.NEXT_PUBLIC_BUSINESS_PHONE, DEFAULTS.phone),
} as const;

/**
 * Founder details.
 *
 * Joshi Software Solutions is a solo business. Presenting the founder honestly
 * as the person who personally handles projects is more trustworthy for a new
 * studio than implying a large agency. Keep claims factual.
 */
export const founder = {
  name: "Lucky Joshi",
  role: "Founder & Developer",
  photo: "/founder/lucky-joshi.webp",
  photoAlt: "Portrait of Lucky Joshi, Founder and Developer at Joshi Software Solutions",
} as const;

export const siteUrl = read(process.env.NEXT_PUBLIC_SITE_URL, DEFAULTS.siteUrl).replace(
  /\/+$/,
  "",
);

/**
 * Web3Forms access key.
 *
 * IMPORTANT: This is a PUBLIC value by design. Web3Forms' supported free-plan
 * integration submits directly from the browser, so this key is exposed in the
 * client bundle. It is a form identifier, not a secret: protect it by setting a
 * domain restriction in the Web3Forms dashboard (Settings -> Allowed Domains)
 * so it can only be used from your own domains.
 *
 * The server-side submission route was removed because Web3Forms' free plan
 * rejects server-initiated requests ("This method is not allowed. Use our API in
 * client side or contact support with server IP address (Pro plan is required)").
 */
export const web3formsAccessKey: string | undefined = (() => {
  const trimmed = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
})();

export const web3forms = {
  accessKey: web3formsAccessKey,
  configured: Boolean(web3formsAccessKey),
  endpoint: "https://api.web3forms.com/submit",
} as const;

/**
 * Normalise a phone number into WhatsApp's international format: digits only,
 * no leading `+`, no spaces, dashes, or parentheses.
 */
export function normalisePhoneForWhatsApp(phone: string): string {
  return phone.replace(/[^\d]/g, "").replace(/^0+/, "");
}

/**
 * Build a wa.me destination from the configured phone number.
 * Optionally includes a polite, non-sensitive prefill message.
 */
export function whatsappUrl(
  message = "Hi Joshi Software Solutions, I'd like to discuss a project.",
): string {
  const number = normalisePhoneForWhatsApp(business.phone);
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}

export const whatsapp = {
  get url(): string {
    return whatsappUrl();
  },
};

/** Route map used by navigation, footer, and internal links. */
export const routes = {
  home: "/",
  services: "/services",
  pricing: "/pricing",
  portfolio: "/portfolio",
  about: "/about",
  blog: "/blog",
  contact: "/contact",
  privacy: "/privacy",
} as const;

/** Development-time warning listing any missing public configuration. */
export function logConfigWarnings(): void {
  if (!process.env.NEXT_PUBLIC_BUSINESS_EMAIL) {
    warnMissing("NEXT_PUBLIC_BUSINESS_EMAIL", DEFAULTS.email);
  }
  if (!process.env.NEXT_PUBLIC_BUSINESS_PHONE) {
    warnMissing("NEXT_PUBLIC_BUSINESS_PHONE", DEFAULTS.phone);
  }
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    warnMissing("NEXT_PUBLIC_SITE_URL", DEFAULTS.siteUrl);
  }
  if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
    console.warn(
      "[config] Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. The contact form will show a clear setup message instead of sending. Add it to .env.local (development) or your host's environment settings (production).",
    );
  }
}

export const contact = {
  email: business.email,
  phone: business.phone,
  emailHref: `mailto:${business.email}`,
  get whatsappHref(): string {
    return whatsapp.url;
  },
  whatsappDisplay: business.phone,
} as const;
