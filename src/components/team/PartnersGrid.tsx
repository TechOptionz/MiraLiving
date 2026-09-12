import React from "react";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import { partnerRecords } from "@/content/site-content";
import { Building2, Sparkles, Award, Palette } from "lucide-react";

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Developer: Building2,
  Architect: Sparkles,
  Builder: Award,
  "Interior Designer": Palette,
};

/**
 * 3 — Architecture, construction, interiors.
 *
 * The masthead takes what it needs and the three columns stretch into every
 * pixel of height that is left, the same treatment the home page gives its
 * credit ledger — so the section fills the screen rather than floating as a
 * band in the middle of it.
 */
export default function PartnersGrid() {
  const partners = partnerRecords.slice(1);

  return (
    <section className="flex min-h-[100svh] w-full flex-col border-t border-mira-border bg-mira-sandLight px-6 pb-[clamp(2.5rem,6vh,4.5rem)] pt-[clamp(6.5rem,14vh,9rem)] sm:px-12 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col gap-[clamp(2rem,5vh,3.5rem)]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="space-y-4 lg:col-span-7">
            <Reveal
              variant="fade"
              rootMargin="0px"
              className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown"
            >
              Architectural & Building Disciplines
            </Reveal>
            <Reveal
              as="h2"
              delay={120}
              rootMargin="0px"
              className="font-serif text-[clamp(1.9rem,4.5vw,4rem)] font-light leading-[1.08] text-mira-charcoal"
            >
              Craft, precision &amp; design
            </Reveal>
          </div>

          <Reveal
            as="p"
            variant="fade"
            delay={180}
            rootMargin="0px"
            className="max-w-md font-sans text-sm font-light leading-relaxed text-mira-muted lg:col-span-5"
          >
            Three practices appointed for one reason each: the way they draw, the way they
            build, and the way they finish a room. Their marks appear on every drawing in
            the set.
          </Reveal>
        </div>

        <div className="grid flex-1 auto-rows-fr grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {partners.map((partner, idx) => {
            const Icon = roleIcons[partner.role] ?? Building2;
            return (
              <Reveal
                key={partner.id}
                delay={idx * 110}
                rootMargin="0px"
                className="group flex flex-col justify-between gap-[clamp(1.5rem,3.5vh,2.75rem)] border border-mira-border bg-white px-7 py-8 shadow-subtle transition-all duration-500 hover:-translate-y-1 hover:border-mira-brown hover:shadow-card sm:px-9 sm:py-[clamp(1.75rem,4vh,3rem)]"
              >
                <div className="flex items-center justify-between gap-4 border-b border-mira-border pb-6">
                  <span className="font-sans text-[11px] tracking-[0.16em] text-mira-muted/70 transition-colors duration-300 group-hover:text-mira-brown">
                    0{idx + 2}
                  </span>
                  <span className="bg-mira-sandLight p-2 transition-colors duration-300 group-hover:bg-mira-sand">
                    <Icon className="h-5 w-5 text-mira-tealDark" />
                  </span>
                </div>

                {/* Full-colour partner marks (scripts/build-partner-logos.mjs) —
                    no grayscale, they read at full strength. */}
                <div className="flex flex-1 items-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={80}
                    quality={95}
                    className="max-h-14 w-auto max-w-[170px] object-contain object-left sm:max-h-[clamp(3.5rem,8vh,5.5rem)] sm:max-w-[min(100%,13rem)]"
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-mira-tealDark">
                      {partner.role}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-mira-charcoal sm:text-[clamp(1.5rem,2.6vw,2rem)]">
                      {partner.name}
                    </h3>
                  </div>

                  <p className="font-sans text-sm font-light leading-relaxed text-mira-muted">
                    {partner.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
