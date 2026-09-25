import React from "react";
import { collectionStatement } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";

export default function CollectionStatement() {
  return (
    <section
      id="architecture"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-mira-ground px-6 pb-20 pt-28 text-center sm:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-5xl space-y-14 sm:space-y-20">
        <Reveal variant="fade">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-mira-brown/40" />
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
              The Limited Collection
            </span>
            <span className="h-px w-12 bg-mira-brown/40" />
          </div>
        </Reveal>

        <Reveal as="h2" delay={120} className="mx-auto max-w-4xl font-serif text-[clamp(1.9rem,4.6vw,4rem)] font-light leading-[1.15] text-mira-charcoal">
          {collectionStatement.headline}
        </Reveal>

        {/* Hairline spec strip — architectural schedule, not chunky cards. */}
        <Reveal delay={240} className="grid grid-cols-2 divide-y divide-mira-border/80 border-b border-t border-mira-border/80 sm:grid-cols-5 sm:divide-y-0 sm:divide-x">
          {collectionStatement.stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center justify-center space-y-2 px-4 py-9 transition-colors hover:bg-white/60 sm:py-12"
            >
              {/*
                Four of the five values are single digits; "Resort Pool" is a
                phrase. Sized on the digit scale it overflows the cell, so a
                word-length value steps down and is allowed to wrap.

                Digits are set in the sans face: Cormorant's light "1" has no
                flag and a full serif foot, so it reads as a Roman numeral I.
              */}
              <span
                className={`text-mira-charcoal transition-colors group-hover:text-mira-brown ${
                  stat.value.length > 2
                    ? "font-serif font-light text-[clamp(1.15rem,1.9vw,1.75rem)] leading-tight"
                    : "font-sans font-light tabular-nums text-[clamp(1.8rem,3.2vw,3rem)]"
                }`}
              >
                {stat.value}
              </span>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-mira-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
