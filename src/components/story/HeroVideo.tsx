"use client";

import React from "react";
import BackdropVideo from "@/components/common/BackdropVideo";
import type { VideoSlot } from "@/content/story-content";

/**
 * The Story hero's motion layer.
 *
 * The poster is the footage's own first frame, so the element paints a finished
 * still immediately and the motion simply starts from it — there is no second
 * image underneath and nothing fades, so the hero never flashes one picture
 * before showing another. Reduced-motion users keep the poster: the video is
 * never started, so nothing moves behind the headline.
 *
 * BackdropVideo fetches and plays it straight from the markup — it is the
 * first thing on the page, so it must already be moving — then pauses
 * playback once the hero scrolls away. This is the heaviest asset on the
 * site, and it used to download and decode for the entire visit.
 */
export default function HeroVideo({ slot }: { slot: VideoSlot }) {
  return (
    <BackdropVideo
      src={slot.src}
      poster={slot.poster}
      aria-label={slot.description}
      // This is the Story page's own landing frame, so it starts immediately
      // rather than waiting to be scrolled into.
      priority
      // Decorative motion behind the headline — the page's meaning does not
      // depend on it, so it carries a label but no controls.
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  );
}
