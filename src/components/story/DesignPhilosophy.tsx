import React from "react";
import { storyPage } from "@/content/story-content";
import ChapterLabel from "./ChapterLabel";
import ImageSlot, { frameStyle } from "./ImageSlot";
import Reveal from "@/components/common/Reveal";

/**
 * 3 — Design Philosophy. Four large numbered movements, alternating sides.
 * Deliberately not cards: each principle owns a full band of the page.
 */
export default function DesignPhilosophy() {
  const { design } = storyPage;

  return (
    <section
      aria-labelledby="design-heading"
      className="overflow-hidden border-t border-mira-border bg-mira-sandLight py-24 sm:py-40 lg:py-56"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-20 2xl:px-28">
        <ChapterLabel numeral={design.numeral} title={design.chapter} />
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal
            as="h2"
            id="design-heading"
            className="font-serif text-[clamp(2.25rem,4.8vw,4.75rem)] font-light leading-[1.08] text-mira-charcoal lg:col-span-9"
          >
            {design.headline}
          </Reveal>
          <Reveal delay={120} className="lg:col-span-3 lg:self-end lg:pb-3">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-muted">
              — {design.attribution}
            </p>
          </Reveal>
        </div>
      </div>

      <ol className="mx-auto mt-24 max-w-[1800px] px-6 sm:mt-32 sm:px-12 lg:px-20 2xl:px-28">
        {design.principles.map((principle, i) => {
          const imageFirst = i % 2 === 1;

          return (
            <li
              key={principle.title}
              className="grid grid-cols-1 items-center gap-10 border-t border-mira-border pt-14 pb-20 last:pb-0 sm:gap-14 sm:pt-20 sm:pb-32 lg:grid-cols-12 lg:gap-20"
            >
              <div className={`lg:col-span-4 ${imageFirst ? "lg:col-start-9 lg:row-start-1" : ""}`}>
                <Reveal>
                  <div className="flex items-end gap-5">
                    <span
                      aria-hidden="true"
                      className="font-serif text-6xl font-light leading-[0.75] text-mira-sandDark sm:text-8xl"
                    >
                      {principle.step}
                    </span>
                    <h3 className="pb-1 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
                      {principle.title}
                    </h3>
                  </div>

                  <p className="mt-10 font-serif text-[clamp(1.75rem,3.3vw,3.25rem)] font-light leading-[1.15] text-mira-charcoal">
                    {principle.statement}
                  </p>
                  <p className="mt-7 max-w-lg font-sans text-[15px] font-light leading-relaxed text-mira-muted sm:text-base">
                    {principle.detail}
                  </p>
                  {principle.meta && (
                    <p className="mt-9 border-t border-mira-border pt-5 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-brown/80 sm:text-[12px]">
                      {principle.meta}
                    </p>
                  )}
                </Reveal>
              </div>

              <figure
                className={`-mx-6 sm:mx-0 lg:col-span-7 ${
                  imageFirst ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-6"
                }`}
              >
                <Reveal
                  variant="mask"
                  style={frameStyle(principle.image, 80)}
                  className="relative w-full overflow-hidden bg-mira-sand"
                >
                  <ImageSlot slot={principle.image} sizes="(min-width: 1024px) 50vw, 100vw" />
                </Reveal>
                {principle.image.caption && (
                  <figcaption className="mt-3 px-6 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted sm:px-0">
                    {principle.image.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
