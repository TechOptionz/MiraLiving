import React from "react";
import Image from "next/image";
import { registerSection } from "@/content/site-content";
import BrochureForm from "@/components/common/BrochureForm";

export default function RegisterSection() {
  return (
    <section id="register" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden border-t border-mira-border bg-mira-brownDeep px-6 pb-14 pt-28 text-white sm:px-10 lg:px-16">
      {/* Anchor for previous links targeting #download */}
      <span id="download" className="absolute -top-24 left-0" />

      {/* Background Graphic: Brochure lying on stone */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/site/contactbg-1.webp"
          alt="Mira Living printed brochure background"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-mira-brownDeep/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl space-y-8 text-center">
        <div className="space-y-3">
          <span className="text-xs font-sans tracking-eyebrow uppercase text-mira-sand block font-medium">
            Exclusive Preview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
            {registerSection.headline}
          </h2>
          <p className="text-sm sm:text-base font-sans text-mira-sandLight/90 max-w-xl mx-auto leading-relaxed">
            {registerSection.intro}
          </p>
        </div>

        {/* Embedded Form */}
        <div className="p-6 sm:p-10 bg-mira-brownDeep/75 backdrop-blur-md border border-white/15 shadow-float text-left">
          <BrochureForm idPrefix="section" darkVariant={true} />
        </div>
      </div>
    </section>
  );
}
