import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  locationTeaser,
  lifestyleRecords,
  infrastructureRecords,
  curatedLifestylePhotos,
} from "@/content/site-content";
import MudMap from "@/components/location/MudMap";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  title: "Location & Bargara Lifestyle",
  description: "Discover Bargara on Queensland's Coral Coast. Absolute beachfront living, coastal golf, local cafes, pristine beaches, and major regional infrastructure.",
};

export default function LocationPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-mira-ground">
      {/* Hero */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 bg-mira-sandLight border-b border-mira-border text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[12px] font-sans tracking-[0.16em] uppercase text-mira-brown block font-medium">
            The Coral Coast
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-mira-charcoal font-light leading-[1.1]">
            {locationTeaser.headline}
          </h1>
          <p className="text-lg sm:text-xl font-sans text-mira-muted max-w-2xl mx-auto font-light leading-relaxed">
            {locationTeaser.paragraph1}
          </p>
          <p className="text-base sm:text-lg font-sans text-mira-muted max-w-2xl mx-auto font-light leading-relaxed pt-2">
            {locationTeaser.paragraph2}
          </p>
        </div>
      </section>

      {/* 4 Alternating Large Editorial Lifestyle Chapters */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-16 space-y-24 sm:space-y-36 max-w-[1600px] mx-auto">
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
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-16 bg-mira-sandLight border-t border-mira-border">
        <div className="max-w-[1600px] mx-auto space-y-16">
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
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-16 bg-mira-ground border-t border-mira-border">
        <div className="max-w-[1500px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-[12px] font-sans tracking-[0.16em] uppercase text-mira-brown block font-medium">
              Regional Capital Investment
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light leading-tight">
              Why Bargara? Shaping a Stronger Future
            </h2>
            <p className="text-base sm:text-lg font-sans text-mira-muted font-light leading-relaxed pt-2">
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
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-16 bg-mira-sandLight border-t border-mira-border">
        <div className="max-w-[1600px] mx-auto space-y-16">
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
