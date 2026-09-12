import React from "react";
import { keyFeatures } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";

export default function KeyFeaturesGrid() {
  return (
    /*
      The section owns a full screen, so the schedule is stretched to fill it
      rather than floating as a small band in the middle: the masthead takes
      what it needs and every spec row shares the remaining height equally.
      Row height and type both scale with the viewport, so the whole ledger
      still lands inside one screen on a laptop.
    */
    <section className="flex min-h-screen w-full flex-col justify-center border-t border-mira-border bg-mira-sandLight px-6 pb-[clamp(3rem,7vh,5rem)] pt-[clamp(7rem,15vh,9.5rem)] sm:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-[clamp(2rem,5vh,4rem)]">
        <div className="mx-auto max-w-4xl space-y-3 text-center sm:space-y-4">
          <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
            Architectural Elements
          </Reveal>
          <Reveal as="h2" delay={120} className="font-serif text-[clamp(2.1rem,4.4vw,4rem)] font-light leading-[1.08] text-mira-charcoal">
            Crafted for Enduring Excellence
          </Reveal>
          <Reveal delay={200} className="block font-sans text-[15px] leading-relaxed text-mira-muted sm:text-base">
            Every residence is delivered to the same specification.
          </Reveal>
        </div>

        {/* Specification schedule — number and category sit in fixed columns so the
            eye scans straight down; the spec line itself is sans for legibility. */}
        <dl className="flex flex-1 flex-col divide-y divide-mira-border border-y border-mira-border">
          {keyFeatures.map((feat, idx) => (
            <Reveal
              key={feat.id}
              delay={idx * 70}
              rootMargin="0px"
              className="group grid flex-1 grid-cols-[auto_1fr] content-center items-baseline gap-x-5 gap-y-1 px-2 py-[clamp(1.1rem,2.2vh,1.9rem)] transition-colors hover:bg-white/60 sm:grid-cols-[3rem_11rem_1fr] sm:gap-x-10 sm:px-5"
            >
              <span
                aria-hidden="true"
                className="font-mono text-[12px] tracking-widest text-mira-brown transition-colors group-hover:text-mira-brownDeep sm:text-xs"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <dt className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-mira-brownDark sm:text-xs">
                {feat.label}
              </dt>

              <dd className="col-span-2 font-sans text-[15px] leading-relaxed text-mira-charcoal sm:col-span-1 sm:text-[clamp(1rem,1.15vw,1.25rem)]">
                {feat.text}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
