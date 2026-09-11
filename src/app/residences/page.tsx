import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { developmentSpecs } from "@/content/site-content";
import FloorPlanTabs from "@/components/residences/FloorPlanTabs";
import ConstructionTimeline from "@/components/residences/ConstructionTimeline";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  title: "Residences & Architecture",
  description: "Explore the 25 luxury oceanfront residences at Mira Living, Bargara. 3-bedroom + MPR apartments from 117–139 sqm with floor plans and premium finishes.",
};

export default function ResidencesPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-mira-ground">
      {/* Hero */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 bg-mira-sandLight border-b border-mira-border text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
            The Residences
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-mira-charcoal font-light leading-[1.1]">
            Residences of Quiet Coastal Distinction
          </h1>
          <p className="text-lg sm:text-xl font-sans text-mira-muted max-w-2xl mx-auto font-light leading-relaxed">
            A limited boutique collection of 25 oceanfront homes directly on the Bargara Esplanade, engineered for absolute comfort, generous internal space, and panoramic Coral Sea views.
          </p>
        </div>
      </section>

      {/* Specifications Schedule (Clean architectural hairline presentation) */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-mira-ground">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
              Development Schedule
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-mira-charcoal font-light">
              Architectural Specifications
            </h2>
          </div>

          <div className="border-t border-b border-mira-border divide-y divide-mira-border">
            <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <span className="sm:col-span-4 text-xs font-sans uppercase tracking-[0.25em] text-mira-muted font-medium">Project Address</span>
              <span className="sm:col-span-8 text-base sm:text-lg font-serif text-mira-charcoal">{developmentSpecs.location}</span>
            </div>
            <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <span className="sm:col-span-4 text-xs font-sans uppercase tracking-[0.25em] text-mira-muted font-medium">Configuration</span>
              <span className="sm:col-span-8 text-base sm:text-lg font-serif text-mira-charcoal">{developmentSpecs.bedrooms}</span>
            </div>
            <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <span className="sm:col-span-4 text-xs font-sans uppercase tracking-[0.25em] text-mira-muted font-medium">Bathrooms & Cars</span>
              <span className="sm:col-span-8 text-base sm:text-lg font-serif text-mira-charcoal">{developmentSpecs.bathrooms} · {developmentSpecs.carSpaces}</span>
            </div>
            <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <span className="sm:col-span-4 text-xs font-sans uppercase tracking-[0.25em] text-mira-muted font-medium">Internal Area</span>
              <span className="sm:col-span-8 text-base sm:text-lg font-serif text-mira-charcoal">{developmentSpecs.internalSizeRange}</span>
            </div>
            <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <span className="sm:col-span-4 text-xs font-sans uppercase tracking-[0.25em] text-mira-muted font-medium">Price Release</span>
              <span className="sm:col-span-8 text-base sm:text-lg font-serif text-mira-charcoal">
                From {developmentSpecs.priceFrom} {/* TODO: confirm price with client */}
              </span>
            </div>
            <div className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <span className="sm:col-span-4 text-xs font-sans uppercase tracking-[0.25em] text-mira-muted font-medium">Handover Target</span>
              <span className="sm:col-span-8 text-base sm:text-lg font-serif text-mira-charcoal">
                {developmentSpecs.status} · Completion {developmentSpecs.completion} {/* TODO: confirm completion date */}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Large Two-Up Interior Finishes Showcase */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-16 bg-mira-sandLight border-t border-mira-border">
        <div className="max-w-[1600px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
              Material Palette
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light leading-tight">
              Tactile Warmth & Italian Engineering
            </h2>
            <p className="text-base sm:text-lg font-sans text-mira-muted font-light leading-relaxed">
              Curated by Sarah Wood Designs, every residence combines honed Australian Tundra stone tiles, seamless integrated Smeg appliances, and custom walnut-toned joinery.
            </p>
          </div>

          {/* Two-up Monumental Imagery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-[16/11] w-full bg-mira-sand shadow-xl overflow-hidden group">
                <Image
                  src="/img/site/Image-5.webp"
                  alt="Kitchen and open plan entertaining area with Smeg appliances"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 right-3 bg-black/60 px-3 py-1 text-[10px] text-white font-sans uppercase tracking-wider">
                  Artist Impression
                </div>
              </div>
              <h3 className="text-2xl font-serif text-mira-charcoal font-light">
                Kitchens for Entertaining
              </h3>
              <p className="text-sm font-sans text-mira-muted font-light leading-relaxed">
                Porcelain benchtops, soft walnut-toned joinery, and seamlessly integrated Smeg appliances make every meal feel like an occasion.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[16/11] w-full bg-mira-sand shadow-xl overflow-hidden group">
                <Image
                  src="/img/site/Render-Slider-4-scaled.webp"
                  alt="Sanctuary bathroom with honed Tundra stone tiles"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 right-3 bg-black/60 px-3 py-1 text-[10px] text-white font-sans uppercase tracking-wider">
                  Artist Impression
                </div>
              </div>
              <h3 className="text-2xl font-serif text-mira-charcoal font-light">
                Serene Private Sanctuaries
              </h3>
              <p className="text-sm font-sans text-mira-muted font-light leading-relaxed">
                Bathrooms are wrapped in honed Tundra stone tiles, anchored by elegant ceramic basins and softened by the sheen of satin nickel tapware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Floor Plans */}
      <FloorPlanTabs />

      {/* Panoramic Building Elevation */}
      <section className="py-24 sm:py-36 bg-mira-ground border-t border-mira-border overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
              Building Elevation
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-mira-charcoal font-light">
              Current Release & Availability
            </h2>
          </div>

          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-mira-sand overflow-hidden shadow-2xl group border border-mira-border">
            <Image
              src="/img/site/Sold-Properties-Mira-Living-4.webp"
              alt="Mira Living beachfront 4-storey elevation showing available and sold apartments"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              sizes="100vw"
            />
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-[11px] text-white/90 font-sans tracking-widest uppercase">
              Artist Impression
            </div>
          </div>
        </div>
      </section>

      {/* Construction Timeline */}
      <ConstructionTimeline />

      {/* Registration Form */}
      <RegisterSection />
    </div>
  );
}
