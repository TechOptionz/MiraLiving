import React from "react";
import Image from "next/image";
import Link from "next/link";
import { locationTeaser, siteConfig } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import { ArrowRight, MapPin } from "lucide-react";

export default function LocationTeaser() {
  return (
    <section className="flex min-h-screen w-full flex-col justify-center overflow-hidden border-t border-mira-border bg-mira-ground px-6 pb-[clamp(3rem,7vh,5rem)] pt-[clamp(7rem,15vh,9.5rem)] sm:px-10 lg:px-12 xl:px-16">
      {/*
        Copy and map sit side by side rather than stacked. The aerial is an
        annotated mud map held at 16:9 and never cropped, so stacking it left it
        marooned in whitespace; beside the text it reads at full size and the
        whole section still settles inside one screen.

        Both the frame and the copy are sized off the viewport so the pair grows
        into a large screen instead of leaving a band of empty ground around it —
        the map takes as much width as its column allows, capped only by the
        height left over once the header and padding are paid for.
      */}
      <div className="mx-auto grid w-full max-w-[1700px] flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
        <div className="flex flex-col lg:col-span-5">
          <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
            The Coastal Enclave
          </Reveal>

          <Reveal as="h2" delay={120} className="mt-4 font-serif text-[clamp(2.1rem,3.9vw,4rem)] font-light leading-[1.08] text-mira-charcoal">
            {locationTeaser.headline}
          </Reveal>

          <Reveal delay={220} className="mt-[clamp(1.25rem,2.6vh,2rem)] max-w-[54ch] space-y-4 font-sans text-[clamp(1rem,1.05vw,1.15rem)] font-light leading-relaxed text-mira-muted">
            <p>{locationTeaser.paragraph1}</p>
            <p>{locationTeaser.paragraph2}</p>
          </Reveal>

          {/* Proximity schedule — hairline rows, same drawing-set language as the specification grid. */}
          <Reveal delay={300} className="mt-[clamp(1.75rem,3.4vh,2.75rem)] grid grid-cols-2 gap-x-8 border-t border-mira-border">
            {locationTeaser.proximity.map((item) => (
              <div key={item.label} className="border-b border-mira-border py-[clamp(0.85rem,1.8vh,1.25rem)]">
                <span className="block font-sans text-[11px] uppercase tracking-[0.15em] text-mira-muted">
                  {item.label}
                </span>
                <span className="mt-1 block font-serif text-xl font-light text-mira-charcoal sm:text-2xl">
                  {item.value}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal variant="fade" delay={380} className="mt-[clamp(1.75rem,3.4vh,2.75rem)]">
            <Link
              href="/location"
              className="group inline-flex items-center gap-3 bg-mira-brown px-8 py-4 font-sans text-xs uppercase tracking-[0.15em] text-white shadow-subtle transition-all hover:bg-mira-brownDark"
            >
              <span>Explore Location &amp; Lifestyle</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {/*
            Height is capped so 16:9 never grows past ~62vh — on short screens
            the map shrinks rather than pushing the section past one viewport.
          */}
          <Reveal
            variant="mask"
            delay={200}
            className="relative mx-auto aspect-[16/9] w-full max-w-[min(100%,calc(62vh*16/9))] overflow-hidden border border-mira-border bg-mira-sand shadow-card"
          >
            <Image
              src={locationTeaser.aerialImage}
              alt={locationTeaser.aerialAlt}
              fill
              quality={92}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-contain"
            />
          </Reveal>

          <Reveal
            variant="fade"
            delay={320}
            className="mx-auto mt-4 flex w-full max-w-[min(100%,calc(62vh*16/9))] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="inline-flex items-center gap-2 font-sans text-[12px] text-mira-charcoal">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-mira-tealDark" />
              {siteConfig.address.full}
            </span>
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-mira-muted">
              Annotated aerial
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
