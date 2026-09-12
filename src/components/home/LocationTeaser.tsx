import React from "react";
import Image from "next/image";
import Link from "next/link";
import { locationTeaser } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import { ArrowRight } from "lucide-react";

export default function LocationTeaser() {
  return (
    <section className="flex min-h-screen w-full items-center overflow-hidden border-t border-mira-border bg-mira-ground px-6 pb-16 pt-28 sm:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px] space-y-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-4">
            <Reveal variant="fade" className="block font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-mira-brown">
              The Coastal Enclave
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-light leading-[1.1] text-mira-charcoal">
              {locationTeaser.headline}
            </Reveal>
            <Reveal delay={220} className="max-w-2xl font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg">
              {locationTeaser.paragraph1}
            </Reveal>
          </div>

          <Reveal variant="fade" delay={300}>
            <Link
              href="/location"
              className="inline-flex shrink-0 items-center gap-3 bg-mira-brown px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-white shadow-subtle transition-all hover:bg-mira-brownDark"
            >
              <span>Explore Location &amp; Lifestyle</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/*
          This aerial is an annotated mud map — the place names and the site
          marker are burnt into the pixels. It is held at its native 16:9 and
          never cropped to fill, because a cover crop slices the edge labels off.
        */}
        <Reveal
          variant="mask"
          delay={200}
          /*
            Width is capped so that 16:9 never grows past ~44vh — the map and
            the copy above it then settle inside a single screen, instead of
            the map pushing the section to one-and-a-half.
          */
          className="relative mx-auto aspect-[16/9] w-full max-w-[min(100%,calc(44vh*16/9))] overflow-hidden border border-mira-border bg-mira-sand shadow-2xl"
        >
          <Image
            src={locationTeaser.aerialImage}
            alt={locationTeaser.aerialAlt}
            fill
            quality={92}
            sizes="(max-width: 1024px) 100vw, 96vw"
            className="object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}
