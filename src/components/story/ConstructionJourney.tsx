import React from "react";
import { storyPage } from "@/content/story-content";
import ChapterLabel from "./ChapterLabel";
import ImageSlot, { frameStyle } from "./ImageSlot";
import Reveal from "@/components/common/Reveal";
import TimelineRail from "./TimelineRail";

/**
 * 4 — From Vision To Reality. The construction chapters read as a dark,
 * cinematic interlude: a drawn rail, four dated movements, each with one wide
 * establishing photograph and — where one exists — a closer companion frame
 * beside the text. Minimal captions; the photographs carry it.
 */
export default function ConstructionJourney() {
  const { journey } = storyPage;

  return (
    <section
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-mira-charcoal section-pad-lg text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-10" />

      <div className="relative mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-20">
        <ChapterLabel numeral={journey.numeral} title={journey.chapter} tone="dark" />
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal
            as="h2"
            id="journey-heading"
            className="font-serif text-[clamp(2.75rem,6.6vw,6.75rem)] font-light leading-[1.01] text-white lg:col-span-7"
          >
            {journey.headline}
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:self-end lg:pb-3">
            <p className="max-w-md font-sans text-base font-light leading-relaxed text-white/70">{journey.intro}</p>
          </Reveal>
        </div>
      </div>

      <ol className="relative mx-auto mt-16 max-w-[1800px] px-6 sm:mt-24 sm:px-12 lg:px-20">
        <div className="absolute inset-y-0 left-6 sm:left-12 lg:left-20">
          <TimelineRail tone="dark" />
        </div>

        {journey.chapters.map((chapter) => (
          <li key={chapter.step} className="relative pb-20 pl-8 last:pb-0 sm:pb-28 sm:pl-14">
            <span
              aria-hidden="true"
              className="absolute left-0 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-mira-sand bg-mira-charcoal"
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-3">
                <span
                  aria-hidden="true"
                  className="block font-serif text-7xl font-light leading-[0.8] text-white/25 sm:text-8xl"
                >
                  {chapter.step}
                </span>
                <h3 className="mt-8 font-serif text-[clamp(1.75rem,2.8vw,2.5rem)] font-light leading-tight text-white">
                  {chapter.title}
                </h3>
                <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-sand sm:text-[12px]">
                  {chapter.period}
                </p>
              </Reveal>

              <div className="lg:col-span-9">
                <figure>
                  <Reveal
                    variant="mask"
                    style={frameStyle(chapter.image, 72)}
                    className="relative w-full overflow-hidden bg-black/40"
                  >
                    <ImageSlot slot={chapter.image} tone="dark" sizes="(min-width: 1024px) 62vw, 100vw" />
                  </Reveal>
                  {chapter.image.caption && (
                    <figcaption className="mt-3 font-sans text-[11px] uppercase tracking-[0.16em] text-white/45">
                      {chapter.image.caption}
                    </figcaption>
                  )}
                </figure>

                <Reveal delay={120} className="mt-8 grid grid-cols-1 items-start gap-8 sm:mt-10 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <p className="font-serif text-[clamp(1.5rem,2.5vw,2.5rem)] font-light leading-[1.25] text-white">
                      {chapter.statement}
                    </p>
                    <p className="mt-6 max-w-lg font-sans text-[15px] font-light leading-relaxed text-white/65">
                      {chapter.detail}
                    </p>
                    {chapter.meta && (
                      <p className="mt-6 border-t border-white/15 pt-4 font-sans text-[11px] uppercase tracking-[0.16em] text-white/45">
                        {chapter.meta}
                      </p>
                    )}
                  </div>

                  {chapter.support && (
                    <figure className="lg:col-span-5">
                      <div
                        style={frameStyle(chapter.support)}
                        className="relative w-full overflow-hidden bg-black/40"
                      >
                        <ImageSlot
                          slot={chapter.support}
                          tone="dark"
                          sizes="(min-width: 1024px) 32vw, 100vw"
                        />
                      </div>
                    </figure>
                  )}
                </Reveal>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
