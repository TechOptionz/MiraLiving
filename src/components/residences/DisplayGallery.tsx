"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";
import { displayResidence } from "@/content/site-content";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import Reveal from "@/components/common/Reveal";

const photos = displayResidence.photos;

/**
 * Photography of the completed residence.
 *
 * Every photograph is 3:2, so the tiles are all cut to that ratio and nothing
 * is cropped away in the grid; the one exception is the pair stacked beside
 * the lead image, which lose a gap's worth of height to line up with it.
 *
 * Eleven tiles are laid out; the last carries a count and opens the lightbox
 * on the twelfth, where the whole set can be paged through.
 */
const SHOWN = 11;

function Tile({
  index,
  className = "",
  onOpen,
  sizes,
  more,
  stretch = false,
}: {
  index: number;
  className?: string;
  onOpen: (i: number) => void;
  sizes: string;
  more?: number;
  stretch?: boolean;
}) {
  const photo = photos[index];
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={more ? `Open all ${photos.length} photographs` : `Open photograph: ${photo.room}`}
      className={`group relative block w-full overflow-hidden bg-mira-sand ${stretch ? "h-full" : "aspect-[3/2]"} ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        quality={78}
        sizes={sizes}
        className={`object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] ${more ? "brightness-[0.55]" : ""}`}
      />
      {more ? (
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
          <Plus className="h-6 w-6 stroke-[1.25]" />
          <span className="font-sans text-[12px] uppercase tracking-[0.18em]">{more} more</span>
        </span>
      ) : (
        <span className="absolute bottom-3 left-3 bg-mira-charcoal/70 px-2.5 py-1 font-sans text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {photo.room}
        </span>
      )}
    </button>
  );
}

export default function DisplayGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const dialogRef = useFocusTrap<HTMLDivElement>(open, close);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);
  const next = useCallback(() => setIndex((i) => (i + 1) % photos.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + photos.length) % photos.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  const current = photos[index];

  return (
    <section
      id="completed"
      className="scroll-mt-24 border-t border-mira-border bg-mira-ground px-6 py-24 sm:px-12 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="max-w-3xl space-y-5 lg:col-span-8">
            <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
              {displayResidence.eyebrow}
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4.4vw,3.5rem)] font-light leading-[1.12] text-mira-charcoal">
              {displayResidence.headline}
            </Reveal>
            <Reveal delay={220} className="font-sans text-[16px] leading-[1.75] text-mira-brownDark sm:text-lg">
              {displayResidence.intro}
            </Reveal>
          </div>
          <Reveal delay={300} className="lg:col-span-4 lg:text-right">
            <span className="font-serif text-4xl font-light leading-none text-mira-charcoal">{photos.length}</span>
            <span className="ml-3 font-sans text-[12px] uppercase tracking-[0.16em] text-mira-brown">
              photographs
            </span>
          </Reveal>
        </div>

        {/* The grid: a 12-column editorial layout, every tile 3:2. */}
        <Reveal delay={200} className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-4">
          <Tile index={0} onOpen={openAt} className="sm:col-span-8" sizes="(max-width: 640px) 100vw, (max-width: 1400px) 66vw, 930px" />
          <div className="grid grid-cols-2 gap-3 sm:col-span-4 sm:grid-cols-1 sm:grid-rows-2 sm:gap-4">
            <Tile index={1} onOpen={openAt} stretch sizes="(max-width: 640px) 50vw, (max-width: 1400px) 33vw, 460px" />
            <Tile index={2} onOpen={openAt} stretch sizes="(max-width: 640px) 50vw, (max-width: 1400px) 33vw, 460px" />
          </div>

          <Tile index={3} onOpen={openAt} className="sm:col-span-4" sizes="(max-width: 640px) 100vw, (max-width: 1400px) 33vw, 460px" />
          <Tile index={4} onOpen={openAt} className="sm:col-span-4" sizes="(max-width: 640px) 100vw, (max-width: 1400px) 33vw, 460px" />
          <Tile index={5} onOpen={openAt} className="sm:col-span-4" sizes="(max-width: 640px) 100vw, (max-width: 1400px) 33vw, 460px" />

          <Tile index={6} onOpen={openAt} className="sm:col-span-6" sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px" />
          <Tile index={7} onOpen={openAt} className="sm:col-span-6" sizes="(max-width: 640px) 100vw, (max-width: 1400px) 50vw, 700px" />

          <Tile index={8} onOpen={openAt} className="sm:col-span-4" sizes="(max-width: 640px) 100vw, (max-width: 1400px) 33vw, 460px" />
          <Tile index={9} onOpen={openAt} className="sm:col-span-4" sizes="(max-width: 640px) 100vw, (max-width: 1400px) 33vw, 460px" />
          <Tile
            index={10}
            onOpen={openAt}
            className="sm:col-span-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1400px) 33vw, 460px"
            more={photos.length - SHOWN + 1}
          />
        </Reveal>

        <p className="mt-6 font-sans text-[12px] leading-relaxed text-mira-brown">{displayResidence.note}</p>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="animate-fadeIn fixed inset-0 z-50 flex flex-col bg-black/95 text-white"
          role="dialog"
          aria-modal="true"
          aria-label={`Photograph ${index + 1} of ${photos.length}: ${current.room}`}
          onClick={close}
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="flex h-full w-full flex-col focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <div className="flex items-baseline gap-4">
                <span className="font-sans text-[12px] uppercase tracking-[0.16em] text-white/60">
                  {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg font-light sm:text-xl">{current.room}</span>
              </div>
              <button
                type="button"
                onClick={close}
                className="p-2 text-white/80 transition-colors hover:text-white"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6 stroke-[1.5]" />
              </button>
            </div>

            <div className="relative flex-1 px-4 pb-4 sm:px-20">
              <div key={current.src} className="animate-fadeIn relative h-full w-full">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  priority
                  quality={85}
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-black/60 sm:left-6 sm:h-14 sm:w-14"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="h-6 w-6 stroke-[1.25]" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-black/60 sm:right-6 sm:h-14 sm:w-14"
                aria-label="Next photograph"
              >
                <ChevronRight className="h-6 w-6 stroke-[1.25]" />
              </button>
            </div>

            <p className="px-5 pb-5 text-center font-sans text-[12px] text-white/55 sm:px-8">
              {displayResidence.note}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
