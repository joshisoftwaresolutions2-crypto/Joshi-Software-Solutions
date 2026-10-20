# Joshi Software Solutions — Official Website

Production-ready marketing website for **Joshi Software Solutions**.

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Contact form:** Web3Forms, submitted from the browser (free-plan method)
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
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Public | Web3Forms access key (a public form ID, not a secret) |

- Copy `.env.example` to `.env.local` for local work. `.env.local` is gitignored.
- The `NEXT_PUBLIC_` prefix makes a value available to the browser — only use it
  for values that are safe to expose (email, phone, site URL, and the Web3Forms
  access key, which is a public form identifier by design).

### Changing email, phone, or site URL

Edit the values in `.env.local` (local) or your host's environment variables
(production). Every page, footer link, WhatsApp link, and canonical URL updates
automatically.

## 4. Web3Forms setup

1. Go to [web3forms.com](https://web3forms.com) and create a form using the
   business email address.
2. Copy the generated **Access Key**.
3. Add it to `.env.local` (and to your host's environment variables) as
   `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. Restart the dev server.
5. **Recommended:** in the Web3Forms dashboard, open your form's settings and add
   your domain(s) under **Allowed Domains**. Because the key is public, this
   restriction is what stops other sites from sending through your form.

### Why the form submits from the browser

Web3Forms' free plan **rejects server-initiated submissions**. Calling their API
from a backend returns:

> This method is not allowed. Use our API in client side or contact support with
> server IP address (Pro plan is required)

So the contact form submits directly from the browser (Web3Forms' supported
free-plan method). The access key is therefore a public value in the client
bundle — it is a form identifier, not a secret. Protect it with the domain
restriction above. (If you upgrade to Web3Forms Pro, you could move submission
back to a server route handler and keep the key server-only.)

The form still provides: client-side validation, a loading state, duplicate
submission prevention, clear success and failure messages, preserved input after
failure, reset only on confirmed success, and a honeypot spam field. When the key
is missing, the form shows a clear setup message instead of failing silently.

### Testing the contact form

With `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` set, submit the `/contact` form and
confirm the enquiry arrives at the business inbox. Without the key, the form
shows a clear "not configured" message — this is expected, not a bug.

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

The contact form submits from the browser, so the site no longer requires a Node
server for the form to work, and it can be hosted on either a Node-based or a
static host.

- **Node-based (recommended for Next.js):** [Vercel](https://vercel.com) free
  Hobby tier, or Render / Railway / Fly.io free or low-cost tiers.
- **Static hosts:** Netlify, Cloudflare Pages, or GitHub Pages also work, since
  there is no server-side form endpoint. Build with `next build` (and
  `output: "export"` if the host needs static output; note that `output: "export"`
  disables image optimisation and any future server routes).

Whichever host you choose, these environment variables must be present at build
time (they are inlined into the browser bundle): `NEXT_PUBLIC_BUSINESS_EMAIL`,
`NEXT_PUBLIC_BUSINESS_PHONE`, `NEXT_PUBLIC_SITE_URL`, and
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.

### Steps (Vercel)

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Add the four environment variables (Section 3) in the Vercel project settings.
4. Deploy. Vercel runs `next build` and serves the app.

The initial deployment can use the free `*.vercel.app` subdomain, then set
`NEXT_PUBLIC_SITE_URL` to that URL and add it as an Allowed Domain in Web3Forms.

### Steps (Netlify)

1. Push this repository to GitHub and import it in Netlify.
2. Add the four environment variables (Section 3) in Netlify.
3. Deploy. `netlify.toml` already configures the build command and the Next.js
   plugin, so no manual build settings are required.

**Important — Netlify secrets scanning.** If you store
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` as a **secret** env var in Netlify, the
post-build secrets scanner will fail the build because that value is (by design)
inlined into the browser bundle. `netlify.toml` already excludes this key via:

```toml
[build.environment]
  SECRETS_SCAN_OMIT_KEYS = "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY"
```

Alternatively, in the Netlify UI, scope the variable so it is not treated as a
secret. Either way, protect the key with a Web3Forms **Allowed Domains**
restriction rather than treating it as private.

## 13. Project structure

```
src/
  app/            Routes (App Router), sitemap, robots, icon
  components/
    layout/       Header, Footer
    sections/     Hero, cards, CTA, homepage sections
    ui/           Button, Section, Logo, EmptyState
    contact/      ContactForm (client, posts to Web3Forms)
  config/         site.ts (public config incl. public Web3Forms key)
  content/        services, projects, pricing, process, blog data
  lib/            metadata helper
netlify.toml       Netlify build config and secrets-scan exclusion
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
