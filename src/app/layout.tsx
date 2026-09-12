import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegisterModal from "@/components/common/RegisterModal";
import CookieConsent from "@/components/layout/CookieConsent";
import { siteConfig } from "@/content/site-content";

/**
 * Self-hosted through next/font: the files are served from our own origin and
 * the face declarations are inlined into the document, so there is no
 * render-blocking round trip to fonts.googleapis.com before the first paint.
 * Only the weights the design actually uses are requested (300/400/500/600).
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
  fallback: ["Georgia", "serif"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Mira Living Bargara",
  },
  description: siteConfig.metaDescription,
  authors: [{ name: "Furtado Property" }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.metaDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/img/site/Sold-Properties-Mira-Living-4.webp",
        width: 1755,
        height: 1125,
        alt: "Mira Living Bargara - Luxury Oceanfront Residences",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.metaDescription,
    images: ["/img/site/Sold-Properties-Mira-Living-4.webp"],
  },
  icons: {
    icon: [
      { url: "/img/site/cropped-mira-fav.jpg" },
      { url: "/img/site/mira-fav.jpg" },
    ],
    apple: [
      { url: "/img/site/cropped-mira-fav.jpg" }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": `${siteConfig.url}/#apartmentcomplex`,
        name: siteConfig.name,
        description: siteConfig.metaDescription,
        url: siteConfig.url,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.suburb,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.postcode,
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -24.8194,
          longitude: 152.4578,
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "AUD",
          lowPrice: 1425000,
          offerCount: 25,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/img/site/mira-logo-brown.svg`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+61-438-162-574",
            contactType: "sales",
            areaServed: "AU",
          },
          {
            "@type": "ContactPoint",
            telephone: "+61-458-960-726",
            contactType: "sales",
            areaServed: "AU",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en-AU" className={`scroll-smooth ${cormorant.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-mira-ground text-mira-charcoal antialiased selection:bg-mira-sand selection:text-mira-brownDark">
        {/* Skip to Content for screen reader accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-mira-brown text-white text-xs tracking-eyebrow uppercase"
        >
          Skip to content
        </a>

        <ModalProvider>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <RegisterModal />
          <CookieConsent />
        </ModalProvider>
      </body>
    </html>
  );
}
