import React from "react";
import { storyPage } from "@/content/story-content";
import HeroVideo from "./HeroVideo";
import Parallax from "./Parallax";

export default function StoryHero() {
  const { hero } = storyPage;

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden bg-mira-charcoal text-white">
      <Parallax speed={0.25}>
        <div className="absolute inset-0 animate-heroZoom">
          {/* One layer only — the video's poster is its own first frame, so the
              hero paints finished and never swaps one picture for another. */}
          <HeroVideo slot={hero.video} />
        </div>
      </Parallax>

      {/* Elegant dark overlay — keeps the headline legible over any photograph */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/55" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.09]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] flex-col justify-end px-6 pb-10 sm:px-12 sm:pb-14 lg:px-20 2xl:px-28">
        <p
          className="animate-softFade flex items-center gap-4 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-sand"
          style={{ "--d": "200ms" } as React.CSSProperties}
        >
          <span className="h-px w-10 bg-mira-sand/60" aria-hidden="true" />
          {hero.eyebrow}
        </p>

        <div className="mt-8 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <h1 className="font-serif text-[clamp(2.75rem,7vw,8.25rem)] font-light leading-[1.01] tracking-[-0.015em] lg:col-span-8">
            {hero.headlineLines.map((line, i) => (
              <span key={line} className="line-mask">
                <span style={{ "--d": `${400 + i * 160}ms` } as React.CSSProperties}>
                  {i === hero.headlineLines.length - 1 ? (
                    <em className="font-normal not-italic text-mira-sandLight">{line}</em>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="animate-softFade max-w-md font-sans text-base font-light leading-relaxed text-white/80 sm:text-lg lg:col-span-4 lg:pb-4 2xl:text-xl"
            style={{ "--d": "1000ms" } as React.CSSProperties}
          >
            {hero.intro}
          </p>
        </div>

        <div
          className="animate-softFade mt-14 flex flex-col gap-6 border-t border-white/20 pt-6 sm:mt-20 sm:flex-row sm:items-end sm:justify-between"
          style={{ "--d": "1300ms" } as React.CSSProperties}
        >
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-[11px] uppercase tracking-[0.16em] text-white/70">
            {hero.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <a
            href="#vision"
            className="group flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
          >
            {hero.scrollLabel}
            <span className="relative block h-10 w-px overflow-hidden bg-white/20" aria-hidden="true">
              <span className="animate-scrollCue absolute inset-0 bg-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
