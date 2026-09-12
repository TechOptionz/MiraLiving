import React from "react";
import Image from "next/image";
import { poolSection } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";

export default function PoolSection() {
  return (
    <section className="flex min-h-screen w-full items-center overflow-hidden border-t border-mira-border bg-mira-ground px-6 pb-20 pt-28 sm:px-12 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Editorial column */}
        <div className="space-y-5 lg:col-span-5">
          <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
            Private Resident Oasis
          </Reveal>
          <Reveal as="h2" delay={120} className="font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-light leading-[1.1] text-mira-charcoal">
            {poolSection.headline}
          </Reveal>
          <Reveal delay={240} className="pt-2 font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg">
            {poolSection.description}
          </Reveal>
          <Reveal delay={340} className="flex items-center gap-4 border-t border-mira-border pt-6">
            <span className="font-sans text-xs font-light uppercase tracking-[0.2em] text-mira-brown">
              Resort-Style Pool &amp; Alfresco Lounge
            </span>
          </Reveal>
        </div>

        {/*
          Held to 4:3 in seven columns rather than run full-bleed: the source
          render is 1170x649, so a wider frame would upscale it and go soft.
        */}
        <Reveal variant="mask" delay={200} className="group relative aspect-[4/3] w-full overflow-hidden bg-mira-sand shadow-2xl lg:col-span-7">
          <Image
            src={poolSection.image}
            alt="Residents private pool sanctuary with tropical landscaping and sun loungers"
            fill
            quality={90}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <span className="absolute bottom-5 right-5 bg-black/50 px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-white backdrop-blur-sm">
            {poolSection.caption}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
