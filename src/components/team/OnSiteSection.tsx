import React from "react";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import { onSite } from "@/content/team-content";

/**
 * 4 — The trades.
 *
 * Three photographs from the site, held in one row that takes whatever height
 * the masthead leaves. Each frame masks open in turn as the row arrives, and
 * the photograph inside settles out of a slight scale — the page's own reveal
 * idiom rather than a second animation vocabulary.
 */
export default function OnSiteSection() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col border-t border-mira-border bg-mira-ground px-6 pb-[clamp(2.5rem,6vh,4.5rem)] pt-[clamp(6.5rem,14vh,9rem)] sm:px-12 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-[clamp(2rem,5vh,3.5rem)]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="space-y-4 lg:col-span-7">
            <Reveal
              variant="fade"
              rootMargin="0px"
              className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown"
            >
              {onSite.eyebrow}
            </Reveal>
            <Reveal
              as="h2"
              delay={120}
              rootMargin="0px"
              className="font-serif text-[clamp(1.9rem,4.5vw,4rem)] font-light leading-[1.08] text-mira-charcoal"
            >
              {onSite.headline}
            </Reveal>
          </div>

          <Reveal
            as="p"
            variant="fade"
            delay={180}
            rootMargin="0px"
            className="max-w-md font-sans text-sm font-light leading-relaxed text-mira-muted lg:col-span-5"
          >
            {onSite.lead}
          </Reveal>
        </div>

        <ul className="grid flex-1 auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-7">
          {onSite.photos.map((photo, idx) => (
            <li key={photo.src} className="flex min-h-[34svh] flex-col">
              <Reveal
                variant="mask"
                delay={idx * 140}
                rootMargin="0px"
                className="group relative flex-1 overflow-hidden bg-mira-sand"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  quality={74}
                  sizes="(min-width: 640px) 32vw, 100vw"
                  style={{ objectPosition: photo.focus ?? "center" }}
                  className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                />
              </Reveal>

              {/* Two of these frames carry the builder's own watermark in the
                  bottom corner, so the caption sits under the photograph rather
                  than over it — and the images stay clean and unscrimmed. */}
              <Reveal
                variant="fade"
                delay={idx * 140 + 200}
                rootMargin="0px"
                className="mt-4 flex items-baseline justify-between gap-4 border-t border-mira-border pt-3"
              >
                <p className="font-serif text-base font-light leading-snug text-mira-charcoal sm:text-lg">
                  {photo.caption}
                </p>
                <span className="shrink-0 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-brown">
                  {photo.date}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
