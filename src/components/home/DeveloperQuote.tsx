import React from "react";
import Image from "next/image";
import { developerQuote } from "@/content/site-content";

export default function DeveloperQuote() {
  return (
    <section className="py-32 sm:py-44 px-6 sm:px-12 bg-mira-sand relative overflow-hidden border-t border-mira-border">
      <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
          Vision & Provenance
        </span>

        <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif text-mira-charcoal font-light leading-[1.3] sm:leading-[1.3] italic">
          {developerQuote.quote}
        </blockquote>

        <div className="pt-6 flex flex-col items-center justify-center space-y-4">
          <div className="relative w-56 sm:w-64 h-14 flex items-center justify-center">
            <Image
              src={developerQuote.signatureImage}
              alt="Graham Furtado Signature"
              width={220}
              height={44}
              className="object-contain filter contrast-125"
            />
          </div>

          <cite className="not-italic text-xs font-sans uppercase tracking-[0.25em] text-mira-muted font-medium">
            — {developerQuote.author}, {developerQuote.title}
          </cite>
        </div>
      </div>
    </section>
  );
}
