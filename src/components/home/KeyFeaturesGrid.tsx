import React from "react";
import { keyFeatures } from "@/content/site-content";

export default function KeyFeaturesGrid() {
  return (
    <section className="py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-mira-sandLight border-t border-mira-border">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
            Architectural Elements
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-mira-charcoal font-light">
            Crafted for Enduring Excellence
          </h2>
        </div>

        {/* Clean Architectural Schedule (Hairline Dividers, not chunky cards) */}
        <div className="border-t border-mira-border divide-y divide-mira-border">
          {keyFeatures.map((feat, idx) => (
            <div
              key={feat.id}
              className="py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-white/50 px-4 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono tracking-widest text-mira-muted group-hover:text-mira-brown transition-colors">
                  0{idx + 1}
                </span>
                <p className="text-base sm:text-xl font-serif text-mira-charcoal font-light">
                  {feat.text}
                </p>
              </div>

              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-mira-muted shrink-0">
                Included Specification
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
