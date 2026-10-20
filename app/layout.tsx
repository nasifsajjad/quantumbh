import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Motion } from "@/components/motion";
import { Measurement } from "@/components/measurement";
import "./globals.css";
import "./refinements.css";
const dmSans = localFont({
  src: [
    {
      path: "../public/fonts/dm-sans-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/dm-sans-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
const instrument = localFont({
  src: "../public/fonts/instrument-sans-medium.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-heading",
  display: "swap",
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quantumbh.net";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quantum Software Solutions | Business Software in Bahrain",
    template: "%s | Quantum Software Solutions",
  },
  description:
    "Practical cloud software for businesses in Bahrain and the GCC. Explore ERP, accounting, HR, hospital management, Classveew, software development, and AI solutions.",
  openGraph: {
    type: "website",
    locale: "en_BH",
    siteName: "Quantum Software Solutions",
    images: [
      {
        url: "/social/quantum.png",
        width: 1200,
        height: 630,
        alt: "Quantum Software Solutions",
      },
    ],
    title: "Quantum Software Solutions",
    description: "Cloud business software for Bahrain and the GCC.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social/quantum.png"],
    title: "Quantum Software Solutions",
    description: "Practical business software for Bahrain and the GCC.",
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quantum Software Solutions WLL",
    alternateName: "Quantum Software Solutions",
    url: siteUrl,
    logo: `${siteUrl}/brand/quantum-mark.svg`,
    email: "sales@quantumbh.net",
    telephone: "+97332166628",
    foundingDate: "2026",
    identifier: "CR 197818-1",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office #4221, Building #2004, Road #1527, Block #115",
      addressLocality: "Al Hidd Industrial Area",
      addressCountry: "BH",
    },
    areaServed: [
      { "@type": "Country", name: "Bahrain" },
      { "@type": "Place", name: "Gulf Cooperation Council" },
    ],
  };
  return (
    <html lang="en" className={`${dmSans.variable} ${instrument.variable}`}>
      <body id="top">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Motion />
        <Measurement />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
