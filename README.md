# Joshi Software Solutions — Official Website

Production-ready marketing website for **Joshi Software Solutions**.

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Contact form:** Web3Forms, submitted via a server-side route handler
- **Deployment target:** any host that runs a Node.js Next.js server (see below)

---

## 1. Requirements

- Node.js 20.9 or newer (developed on Node 24)
- npm 10 or newer

## 2. Local setup

```bash
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
# edit .env.local and fill in real values
npm run dev
```

The site runs at http://localhost:3000.

### Scripts

| Script              | Purpose                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the development server             |
| `npm run build`     | Production build                         |
| `npm run start`     | Run the production build locally         |
| `npm run lint`      | ESLint                                   |
| `npm run typecheck` | TypeScript type checking (`tsc --noEmit`)|

## 3. Environment variables

All changeable business details come from environment variables — never edit
them in components.

| Variable                     | Scope  | Purpose                                       |
| ---------------------------- | ------ | --------------------------------------------- |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | Public | Business email shown in footer and contact    |
| `NEXT_PUBLIC_BUSINESS_PHONE` | Public | Phone / WhatsApp number (international format)|
| `NEXT_PUBLIC_SITE_URL`       | Public | Canonical site URL, metadata, sitemap         |
| `WEB3FORMS_ACCESS_KEY`       | Server | Web3Forms key. **Never** prefix with `NEXT_PUBLIC_` |

- Copy `.env.example` to `.env.local` for local work. `.env.local` is gitignored.
- The `NEXT_PUBLIC_` prefix makes a value available to the browser — only use it
  for values that are safe to expose (email, phone, site URL).
- `WEB3FORMS_ACCESS_KEY` is read only inside the server route handler and is never
  included in the client bundle.

### Changing email, phone, or site URL

Edit the values in `.env.local` (local) or your host's environment variables
(production). Every page, footer link, WhatsApp link, and canonical URL updates
automatically.

## 4. Web3Forms setup

1. Go to [web3forms.com](https://web3forms.com) and create a form using the
   business email address.
2. Copy the generated **Access Key**.
3. Add it to `.env.local` (and to your host's environment variables) as
   `WEB3FORMS_ACCESS_KEY`.
4. Restart the dev server.

The contact form posts to `/api/contact` (a Next.js route handler). That handler:

- reads the key on the server and forwards the enquiry to Web3Forms;
- validates and sanitises input and only accepts the expected fields;
- sets the visitor's email as **reply-to** (their address is never used as the
  sender);
- applies simple per-IP rate limiting and honeypot spam protection;
- returns a clear setup error (HTTP 503) when the key is missing, instead of
  failing silently.

### Testing the contact form

With `WEB3FORMS_ACCESS_KEY` set, submit the `/contact` form and confirm the
enquiry arrives at the business inbox. Without the key, the API returns a clear
"not configured" message — this is expected, not a bug.

## 5. Adding portfolio projects

Portfolio data lives in `src/content/projects.ts` and uses the `Project` type.
Do **not** invent projects. To publish real work:

1. Add screenshots to `public/portfolio/`.
2. Add an entry to the `projects` array following `projectTemplate`, and set
   `published: true`.
3. Only entries with `published: true` are rendered. Until at least one is
   published, the portfolio shows an honest "in preparation" empty state.

Fields: `slug`, `name`, `category`, `summary`, `objective`, `contribution`,
`technologies`, `screenshots` (with real `alt` text), `liveUrl`, `repoUrl`.

## 6. Publishing blog posts

Articles live in `src/content/blog.ts`. Add an object to the `articles` array
with `published: true` and a genuine `publishedAt` ISO date. Content is written
as structured blocks (`paragraph`, `heading`, `list`). Drafts (`published: false`)
and posts without a real date are never shown. Slugs become `/blog/<slug>`.

## 7. Updating prices

All pricing lives in `src/content/pricing.ts` and is rendered on `/pricing` and,
for packages, on the homepage. The site is published with approved introductory
starting prices:

- **Website packages:** Starter ₹4,999, Business ₹9,999 (recommended), Business
  Plus ₹17,999 — per project.
- **Individual services:** landing page ₹2,999, business website ₹4,999, UI
  screen design ₹1,499, small graphic task ₹499, content update ₹499, website
  maintenance ₹999/month, custom web application ₹15,000+, additional page ₹1,000+.
- **Maintenance plans:** Basic Care ₹999/mo, Standard Care ₹2,499/mo, Priority
  Care ₹4,999/mo.

A rate is only shown as a real number when both `published: true` and `amount` is
a number. Otherwise the site shows "On request". Do not guess prices. These are
introductory rates and should be revised once actual delivery time is measured.

Data structures: `websitePackages`, `servicePrices`, `maintenancePlans`,
`maintenanceExclusions`, `pricingNote`, and the legacy `prices` map used by the
services page sidebar.

## 8. Logo and brand assets

The logo is a replaceable placeholder in `src/components/ui/logo.tsx` (the "JS"
monogram). Swap the inner mark and wordmark for the official logo when supplied.
Replace `src/app/icon.svg` with the real favicon. Do not modify supplied assets
without permission.

## 9. SEO

- Per-route metadata and canonical URLs via `src/lib/metadata.ts`.
- `src/app/sitemap.ts` generates `/sitemap.xml`.
- `src/app/robots.ts` generates `/robots.txt`.
- Metadata base URL comes from `NEXT_PUBLIC_SITE_URL`.

Set `NEXT_PUBLIC_SITE_URL` to the real deployed URL before launch so canonical
URLs, Open Graph tags, and the sitemap are correct.

## 10. Analytics

Analytics is intentionally **not** enabled. When you add a provider:

1. Add the script in `src/app/layout.tsx` (a documented integration point).
2. Update `/privacy` (`src/app/privacy/page.tsx`) to describe the provider and,
   where required, add a consent mechanism **before** enabling tracking.

## 11. Accessibility, performance, motion

- Semantic HTML, skip link, visible focus states, keyboard-operable navigation.
- `prefers-reduced-motion` is respected globally in `src/app/globals.css`.
- Images use `next/image`; fonts use `next/font` (self-hosted, no layout shift).
- Pages default to Server Components; only the header and contact form are
  client components.

## 12. Deployment

The contact form uses a Next.js **server route handler**, so a purely static host
(for example, GitHub Pages or a static export) will not run it. Choose a host
that runs a Node.js Next.js server:

- **Recommended:** [Vercel](https://vercel.com) — free Hobby tier, supports
  Next.js route handlers; commercial use is permitted on paid tiers (review the
  current terms for your usage).
- **Alternatives:** Render, Railway, or Fly.io free/low-cost tiers that run a
  Node server.

If you must deploy statically, the contact form will not function; in that case
switch the form to a Web3Forms browser integration and accept that the access key
becomes publicly visible (it is designed for browser use but should be treated as
public), or add a small serverless function to proxy submissions.

### Steps (Vercel)

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Add the four environment variables (Section 3) in the Vercel project settings.
4. Deploy. Vercel runs `next build` and hosts the app with route handlers online.

The initial deployment can use the free `*.vercel.app` subdomain, then set
`NEXT_PUBLIC_SITE_URL` to that URL.

## 13. Project structure

```
src/
  app/            Routes (App Router), API route, sitemap, robots, icon
  components/
    layout/       Header, Footer
    sections/     Hero, cards, CTA, homepage sections
    ui/           Button, Section, Logo, EmptyState
    contact/      ContactForm (client)
  config/         site.ts (public config), server.ts (server-only config)
  content/        services, projects, pricing, process, blog data
  lib/            metadata helper
```

## 14. Business assets / details still needed

- Official logo or JS monogram (and favicon).
- Portfolio screenshots, project names, descriptions, technologies, live URLs,
  and public repo links (real, approved items only).
- Founder biography, year established, team size, and any qualifications or
  awards you want published (currently kept out of the public site as TODOs in
  `src/app/about/page.tsx`).
- Final deployed URL for `NEXT_PUBLIC_SITE_URL`.
- Review of the Privacy Policy draft against final hosting/form/analytics setup.
- International pricing approach (quote in USD or another agreed currency rather
  than converting Indian packages mechanically) once a delivery process is set.
