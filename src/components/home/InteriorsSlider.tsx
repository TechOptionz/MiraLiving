"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { featureSlides } from "@/content/site-content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InteriorsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  /*
   * Which slides have an <Image> mounted at all.
   *
   * Every slide used to render its photograph up front — five full-viewport
   * images on a section six screens down the page, three of them preloaded
   * ahead of the hero. Now a slide's image appears when it is reached or is
   * next in either direction, and stays once mounted so going back is instant.
   */
  const [reached, setReached] = useState(0);
  useEffect(() => {
    setReached((prev) => Math.max(prev, currentIndex));
  }, [currentIndex]);

  const mounted = useMemo(() => {
    const set = new Set<number>();
    for (let i = 0; i <= reached; i += 1) set.add(i);
    set.add((currentIndex + 1) % featureSlides.length);
    set.add((currentIndex - 1 + featureSlides.length) % featureSlides.length);
    return set;
  }, [reached, currentIndex]);

  // Functional updates, so the key handler below never reads a stale index.
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % featureSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + featureSlides.length) % featureSlides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // Arrow keys belong to whatever the visitor is editing. Without this the
      // brochure form could not be corrected without silently advancing the
      // slider several screens away.
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")
      ) {
        return;
      }

      // Only steer the slider while it is actually the thing on screen.
      const box = sectionRef.current?.getBoundingClientRect();
      if (!box || box.bottom <= 0 || box.top >= window.innerHeight) return;

      e.preventDefault();
      if (e.key === "ArrowRight") nextSlide();
      else prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentSlide = featureSlides[currentIndex];

  return (
    <section ref={sectionRef} className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-mira-brownDeep text-white">
      {/*
        The slide itself is the section background — every frame is stacked and
        cross-faded so the next render is already decoded when it comes forward.

        A faded-out layer is still a full-viewport layer the compositor has to
        carry, so once its cross-fade is over it is taken out of the rendering
        tree with `visibility` (delayed by the fade's own duration, so the
        transition still plays).
      */}
      <div className="absolute inset-0">
        {featureSlides.map((slide, idx) => {
          const active = idx === currentIndex;

          return (
            <div
              key={slide.id}
              aria-hidden={!active}
              style={{
                visibility: active ? "visible" : "hidden",
                transition: active
                  ? "opacity 1200ms ease-out, visibility 0s"
                  : "opacity 1200ms ease-out, visibility 0s linear 1200ms",
              }}
              className={`absolute inset-0 ${active ? "opacity-100" : "opacity-0"}`}
            >
              {mounted.has(idx) && (
                <Image
                  src={slide.image}
                  alt={`${slide.title} — Mira Living luxury interior`}
                  fill
                  loading="lazy"
                  quality={82}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              )}
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.09]" />
      </div>

      {/* Chapter header */}
      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-6 pt-28 sm:px-12 sm:pt-32 lg:px-16">
        <span className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-sand">
          Curated Interiors
        </span>
        <h2 className="mt-5 max-w-4xl font-serif text-[clamp(1.75rem,4vw,3.75rem)] font-light leading-[1.12] text-white">
          Mira Living is more than a home—it&rsquo;s a sanctuary where elegance meets adventure
        </h2>
      </div>

      {/* Active slide copy + controls */}
      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-6 pb-12 sm:px-12 sm:pb-16 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div key={currentIndex} className="animate-fadeIn max-w-2xl space-y-3">
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-mira-tealLight">
              Sanctuary Space · Detail 0{currentIndex + 1}
            </span>
            <h3 className="font-serif text-[clamp(1.6rem,3.4vw,3rem)] font-light leading-tight text-white">
              {currentSlide.title}
            </h3>
            <p className="max-w-xl font-sans text-sm font-light leading-relaxed text-mira-sandLight/90 sm:text-base">
              {currentSlide.description}
            </p>
            <span className="inline-block pt-1 font-sans text-[11px] uppercase tracking-widest text-white/60">
              {currentSlide.caption}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-6">
            <span className="font-sans text-xs uppercase tracking-[0.16em] text-mira-sand">
              {String(currentIndex + 1).padStart(2, "0")} / {String(featureSlides.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="flex h-14 w-14 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
                aria-label="Previous interior slide"
              >
                <ChevronLeft className="h-6 w-6 stroke-[1.25]" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-14 w-14 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
                aria-label="Next interior slide"
              >
                <ChevronRight className="h-6 w-6 stroke-[1.25]" />
              </button>
            </div>
          </div>
        </div>

        {/* Hairline navigator across the foot of the frame */}
        <div className="mt-10 grid grid-cols-5 gap-3 sm:gap-6">
          {featureSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              aria-current={idx === currentIndex}
              className={`border-t-2 pt-3 text-left transition-all ${
                idx === currentIndex
                  ? "border-mira-teal text-white"
                  : "border-white/20 text-white/50 hover:border-white/40 hover:text-white/80"
              }`}
            >
              <span className="mb-1 block font-sans text-[11px] uppercase tracking-widest">
                0{idx + 1}
              </span>
              <span className="block truncate font-serif text-xs font-light sm:text-sm">
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
