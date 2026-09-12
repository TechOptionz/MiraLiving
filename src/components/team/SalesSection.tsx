import React from "react";
import Reveal from "@/components/common/Reveal";
import { siteConfig } from "@/content/site-content";
import { Phone, ArrowUpRight } from "lucide-react";

/**
 * 7 — Who to call.
 *
 * The last thing on the page before the brochure form: the two people who
 * actually answer the phone, each given a full panel rather than a line in a
 * footer. The panels stretch to take the height the masthead leaves.
 */
export default function SalesSection() {
  return (
    <section className="flex min-h-[100svh] w-full flex-col border-t border-mira-border bg-mira-ground px-6 pb-[clamp(2.5rem,6vh,4.5rem)] pt-[clamp(6.5rem,14vh,9rem)] sm:px-12 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-[clamp(2rem,5vh,3.5rem)]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="space-y-4 lg:col-span-7">
            <Reveal
              variant="fade"
              rootMargin="0px"
              className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown"
            >
              Appointments &amp; Walkthroughs
            </Reveal>
            <Reveal
              as="h2"
              delay={120}
              rootMargin="0px"
              className="font-serif text-[clamp(1.9rem,4.5vw,4rem)] font-light leading-[1.08] text-mira-charcoal"
            >
              Sales representation
            </Reveal>
          </div>

          <Reveal
            as="p"
            variant="fade"
            delay={180}
            rootMargin="0px"
            className="max-w-md font-sans text-sm font-light leading-relaxed text-mira-muted lg:col-span-5"
          >
            Walkthroughs of the site and the residence schedule are by appointment. Either
            of the below will take you through availability, floor plates and settlement
            timing.
          </Reveal>
        </div>

        <div className="grid flex-1 auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {siteConfig.contacts.map((contact, idx) => (
            <Reveal
              key={contact.name}
              delay={idx * 120}
              rootMargin="0px"
              className="group flex min-h-[30svh] flex-col justify-between gap-[clamp(1.5rem,4vh,3rem)] border border-mira-border bg-white px-7 py-8 shadow-subtle transition-all duration-500 hover:-translate-y-1 hover:border-mira-brown hover:shadow-card sm:px-10 sm:py-[clamp(2rem,5vh,3.5rem)]"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-mira-brown font-serif text-2xl font-light text-white transition-colors duration-500 group-hover:bg-mira-charcoal">
                  {contact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted/70">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-3">
                <span className="block font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted">
                  {contact.role}
                </span>
                <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-tight text-mira-charcoal">
                  {contact.name}
                </h3>
                <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-mira-muted">
                  Availability, floor plates and settlement timing — and a walkthrough of the
                  site whenever it suits you.
                </p>
              </div>

              <a
                href={contact.tel}
                className="space-y-3 border-t border-mira-border pt-6 font-sans text-mira-tealDark transition-colors hover:text-mira-charcoal focus:outline-none focus-visible:ring-1 focus-visible:ring-mira-teal"
              >
                <span className="block font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted">
                  Direct line
                </span>
                <span className="flex items-center justify-between gap-4 text-base sm:text-lg">
                  <span className="inline-flex items-center gap-3">
                    <Phone className="h-4 w-4" />
                    <span className="tracking-wide">{contact.phone}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal
          variant="fade"
          delay={240}
          rootMargin="0px"
          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-mira-border pt-6 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-muted"
        >
          <span>{siteConfig.address.full}</span>
          <span className="text-mira-brown">Now Selling · Completion September 2026</span>
        </Reveal>
      </div>
    </section>
  );
}
