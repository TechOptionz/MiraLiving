import React from "react";
import type { Metadata } from "next";
import { developmentSpecs } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import PhotoFrame from "@/components/common/PhotoFrame";
import FloorPlanTabs from "@/components/residences/FloorPlanTabs";
import ConstructionTimeline from "@/components/residences/ConstructionTimeline";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  title: "Residences & Architecture",
  description: "Explore the 25 luxury oceanfront residences at Mira Living, Bargara. 3-bedroom + MPR apartments from 117–139 sqm with floor plans and premium finishes.",
};

/** The schedule rows, kept beside the copy they describe rather than inline in the markup. */
const specSchedule = [
  { label: "Project address", value: developmentSpecs.location },
  { label: "Configuration", value: developmentSpecs.bedrooms },
  { label: "Bathrooms & cars", value: `${developmentSpecs.bathrooms} · ${developmentSpecs.carSpaces}` },
  { label: "Internal area", value: developmentSpecs.internalSizeRange },
  // TODO: confirm price with client
  { label: "Price release", value: `From ${developmentSpecs.priceFrom}` },
  // TODO: confirm completion date
  { label: "Handover target", value: `${developmentSpecs.status} · Completion ${developmentSpecs.completion}` },
];

const headlineFacts = [
  { value: String(developmentSpecs.totalResidences), label: "Oceanfront residences" },
  { value: "3 + MPR", label: "Bedrooms" },
  { value: "117–139", label: "Sqm internal" },
  { value: "2", label: "Secure carparks" },
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
    <div className="bg-mira-ground pt-24 sm:pt-28">
      {/* Hero */}
      <section className="border-b border-mira-border bg-mira-sandLight px-6 py-24 sm:px-12 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
            The Residences
          </Reveal>

          <Reveal as="h1" delay={120} className="mt-6 font-serif text-[clamp(2.25rem,5.2vw,4.5rem)] font-light leading-[1.08] text-mira-charcoal">
            Residences of Quiet Coastal Distinction
          </Reveal>

          <Reveal delay={240} className="mx-auto mt-7 max-w-2xl font-sans text-[17px] leading-[1.75] text-mira-brownDark sm:text-lg">
            A limited boutique collection of 25 oceanfront homes directly on the Bargara Esplanade — engineered for
            absolute comfort, generous internal space, and panoramic Coral Sea views.
          </Reveal>

          {/* Quick facts, so the essentials read at a glance before the full schedule. */}
          <Reveal delay={340} className="mt-14 grid grid-cols-2 gap-y-10 border-t border-mira-border pt-10 sm:grid-cols-4">
            {headlineFacts.map((fact) => (
              <div key={fact.label} className="space-y-2 px-2">
                <p className="font-serif text-3xl font-light leading-none text-mira-charcoal sm:text-4xl">
                  {fact.value}
                </p>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-mira-brown">
                  {fact.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Specification schedule — hairline rows, read like a drawing set */}
      <section className="bg-mira-ground px-6 py-24 sm:px-12 sm:py-32 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
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
                <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-mira-brown sm:col-span-4">
                  {row.label}
                </dt>
                <dd className="font-serif text-xl leading-snug text-mira-charcoal sm:col-span-8 sm:text-2xl">
                  {row.value}
                </dd>
              </Reveal>
            ))}
          </dl>

          {/* Amenities — already in the content file, and worth stating plainly here. */}
          <div className="mt-20">
            <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
              Included for every resident
            </Reveal>
            <ul className="mt-8 grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2">
              {developmentSpecs.amenities.map((amenity, idx) => (
                <Reveal
                  as="li"
                  key={amenity}
                  delay={idx * 60}
                  className="flex items-start gap-4 border-b border-mira-border/70 pb-5 font-sans text-[15px] leading-relaxed text-mira-brownDark sm:text-base"
                >
                  <span aria-hidden="true" className="mt-[0.6em] h-px w-5 shrink-0 bg-mira-sandDark" />
                  <span>{amenity}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Material palette — each render shown whole, alternating with its copy */}
      <section className="border-t border-mira-border bg-mira-sandLight px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl space-y-5">
            <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
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
                  <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-mira-brown">
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

          {/* Finish schedule — the full specification, previously unused on this page. */}
          <div className="mt-24 sm:mt-32">
            <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
              Finish Schedule
            </Reveal>
            <dl className="mt-8 grid grid-cols-1 gap-x-16 border-t border-mira-border md:grid-cols-2">
              {developmentSpecs.finishes.map((finish, idx) => (
                <Reveal
                  key={finish.title}
                  delay={(idx % 2) * 80}
                  className="border-b border-mira-border py-6 sm:py-7"
                >
                  <dt className="font-serif text-xl text-mira-charcoal sm:text-2xl">{finish.title}</dt>
                  <dd className="mt-2 font-sans text-[15px] leading-[1.75] text-mira-brownDark">
                    {finish.description}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Interactive Floor Plans */}
      <FloorPlanTabs />

      {/* Panoramic Building Elevation */}
      <section className="border-t border-mira-border bg-mira-ground px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl space-y-4">
            <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
              Building Elevation
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4vw,3.25rem)] font-light text-mira-charcoal">
              Current Release &amp; Availability
            </Reveal>
            <Reveal delay={220} className="font-sans text-[16px] leading-[1.75] text-mira-brownDark sm:text-lg">
              The full four-storey elevation, shown whole — every apartment in the building, and which of them remain.
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <PhotoFrame
              src="/img/site/Sold-Properties-Mira-Living-4.webp"
              alt="Mira Living beachfront four-storey elevation showing available and sold apartments"
              caption="Artist Impression"
              maxHeightVh={82}
              sizes="(max-width: 1400px) 100vw, 1400px"
              quality={90}
              frameClassName="border border-mira-border shadow-card"
            />
          </Reveal>
        </div>
      </section>

      {/* Construction Timeline */}
      <ConstructionTimeline />

      {/* Registration Form */}
      <RegisterSection />
    </div>
  );
}
