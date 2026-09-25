import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { completedTeaser, displayResidence } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import PhotoFrame from "@/components/common/PhotoFrame";

/**
 * Follows the render slider: the same rooms, now photographed in the finished
 * building. Three photographs and a link to the full set on the Residences page.
 */
export default function CompletedTeaser() {
  const photos = completedTeaser.photos.map(
    (src) => displayResidence.photos.find((p) => p.src === src) ?? { src, alt: "", room: "" }
  );

  return (
    <section className="border-t border-mira-border bg-mira-ground px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="max-w-2xl space-y-5 lg:col-span-7">
            <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
              {completedTeaser.eyebrow}
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(2rem,4.6vw,3.75rem)] font-light leading-[1.08] text-mira-charcoal">
              {completedTeaser.headline}
            </Reveal>
            <Reveal delay={220} className="font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg">
              {completedTeaser.body}
            </Reveal>
          </div>
          <Reveal delay={300} className="lg:col-span-5 lg:text-right">
            <Link
              href={completedTeaser.href}
              className="inline-flex items-center gap-3 border-b border-mira-charcoal pb-1 font-sans text-[12px] uppercase tracking-[0.18em] text-mira-charcoal transition-colors hover:border-mira-brown hover:text-mira-brown"
            >
              {completedTeaser.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
          {photos.map((photo, idx) => (
            <Reveal key={photo.src} delay={idx * 120} className={idx === 1 ? "sm:-mt-10" : idx === 2 ? "sm:mt-10" : ""}>
              <Link href={completedTeaser.href} className="group block">
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={78}
                  frameClassName="shadow-card"
                />
                <span className="mt-4 block font-sans text-[12px] uppercase tracking-[0.16em] text-mira-brown transition-colors group-hover:text-mira-charcoal">
                  {photo.room}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
