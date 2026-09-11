import React from "react";
import Image from "next/image";
import { poolSection } from "@/content/site-content";

export default function PoolSection() {
  return (
    <section className="py-28 sm:py-40 bg-mira-ground border-t border-mira-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-14">
        {/* Editorial Text Block */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
            Private Resident Oasis
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light leading-tight">
            {poolSection.headline}
          </h2>
          <p className="text-base sm:text-lg font-sans text-mira-muted font-light leading-relaxed max-w-2xl pt-2">
            {poolSection.description}
          </p>
        </div>

        {/* Monumental Full-Width Pool Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-mira-sand shadow-2xl overflow-hidden group">
          <Image
            src={poolSection.image}
            alt="Residents private pool sanctuary with tropical landscaping and sun loungers"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 flex items-center justify-between text-white">
            <span className="text-xs font-sans tracking-[0.2em] uppercase font-light text-mira-sand">
              Resort-Style Pool & Alfresco Lounge
            </span>
            <span className="text-[10px] font-sans tracking-widest uppercase bg-black/50 backdrop-blur-sm px-3 py-1">
              {poolSection.caption}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
