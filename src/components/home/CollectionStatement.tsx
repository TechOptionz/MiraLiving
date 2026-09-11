import React from "react";
import { collectionStatement } from "@/content/site-content";

export default function CollectionStatement() {
  return (
    <section id="architecture" className="py-28 sm:py-40 px-6 sm:px-12 lg:px-20 bg-mira-ground text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Subtle Editorial Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-mira-brown/40" />
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown font-medium">
            The Limited Collection
          </span>
          <span className="w-12 h-[1px] bg-mira-brown/40" />
        </div>

        {/* Monumental Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light leading-[1.2] max-w-4xl mx-auto">
          {collectionStatement.headline}
        </h2>

        {/* Minimalist Hairline Architectural Spec Strip (Not chunky cards!) */}
        <div className="pt-8 border-t border-b border-mira-border/80 divide-y sm:divide-y-0 sm:divide-x divide-mira-border/80 grid grid-cols-2 sm:grid-cols-5">
          {collectionStatement.stats.map((stat) => (
            <div
              key={stat.label}
              className="py-8 sm:py-10 px-4 flex flex-col items-center justify-center space-y-2 group transition-colors hover:bg-white/60"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-mira-charcoal group-hover:text-mira-brown transition-colors">
                {stat.value}
              </span>
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-mira-muted font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
