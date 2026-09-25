import React from "react";
import { storyPage } from "@/content/story-content";
import { developmentSpecs } from "@/content/site-content";
import ChapterLabel from "./ChapterLabel";
import ImageSlot, { frameStyle } from "./ImageSlot";
import Reveal from "@/components/common/Reveal";
import SpecLedger from "@/components/common/SpecLedger";

/** 5 — Craftsmanship & Detail. One large frame, then the finishes read as a list. */
export default function CraftsmanshipSection() {
  const { craft } = storyPage;

  return (
    <section
      aria-labelledby="craft-heading"
      className="overflow-hidden border-t border-mira-border py-24 sm:py-40 lg:py-56"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-20 2xl:px-28">
        <ChapterLabel numeral={craft.numeral} title={craft.chapter} />
        <Reveal
          as="h2"
          id="craft-heading"
          className="mt-10 max-w-5xl font-serif text-[clamp(2.5rem,5.4vw,5.5rem)] font-light leading-[1.03] text-mira-charcoal"
        >
          {craft.headline}
        </Reveal>
      </div>

      <figure className="mx-auto mt-16 sm:mt-24 sm:px-12 lg:px-20 2xl:px-28">
        <Reveal
          variant="mask"
          style={frameStyle(craft.feature, 72)}
          className="relative mx-auto w-full overflow-hidden bg-mira-sand"
        >
          <ImageSlot slot={craft.feature} sizes="(min-width: 1700px) 1540px, 100vw" />
        </Reveal>
        <figcaption className="mt-10 grid grid-cols-1 gap-6 px-6 sm:px-0 lg:grid-cols-12">
          <Reveal className="font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg 2xl:text-xl lg:col-span-5 lg:col-start-8">
            {craft.lead}
          </Reveal>
          {craft.feature.caption && (
            <p className="order-first font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted lg:order-none lg:col-span-2 lg:col-start-1">
              {craft.feature.caption}
            </p>
          )}
        </figcaption>
      </figure>

      <div className="mx-auto mt-24 grid max-w-[1800px] grid-cols-1 gap-14 px-6 sm:mt-36 sm:px-12 lg:grid-cols-12 lg:gap-20 lg:px-20">
        <figure className="-mx-6 sm:mx-0 lg:col-span-5">
          <Reveal
            variant="mask"
            style={frameStyle(craft.secondary)}
            className="relative w-full overflow-hidden bg-mira-sand"
          >
            <ImageSlot slot={craft.secondary} sizes="(min-width: 1024px) 40vw, 100vw" />
          </Reveal>
          {craft.secondary.caption && (
            <figcaption className="mt-3 px-6 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted sm:px-0">
              {craft.secondary.caption}
            </figcaption>
          )}
        </figure>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal variant="fade" className="mb-6 flex items-baseline justify-between gap-6 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted">
            <span>Finish schedule · Selected items</span>
            <span>{String(craft.details.length).padStart(2, "0")} of {developmentSpecs.finishes.length}</span>
          </Reveal>
          <SpecLedger items={craft.details} revealDelay={90} />
          <Reveal delay={120}>
            <p className="mt-10 font-serif text-xl font-light italic leading-snug text-mira-brownDark sm:text-2xl">
              {craft.closing}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
