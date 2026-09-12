import React from "react";
import Image from "next/image";
import { storyPage } from "@/content/story-content";
import ChapterLabel from "./ChapterLabel";
import ImageSlot from "./ImageSlot";
import Reveal from "@/components/common/Reveal";

/** 2 — The Vision Behind Mira. Editorial split: narrative left, single image right. */
export default function VisionSection() {
  const { vision } = storyPage;

  return (
    <section id="vision" aria-labelledby="vision-heading" className="scroll-mt-24 py-24 sm:py-40 lg:py-56">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-16 px-6 sm:px-12 lg:grid-cols-12 lg:gap-20 lg:px-20 2xl:px-28">
        <div className="lg:col-span-5">
          <ChapterLabel numeral={vision.numeral} title={vision.chapter} />

          <Reveal
            as="h2"
            id="vision-heading"
            className="mt-10 font-serif text-[clamp(2.5rem,5.2vw,5.25rem)] font-light leading-[1.04] text-mira-charcoal"
          >
            {vision.headline}
          </Reveal>

          <div className="mt-10 max-w-xl space-y-6 sm:mt-14">
            {vision.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={i * 120} as="p" className="font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg 2xl:text-xl">
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal as="blockquote" delay={150} className="mt-16 border-l border-mira-brown/30 pl-6 sm:mt-20 sm:pl-10">
            <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] font-light leading-[1.25] text-mira-charcoal">
              {vision.quoteLead}
            </p>
            <p className="mt-6 max-w-lg font-serif text-lg font-light leading-[1.45] text-mira-brownDark sm:text-xl">
              {vision.quoteRest}
            </p>
            <footer className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Image
                src={vision.signature}
                alt={`${vision.author} signature`}
                width={193}
                height={37}
                className="h-8 w-auto opacity-80"
              />
              <cite className="font-sans text-[11px] font-medium uppercase not-italic tracking-[0.25em] text-mira-muted">
                {vision.author}, {vision.authorTitle}
              </cite>
            </footer>
          </Reveal>
        </div>

        <figure className="-mx-6 sm:mx-0 lg:col-span-6 lg:col-start-7">
          <div className="lg:sticky lg:top-32">
            <Reveal variant="mask" className="relative aspect-[4/5] w-full overflow-hidden bg-mira-sand">
              <ImageSlot slot={vision.image} sizes="(min-width: 1024px) 40vw, 100vw" />
            </Reveal>
            {vision.image.caption && (
              <figcaption className="mt-3 px-6 font-sans text-[10px] uppercase tracking-[0.25em] text-mira-muted sm:px-0">
                {vision.image.caption}
              </figcaption>
            )}
          </div>
        </figure>
      </div>
    </section>
  );
}
