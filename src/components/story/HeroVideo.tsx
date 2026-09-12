"use client";

import React, { useEffect, useRef } from "react";
import type { VideoSlot } from "@/content/story-content";

/**
 * The Story hero's motion layer.
 *
 * The poster is the footage's own first frame, so the element paints a finished
 * still immediately and the motion simply starts from it — there is no second
 * image underneath and nothing fades, so the hero never flashes one picture
 * before showing another. Reduced-motion users keep the poster: the video is
 * never started, so nothing moves behind the headline.
 */
export default function HeroVideo({ slot }: { slot: VideoSlot }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Autoplay is muted+inline, which every current browser allows; if a
    // policy still blocks it the poster simply stays.
    void video.play().catch(() => undefined);
  }, []);

  return (
    <video
      ref={videoRef}
      aria-label={slot.description}
      poster={slot.poster}
      muted
      loop
      playsInline
      preload="auto"
      // Decorative motion behind the headline — the page's meaning does not
      // depend on it, so it carries a label but no controls.
      className="absolute inset-0 h-full w-full object-cover object-center"
    >
      <source src={slot.src} type="video/mp4" />
    </video>
  );
}
