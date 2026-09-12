"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import BackdropVideo from "@/components/common/BackdropVideo";
import BrochureForm from "./BrochureForm";
import { registerSection, siteConfig } from "@/content/site-content";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { X } from "lucide-react";

/**
 * The brochure dialog, opened from every "Download Brochure" control on the
 * site.
 *
 * It is a two-column sheet: the footage and the commercial facts hold the left
 * rail, the form sits on clean ground to the right where the hairline fields
 * stay easy to read. Below `lg` the rail collapses to a short video band above
 * the form so the motion is still there without stealing the fold.
 */

const modalFacts = [
  { label: "Price from", value: siteConfig.startingPrice },
  { label: "The collection", value: "25 Residences" },
  { label: "Completion", value: "September 2026" },
];

export default function RegisterModal() {
  const { isRegisterOpen, closeRegister } = useModal();

  // Traps Tab inside the dialog, closes on Escape, locks background scroll and
  // returns focus to whatever opened the modal.
  const panelRef = useFocusTrap<HTMLDivElement>(isRegisterOpen, closeRegister);

  if (!isRegisterOpen) return null;

  return (
    <div
      className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-mira-charcoal/70 p-0 backdrop-blur-sm transition-opacity sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0" onClick={closeRegister} aria-hidden="true" />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 grid h-full max-h-[100svh] w-full max-w-5xl grid-cols-1 overflow-hidden bg-mira-ground shadow-float focus:outline-none sm:h-auto sm:max-h-[92vh] lg:grid-cols-[0.8fr_1fr]"
      >
        {/* ------------------------------------------------------------------
            Left rail — footage, statement and the commercial facts
            ------------------------------------------------------------------ */}
        <div className="relative hidden overflow-hidden bg-mira-charcoal text-white lg:flex lg:flex-col lg:justify-end">
          <div className="absolute inset-0" aria-hidden="true">
            <BackdropVideo
              src="/video/brochure-bg.mp4"
              poster="/video/brochure-bg-poster.jpg"
              priority
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mira-charcoal via-mira-charcoal/45 to-mira-charcoal/25" />
            <div className="absolute inset-0 bg-noise opacity-[0.08]" />
          </div>

          <div className="relative z-10 p-10 xl:p-12">
            <p className="font-sans text-[11px] uppercase tracking-eyebrow text-mira-sandLight/80">
              Exclusive preview
            </p>
            <p className="mt-5 font-serif text-3xl font-light leading-[1.12] text-white xl:text-[2.5rem]">
              Oceanfront living,
              <span className="block italic text-mira-sandLight">elevated.</span>
            </p>

            <dl className="mt-9 space-y-3.5 border-t border-white/15 pt-7">
              {modalFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6">
                  <dt className="font-sans text-[11px] uppercase tracking-eyebrow text-white/50">
                    {fact.label}
                  </dt>
                  <dd className="font-serif text-lg text-mira-sandLight">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            Right column — the form
            ------------------------------------------------------------------ */}
        {/* Pinned to the sheet, not to the scrolling column, so it stays put */}
        <button
          onClick={closeRegister}
          className="absolute right-4 top-4 z-20 p-2.5 text-white/80 transition-colors hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white lg:text-mira-muted lg:hover:text-mira-charcoal lg:focus-visible:ring-mira-brown"
          aria-label="Close registration dialog"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="relative flex max-h-full flex-col overflow-y-auto">
          {/* Compact motion band, below lg only */}
          <div className="relative h-36 shrink-0 overflow-hidden bg-mira-charcoal sm:h-44 lg:hidden" aria-hidden="true">
            <BackdropVideo
              src="/video/brochure-bg.mp4"
              poster="/video/brochure-bg-poster.jpg"
              priority
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mira-ground via-mira-charcoal/35 to-mira-charcoal/45" />
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="font-sans text-[11px] uppercase tracking-eyebrow text-mira-brown">
              Exclusive preview
            </p>
            <h2
              id="modal-title"
              className="mt-4 font-serif text-3xl font-light leading-tight text-mira-charcoal sm:text-4xl"
            >
              {registerSection.headline}
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-mira-muted">
              {registerSection.intro}
            </p>

            <div className="mt-9">
              <BrochureForm idPrefix="modal" onSuccess={closeRegister} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
