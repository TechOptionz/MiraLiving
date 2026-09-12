import React from "react";
import Image from "next/image";
import { poolSection } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";

export default function PoolSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden border-t border-mira-border bg-mira-ground py-20 sm:py-24 lg:py-0">
      {/* Sand wash under the render so the right bleed reads as a panel rather than a floating crop. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-mira-sandLight lg:block"
      />

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-0">
        {/* Editorial column */}
        <div className="px-6 sm:px-12 lg:col-span-5 lg:px-12 xl:pl-20 xl:pr-16 2xl:pl-28">
          <div className="max-w-xl lg:ml-auto lg:mr-0">
            <Reveal
              variant="fade"
              className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown"
            >
              Private Resident Oasis
            </Reveal>

            <Reveal
              as="h2"
              delay={120}
              className="mt-6 font-serif text-[clamp(2.25rem,4.6vw,4.25rem)] font-light leading-[1.06] text-mira-charcoal"
            >
              {poolSection.headline}
            </Reveal>

            <Reveal
              delay={240}
              className="mt-7 font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg"
            >
              {poolSection.description}
            </Reveal>

            <Reveal
              delay={340}
              className="mt-10 flex items-center gap-4 border-t border-mira-border pt-6"
            >
              <span className="h-px w-10 shrink-0 bg-mira-sandDark" />
              <span className="font-sans text-xs font-light uppercase tracking-[0.2em] text-mira-brown">
                Resort-Style Pool &amp; Alfresco Lounge
              </span>
            </Reveal>
          </div>
        </div>

        {/*
          Runs to the right viewport edge for scale. Sized by height on desktop so the
          1170x649 source is cropped into the frame instead of being upscaled to fill it.
        */}
        <Reveal
          variant="mask"
          delay={200}
          className="group relative aspect-[4/3] w-full overflow-hidden bg-mira-sand shadow-card sm:aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:h-[min(82vh,880px)]"
        >
          <Image
            src={poolSection.image}
            alt="Residents private pool sanctuary with tropical landscaping and sun loungers"
            fill
            quality={90}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span className="absolute bottom-5 right-5 bg-black/45 px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-white backdrop-blur-sm sm:bottom-7 sm:right-7">
            {poolSection.caption}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
