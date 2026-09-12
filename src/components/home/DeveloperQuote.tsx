import React from "react";
import Image from "next/image";
import { developerQuote } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";

export default function DeveloperQuote() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden border-t border-mira-border bg-mira-sand px-6 pb-20 pt-28 sm:px-12">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />

      {/* Oversized quotation mark, set as texture rather than punctuation. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 select-none font-serif text-[28rem] leading-none text-mira-brown/[0.06] sm:text-[38rem]"
      >
        &ldquo;
      </span>

      <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center">
        <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
          Vision &amp; Provenance
        </Reveal>

        <Reveal as="blockquote" delay={120} className="font-serif text-[clamp(1.6rem,3.6vw,3.25rem)] font-light italic leading-[1.3] text-mira-charcoal">
          {developerQuote.quote}
        </Reveal>

        <Reveal delay={280} className="flex flex-col items-center justify-center space-y-4 pt-6">
          <div className="relative flex h-14 w-56 items-center justify-center sm:w-64">
            <Image
              src={developerQuote.signatureImage}
              alt="Graham Furtado Signature"
              width={220}
              height={44}
              className="object-contain contrast-125"
            />
          </div>

          <cite className="font-sans text-xs font-medium uppercase not-italic tracking-[0.25em] text-mira-muted">
            — {developerQuote.author}, {developerQuote.title}
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
