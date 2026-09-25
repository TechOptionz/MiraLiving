import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegisterModal from "@/components/common/RegisterModal";
import CookieConsent from "@/components/layout/CookieConsent";
import JsonLd from "@/components/common/JsonLd";
import { siteConfig } from "@/content/site-content";
import { siteGraph, ogImagePath } from "@/content/structured-data";

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

/**
 * One 1200x630 share image for the whole site (generated from the dusk facade
 * render with the address and the "Artist Impression" label burnt in), so every
 * page previews correctly on Facebook, LinkedIn and iMessage. Pages override
 * the title, description and canonical; they inherit everything else.
 */
const shareImage = {
  url: ogImagePath,
  width: 1200,
  height: 630,
  alt: "Mira Living, 25–27 The Esplanade, Bargara: beachfront apartment building at dusk (artist impression)",
};

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
    images: [shareImage],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.metaDescription,
    images: [shareImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
  return (
    <html lang="en-AU" className={`scroll-smooth ${cormorant.variable} ${poppins.variable}`}>
      <head>
        <JsonLd data={siteGraph()} />
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
