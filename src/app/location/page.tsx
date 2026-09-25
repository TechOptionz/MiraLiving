import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  locationTeaser,
  locationHero,
  lifestyleRecords,
  infrastructureRecords,
  curatedLifestylePhotos,
} from "@/content/site-content";
import MudMap from "@/components/location/MudMap";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  title: "Living in Bargara: Location, Beaches & Golf",
  description: "Living in Bargara on Queensland's Coral Coast: beachfront apartments 20 minutes from Bundaberg, a 3-minute walk to Bargara Golf Club, with local cafes, beaches, hospitals and the airport close by.",
  alternates: { canonical: "/location" },
};

export default function LocationPage() {
  return (
    <div className="bg-mira-ground">
      {/* Hero — the headland from the air, full bleed under the transparent header */}
      <section className="relative flex min-h-[88svh] w-full flex-col justify-end overflow-hidden bg-mira-charcoal text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={locationHero.image}
            alt={locationHero.alt}
            fill
            priority
            quality={80}
            sizes="100vw"
            className="animate-heroZoom object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
          <div className="absolute inset-0 bg-noise opacity-[0.08]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-40 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex animate-softFade items-center gap-4" style={{ "--d": "200ms" } as React.CSSProperties}>
              <span className="hidden h-px w-12 bg-mira-sand/70 sm:block" />
              <p className="hero-legible font-sans text-[11px] uppercase tracking-eyebrow text-mira-sandLight/90 sm:text-[12px]">
                The Coral Coast
              </p>
            </div>
            <h1 className="hero-legible mt-7 font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] font-light leading-[1.04]">
              <span className="line-mask">
                <span style={{ "--d": "350ms" } as React.CSSProperties}>{locationTeaser.headline}</span>
              </span>
            </h1>
            <p
              className="hero-legible mt-7 max-w-2xl animate-softFade font-sans text-base font-light leading-relaxed text-white/85 sm:text-lg"
              style={{ "--d": "700ms" } as React.CSSProperties}
            >
              {locationTeaser.paragraph1}
            </p>
          </div>
          <span
            className="absolute bottom-5 right-6 animate-softFade bg-black/40 px-2.5 py-1 font-sans text-[11px] uppercase tracking-widest text-white/75 backdrop-blur-sm sm:right-8"
            style={{ "--d": "1000ms" } as React.CSSProperties}
          >
            {locationHero.caption}
          </span>
        </div>
      </section>

      {/* Intro band */}
      <section className="border-b border-mira-border bg-mira-sandLight px-6 py-16 sm:px-12 sm:py-20">
        <p className="mx-auto max-w-3xl text-center font-serif text-[clamp(1.4rem,2.6vw,2.1rem)] font-light leading-snug text-mira-charcoal">
          {locationTeaser.paragraph2}
        </p>
      </section>

      {/* 4 Alternating Large Editorial Lifestyle Chapters */}
      <section className="section-pad px-6 sm:px-12 lg:px-16 space-y-16 sm:space-y-24 max-w-[1600px] mx-auto">
        {lifestyleRecords.map((item, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Frame (Massive!) */}
              <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative aspect-[16/11] w-full bg-mira-sand shadow-2xl overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Bargara coastal lifestyle`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Text Narrative */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <span className="text-[11px] font-sans tracking-[0.16em] uppercase text-mira-brown font-semibold">
                  Lifestyle Chapter 0{index + 1}
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif text-mira-charcoal font-light leading-tight">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg font-sans text-mira-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Authentic Local Moments (Curated 7 Vignettes) */}
      <section className="section-pad px-6 sm:px-12 lg:px-16 bg-mira-sandLight border-t border-mira-border">
        <div className="max-w-[1600px] mx-auto space-y-12 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[12px] font-sans tracking-[0.16em] uppercase text-mira-brown block font-medium">
              Authentic Moments
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light">
              Along The Bargara Esplanade
            </h2>
            <p className="text-base font-sans text-mira-muted leading-relaxed font-light">
              Morning ocean swims, tranquil golf fairways, and sunset aperitifs just minutes from your residence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {curatedLifestylePhotos.map((photo) => (
              <div
                key={photo.title}
                className="bg-white border border-mira-border shadow-subtle group overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full bg-mira-sand overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 bg-white space-y-1">
                  <p className="text-lg font-serif text-mira-charcoal font-light">
                    {photo.title}
                  </p>
                  <p className="text-[12px] font-sans text-mira-muted tracking-widest uppercase">
                    {photo.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure: Why Bargara? */}
      <section className="section-pad px-6 sm:px-12 lg:px-16 bg-mira-ground border-t border-mira-border">
        <div className="max-w-[1500px] mx-auto space-y-12 sm:space-y-14">
          {/* Heading left, intro right and bottom-aligned, so the header uses the full row. */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="space-y-4 lg:col-span-7">
              <span className="text-[12px] font-sans tracking-[0.16em] uppercase text-mira-brown block font-medium">
                Regional Capital Investment
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light leading-tight">
                Why Bargara? Shaping a Stronger Future
              </h2>
            </div>
            <p className="text-base sm:text-lg font-sans text-mira-muted font-light leading-relaxed lg:col-span-5 lg:pb-2">
              The Bargara Coastal Region is experiencing considered growth, with significant investment in community infrastructure enhancing both liveability and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {infrastructureRecords.map((infra) => (
              <div key={infra.title} className="space-y-6">
                <div className="relative aspect-[16/10] w-full bg-mira-sand shadow-xl overflow-hidden group">
                  <Image
                    src={infra.image}
                    alt={infra.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {infra.caption && (
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 text-[11px] text-white/90 font-sans">
                      {infra.caption}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-mira-charcoal font-light">
                  {infra.title}
                </h3>
                <p className="text-sm sm:text-base font-sans text-mira-muted leading-relaxed font-light">
                  {infra.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Yet Worlds Away (Accessible Mud Map & Google Map) */}
      <section className="section-pad px-6 sm:px-12 lg:px-16 bg-mira-sandLight border-t border-mira-border">
        <div className="max-w-[1600px] mx-auto space-y-12 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[12px] font-sans tracking-[0.16em] uppercase text-mira-brown block font-medium">
              Orientation
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light">
              Connected Yet Worlds Away
            </h2>
          </div>

          <MudMap />
        </div>
      </section>

      {/* Registration Section */}
      <RegisterSection />
    </div>
  );
}
