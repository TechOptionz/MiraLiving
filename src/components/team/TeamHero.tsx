import React from "react";
import Image from "next/image";
import Parallax from "@/components/story/Parallax";
import { teamHero, teamPhotos } from "@/content/team-content";

/**
 * 1 — Masthead.
 *
 * A full-viewport photograph of the crew, not a render: the page is about
 * people, so it opens on them. The frame drifts against the scroll, and the
 * fact rail along the foot mirrors the home hero so the two pages read as one
 * set.
 */
export default function TeamHero() {
  const photo = teamPhotos.crew;

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-mira-charcoal text-white">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Parallax speed={0.12}>
          <Image
            src={photo.src}
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
        </Parallax>

        {/* Directional scrim — enough to seat the type, the photograph stays the subject. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-[0.08]" />
      </div>

      <div className="relative z-10 flex flex-1 items-end pb-12 pt-32 sm:items-center sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-[54rem]">
            <div
              className="flex animate-softFade items-center gap-4"
              style={{ "--d": "200ms" } as React.CSSProperties}
            >
              <span className="hidden h-px w-12 bg-mira-sand/70 sm:block" />
              <p className="hero-legible font-sans text-[11px] uppercase tracking-eyebrow text-mira-sandLight/90 sm:text-[12px]">
                {teamHero.eyebrow}
                <span className="mx-2 text-white/35">/</span>
                Project Partners
              </p>
            </div>

            <h1 className="hero-legible mt-7 font-serif text-[clamp(2.6rem,7vw,6rem)] font-light leading-[1.04] text-white sm:mt-9">
              <span className="line-mask">
                <span style={{ "--d": "350ms" } as React.CSSProperties}>{teamHero.headlineTop}</span>
              </span>
              <span className="line-mask">
                <span
                  className="italic text-mira-sandLight"
                  style={{ "--d": "500ms" } as React.CSSProperties}
                >
                  {teamHero.headlineBottom}
                </span>
              </span>
            </h1>

            <p
              className="hero-legible mt-7 max-w-2xl animate-softFade font-sans text-base font-light leading-relaxed text-white/85 sm:mt-8 sm:text-lg"
              style={{ "--d": "750ms" } as React.CSSProperties}
            >
              {teamHero.lead}
            </p>
          </div>
        </div>

        {/* Photograph credit — the frame says what it is and when. */}
        <figcaption
          className="absolute bottom-6 right-6 hidden animate-softFade text-right font-sans text-[11px] uppercase tracking-[0.16em] text-white/55 lg:block"
          style={{ "--d": "1000ms" } as React.CSSProperties}
        >
          {photo.caption}
          <span className="mx-2 text-white/30">·</span>
          {photo.date}
        </figcaption>
      </div>

      <div
        className="relative z-10 animate-softFade border-t border-white/15 bg-black/45"
        style={{ "--d": "1100ms" } as React.CSSProperties}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <dl className="grid grid-cols-2 sm:grid-cols-4">
            {teamHero.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`border-white/12 py-5 sm:px-8 sm:py-6 sm:first:pl-0 ${
                  index > 1 ? "border-t sm:border-t-0" : ""
                } ${index % 2 === 1 ? "border-l pl-5 sm:pl-8" : ""} sm:border-l sm:first:border-l-0`}
              >
                <dt className="font-sans text-[11px] uppercase tracking-eyebrow text-white/75 sm:text-[12px]">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-serif text-lg text-mira-sandLight sm:text-xl">
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
