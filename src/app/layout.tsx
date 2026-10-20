import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { business, siteUrl, logConfigWarnings } from "@/config/site";

logConfigWarnings();

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} — ${business.tagline}`,
    template: `%s — ${business.name}`,
  },
  description:
    "Joshi Software Solutions builds modern websites, landing pages, and custom web applications for businesses in Delhi NCR, across India, and internationally.",
  applicationName: business.name,
  keywords: [
    "web development",
    "website design",
    "landing pages",
    "custom software",
    "Delhi NCR",
    "India",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  openGraph: {
    type: "website",
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description:
      "We build modern websites, landing pages, and custom web applications designed around your goals.",
    url: siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description:
      "We build modern websites, landing pages, and custom web applications designed around your goals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101828",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
