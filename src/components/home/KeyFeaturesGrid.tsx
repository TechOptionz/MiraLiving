import React from "react";
import { keyFeatures } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";

export default function KeyFeaturesGrid() {
  return (
    <section className="flex min-h-screen w-full items-center border-t border-mira-border bg-mira-sandLight px-6 pb-16 pt-28 sm:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-6xl space-y-10 sm:space-y-14">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
            Architectural Elements
          </Reveal>
          <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4vw,3.5rem)] font-light text-mira-charcoal">
            Crafted for Enduring Excellence
          </Reveal>
        </div>

        {/* Specification schedule — hairline dividers, numbered like a drawing set. */}
        <div className="divide-y divide-mira-border border-t border-mira-border">
          {keyFeatures.map((feat, idx) => (
            <Reveal
              key={feat.id}
              delay={idx * 70}
              className="group flex flex-col items-start justify-between gap-4 px-4 py-5 transition-colors hover:bg-white/50 sm:flex-row sm:items-center sm:py-6"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs tracking-widest text-mira-muted transition-colors group-hover:text-mira-brown">
                  0{idx + 1}
                </span>
                <p className="font-serif text-base font-light text-mira-charcoal sm:text-xl">
                  {feat.text}
                </p>
              </div>

              <span className="shrink-0 font-sans text-[10px] uppercase tracking-[0.25em] text-mira-muted">
                Included Specification
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
