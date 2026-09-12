import React from "react";
import { keyFeatures } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";

export default function KeyFeaturesGrid() {
  return (
    <section className="flex min-h-screen w-full items-center border-t border-mira-border bg-mira-sandLight px-6 pb-16 pt-28 sm:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-4xl space-y-12 sm:space-y-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
            Architectural Elements
          </Reveal>
          <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4vw,3.5rem)] font-light text-mira-charcoal">
            Crafted for Enduring Excellence
          </Reveal>
          <Reveal delay={200} className="block font-sans text-sm leading-relaxed text-mira-muted">
            Every residence is delivered to the same specification.
          </Reveal>
        </div>

        {/* Specification schedule — number and category sit in fixed columns so the
            eye scans straight down; the spec line itself is sans for legibility. */}
        <dl className="divide-y divide-mira-border border-y border-mira-border">
          {keyFeatures.map((feat, idx) => (
            <Reveal
              key={feat.id}
              delay={idx * 70}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 px-2 py-6 transition-colors hover:bg-white/60 sm:grid-cols-[2.5rem_9rem_1fr] sm:gap-x-8 sm:px-4 sm:py-7"
            >
              <span
                aria-hidden="true"
                className="font-mono text-[11px] tracking-widest text-mira-sandDark transition-colors group-hover:text-mira-brown"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-mira-brown sm:text-[11px]">
                {feat.label}
              </dt>

              <dd className="col-span-2 font-sans text-[15px] leading-relaxed text-mira-charcoal sm:col-span-1 sm:text-base">
                {feat.text}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
