import React from "react";
import Image from "next/image";
import Link from "next/link";
import { locationTeaser } from "@/content/site-content";
import { ArrowRight, MapPin } from "lucide-react";

export default function LocationTeaser() {
  return (
    <section className="py-28 sm:py-40 bg-mira-ground border-t border-mira-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        {/* Narrative Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
              The Coastal Enclave
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light leading-tight">
              {locationTeaser.headline}
            </h2>
            <p className="text-base sm:text-lg font-sans text-mira-muted font-light leading-relaxed max-w-2xl pt-2">
              {locationTeaser.paragraph1}
            </p>
          </div>

          <Link
            href="/location"
            className="inline-flex items-center gap-3 px-8 py-4 bg-mira-brown hover:bg-mira-brownDark text-white text-xs font-sans tracking-[0.2em] uppercase transition-all shadow-subtle shrink-0"
          >
            <span>Explore Location & Lifestyle</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Expansive Aerial Coastal Map Canvas */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] bg-mira-sand overflow-hidden shadow-2xl group border border-mira-border">
          <Image
            src={locationTeaser.aerialImage}
            alt={locationTeaser.aerialAlt}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-white/95 backdrop-blur-md px-5 py-3 border border-mira-border shadow-card flex items-center gap-3">
            <MapPin className="w-4 h-4 text-mira-tealDark" />
            <div className="text-xs font-sans">
              <span className="font-semibold text-mira-charcoal block">25–27 The Esplanade, Bargara</span>
              <span className="text-[10px] text-mira-muted uppercase tracking-wider">Absolute Coral Sea Frontage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
