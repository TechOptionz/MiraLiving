import React from "react";
import Image from "next/image";
import Link from "next/link";
import { locationTeaser, siteConfig } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import { ArrowRight, MapPin } from "lucide-react";

export default function LocationTeaser() {
  return (
    <section className="flex min-h-screen w-full items-center overflow-hidden border-t border-mira-border bg-mira-ground px-6 pb-16 pt-28 sm:px-12 lg:px-16">
      {/*
        Copy and map sit side by side rather than stacked. The aerial is an
        annotated mud map held at 16:9 and never cropped, so stacking it left it
        marooned in whitespace; beside the text it reads at full size and the
        whole section still settles inside one screen.
      */}
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col lg:col-span-5">
          <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
            The Coastal Enclave
          </Reveal>

          <Reveal as="h2" delay={120} className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.1] text-mira-charcoal">
            {locationTeaser.headline}
          </Reveal>

          <Reveal delay={220} className="mt-6 space-y-4 font-sans text-base font-light leading-relaxed text-mira-muted">
            <p>{locationTeaser.paragraph1}</p>
            <p>{locationTeaser.paragraph2}</p>
          </Reveal>

          {/* Proximity schedule — hairline rows, same drawing-set language as the specification grid. */}
          <Reveal delay={300} className="mt-9 grid grid-cols-2 gap-x-8 border-t border-mira-border">
            {locationTeaser.proximity.map((item) => (
              <div key={item.label} className="border-b border-mira-border py-3.5">
                <span className="block font-sans text-[10px] uppercase tracking-[0.22em] text-mira-muted">
                  {item.label}
                </span>
                <span className="mt-1 block font-serif text-lg font-light text-mira-charcoal sm:text-xl">
                  {item.value}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal variant="fade" delay={380} className="mt-9">
            <Link
              href="/location"
              className="group inline-flex items-center gap-3 bg-mira-brown px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-white shadow-subtle transition-all hover:bg-mira-brownDark"
            >
              <span>Explore Location &amp; Lifestyle</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {/*
            Height is capped so 16:9 never grows past ~52vh — on short screens
            the map shrinks rather than pushing the section past one viewport.
          */}
          <Reveal
            variant="mask"
            delay={200}
            className="relative mx-auto aspect-[16/9] w-full max-w-[min(100%,calc(52vh*16/9))] overflow-hidden border border-mira-border bg-mira-sand shadow-card"
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
            className="mx-auto mt-4 flex w-full max-w-[min(100%,calc(52vh*16/9))] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="inline-flex items-center gap-2 font-sans text-[11px] text-mira-charcoal">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-mira-tealDark" />
              {siteConfig.address.full}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-mira-muted">
              Annotated aerial
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
