import React from "react";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import Parallax from "@/components/story/Parallax";
import ScrollInset from "@/components/story/ScrollInset";
import { milestone, teamPhotos } from "@/content/team-content";

/**
 * 5 — Groundbreaking.
 *
 * The full-bleed frame is the group who turned the first sod; the small plate
 * beside the text is the crowd who came to watch. Two photographs from the same
 * morning, one carrying the section and one held inside it — which is why the
 * inset opens from a window rather than masking like every other frame on the
 * page.
 */
export default function MilestoneSection() {
  const backdrop = teamPhotos.groundbreaking;
  const inset = teamPhotos.gathering;

  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-mira-charcoal text-white">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Parallax speed={0.1}>
          <Image
            src={backdrop.src}
            alt=""
            fill
            loading="lazy"
            quality={78}
            sizes="100vw"
            className="object-cover object-[center_28%]"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-[0.08]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-[clamp(3rem,8vh,5rem)] pt-[clamp(6rem,16vh,10rem)] sm:px-12 lg:px-16">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal
              variant="fade"
              rootMargin="0px"
              className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-sand"
            >
              {milestone.eyebrow}
            </Reveal>

            <Reveal
              as="h2"
              delay={120}
              rootMargin="0px"
              className="mt-6 max-w-3xl font-serif text-[clamp(2.1rem,5vw,4.75rem)] font-light leading-[1.06]"
            >
              {milestone.headline}
            </Reveal>

            <Reveal
              as="p"
              variant="fade"
              delay={220}
              rootMargin="0px"
              className="mt-7 max-w-xl font-sans text-base font-light leading-relaxed text-white/85 sm:text-lg"
            >
              {milestone.paragraph}
            </Reveal>

            <Reveal
              delay={320}
              rootMargin="0px"
              className="mt-9 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-white/20 pt-6 font-sans text-[11px] uppercase tracking-[0.16em] text-white/65"
            >
              <span>{backdrop.caption}</span>
              <span className="text-white/40">{backdrop.date}</span>
            </Reveal>
          </div>

          {/* The crowd, held as a plate beside the statement. */}
          <figure className="lg:col-span-4 lg:col-start-9">
            <ScrollInset className="relative aspect-[4/3] w-full overflow-hidden border border-white/15 bg-black/30 sm:aspect-[4/5] lg:aspect-square">
              <Image
                src={inset.src}
                alt={inset.alt}
                fill
                loading="lazy"
                quality={74}
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover object-center"
              />
            </ScrollInset>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 font-sans text-[11px] uppercase tracking-[0.15em] text-white/60">
              <span>{inset.caption}</span>
              <span className="shrink-0 text-white/40">{inset.date}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
