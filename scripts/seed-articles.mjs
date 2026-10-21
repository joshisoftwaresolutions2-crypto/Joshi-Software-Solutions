import { createClient } from "@sanity/client";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing Sanity credentials. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN (write access) in .env.local before seeding.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const articles = [
  {
    _id: "seed-article-business-website-cost-india-2026",
    _type: "article",
    title: "How Much Does a Business Website Cost in India in 2026?",
    slug: { current: "business-website-cost-india-2026" },
    excerpt:
      "Understand website development costs in India, the factors that affect pricing, ongoing expenses, and how to plan your budget for a new business website.",
    category: "Business Websites",
    tags: ["pricing", "budget", "business website", "India", "web development"],
    author: {
      name: "Lucky Joshi",
    },
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    seoTitle: "Business Website Cost in India (2026 Guide) | Joshi Software Solutions",
    seoDescription:
      "Understand website development costs in India, the factors that affect pricing, ongoing expenses, and how to plan your budget.",
    featured: true,
    published: false,
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A business website can be a simple online introduction to your company or a sophisticated application with custom workflows. Because the scope varies so widely, there is no single price that applies to every business.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "If you're planning a new website in India in 2026, the best way to budget is to understand what you need, what is included in the development price, and what expenses may continue after launch.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "What type of website do you need?" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A landing page is usually designed around one main goal, such as explaining an offer or collecting enquiries. A multi-page business website may include Home, About, Services, Portfolio and Contact pages. A custom web application can involve user accounts, dashboards, databases, integrations or other interactive features.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Each type has a different level of design, development, testing and maintenance effort.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "What affects the cost?" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Number and complexity of pages: A few straightforward pages generally take less work than a website with many unique layouts and complex content.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Custom design: A tailored design requires decisions about typography, spacing, interactions, accessibility and responsive layouts. Reusing a template can reduce work, but the template still needs to suit the business.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Features: Enquiry forms, booking systems, payment flows, authentication, dashboards and third-party integrations can add significant complexity.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Content and images: Writing, editing, photography, illustrations and preparing product information may be separate tasks.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Quality assurance: Testing mobile layouts, forms, links, browsers and deployment settings is part of delivering a usable website.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Example starting budgets" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "The following are illustrative starting prices for a small independent development business, not a survey of the entire Indian market.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Single landing page: ₹2,999" },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Small business website: ₹4,999" },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Website with more custom pages: ₹9,999" },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "More extensive business website: ₹17,999" },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Custom web application: ₹15,000+" },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "The final price depends on scope. These examples should not be interpreted as guarantees that every feature or integration is included.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Before accepting a quote, ask for the number of pages, included features, revision allowance, timeline, deployment responsibilities and exclusions in writing.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Remember the ongoing expenses" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Development is not necessarily the only cost. You may need to budget for a domain name, hosting, paid software, email services, content updates, backups, security maintenance and future improvements.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Some providers offer free hosting options, but free plans may have limits. Check custom-domain support, usage restrictions, commercial-use terms and whether server-side functionality is supported.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "How can you keep your budget under control?" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Start with the pages and features that support your main business goal. Use a clear brief, prepare your text and images before development, and postpone advanced features until there is a genuine need for them.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Request a fixed scope for the initial project and keep optional improvements separate. A low initial price is only useful if the delivered website meets your actual needs.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Final thoughts" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "The right website budget depends on what you want the site to accomplish. A straightforward website can establish your online presence, while a more complex application may require a larger investment and ongoing technical support.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "If you're planning a new website, explore our web development services or send us your project requirements to discuss a scope-specific estimate.",
          },
        ],
        style: "normal",
      },
    ],
  },
  {
    _id: "seed-article-mobile-friendly-website-small-business",
    _type: "article",
    title: "Why Every Small Business Needs a Mobile-Friendly Website",
    slug: { current: "mobile-friendly-website-small-business" },
    excerpt:
      "Learn how mobile-friendly design improves website usability, readability, navigation and enquiry experiences for small businesses.",
    category: "Web Development",
    tags: ["mobile", "responsive design", "usability", "small business", "web development"],
    author: {
      name: "Lucky Joshi",
    },
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    seoTitle: "Why Small Businesses Need Mobile-Friendly Websites | Joshi Software Solutions",
    seoDescription:
      "Learn how mobile-friendly design improves website usability, readability, navigation and enquiry experiences for small businesses.",
    featured: false,
    published: false,
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Many people visit business websites using their phones. If a website is difficult to read, navigate or use on a small screen, visitors may struggle to find the information they need.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A mobile-friendly website adapts its layout and interactions to different screen sizes. It is not simply a desktop website squeezed onto a phone.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Visitors need to find information quickly" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A potential customer might want to check your services, business hours, pricing, location or contact details. On a small screen, these details should be easy to locate without excessive zooming or scrolling through cluttered layouts.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Clear headings, readable text and a logical page structure help visitors understand what you offer.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Navigation should work with touch" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Desktop menus often rely on hover interactions or have space for many links. Mobile navigation needs to work comfortably with touch.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Buttons should be easy to tap, menus should open and close predictably, and links should not be packed so closely together that users select the wrong one.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Contact actions such as email, phone and WhatsApp links should work correctly on supported devices.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Your content must adapt, not just shrink" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A responsive layout changes how content is arranged. A row of three cards on desktop might become a single column on a phone. A wide table may need a simpler layout or a contained scrolling region. Images should resize without stretching, and headings should wrap naturally.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Testing matters because a page can look good at one mobile width and still break at another.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Performance matters on mobile" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Large images, unnecessary scripts and heavy animations can make a website slow, particularly on weaker connections or less powerful devices.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Developers can reduce these problems by compressing images, loading below-the-fold media when needed, reducing unnecessary JavaScript and reserving space for images to prevent layout shifts.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "A better experience supports business goals" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A visitor who can understand your services and contact you easily has fewer obstacles to making an enquiry. Responsive design cannot guarantee leads or sales, but it helps remove avoidable usability problems.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "The same principle applies to forms. Keep labels clear, request only necessary information and display useful error messages when a field needs attention.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "How to check your own website" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Open the site on a phone and try these tasks:",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Find the main service you offer." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Navigate between pages." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Read headings and body text without zooming." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Submit an enquiry form." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Open your contact links." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Rotate the device and check the layout." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Check whether any content extends beyond the screen." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Repeat on a slower connection if possible." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A responsive preview in browser developer tools is useful, but testing on actual devices can reveal additional issues.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Final thoughts" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A mobile-friendly website should feel deliberately designed for small screens, not like a reduced desktop layout. Readability, touch-friendly controls, fast loading and clear navigation all contribute to a better experience.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "If your current website needs improvement, learn about our website development services or contact us to discuss your website.",
          },
        ],
        style: "normal",
      },
    ],
  },
  {
    _id: "seed-article-how-to-make-website-faster",
    _type: "article",
    title: "7 Practical Ways to Make Your Website Faster",
    slug: { current: "how-to-make-website-faster" },
    excerpt:
      "Discover seven practical website speed improvements covering images, JavaScript, fonts, caching, layout stability and performance testing.",
    category: "Performance",
    tags: ["performance", "speed", "Core Web Vitals", "optimization", "web development"],
    author: {
      name: "Lucky Joshi",
    },
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
    seoTitle: "7 Practical Ways to Improve Website Speed | Joshi Software Solutions",
    seoDescription:
      "Discover seven practical website speed improvements covering images, JavaScript, fonts, caching, layout stability and performance testing.",
    featured: false,
    published: false,
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A slow website can make it harder for visitors to read content, navigate between pages or complete an enquiry. Improving performance starts with finding the actual bottlenecks rather than adding optimizations at random.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Here are seven practical places to start.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Optimize large images" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Images can account for a substantial share of a page's transferred data. Resize images to appropriate dimensions, compress them, and use modern formats such as WebP or AVIF where supported.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Serve responsive image sizes instead of sending a large desktop image to every phone. Keep the main above-the-fold image discoverable and avoid lazy-loading it when it is the page's Largest Contentful Paint element. Images farther down the page can generally be loaded lazily.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Always provide dimensions or an aspect ratio to reduce layout shifts.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Reduce unnecessary JavaScript" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Every additional script can increase download, parsing and execution work. Review dependencies, remove unused packages and avoid making entire pages client-rendered when only a small interactive element needs browser-side JavaScript.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "In Next.js App Router projects, Server Components are a useful default. Add client components only when functionality such as state, event handlers or browser APIs requires them.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Do not add memoization or complex optimizations without evidence that they address a real bottleneck.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "3. Use fonts efficiently" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Multiple font families, weights and styles can increase network requests and delay text rendering.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Choose a small set of fonts and weights, remove unused files, and consider self-hosting or using next/font where appropriate. Make sure text remains readable while fonts load and avoid layouts that shift substantially when the final font appears.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "4. Reduce layout shifts" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A page can appear to jump around if images, embeds, banners or fonts change the dimensions of content after rendering.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Reserve space for media, avoid inserting content above existing content without warning, and give dynamic UI predictable dimensions. Check whether cookie notices, sticky headers or delayed components obscure important controls.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A low Cumulative Layout Shift score indicates a more stable visual experience.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "5. Cache suitable content" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Caching can reduce repeated work and network requests. Static assets can use appropriate cache headers, while public content may benefit from framework-level caching or revalidation.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Choose caching rules carefully. Private data, personalized responses and enquiry submissions must not be accidentally cached for other visitors. If a CMS is connected, decide how published content updates invalidate or refresh cached pages.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "6. Avoid expensive visual effects" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Large blurred elements, complex filters, continuous animations and excessive shadows may increase rendering costs on some devices.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Use CSS effects selectively, animate properties that browsers can handle efficiently, and respect reduced-motion preferences. Test on mid-range mobile hardware rather than relying solely on a powerful development computer.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "7. Measure before and after" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Use Lighthouse or PageSpeed Insights to identify issues and compare runs under similar conditions. Focus on these Core Web Vitals targets:",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "LCP: 2.5 seconds or less." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "INP: 200 milliseconds or less." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "CLS: 0.1 or less." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "These are recommended thresholds, not a promise that a specific optimization will achieve them. Lab tests and real-user field data measure different conditions, so report them separately.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "A sensible optimization order" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Start with the largest measured problems. Oversized hero images, excessive JavaScript and avoidable layout shifts are often better first targets than tiny CSS changes. Re-test after each significant change and check that forms, navigation and other features still work.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Final thoughts" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Website performance is an ongoing process of measurement, prioritization and verification. The goal is not simply a high benchmark score; it is a fast, stable experience for real visitors.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "If you need help improving your site's speed, explore our web development services or send us an enquiry.",
          },
        ],
        style: "normal",
      },
    ],
  },
  {
    _id: "seed-article-new-business-website-seo-checklist",
    _type: "article",
    title: "Basic SEO Checklist for a New Business Website",
    slug: { current: "new-business-website-seo-checklist" },
    excerpt:
      "Use this practical SEO checklist to prepare your new business website for crawling, indexing, useful search snippets and local visibility.",
    category: "SEO",
    tags: ["SEO", "checklist", "search engine optimization", "business website", "indexing"],
    author: {
      name: "Lucky Joshi",
    },
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    updatedAt: new Date(Date.now() - 259200000).toISOString(),
    seoTitle: "SEO Checklist for a New Business Website | Joshi Software Solutions",
    seoDescription:
      "Use this practical SEO checklist to prepare your new business website for crawling, indexing, useful search snippets and local visibility.",
    featured: false,
    published: false,
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Search engine optimization helps search engines discover and understand your pages. It also helps people decide whether your page answers their question.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "SEO is not a one-time setting, and completing a checklist does not guarantee rankings. However, a few technical and content fundamentals make a strong starting point for a new business website.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Give each page a clear purpose" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Create useful pages for the information visitors need, such as Home, Services, About, Portfolio and Contact. Avoid publishing several pages with nearly identical content just to target slightly different keywords.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Each page should answer a real question or serve a clear visitor need.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Write useful titles and descriptions" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Give every important page a descriptive title and a distinct meta description. Titles should accurately explain the page topic, while descriptions should summarize its value.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Avoid repetitive keyword stuffing. Search engines may generate a different snippet depending on the query, so descriptions are guidance rather than a guarantee of exactly what will appear.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "3. Use headings and links logically" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Use a clear main heading and organize supporting content into meaningful sections. Link to relevant services, related articles and contact pages using descriptive link text.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Internal links help visitors explore the site and help search engines discover related pages.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "4. Check indexing and technical settings" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Confirm that important public pages are not accidentally blocked from crawling or marked noindex. Check that canonical URLs are correct, pages return appropriate status codes, and broken links are fixed.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Generate a sitemap that includes canonical, public pages. If your site uses Next.js, the App Router supports a sitemap.ts convention for generating sitemap entries.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Submit the sitemap through Google Search Console after verifying your website.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "5. Make pages fast and accessible" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Use responsive layouts, compress images, provide useful alternative text for meaningful images, and ensure visitors can navigate the site with a keyboard.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Readable content, accessible controls and predictable page layouts benefit visitors regardless of whether they arrive through a search engine.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "6. Add relevant structured data" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Structured data can help search engines understand certain page details. Use appropriate schema types only when the information matches the visible page and eligibility rules.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "For articles, this may include a BlogPosting or Article schema. For a business, choose the appropriate organization or local-business type only when its fields are accurate. Structured data does not guarantee rich results.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "7. Set up measurement tools" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Google Search Console can help you inspect indexing and search performance. Analytics tools can provide additional visitor insights if you choose to use them and configure them appropriately.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Review useful measures such as indexed pages, search queries, relevant clicks and enquiry conversions. Avoid drawing conclusions from very small amounts of data.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "8. Consider local visibility when relevant" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "If your business serves customers in a specific area, make the service area and contact information clear. Keep public business details consistent and maintain a Google Business Profile if eligible.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Do not create fake addresses or listings for areas where you do not genuinely operate.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Final thoughts" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A useful SEO foundation combines clear content, sound technical setup, internal links and regular review. Focus on helping the right visitors find the right information rather than trying to manipulate search algorithms.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "For help building a search-friendly website, see our services or contact Joshi Software Solutions.",
          },
        ],
        style: "normal",
      },
    ],
  },
  {
    _id: "seed-article-website-maintenance-guide",
    _type: "article",
    title: "Website Maintenance: What It Includes and Why It Matters",
    slug: { current: "website-maintenance-guide" },
    excerpt:
      "Learn what website maintenance includes, from updates and backups to form testing, security checks and ongoing improvements.",
    category: "Maintenance",
    tags: ["maintenance", "updates", "backups", "security", "forms", "website management"],
    author: {
      name: "Lucky Joshi",
    },
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    updatedAt: new Date(Date.now() - 345600000).toISOString(),
    seoTitle: "Website Maintenance Guide for Small Businesses | Joshi Software Solutions",
    seoDescription:
      "Learn what website maintenance includes, from updates and backups to form testing, security checks and ongoing improvements.",
    featured: false,
    published: false,
    body: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Launching a website is an important milestone, but it does not mean the work is finished forever. Websites rely on software, hosting, integrations, content and forms that may need attention over time.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Website maintenance is the process of checking, updating and improving a website after launch. The exact tasks depend on how the site is built and what the business needs.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "1. Software and dependency updates" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Frameworks, plugins, packages and other dependencies receive updates that may fix bugs, address security issues or introduce compatibility changes.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Updates should be reviewed and tested before they are deployed, particularly when the site relies on forms, payment providers or other integrations. Blindly updating production software without a rollback plan can introduce problems.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "2. Backups and recovery" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A backup is useful only if it can be recovered when needed. The right backup strategy depends on the website architecture and where its data lives.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A static website may have its source code and deployment history in version control. A dynamic application may also require database backups, uploaded media backups and configuration recovery procedures.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Keep secrets out of public repositories and document how to restore the site.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "3. Forms and important user journeys" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Contact forms, booking links, checkout flows and other critical interactions can fail when integrations change or configuration expires.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Test important journeys periodically. Check that form validation works, success and error messages are understandable, and submissions reach the intended destination.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Do not send real customer data through tests unnecessarily; use a safe test process.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "4. Content and broken links" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Business details, service descriptions, staff information, pricing and contact information can become outdated.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Maintenance can include small content corrections, checking important links and replacing outdated images. Larger redesigns, new features and extensive copywriting should be scoped separately where appropriate.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "5. Performance and security checks" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Review page speed, image sizes, browser errors and major user flows. Check access permissions, dependency alerts, authentication settings and hosting configuration according to the website's risks.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "No maintenance plan can promise complete security or zero downtime, but a consistent process can help detect problems earlier.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "6. What should a maintenance plan include?" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Before purchasing or offering a plan, define its boundaries.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "A written plan should specify:",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "How many content updates are included." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Whether minor bug fixes are included and how they are limited." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "How often backups and checks occur." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Expected support hours and response times." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Whether hosting, domains and third-party subscriptions are included." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "How emergency work, redesigns and new features are charged." },
        ],
        style: "normal",
        listItem: "bullet",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Avoid vague promises such as 'unlimited development' unless the service genuinely defines and supports that commitment.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "7. How often should a website be checked?" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "There is no universal schedule for every site. A simple informational website may need less frequent hands-on maintenance than an application that handles accounts, transactions or frequently changing data.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Set a schedule based on the site's complexity, risk and business importance. Monitor critical services where practical, and respond promptly to confirmed security or availability problems.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [{ _type: "span", text: "Final thoughts" }],
        style: "h2",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "Good website maintenance is about keeping a website accurate, usable and appropriately supported after launch. The right plan is the one that matches the site's technical needs and clearly defines what is included.",
          },
        ],
        style: "normal",
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text:
              "If you need ongoing help with your website, explore our maintenance services or contact us to discuss your requirements.",
          },
        ],
        style: "normal",
      },
    ],
  },
];

async function seedArticles() {
  console.log("Seeding articles to Sanity...");

  for (const article of articles) {
    try {
      const result = await client.createIfNotExists(article);
      console.log(`Created article: ${article.title} (${result._id})`);
    } catch (error) {
      console.error(`Error creating article "${article.title}":`, error);
    }
  }

  console.log("Seeding complete!");
}

seedArticles().catch(console.error);