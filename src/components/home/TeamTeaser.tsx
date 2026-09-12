import React from "react";
import Image from "next/image";
import Link from "next/link";
import { partnerRecords } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import { ArrowRight } from "lucide-react";

export default function TeamTeaser() {
  return (
    <section className="flex min-h-screen w-full items-center border-t border-mira-border bg-mira-sandLight px-6 pb-20 pt-28 sm:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-6xl space-y-12 sm:space-y-16">
        {/* Masthead — statement left, supporting note and CTA right. */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="space-y-4 lg:col-span-7">
            <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
              The Collaborators
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4vw,3.5rem)] font-light leading-[1.1] text-mira-charcoal">
              Brought to life by Furtado Property
            </Reveal>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <Reveal as="p" variant="fade" delay={180} className="max-w-md font-sans text-sm font-light leading-relaxed text-mira-muted">
              Four disciplines, one address. Architecture, construction and interior design
              drawn together by a single standard of craft — and a shared belief that a
              residence should outlast the era that built it.
            </Reveal>

            <Reveal variant="fade" delay={240}>
              <Link
                href="/team"
                className="group inline-flex w-fit items-center gap-3 border-b border-mira-brown/40 pb-1 font-sans text-[11px] uppercase tracking-[0.25em] text-mira-brown transition-colors hover:border-mira-charcoal hover:text-mira-charcoal"
              >
                <span>Meet the Project Partners</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Credit ledger — a hairline grid, numbered like a drawing set. */}
        <div className="grid grid-cols-1 border-l border-t border-mira-border sm:grid-cols-2 lg:grid-cols-4">
          {partnerRecords.map((partner, idx) => (
            <Reveal
              key={partner.id}
              delay={idx * 90}
              className="group flex flex-col justify-between gap-8 border-b border-r border-mira-border bg-transparent px-7 py-8 transition-colors duration-500 hover:bg-white sm:px-8 sm:py-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-sans text-[10px] tracking-[0.25em] text-mira-muted/70 transition-colors duration-300 group-hover:text-mira-brown">
                  0{idx + 1}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-mira-brown">
                  {partner.role}
                </span>
              </div>

              <div className="relative flex h-16 items-center justify-start sm:h-20">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={180}
                  height={80}
                  quality={95}
                  className="max-h-14 w-auto max-w-[150px] object-contain object-left opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-16"
                />
              </div>

              <p className="font-serif text-lg font-light leading-snug text-mira-charcoal sm:text-xl">
                {partner.name}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
