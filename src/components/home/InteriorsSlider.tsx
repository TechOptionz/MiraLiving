"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { featureSlides } from "@/content/site-content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InteriorsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featureSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featureSlides.length) % featureSlides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentSlide = featureSlides[currentIndex];

  return (
    <section className="relative py-28 sm:py-40 bg-mira-brownDeep text-white overflow-hidden">
      {/* Background ambient sunset video */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/img/site/Mira-Sunset.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-mira-brownDeep/90" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        {/* Editorial Title & Overview */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/15 pb-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-sand block font-medium">
              Curated Interiors
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-[1.15] text-white">
              Mira Living is more than a home—it’s a sanctuary where elegance meets adventure
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-mira-sand">
              {String(currentIndex + 1).padStart(2, "0")} / {String(featureSlides.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-14 h-14 border border-white/30 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                aria-label="Previous interior slide"
              >
                <ChevronLeft className="w-6 h-6 stroke-[1.25]" />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 border border-white/30 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                aria-label="Next interior slide"
              >
                <ChevronRight className="w-6 h-6 stroke-[1.25]" />
              </button>
            </div>
          </div>
        </div>

        {/* Monumental Visual Canvas (Huge scale!) */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] min-h-[500px] max-h-[850px] overflow-hidden shadow-2xl group border border-white/10">
          <Image
            src={currentSlide.image}
            alt={`${currentSlide.title} - Mira Living luxury interior`}
            fill
            priority
            className="object-cover transition-all duration-1000 ease-out group-hover:scale-105"
            sizes="100vw"
          />

          {/* Floating Minimalist Caption Box */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 max-w-2xl text-white space-y-3 pointer-events-auto">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-mira-tealLight font-medium">
              Sanctuary Space · Detail 0{currentIndex + 1}
            </span>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              {currentSlide.title}
            </h3>
            <p className="text-sm sm:text-base font-sans text-mira-sandLight/90 leading-relaxed font-light max-w-xl">
              {currentSlide.description}
            </p>
          </div>

          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bg-black/60 backdrop-blur-sm px-3 py-1 text-[11px] text-white/80 font-sans tracking-widest uppercase">
            {currentSlide.caption}
          </div>
        </div>

        {/* Interactive Thumbnail Line Navigator */}
        <div className="grid grid-cols-5 gap-3 sm:gap-6 pt-4">
          {featureSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`text-left pt-3 border-t-2 transition-all ${
                idx === currentIndex
                  ? "border-mira-teal text-white"
                  : "border-white/20 text-white/50 hover:text-white/80 hover:border-white/40"
              }`}
            >
              <span className="text-[10px] font-sans tracking-widest uppercase block mb-1">
                0{idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-serif truncate block font-light">
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
