import React from "react";
import { sharedSpaces } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import PhotoFrame from "@/components/common/PhotoFrame";

/** The building's common areas: the entry lobby and the residents' pool. */
export default function SharedSpaces() {
  return (
    <section className="border-t border-mira-border bg-mira-ground px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl space-y-5">
          <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
            {sharedSpaces.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4.4vw,3.5rem)] font-light leading-[1.12] text-mira-charcoal">
            {sharedSpaces.headline}
          </Reveal>
          <Reveal delay={220} className="font-sans text-[16px] leading-[1.75] text-mira-brownDark sm:text-lg">
            {sharedSpaces.intro}
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
          {sharedSpaces.items.map((item, idx) => (
            <div key={item.title}>
              <Reveal delay={idx * 120}>
                <PhotoFrame
                  src={item.image}
                  alt={item.alt}
                  caption={item.caption}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={84}
                  frameClassName="shadow-card"
                />
              </Reveal>
              <Reveal variant="fade" delay={idx * 120 + 100} className="mt-6 block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
                {item.eyebrow}
              </Reveal>
              <Reveal as="h3" delay={idx * 120 + 160} className="mt-3 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] font-light leading-tight text-mira-charcoal">
                {item.title}
              </Reveal>
              <Reveal delay={idx * 120 + 240} className="mt-4 max-w-xl font-sans text-[15px] leading-[1.8] text-mira-brownDark sm:text-base">
                {item.body}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
