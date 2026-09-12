import React from "react";
import { storyPage } from "@/content/story-content";
import ChapterLabel from "./ChapterLabel";
import ImageSlot from "./ImageSlot";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import TimelineRail from "./TimelineRail";

/**
 * 4 — From Vision To Reality. The construction chapters read as a dark,
 * cinematic interlude: a drawn rail, four dated movements, one large image
 * each. Minimal captions — the photographs carry it.
 */
export default function ConstructionJourney() {
  const { journey } = storyPage;

  return (
    <section
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-mira-charcoal py-24 text-white sm:py-40 lg:py-56"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-10" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-12 lg:px-20">
        <ChapterLabel numeral={journey.numeral} title={journey.chapter} tone="dark" />
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal
            as="h2"
            id="journey-heading"
            className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] text-white lg:col-span-7"
          >
            {journey.headline}
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:self-end lg:pb-3">
            <p className="max-w-md font-sans text-base font-light leading-relaxed text-white/70">{journey.intro}</p>
          </Reveal>
        </div>
      </div>

      <ol className="relative mx-auto mt-24 max-w-[1500px] px-6 sm:mt-36 sm:px-12 lg:px-20">
        <div className="absolute inset-y-0 left-6 sm:left-12 lg:left-20">
          <TimelineRail tone="dark" />
        </div>

        {journey.chapters.map((chapter) => (
          <li key={chapter.step} className="relative pb-24 pl-8 last:pb-0 sm:pb-36 sm:pl-14">
            <span
              aria-hidden="true"
              className="absolute left-0 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-mira-sand bg-mira-charcoal"
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <span
                    aria-hidden="true"
                    className="block font-serif text-7xl font-light leading-[0.8] text-white/25 sm:text-8xl"
                  >
                    {chapter.step}
                  </span>
                  <h3 className="mt-8 font-serif text-[clamp(1.75rem,2.8vw,2.5rem)] font-light leading-tight text-white">
                    {chapter.title}
                  </h3>
                  <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.3em] text-mira-sand sm:text-[11px]">
                    {chapter.period}
                  </p>
                </div>
              </Reveal>

              <div className="lg:col-span-8">
                <Reveal variant="mask" className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                  <Parallax speed={0.06}>
                    <ImageSlot slot={chapter.image} tone="dark" sizes="(min-width: 1024px) 62vw, 100vw" />
                  </Parallax>
                </Reveal>

                <Reveal delay={120} className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-12">
                  <p className="font-serif text-[clamp(1.35rem,2.1vw,1.9rem)] font-light leading-[1.3] text-white lg:col-span-7">
                    {chapter.statement}
                  </p>
                  <div className="lg:col-span-5">
                    <p className="font-sans text-[15px] font-light leading-relaxed text-white/65">{chapter.detail}</p>
                    {chapter.meta && (
                      <p className="mt-6 border-t border-white/15 pt-4 font-sans text-[10px] uppercase tracking-[0.25em] text-white/45">
                        {chapter.meta}
                      </p>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
