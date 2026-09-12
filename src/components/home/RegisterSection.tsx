import React from "react";
import { registerSection, siteConfig } from "@/content/site-content";
import BackdropVideo from "@/components/common/BackdropVideo";
import BrochureForm from "@/components/common/BrochureForm";

/**
 * The closing registration section.
 *
 * The footage runs full-bleed behind the whole section rather than inside a
 * cropped panel, so the page ends on motion the way it opened on it. The form
 * sits on a glass pane over the top: the swell still reads through it, and the
 * blur is what keeps the hairline fields legible against water that is moving
 * and changing value under them. Blurring a *playing* video is not free — the
 * backdrop is re-filtered on every decoded frame — so it is kept to a single
 * pane at a moderate radius, and browsers without backdrop-filter fall back to
 * the flat tint they used to get.
 */
export default function RegisterSection() {
  return (
    <section
      id="register"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-mira-charcoal px-6 pb-20 pt-28 text-white sm:px-10 lg:px-16"
    >
      {/* Anchor for previous links targeting #download */}
      <span id="download" className="absolute -top-24 left-0" />

      {/* Motion backdrop */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <BackdropVideo
          src="/video/brochure-bg.mp4"
          poster="/video/brochure-bg-poster.jpg"
          className="h-full w-full object-cover object-center"
        />
        {/* Enough ground for the type without flattening the footage to grey:
            the water stays readable as water, and only the head and foot of
            the section are carried down far enough to hold the headline and
            the phone numbers. */}
        <div className="absolute inset-0 bg-mira-charcoal/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-mira-charcoal/65 via-mira-charcoal/10 to-mira-charcoal/75" />
        <div className="absolute inset-0 bg-noise opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden h-px w-10 bg-mira-sand/50 sm:block" aria-hidden="true" />
            <p className="font-sans text-[10px] uppercase tracking-eyebrow text-mira-sandLight/85 sm:text-[11px]">
              Exclusive preview
            </p>
            <span className="hidden h-px w-10 bg-mira-sand/50 sm:block" aria-hidden="true" />
          </div>

          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] text-white sm:text-5xl md:text-6xl">
            {registerSection.headline}
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/75 sm:text-[15px]">
            {registerSection.intro}
          </p>
        </div>

        {/* Form pane — glass, not a slab, so the swell keeps moving through it */}
        <div className="relative mt-10 overflow-hidden border border-white/15 bg-mira-charcoal/75 shadow-float backdrop-blur-lg backdrop-saturate-150 supports-[backdrop-filter]:bg-white/[0.06] sm:mt-12">
          {/* The footage brightens toward the shoreline, so the lower half of
              the pane needs a little more ground under it than the upper. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mira-charcoal/20 via-mira-charcoal/30 to-mira-charcoal/45"
          />
          {/* The lit top edge glass catches */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
          <div className="relative p-6 sm:p-10 lg:p-12">
            <BrochureForm idPrefix="section" darkVariant />
          </div>
        </div>

        {/* Direct line, for anyone who would rather not fill in a form */}
        <div className="mt-8 flex flex-col items-center justify-center gap-x-6 gap-y-2 font-sans text-[11px] uppercase tracking-eyebrow text-white/45 sm:flex-row">
          <span>Or speak with our sales team</span>
          <span className="flex items-center gap-5">
            {siteConfig.contacts.map((contact) => (
              <a
                key={contact.tel}
                href={contact.tel}
                className="border-b border-white/25 pb-0.5 text-white/75 transition-colors duration-300 hover:border-white hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                {contact.phone}
              </a>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
