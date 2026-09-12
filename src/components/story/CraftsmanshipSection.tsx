import React from "react";
import { storyPage } from "@/content/story-content";
import ChapterLabel from "./ChapterLabel";
import ImageSlot from "./ImageSlot";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

/** 5 — Craftsmanship & Detail. One large frame, then the finishes read as a list. */
export default function CraftsmanshipSection() {
  const { craft } = storyPage;

  return (
    <section
      aria-labelledby="craft-heading"
      className="overflow-hidden border-t border-mira-border py-24 sm:py-40 lg:py-56"
    >
      <div className="mx-auto max-w-[1500px] px-6 sm:px-12 lg:px-20">
        <ChapterLabel numeral={craft.numeral} title={craft.chapter} />
        <Reveal
          as="h2"
          id="craft-heading"
          className="mt-10 max-w-4xl font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.05] text-mira-charcoal"
        >
          {craft.headline}
        </Reveal>
      </div>

      <figure className="mx-auto mt-16 max-w-[1700px] sm:mt-24 sm:px-12 lg:px-20">
        <Reveal variant="mask" className="relative aspect-[4/3] w-full overflow-hidden bg-mira-sand sm:aspect-[16/9]">
          <Parallax speed={0.07}>
            <ImageSlot slot={craft.feature} sizes="(min-width: 1700px) 1540px, 100vw" />
          </Parallax>
        </Reveal>
        <figcaption className="mt-10 grid grid-cols-1 gap-6 px-6 sm:px-0 lg:grid-cols-12">
          <Reveal className="font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg lg:col-span-5 lg:col-start-8">
            {craft.lead}
          </Reveal>
          {craft.feature.caption && (
            <p className="order-first font-sans text-[10px] uppercase tracking-[0.25em] text-mira-muted lg:order-none lg:col-span-2 lg:col-start-1">
              {craft.feature.caption}
            </p>
          )}
        </figcaption>
      </figure>

      <div className="mx-auto mt-24 grid max-w-[1500px] grid-cols-1 gap-14 px-6 sm:mt-36 sm:px-12 lg:grid-cols-12 lg:gap-20 lg:px-20">
        <figure className="-mx-6 sm:mx-0 lg:col-span-5">
          <Reveal variant="mask" className="relative aspect-[4/3] w-full overflow-hidden bg-mira-sand">
            <ImageSlot slot={craft.secondary} sizes="(min-width: 1024px) 40vw, 100vw" />
          </Reveal>
          {craft.secondary.caption && (
            <figcaption className="mt-3 px-6 font-sans text-[10px] uppercase tracking-[0.25em] text-mira-muted sm:px-0">
              {craft.secondary.caption}
            </figcaption>
          )}
        </figure>

        <div className="lg:col-span-6 lg:col-start-7">
          <dl>
            {craft.details.map((detail, i) => (
              <Reveal key={detail.title} delay={i * 90} className="border-t border-mira-border py-7 first:border-t-0 first:pt-0 sm:py-9">
                <dt className="font-serif text-2xl font-light text-mira-charcoal sm:text-[1.75rem]">{detail.title}</dt>
                <dd className="mt-3 max-w-md font-sans text-[15px] font-light leading-relaxed text-mira-muted">
                  {detail.description}
                </dd>
              </Reveal>
            ))}
          </dl>
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
