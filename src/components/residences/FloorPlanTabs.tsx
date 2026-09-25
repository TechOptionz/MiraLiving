"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Maximize2, X, Download, ArrowDownRight } from "lucide-react";
import {
  floorPlans,
  priceGuide,
  unitStatusLabel,
  type FloorPlan,
  type UnitStatus,
} from "@/content/site-content";
import { useModal } from "@/context/ModalContext";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { photoFrameStyle } from "@/components/common/PhotoFrame";

const statusTone: Record<UnitStatus, string> = {
  available: "border-mira-tealDark/40 bg-mira-tealLight/60 text-mira-tealDark",
  sold: "border-mira-border bg-mira-sandLight text-mira-brown/70",
  future: "border-dashed border-mira-borderDark/50 bg-transparent text-mira-brownDark",
};

/** The apartments built to a plan, grouped by the level they sit on. */
function unitsByLevel(plan: FloorPlan) {
  return priceGuide.levels
    .map((level) => ({
      level: level.name,
      units: level.units.filter((u) => plan.units.includes(u.number)),
    }))
    .filter((row) => row.units.length > 0);
}

export default function FloorPlanTabs() {
  const [activeId, setActiveId] = useState(floorPlans[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { openRegister } = useModal();

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const lightboxRef = useFocusTrap<HTMLDivElement>(lightboxOpen, closeLightbox);

  const plan = floorPlans.find((p) => p.id === activeId) ?? floorPlans[0];
  const rows = unitsByLevel(plan);
  const availableCount = plan.units.filter((n) =>
    priceGuide.levels.some((l) => l.units.some((u) => u.number === n && u.status === "available"))
  ).length;

  const areas = [
    { label: "Internal", value: plan.internalArea },
    { label: "Balcony", value: plan.externalArea },
    { label: "Total", value: plan.totalArea },
  ];

  return (
    <section
      id="floor-plans"
      className="scroll-mt-24 border-t border-mira-border bg-mira-sandLight section-pad px-6 sm:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
            Floor Plans
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,4.4vw,3.5rem)] font-light leading-[1.12] text-mira-charcoal">
            Three plans, twenty-five residences
          </h2>
          <p className="font-sans text-[16px] leading-[1.75] text-mira-brownDark sm:text-lg">
            Every residence has three bedrooms, two bathrooms, two basement car spaces and a private balcony
            facing the sea. The three plans differ in how the living rooms are arranged, and in whether a
            separate study is drawn in.
          </p>
        </div>

        {/* Tab selectors — each carries the numbers that tell the plans apart. */}
        <div
          role="tablist"
          aria-label="Floor plan types"
          className="mt-14 grid grid-cols-3 border-y border-mira-border"
        >
          {floorPlans.map((p) => {
            const active = p.id === plan.id;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`plan-panel-${p.id}`}
                id={`plan-tab-${p.id}`}
                onClick={() => setActiveId(p.id)}
                className={`relative px-2 py-5 text-center transition-colors sm:py-6 ${
                  active ? "text-mira-charcoal" : "text-mira-brown hover:text-mira-charcoal"
                }`}
              >
                <span className="block font-serif text-2xl font-light leading-none sm:text-3xl">{p.name}</span>
                <span className="mt-2 block font-sans text-[11px] uppercase tracking-[0.14em] sm:text-[12px]">
                  {p.internalArea.replace(/\.\d+/, "")} · {p.units.length} residences
                </span>
                {active && <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-mira-brown" />}
              </button>
            );
          })}
        </div>

        {/* Plan panel */}
        <div
          role="tabpanel"
          id={`plan-panel-${plan.id}`}
          aria-labelledby={`plan-tab-${plan.id}`}
          key={plan.id}
          className="mt-12 grid grid-cols-1 gap-12 border border-mira-border bg-white p-6 shadow-card sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-12"
        >
          {/* The drawing, shown whole. It is portrait, so it takes the narrower column
              and is capped by height so the whole plan sits on one screen. */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              style={photoFrameStyle(plan.image, { maxHeightVh: 76, fallbackAspect: 0.46 })}
              className="group relative mx-auto block w-full cursor-zoom-in overflow-hidden border border-mira-border/60 bg-white"
            >
              <Image
                src={plan.image}
                alt={`${plan.name} floor plan drawing`}
                fill
                quality={88}
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
              <span className="absolute bottom-3 right-3 flex items-center gap-2 bg-mira-charcoal/75 px-3 py-2 font-sans text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                <Maximize2 className="h-3.5 w-3.5" />
                Expand
              </span>
            </button>

            <div className="mx-auto mt-5 flex max-w-md flex-col gap-3 border-t border-mira-border pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-sans text-[12px] leading-relaxed text-mira-brownDark">
                Typical plan, not to scale. Balcony sizes vary by level.
              </p>
              <a
                href={plan.pdf}
                download
                className="inline-flex shrink-0 items-center gap-2 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-tealDark transition-colors hover:text-mira-charcoal"
              >
                <Download className="h-4 w-4" />
                Plan PDF
              </a>
            </div>
          </div>

          {/* The schedule */}
          <div className="lg:col-span-7">
            <span className="block font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-mira-tealDark">
              {plan.bedrooms} bed{plan.mpr ? " + study" : ""} · {plan.bathrooms} bath · {plan.cars} car
            </span>
            <h3 className="mt-4 font-serif text-[clamp(1.6rem,2.4vw,2.25rem)] font-light leading-snug text-mira-charcoal">
              {plan.tagline}
            </h3>
            <p className="mt-5 font-sans text-[15px] leading-[1.8] text-mira-brownDark">{plan.summary}</p>

            {/* Areas */}
            <dl className="mt-8 grid grid-cols-3 divide-x divide-mira-border border-y border-mira-border">
              {areas.map((a) => (
                <div key={a.label} className="px-4 py-5 first:pl-0 sm:px-6">
                  <dd className="font-serif text-2xl font-light leading-none text-mira-charcoal sm:text-3xl">
                    {a.value.replace(" sqm", "")}
                    <span className="ml-1 font-sans text-[11px] uppercase tracking-[0.14em] text-mira-brown">
                      sqm
                    </span>
                  </dd>
                  <dt className="mt-2 font-sans text-[11px] uppercase tracking-[0.15em] text-mira-brown sm:text-[12px]">
                    {a.label}
                  </dt>
                </div>
              ))}
            </dl>

            {/* Room schedule */}
            <div className="mt-8">
              <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-mira-brown">
                Room schedule
              </span>
              <dl className="mt-3 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {plan.rooms.map((room) => (
                  <div
                    key={room.name}
                    className="flex items-baseline justify-between gap-4 border-b border-mira-border/80 py-3"
                  >
                    <dt className="min-w-0">
                      <span className="block font-sans text-[14px] text-mira-charcoal">{room.name}</span>
                      {room.note && (
                        <span className="block font-sans text-[12px] leading-snug text-mira-brown">{room.note}</span>
                      )}
                    </dt>
                    <dd className="shrink-0 font-sans text-[13px] font-medium tabular-nums text-mira-charcoal">
                      {room.size}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Where in the building — with each apartment's line on the price guide. */}
            <div className="mt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-mira-brown">
                  Where in the building
                </span>
                <span className="font-sans text-[12px] text-mira-brownDark">
                  {availableCount} of {plan.units.length} available · {priceGuide.issued}
                </span>
              </div>
              <ul className="mt-3 divide-y divide-mira-border/80 border-y border-mira-border/80">
                {rows.map((row) => (
                  <li key={row.level} className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3">
                    <span className="w-28 shrink-0 font-sans text-[13px] text-mira-brownDark">{row.level}</span>
                    <div className="flex flex-wrap gap-2">
                      {row.units.map((u) => (
                        <span
                          key={u.number}
                          className={`inline-flex items-center gap-2 border px-2.5 py-1 font-sans text-[12px] ${statusTone[u.status]}`}
                        >
                          <span className="font-medium tabular-nums">{String(u.number).padStart(2, "0")}</span>
                          <span>{u.status === "available" && u.price ? u.price : unitStatusLabel[u.status]}</span>
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openRegister}
                className="inline-flex flex-1 items-center justify-center gap-2 bg-mira-teal px-6 py-4 font-sans text-[12px] uppercase tracking-[0.18em] text-white shadow-subtle transition-colors hover:bg-mira-tealDark"
              >
                Enquire about {plan.name}
                <ArrowDownRight className="h-4 w-4" />
              </button>
              <a
                href="#availability"
                className="inline-flex flex-1 items-center justify-center gap-2 border border-mira-charcoal/25 px-6 py-4 font-sans text-[12px] uppercase tracking-[0.18em] text-mira-charcoal transition-colors hover:border-mira-charcoal"
              >
                See every residence
              </a>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-labelledby="floorplan-lightbox-title"
          >
            <div
              ref={lightboxRef}
              tabIndex={-1}
              className="relative flex max-h-[94svh] w-full max-w-4xl flex-col border border-white/20 bg-white p-5 focus:outline-none sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-5 flex items-center justify-between gap-6 border-b border-mira-border pb-4">
                <div>
                  <h3 id="floorplan-lightbox-title" className="font-serif text-xl text-mira-charcoal sm:text-2xl">
                    {plan.name} — floor plan
                  </h3>
                  <p className="mt-1 font-sans text-[12px] text-mira-brownDark">
                    {plan.internalArea} internal · {plan.externalArea} balcony · {plan.totalArea} total
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={plan.pdf}
                    download
                    className="hidden items-center gap-2 border border-mira-border px-3 py-2 font-sans text-[11px] uppercase tracking-[0.14em] text-mira-brownDark transition-colors hover:border-mira-charcoal hover:text-mira-charcoal sm:inline-flex"
                  >
                    <Download className="h-3.5 w-3.5" />
                    PDF
                  </a>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="p-2 text-mira-brown transition-colors hover:text-mira-charcoal"
                    aria-label="Close floor plan"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div
                style={photoFrameStyle(plan.image, { maxHeightVh: 74, fallbackAspect: 0.46 })}
                className="relative mx-auto w-full"
              >
                <Image
                  src={plan.image}
                  alt={`${plan.name} floor plan, enlarged`}
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
