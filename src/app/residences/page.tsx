import React from "react";
import type { Metadata } from "next";
import { developmentSpecs } from "@/content/site-content";
import { residencesGraph } from "@/content/structured-data";
import JsonLd from "@/components/common/JsonLd";
import Reveal from "@/components/common/Reveal";
import PhotoFrame from "@/components/common/PhotoFrame";
import SpecLedger from "@/components/common/SpecLedger";
import ResidencesHero from "@/components/residences/ResidencesHero";
import DisplayGallery from "@/components/residences/DisplayGallery";
import SharedSpaces from "@/components/residences/SharedSpaces";
import FloorPlanTabs from "@/components/residences/FloorPlanTabs";
import BasementSection from "@/components/residences/BasementSection";
import AvailabilityGrid from "@/components/residences/AvailabilityGrid";
import ConstructionTimeline from "@/components/residences/ConstructionTimeline";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  title: "Apartments for Sale: Floor Plans, Prices & Availability",
  description:
    "The 25 beachfront apartments for sale at Mira Living, Bargara: three floor plans from 118–139 sqm internal with room dimensions, photographs of the completed residence, and prices and availability level by level.",
  alternates: { canonical: "/residences" },
};

/** The schedule rows, kept beside the copy they describe rather than inline in the markup. */
const specSchedule = [
  { label: "Project address", value: developmentSpecs.location },
  { label: "Configuration", value: developmentSpecs.bedrooms },
  { label: "Bathrooms & cars", value: `${developmentSpecs.bathrooms} · ${developmentSpecs.carSpaces}` },
  { label: "Internal area", value: developmentSpecs.internalSizeRange },
  { label: "Price release", value: `From ${developmentSpecs.priceFrom}` },
  { label: "Handover target", value: `${developmentSpecs.status} · Completion ${developmentSpecs.completion}` },
];

const interiors = [
  {
    src: "/img/site/Image-5.webp",
    alt: "Kitchen and open plan entertaining area with integrated Smeg appliances",
    eyebrow: "The kitchen",
    title: "Kitchens built for entertaining",
    body: "Porcelain benchtops run the length of the island, soft walnut-toned joinery warms the edges, and the Smeg suite disappears behind cabinetry — so the room stays a living space, not a galley.",
  },
  {
    src: "/img/site/Render-Slider-4-scaled.webp",
    alt: "Sanctuary bathroom lined in honed Tundra stone tiles",
    eyebrow: "The bathroom",
    title: "Serene private sanctuaries",
    body: "Bathrooms are wrapped floor-to-ceiling in honed Australian Tundra stone, anchored by elegant ceramic basins and softened by the low sheen of satin nickel tapware.",
  },
];

export default function ResidencesPage() {
  return (
    <div className="bg-mira-ground">
      <JsonLd data={residencesGraph()} />
      {/* Hero — the interior film */}
      <ResidencesHero />

      {/* Specification schedule — hairline rows, read like a drawing set */}
      <section className="bg-mira-ground px-6 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
              Development Schedule
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4vw,3.25rem)] font-light text-mira-charcoal">
              Architectural Specifications
            </Reveal>
          </div>

          <dl className="mt-14 divide-y divide-mira-border border-y border-mira-border">
            {specSchedule.map((row, idx) => (
              <Reveal
                key={row.label}
                delay={idx * 60}
                className="grid grid-cols-1 gap-x-8 gap-y-2 px-1 py-6 sm:grid-cols-12 sm:items-baseline sm:py-7"
              >
                <dt className="font-sans text-[12px] font-medium uppercase tracking-[0.15em] text-mira-brown sm:col-span-4">
                  {row.label}
                </dt>
                <dd className="font-serif text-xl leading-snug text-mira-charcoal sm:col-span-8 sm:text-2xl">
                  {row.value}
                </dd>
              </Reveal>
            ))}
          </dl>

          {/* Amenities — the same numbered ledger as the finish schedule, so the two read as one document. */}
          <div id="amenities" className="mt-20 scroll-mt-28 sm:mt-24">
            <div className="flex flex-col gap-3 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
                  Resident Amenities
                </Reveal>
                <Reveal as="h3" delay={100} className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] font-light leading-tight text-mira-charcoal">
                  Included for every resident
                </Reveal>
              </div>
              <Reveal variant="fade" delay={160} className="font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted">
                {String(developmentSpecs.amenities.length).padStart(2, "0")} inclusions
              </Reveal>
            </div>
            <SpecLedger
              columns={2}
              items={developmentSpecs.amenities.map((amenity) => ({ title: amenity }))}
            />
          </div>
        </div>
      </section>

      {/* The completed residence — photography, not renders */}
      <DisplayGallery />

      {/* Material palette — each render shown whole, alternating with its copy */}
      <section className="border-t border-mira-border bg-mira-sandLight px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl space-y-5">
            <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
              Material Palette
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4.4vw,3.5rem)] font-light leading-[1.12] text-mira-charcoal">
              Tactile Warmth &amp; Italian Engineering
            </Reveal>
            <Reveal delay={220} className="font-sans text-[16px] leading-[1.75] text-mira-brownDark sm:text-lg">
              Curated by Sarah Wood Designs, every residence combines honed Australian Tundra stone tiles, seamlessly
              integrated Smeg appliances, and custom walnut-toned joinery.
            </Reveal>
          </div>

          <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
            {interiors.map((item, idx) => (
              <div
                key={item.src}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="lg:col-span-7">
                  <PhotoFrame
                    src={item.src}
                    alt={item.alt}
                    caption="Artist Impression"
                    maxHeightVh={78}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    frameClassName="shadow-card"
                  />
                </Reveal>

                <div className="lg:col-span-5">
                  <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
                    {item.eyebrow}
                  </Reveal>
                  <Reveal as="h3" delay={120} className="mt-4 font-serif text-[clamp(1.6rem,2.6vw,2.5rem)] font-light leading-tight text-mira-charcoal">
                    {item.title}
                  </Reveal>
                  <Reveal delay={220} className="mt-5 font-sans text-[15px] leading-[1.8] text-mira-brownDark sm:text-base">
                    {item.body}
                  </Reveal>
                </div>
              </div>
            ))}
          </div>

          {/* Finish schedule — the full specification as a numbered ledger: index, room, item, note. */}
          <div id="finishes" className="mt-24 scroll-mt-28 sm:mt-32">
            <div className="flex flex-col gap-6 pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
                  Finish Schedule
                </Reveal>
                <Reveal as="h3" delay={100} className="font-serif text-[clamp(1.7rem,3.2vw,2.75rem)] font-light leading-[1.15] text-mira-charcoal">
                  The specification, item by item
                </Reveal>
              </div>
              <Reveal variant="fade" delay={180} className="flex flex-wrap gap-x-8 gap-y-2 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted lg:justify-end">
                <span>{String(developmentSpecs.finishes.length).padStart(2, "0")} items</span>
                <span>Interiors by Sarah Wood Designs</span>
                <span>Standard to every residence</span>
              </Reveal>
            </div>
            <SpecLedger
              columns={2}
              items={developmentSpecs.finishes}
              footnote="Every finish listed is standard to all 25 residences and is shown as built in the photographs of the completed residence above. Renders are artist impressions; the photographs are the record."
            />
          </div>
        </div>
      </section>

      {/* Shared spaces — the lobby and the pool */}
      <SharedSpaces />

      {/* Floor plans — three plans with room schedules and the apartments built to each */}
      <FloorPlanTabs />

      {/* The basement */}
      <BasementSection />

      {/* Availability — every residence, level by level, from the price guide */}
      <AvailabilityGrid />

      {/* Construction Timeline */}
      <ConstructionTimeline />

      {/* Registration Form */}
      <RegisterSection />
    </div>
  );
}
