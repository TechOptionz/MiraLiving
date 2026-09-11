"use client";

import React, { useState } from "react";
import Image from "next/image";
import { floorPlans } from "@/content/site-content";
import { Bed, Bath, Car, Maximize2, X, ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function FloorPlanTabs() {
  const [activeId, setActiveId] = useState(floorPlans[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { openRegister } = useModal();

  const currentPlan = floorPlans.find((p) => p.id === activeId) || floorPlans[0];

  return (
    <section className="py-28 sm:py-40 px-6 sm:px-12 lg:px-16 bg-mira-sandLight border-t border-mira-border">
      <div className="max-w-[1600px] mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
            Architectural Geometry
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light">
            Individual Residence Layouts
          </h2>
          <p className="text-base font-sans text-mira-muted leading-relaxed font-light">
            Generously proportioned residences engineered for cross-flow ventilation, dual outdoor aspects, and horizon views.
          </p>
        </div>

        {/* Minimal Hairline Tab Selectors */}
        <div className="flex justify-center border-b border-mira-border">
          <div className="flex gap-4 sm:gap-12">
            {floorPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActiveId(plan.id)}
                className={`pb-4 text-xs font-sans tracking-[0.25em] uppercase transition-all relative ${
                  activeId === plan.id
                    ? "text-mira-charcoal font-semibold"
                    : "text-mira-muted hover:text-mira-charcoal"
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

        {/* Grand Layout Showcase (Large image canvas!) */}
        <div className="bg-white border border-mira-border p-6 sm:p-14 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Floor Plan Visual (Large!) */}
          <div className="lg:col-span-8 relative">
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative aspect-[16/11] w-full bg-mira-ground border border-mira-border/60 overflow-hidden cursor-zoom-in group shadow-subtle"
            >
              <Image
                src={currentPlan.image}
                alt={`${currentPlan.name} architectural layout`}
                fill
                className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-1.5 text-xs text-white font-sans flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Click to Expand Plan</span>
              </div>
            </div>
            <p className="text-xs font-sans text-mira-muted text-center mt-3 font-light italic">
              Illustrative architectural floor plan graphic. Click to inspect high-resolution dimensions.
            </p>
          </div>

          {/* Specifications Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-mira-tealDark font-semibold">
                Residence Layout
              </span>
              <h3 className="text-3xl font-serif text-mira-charcoal font-light leading-tight">
                {currentPlan.tagline}
              </h3>
            </div>

            {/* Spec Highlights Table */}
            <div className="space-y-3 py-4 border-y border-mira-border text-sm font-sans">
              <div className="flex items-center justify-between">
                <span className="text-mira-muted">Bedrooms</span>
                <span className="font-semibold text-mira-charcoal">{currentPlan.bedrooms} Bed {currentPlan.mpr ? "+ MPR" : ""}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-mira-muted">Bathrooms</span>
                <span className="font-semibold text-mira-charcoal">{currentPlan.bathrooms} Bath</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-mira-muted">Carparks</span>
                <span className="font-semibold text-mira-charcoal">{currentPlan.cars} Secure Underground</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-mira-muted">Internal Area</span>
                <span className="font-semibold text-mira-charcoal">{currentPlan.internalSize}</span>
              </div>
            </div>

            <button
              onClick={openRegister}
              className="w-full py-4 bg-mira-teal hover:bg-mira-tealDark text-white font-sans text-xs tracking-[0.2em] uppercase transition-all shadow-subtle flex items-center justify-center gap-2"
            >
              <span>Download Plan & Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[94vh] bg-white p-6 sm:p-10 overflow-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-mira-border mb-4">
                <h4 className="text-xl font-serif text-mira-charcoal">
                  {currentPlan.name} — Detailed Architectural Plan
                </h4>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 text-mira-muted hover:text-mira-charcoal"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative aspect-[16/10] w-full min-h-[500px]">
                <Image
                  src={currentPlan.image}
                  alt={`${currentPlan.name} high-res floor plan`}
                  fill
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
