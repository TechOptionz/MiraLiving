"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { floorPlans } from "@/content/site-content";
import { Maximize2, X, ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { photoFrameStyle } from "@/components/common/PhotoFrame";

export default function FloorPlanTabs() {
  const [activeId, setActiveId] = useState(floorPlans[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { openRegister } = useModal();

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const lightboxRef = useFocusTrap<HTMLDivElement>(lightboxOpen, closeLightbox);

  const currentPlan = floorPlans.find((p) => p.id === activeId) || floorPlans[0];

  const specs = [
    { label: "Bedrooms", value: `${currentPlan.bedrooms} Bed${currentPlan.mpr ? " + MPR" : ""}` },
    { label: "Bathrooms", value: `${currentPlan.bathrooms} Bath` },
    { label: "Carparks", value: `${currentPlan.cars} Secure underground` },
    { label: "Internal area", value: currentPlan.internalSize },
  ];

  return (
    <section className="border-t border-mira-border bg-mira-sandLight px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
            Architectural Geometry
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,4.4vw,3.5rem)] font-light leading-[1.12] text-mira-charcoal">
            Individual Residence Layouts
          </h2>
          <p className="font-sans text-[16px] leading-[1.75] text-mira-brownDark sm:text-lg">
            Generously proportioned residences engineered for cross-flow ventilation, dual outdoor aspects, and
            horizon views.
          </p>
        </div>

        {/* Hairline tab selectors */}
        <div className="mt-14 flex justify-center border-b border-mira-border">
          <div className="flex gap-6 sm:gap-14">
            {floorPlans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setActiveId(plan.id)}
                aria-pressed={activeId === plan.id}
                className={`relative pb-4 font-sans text-[12px] uppercase tracking-[0.2em] transition-colors sm:text-[13px] ${
                  activeId === plan.id
                    ? "font-semibold text-mira-charcoal"
                    : "text-mira-brown hover:text-mira-charcoal"
                }`}
              >
                {plan.name}
                {activeId === plan.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-mira-brown" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Layout showcase */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 border border-mira-border bg-white p-6 shadow-card sm:p-12 lg:grid-cols-12 lg:gap-14">
          {/* The plan, shown whole: the frame takes the drawing's own proportions,
              capped by height so a tall plan still fits on screen. */}
          <div className="lg:col-span-7">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              style={photoFrameStyle(currentPlan.image, { maxHeightVh: 70 })}
              className="group relative mx-auto block w-full cursor-zoom-in overflow-hidden border border-mira-border/60 bg-mira-ground shadow-subtle"
            >
              <Image
                src={currentPlan.image}
                alt={`${currentPlan.name} architectural layout`}
                fill
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-mira-charcoal/75 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                <Maximize2 className="h-3.5 w-3.5" />
                Expand plan
              </span>
            </button>
            <p className="mt-4 text-center font-sans text-[13px] leading-relaxed text-mira-brownDark">
              Illustrative architectural floor plan. Select to inspect it at full size.
            </p>
          </div>

          {/* Specifications */}
          <div className="lg:col-span-5">
            <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-mira-tealDark">
              Residence layout
            </span>
            <h3 className="mt-4 font-serif text-[clamp(1.6rem,2.4vw,2.25rem)] font-light leading-snug text-mira-charcoal">
              {currentPlan.tagline}
            </h3>

            <dl className="mt-8 divide-y divide-mira-border border-y border-mira-border">
              {specs.map((spec) => (
                <div key={spec.label} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-mira-brown">
                    {spec.label}
                  </dt>
                  <dd className="text-right font-sans text-[15px] font-medium text-mira-charcoal sm:text-base">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <button
              type="button"
              onClick={openRegister}
              className="mt-8 flex w-full items-center justify-center gap-2 bg-mira-teal py-4 font-sans text-[12px] uppercase tracking-[0.18em] text-white shadow-subtle transition-colors hover:bg-mira-tealDark"
            >
              <span>Download plan &amp; specs</span>
              <ArrowRight className="h-4 w-4" />
            </button>
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
              className="relative max-h-[94svh] w-full max-w-5xl overflow-auto border border-white/20 bg-white p-5 focus:outline-none sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-5 flex items-center justify-between gap-6 border-b border-mira-border pb-4">
                <h3 id="floorplan-lightbox-title" className="font-serif text-xl text-mira-charcoal sm:text-2xl">
                  {currentPlan.name} — detailed plan
                </h3>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 text-mira-brown transition-colors hover:text-mira-charcoal"
                  aria-label="Close lightbox"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Whole plan: the frame is the drawing's own shape, capped so it
                  always fits the viewport without being cut. */}
              <div
                style={photoFrameStyle(currentPlan.image, { maxHeightVh: 72 })}
                className="relative mx-auto w-full"
              >
                <Image
                  src={currentPlan.image}
                  alt={`${currentPlan.name} high-resolution floor plan`}
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 1024px"
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
