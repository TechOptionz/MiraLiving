import React from "react";
import Reveal from "@/components/common/Reveal";
import { siteConfig } from "@/content/site-content";

/**
 * 6 — Acknowledgement.
 *
 * Deliberately the one screen on the page with no photograph. It sits between
 * two image-heavy sections and is the quiet in the middle of them; the name is
 * given the full width of the column rather than a card.
 */
export default function ArtistSection() {
  const { artist, text } = siteConfig.artistAcknowledgement;

  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden border-t border-mira-border bg-mira-sandLight px-6 py-[clamp(4rem,12vh,8rem)] sm:px-12 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.35]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-1/4 top-0 h-[70%] w-[60%] rounded-full bg-mira-sand/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <Reveal
          variant="fade"
          rootMargin="0px"
          className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown"
        >
          Cultural Connection to Country
        </Reveal>

        <Reveal
          delay={120}
          rootMargin="0px"
          className="mt-[clamp(2rem,5vh,3.5rem)] border-y border-mira-border py-[clamp(2rem,5vh,3.5rem)]"
        >
          <span className="block font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted">
            Featured Artist
          </span>
          <h2 className="mt-5 font-serif text-[clamp(2.4rem,7vw,5.5rem)] font-light leading-[1.02] text-mira-charcoal">
            {artist}
          </h2>
        </Reveal>

        <Reveal
          as="p"
          variant="fade"
          delay={240}
          rootMargin="0px"
          className="mx-auto mt-[clamp(2rem,5vh,3.5rem)] max-w-2xl font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg"
        >
          {text}
        </Reveal>

        <Reveal
          variant="fade"
          delay={340}
          rootMargin="0px"
          className="mt-[clamp(2rem,5vh,3.5rem)] font-serif text-lg font-light italic text-mira-brown sm:text-xl"
        >
          Mira acknowledges the Traditional Custodians of the land and sea on which it is
          built, and pays respect to Elders past and present.
        </Reveal>
      </div>
    </section>
  );
}
