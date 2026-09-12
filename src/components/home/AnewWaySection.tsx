"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { aNewWayToLive } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import { ArrowRight } from "lucide-react";

export default function AnewWaySection() {
  const { openRegister } = useModal();

  return (
    <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-mira-charcoal text-white">
      {/* The elevation render carries the whole frame at full bleed. */}
      <div className="absolute inset-0">
        <Image
          src={aNewWayToLive.image}
          alt="Mira Living dusk exterior oceanfront render showing absolute beachfront elevation"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="animate-kenburns object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-15 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 pt-32 sm:px-12 sm:pb-20 lg:px-16">
        <Reveal variant="fade" className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-sand">
          Coastal Horizon
        </Reveal>

        <Reveal as="h2" delay={120} className="mt-6 max-w-4xl font-serif text-[clamp(2.25rem,5.5vw,5.5rem)] font-light leading-[1.08]">
          {aNewWayToLive.headline}
        </Reveal>

        <Reveal delay={240} className="mt-8 grid max-w-4xl grid-cols-1 gap-8 font-sans text-base font-light leading-relaxed text-white/85 md:grid-cols-2 sm:text-lg">
          <p>{aNewWayToLive.paragraph1}</p>
          <p>{aNewWayToLive.paragraph2}</p>
        </Reveal>

        <Reveal delay={360} className="mt-12 flex flex-col gap-6 border-t border-white/20 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-mira-sand">
              Building Elevation · 25–27 The Esplanade
            </span>
            <p className="font-serif text-lg font-light sm:text-2xl">
              Absolute Oceanfront Coral Sea Panorama
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={openRegister}
              className="flex items-center gap-2 bg-white/90 px-7 py-4 font-sans text-xs uppercase tracking-[0.2em] text-mira-charcoal shadow-subtle transition-all hover:bg-white"
            >
              <span>Check Availability</span>
              <ArrowRight className="h-3.5 w-3.5 text-mira-brown" />
            </button>
            {aNewWayToLive.caption && (
              <span className="bg-black/40 px-2 py-1 font-sans text-[10px] uppercase tracking-widest text-white/70 backdrop-blur-sm">
                {aNewWayToLive.caption}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
