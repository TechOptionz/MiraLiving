"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { aNewWayToLive } from "@/content/site-content";
import { ArrowRight } from "lucide-react";

export default function AnewWaySection() {
  const { openRegister } = useModal();

  return (
    <section className="py-24 sm:py-36 bg-mira-sandLight border-t border-mira-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        {/* Narrative Header */}
        <div className="max-w-4xl space-y-6">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
            Coastal Horizon
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-mira-charcoal font-light leading-[1.1]">
            {aNewWayToLive.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-base sm:text-lg font-sans text-mira-muted font-light leading-relaxed">
            <p>{aNewWayToLive.paragraph1}</p>
            <p>{aNewWayToLive.paragraph2}</p>
          </div>
        </div>

        {/* Monumental, Edge-to-Edge Architectural Visual Frame */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] bg-mira-sand shadow-2xl overflow-hidden group">
          <Image
            src={aNewWayToLive.image}
            alt="Mira Living dusk exterior oceanfront render showing absolute beachfront elevation"
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            sizes="100vw"
            priority
          />
          {/* Subtle vignette and architectural caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-mira-sand">
                Building Elevation · 25–27 The Esplanade
              </span>
              <p className="text-lg sm:text-2xl font-serif font-light">
                Absolute Oceanfront Coral Sea Panorama
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={openRegister}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mira-charcoal text-xs font-sans tracking-[0.2em] uppercase transition-all shadow-subtle flex items-center gap-2"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-3.5 h-3.5 text-mira-brown" />
              </button>
              <span className="text-[10px] font-sans tracking-widest uppercase text-white/70 px-2 py-1 bg-black/40 backdrop-blur-sm">
                {aNewWayToLive.caption}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
