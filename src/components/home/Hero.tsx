"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { siteConfig } from "@/content/site-content";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";

export default function Hero() {
  const { openRegister } = useModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-mira-charcoal text-white">
      {/* Cinematic Full-Bleed Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/img/site/Hero-Mira-Bg.webp"
          className="w-full h-full object-cover object-center transform scale-[1.03] transition-transform duration-[2000ms] animate-kenburns"
        >
          <source src="/img/site/mira-living.mp4" type="video/mp4" />
        </video>
        {/* Editorial Gradients: Darker top and bottom vignette, letting center ocean glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85" />
        <div className="absolute inset-0 bg-noise opacity-15 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Top Spacer to align below floating header */}
      <div className="h-28" />

      {/* Hero Core Content: Centered, monumental editorial typography */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6 sm:space-y-8 my-auto">
        {/* Eyebrow / Location stamp */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/25 bg-black/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-mira-teal animate-pulse" />
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-white/90 font-medium">
            25–27 The Esplanade · Bargara, Queensland
          </span>
        </div>

        {/* White Wordmark Graphic */}
        <div className="py-2">
          <Image
            src="/img/site/mira-logo.svg"
            alt="Mira Living"
            width={200}
            height={68}
            priority
            className="w-36 sm:w-48 md:w-56 h-auto mx-auto filter drop-shadow-lg"
          />
        </div>

        {/* Hero H1 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-md">
          Oceanfront Living, <span className="italic font-normal font-serif text-mira-sandLight">Elevated</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl font-sans text-mira-sandLight/90 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          A limited collection of 25 bespoke 3-bedroom residences on the Coral Sea. From $1.425M.
        </p>

        {/* Dual Luxury Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6">
          <button
            onClick={openRegister}
            className="w-full sm:w-auto px-10 py-4 bg-mira-teal hover:bg-mira-tealDark text-white font-sans text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-float hover:scale-[1.02] active:scale-[0.99] border border-white/20"
          >
            Download Brochure
          </button>
          <Link
            href="/residences"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-sans text-xs tracking-[0.25em] uppercase transition-all duration-300 backdrop-blur-md border border-white/30 hover:border-white"
          >
            Explore Residences
          </Link>
        </div>
      </div>

      {/* Bottom Architectural Metadata Bar */}
      <div className="relative z-10 border-t border-white/15 bg-black/40 backdrop-blur-md py-4 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/80">
          <div className="flex items-center gap-6">
            <span className="tracking-[0.2em] uppercase font-light text-mira-sand">
              Status: Under Construction
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="tracking-[0.2em] uppercase font-light text-white/90">
              98% Completed
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="tracking-[0.2em] uppercase font-light text-mira-tealLight">
              Handover September 2026
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              aria-label={isMuted ? "Unmute ocean video" : "Mute ocean video"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="text-[10px] tracking-widest uppercase">{isMuted ? "Sound Off" : "Sound On"}</span>
            </button>
            <a
              href="#architecture"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
