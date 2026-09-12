"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import BackdropVideo from "@/components/common/BackdropVideo";
import { siteConfig } from "@/content/site-content";

/**
 * Key facts sit on their own hairline-divided rail beneath the headline so the
 * commercial detail is scannable without crowding the editorial statement.
 */
const heroFacts = [
  { label: "Price from", value: siteConfig.startingPrice },
  { label: "The collection", value: "25 Residences" },
  { label: "Layout", value: "3 Bed + MPR" },
  { label: "Completion", value: "September 2026" },
];

export default function Hero() {
  const { openRegister } = useModal();

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col overflow-hidden bg-mira-charcoal text-white">
      {/* Cinematic full-bleed backdrop */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/*
          No Ken-Burns here any more: scaling a *playing* video means every
          decoded frame has to be re-rastered at a new size, which is the one
          thing the compositor cannot hand off cheaply. The footage already
          moves — the drift was paying for motion the visitor could not
          distinguish from the video's own.
        */}
        <BackdropVideo
          src="/video/home-hero.mp4"
          poster="/video/home-hero-poster.jpg"
          // The first thing anyone sees: fetched and playing from the markup,
          // so the water is already moving when the page is first readable.
          priority
          className="w-full h-full object-cover object-center"
        />

        {/* Light directional scrim: just enough to seat the type, the photograph stays the hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/5 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-[0.07]" />
      </div>

      {/* ------------------------------------------------------------------
          Editorial content column — aligned to the same grid as the header
          ------------------------------------------------------------------ */}
      <div className="relative z-10 flex-1 flex items-end sm:items-center pt-32 pb-12 sm:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[52rem]">
            {/* Eyebrow: hairline + location stamp */}
            <div
              className="flex items-center gap-4 animate-softFade"
              style={{ "--d": "200ms" } as React.CSSProperties}
            >
              <span className="hidden sm:block w-12 h-px bg-mira-sand/70" />
              <p className="text-[11px] sm:text-[12px] font-sans uppercase tracking-eyebrow text-mira-sandLight/90 hero-legible">
                Now Selling
                <span className="mx-2 text-white/35">/</span>
                {siteConfig.address.street} · {siteConfig.address.suburb}, {siteConfig.address.state}
              </p>
            </div>

            {/* Headline — each line rises out of its own mask */}
            <h1 className="mt-7 sm:mt-9 font-serif font-light text-hero-display text-white hero-legible">
              <span className="line-mask">
                <span style={{ "--d": "350ms" } as React.CSSProperties}>Oceanfront Living,</span>
              </span>
              <span className="line-mask">
                <span
                  className="italic text-mira-sandLight"
                  style={{ "--d": "500ms" } as React.CSSProperties}
                >
                  Elevated
                </span>
              </span>
            </h1>

            {/* Lead paragraph */}
            <p
              className="mt-7 sm:mt-8 max-w-xl font-sans font-light text-hero-lead leading-relaxed text-white/85 hero-legible animate-softFade"
              style={{ "--d": "750ms" } as React.CSSProperties}
            >
              A limited collection of bespoke three-bedroom residences on the Coral
              Sea, designed for the way Bargara actually lives.
            </p>

            {/* Actions — one primary, one quiet secondary */}
            <div
              className="mt-9 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 animate-softFade"
              style={{ "--d": "900ms" } as React.CSSProperties}
            >
              <button
                onClick={openRegister}
                className="group inline-flex items-center justify-center px-9 py-4 bg-mira-sandLight text-mira-charcoal font-sans text-[12px] tracking-eyebrow uppercase transition-colors duration-300 hover:bg-white focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-white"
              >
                Download Brochure
              </button>

              <Link
                href="/residences"
                className="inline-flex items-center gap-3 font-sans text-[12px] tracking-eyebrow uppercase text-white/90 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                <span className="border-b border-white/40 hover:border-white pb-1 transition-colors duration-300">
                  Explore Residences
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Vertical scroll cue (desktop) */}
        <a
          href="#architecture"
          className="hidden lg:flex absolute right-12 bottom-14 flex-col items-center gap-4 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
          aria-label="Scroll to the collection"
        >
          <span className="text-vertical text-[11px] font-sans uppercase tracking-eyebrow">
            Scroll
          </span>
          <span className="block h-14 w-px bg-white/20 overflow-hidden">
            <span className="block h-full w-full bg-white/90 animate-scrollCue" />
          </span>
        </a>
      </div>

      {/* ------------------------------------------------------------------
          Specification rail
          ------------------------------------------------------------------ */}
      <div
        className="relative z-10 border-t border-white/15 bg-black/45 animate-softFade"
        style={{ "--d": "1100ms" } as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <dl className="grid grid-cols-2 sm:grid-cols-4">
            {heroFacts.map((fact, index) => (
              <div
                key={fact.label}
                className={`py-5 sm:py-6 sm:px-8 sm:first:pl-0 border-white/12 ${
                  index > 1 ? "border-t sm:border-t-0" : ""
                } ${index % 2 === 1 ? "border-l pl-5 sm:pl-8" : ""} sm:border-l sm:first:border-l-0`}
              >
                <dt className="text-[11px] sm:text-[12px] font-sans uppercase tracking-eyebrow text-white/75">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-serif text-lg sm:text-xl text-mira-sandLight">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
