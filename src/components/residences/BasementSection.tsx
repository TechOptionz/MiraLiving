import React from "react";
import { basementPlan } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import PhotoFrame from "@/components/common/PhotoFrame";

/** The basement car park, from the plan sheet. */
export default function BasementSection() {
  return (
    <section className="border-t border-mira-border bg-mira-sandLight px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <PhotoFrame
            src={basementPlan.image}
            alt="Basement car park plan showing fifty resident car spaces, storage cages and the lift lobby"
            maxHeightVh={72}
            sizes="(max-width: 1024px) 90vw, 40vw"
            quality={88}
            zoom={false}
            frameClassName="border border-mira-border bg-white shadow-card"
          />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
            {basementPlan.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={120} className="mt-4 font-serif text-[clamp(1.8rem,3.6vw,3rem)] font-light leading-[1.12] text-mira-charcoal">
            {basementPlan.headline}
          </Reveal>
          <Reveal delay={220} className="mt-6 max-w-2xl font-sans text-[16px] leading-[1.8] text-mira-brownDark sm:text-lg">
            {basementPlan.body}
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid grid-cols-2 gap-px border border-mira-border bg-mira-border sm:grid-cols-4">
              {basementPlan.facts.map((fact) => (
                <div key={fact.label} className="bg-white px-5 py-6">
                  <dd className="font-serif text-3xl font-light leading-none text-mira-charcoal">{fact.value}</dd>
                  <dt className="mt-2 font-sans text-[11px] uppercase tracking-[0.15em] text-mira-brown">
                    {fact.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
