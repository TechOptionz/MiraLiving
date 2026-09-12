"use client";

import React, { useEffect, useRef, useState } from "react";
import type { VideoSlot } from "@/content/story-content";

/**
 * The Story hero's motion layer.
 *
 * Sits above the hero photograph and fades in only once the file can actually
 * play, so the hero is a finished still at first paint rather than a black box
 * waiting on a download. Reduced-motion users keep the still: the video is
 * never started, so nothing moves behind the headline.
 */
export default function HeroVideo({ slot }: { slot: VideoSlot }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveal = () => setReady(true);

    // Autoplay is muted+inline, which every current browser allows; if a
    // policy still blocks it the still simply stays.
    void video.play().then(reveal).catch(() => undefined);

    video.addEventListener("playing", reveal);
    return () => video.removeEventListener("playing", reveal);
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
      className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-out ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      <source src={slot.src} type="video/mp4" />
    </video>
  );
}
