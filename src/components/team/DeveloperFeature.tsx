import React from "react";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import Parallax from "@/components/story/Parallax";
import { partnerRecords, developerQuote } from "@/content/site-content";
import { teamPhotos } from "@/content/team-content";

/**
 * 2 — The developer.
 *
 * A full-height split: the handshake that started the project on one side, the
 * monograph on the other. On desktop the photograph runs the whole height of
 * the viewport rather than sitting in a card, so the section reads as one
 * spread instead of a block floating in a page.
 */
export default function DeveloperFeature() {
  const developer = partnerRecords[0];
  const photo = teamPhotos.handshake;

  return (
    <section className="grid min-h-[100svh] w-full grid-cols-1 border-t border-mira-border bg-mira-ground lg:grid-cols-12">
      {/* Photograph — full-bleed on its own half. */}
      <Reveal
        variant="mask"
        rootMargin="0px"
        className="relative min-h-[52svh] overflow-hidden bg-mira-sand lg:col-span-5 lg:min-h-full"
      >
        <div className="absolute inset-0">
          <Parallax speed={0.08}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              loading="lazy"
              quality={76}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>

        <figcaption className="absolute inset-x-6 bottom-6 flex items-baseline justify-between gap-4 font-sans text-[11px] uppercase tracking-[0.15em] text-white/80 sm:inset-x-10 sm:bottom-9">
          <span className="max-w-[18rem] leading-relaxed">{photo.caption}</span>
          <span className="shrink-0 text-white/55">{photo.date}</span>
        </figcaption>
      </Reveal>

      {/* Monograph. */}
      <div className="flex flex-col justify-center px-6 py-[clamp(3.5rem,10vh,7rem)] sm:px-12 lg:col-span-7 lg:px-[clamp(3rem,6vw,6rem)]">
        <div className="mx-auto w-full max-w-2xl space-y-[clamp(1.75rem,4vh,3rem)]">
          <Reveal
            variant="fade"
            rootMargin="0px"
            className="flex flex-col gap-6 border-b border-mira-border pb-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <Image
              src={developer.logo}
              alt={`${developer.name} logo`}
              width={220}
              height={53}
              quality={95}
              className="h-auto w-48 object-contain object-left sm:w-56"
            />
            <div className="space-y-1 sm:text-right">
              <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-mira-tealDark">
                The Developer
              </span>
              <span className="font-serif text-sm text-mira-muted">South-East Queensland</span>
            </div>
          </Reveal>

          <Reveal
            as="h2"
            delay={120}
            rootMargin="0px"
            className="font-serif text-[clamp(1.9rem,4vw,3.4rem)] font-light leading-[1.1] text-mira-charcoal"
          >
            Buildings made to outlast the era that built them
          </Reveal>

          <Reveal
            as="p"
            variant="fade"
            delay={200}
            rootMargin="0px"
            className="font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg"
          >
            {developer.description}
          </Reveal>

          <Reveal
            delay={280}
            rootMargin="0px"
            className="flex flex-col gap-6 border-t border-mira-border pt-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="space-y-2">
              <Image
                src={developerQuote.signatureImage}
                alt="Graham Furtado signature"
                width={180}
                height={36}
                className="h-9 w-auto object-contain object-left opacity-85"
              />
              <p className="font-sans text-xs font-medium uppercase tracking-wider text-mira-charcoal">
                Graham Furtado
              </p>
              <p className="font-sans text-xs text-mira-muted">Developer, Furtado Property</p>
            </div>

            <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-mira-brown">
              20+ years · Residential
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
