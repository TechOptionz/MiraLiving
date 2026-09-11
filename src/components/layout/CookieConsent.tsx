"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-content";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mira_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "granted") {
      loadGTM();
    }
  }, []);

  const loadGTM = () => {
    if (typeof window !== "undefined" && !(window as any).dataLayer) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
      });
      const f = document.getElementsByTagName("script")[0];
      const j = document.createElement("script");
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${siteConfig.gtmId}`;
      f?.parentNode?.insertBefore(j, f);
    }
  };

  const handleAccept = () => {
    localStorage.setItem("mira_cookie_consent", "granted");
    setShowBanner(false);
    loadGTM();
  };

  const handleDecline = () => {
    localStorage.setItem("mira_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 max-w-md bg-white/95 backdrop-blur-md border border-mira-border shadow-float p-5 rounded-none animate-fadeIn">
      <div className="text-xs font-sans text-mira-charcoal space-y-2">
        <p className="font-medium text-mira-brown uppercase tracking-eyebrow text-[10px]">
          Cookie & Privacy Preferences
        </p>
        <p className="text-mira-muted leading-relaxed">
          We use cookies and analytics to ensure you receive the most seamless experience on our website. Read our{" "}
          <Link href="/privacy-policy" className="underline text-mira-charcoal hover:text-mira-brown">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <div className="flex items-center justify-end gap-3 mt-4 pt-3 border-t border-mira-border/50">
        <button
          onClick={handleDecline}
          className="px-3 py-1.5 text-[11px] font-sans text-mira-muted hover:text-mira-charcoal uppercase tracking-wider"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 text-[11px] font-sans bg-mira-brown hover:bg-mira-brownDark text-white uppercase tracking-wider shadow-sm transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
