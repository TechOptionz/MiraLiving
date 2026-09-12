"use client";

import React from "react";
import Image from "next/image";
import { secureSection, stepRecords, siteConfig } from "@/content/site-content";
import { useModal } from "@/context/ModalContext";
import { Phone, ArrowRight } from "lucide-react";

export default function SecureSection() {
  const { openRegister } = useModal();

  return (
    <section className="flex min-h-screen w-full items-center border-t border-mira-border bg-mira-ground px-6 pb-20 pt-28 sm:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-[1500px] space-y-16 sm:space-y-20">
        {/* Editorial Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
              {secureSection.eyebrow}
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-mira-charcoal font-light leading-tight">
              {secureSection.headline}
            </h2>
            <div className="pt-2 space-y-3 text-base sm:text-lg font-sans text-mira-muted font-light leading-relaxed max-w-2xl">
              <p>{secureSection.paragraph1}</p>
              <p>{secureSection.paragraph2}</p>
            </div>
          </div>

          {/* Minimal Concierge Contacts Strip */}
          <div className="lg:col-span-4 p-8 bg-white border border-mira-border shadow-subtle space-y-6">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-mira-brown block font-medium">
              Sales Concierge
            </span>
            <div className="space-y-4">
              {siteConfig.contacts.map((c) => (
                <div key={c.name} className="flex items-center justify-between border-b border-mira-border pb-3">
                  <span className="text-sm font-medium text-mira-charcoal">{c.name}</span>
                  <a
                    href={c.tel}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-mira-tealDark hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{c.phone}</span>
                  </a>
                </div>
              ))}
            </div>
            <button
              onClick={openRegister}
              className="w-full py-3.5 bg-mira-teal hover:bg-mira-tealDark text-white text-xs font-sans tracking-[0.2em] uppercase transition-colors shadow-subtle flex items-center justify-center gap-2"
            >
              <span>Download Full Brochure</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Step Progression (Horizontal Hairline Flow, Not Chunky Boxes!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-8 border-t border-mira-border">
          {stepRecords.map((step) => (
            <div key={step.step} className="space-y-4 group">
              {/*
                step.step and step.iconSvg are the same numeral — the record
                carries "01" as text and /img/site/01.svg draws it. Rendering
                both printed the number twice in the row, so the drawn numeral
                carries it alone and the text lives in the image's alt.
              */}
              <div className="flex items-end justify-between border-b border-mira-border pb-4">
                <Image
                  src={step.iconSvg}
                  alt={`Step ${step.step}`}
                  width={59}
                  height={41}
                  className="h-9 w-auto object-contain opacity-70 transition-opacity group-hover:opacity-100 sm:h-11"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-mira-charcoal font-light">
                {step.title}
              </h3>
              <p className="text-sm font-sans text-mira-muted leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
