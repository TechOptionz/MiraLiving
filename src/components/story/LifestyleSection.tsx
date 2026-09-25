import React from "react";
import { storyPage } from "@/content/story-content";
import ChapterLabel from "./ChapterLabel";
import ImageSlot, { frameStyle } from "./ImageSlot";
import Reveal from "@/components/common/Reveal";
import ScrollExpand from "./ScrollExpand";
import { slotAspect } from "@/content/image-dimensions";

/** 7 — Lifestyle & Future Living. Emotion first: the light, the walk, the water. */
export default function LifestyleSection() {
  const { lifestyle } = storyPage;
  const { feature, retreat, comfort } = lifestyle;

  return (
    <section
      aria-labelledby="lifestyle-heading"
      className="overflow-x-clip border-t border-mira-border section-pad-lg"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-20 2xl:px-28">
        <ChapterLabel numeral={lifestyle.numeral} title={lifestyle.chapter} />
        <Reveal
          as="h2"
          id="lifestyle-heading"
          className="mt-10 max-w-5xl font-serif text-[clamp(2.5rem,5.4vw,5.5rem)] font-light leading-[1.03] text-mira-charcoal"
        >
          {lifestyle.headline}
        </Reveal>
      </div>

      {/* The place — pins to the viewport and opens to full screen as it rises */}
      <ScrollExpand
        className="mt-12 sm:mt-16"
        aspect={slotAspect(feature.image)}
        overlay={
          <Reveal as="p" className="max-w-5xl font-serif text-[clamp(2.25rem,5.2vw,5.25rem)] font-light leading-[1.03] text-white">
            {feature.overlay}
          </Reveal>
        }
      >
        <ImageSlot slot={feature.image} tone="dark" sizes="100vw" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      </ScrollExpand>

      <div className="mx-auto mt-12 grid max-w-[1800px] grid-cols-1 px-6 sm:mt-16 sm:px-12 lg:grid-cols-12 lg:px-20">
        <Reveal className="font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg lg:col-span-5 lg:col-start-8">
          {feature.text}
        </Reveal>
      </div>

      {/* Moments */}
      <div className="mx-auto mt-16 grid max-w-[1800px] grid-cols-1 gap-14 px-6 sm:mt-24 sm:px-12 md:grid-cols-2 md:gap-16 lg:gap-24 lg:px-20">
        {lifestyle.moments.map((moment, i) => (
          <Reveal key={moment.label} delay={i * 120} className="border-t border-mira-border pt-8">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">{moment.label}</p>
            <p className="mt-6 font-serif text-[clamp(1.65rem,2.9vw,2.75rem)] font-light leading-[1.22] text-mira-charcoal">
              {moment.text}
            </p>
          </Reveal>
        ))}
      </div>

      {/* The retreat */}
      <div className="mx-auto mt-16 grid max-w-[1800px] grid-cols-1 items-end gap-10 px-6 sm:mt-24 sm:px-12 lg:grid-cols-12 lg:gap-16 lg:px-20">
        <figure className="-mx-6 sm:mx-0 lg:col-span-7">
          <Reveal
            variant="mask"
            style={frameStyle(retreat.image, 80)}
            className="relative w-full overflow-hidden bg-mira-sand"
          >
            <ImageSlot slot={retreat.image} sizes="(min-width: 1024px) 55vw, 100vw" />
          </Reveal>
          {retreat.image.caption && (
            <figcaption className="mt-3 px-6 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted sm:px-0">
              {retreat.image.caption}
            </figcaption>
          )}
        </figure>

        <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:pb-10">
          <p className="font-serif text-[clamp(1.5rem,2.4vw,2.1rem)] font-light leading-[1.2] text-mira-charcoal">
            {retreat.label}
          </p>
          <p className="mt-6 font-sans text-[15px] font-light leading-relaxed text-mira-muted sm:text-base">
            {retreat.text}
          </p>
          <p className="mt-10 border-t border-mira-border pt-6 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
            {comfort.label}
          </p>
          <p className="mt-5 font-serif text-xl font-light leading-snug text-mira-brownDark sm:text-2xl">
            {comfort.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
