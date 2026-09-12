"use client";

import React, { useRef } from "react";
import { useScrollFrame } from "@/hooks/useScrollFrame";

/**
 * A photograph that pins to the viewport and opens from a centred window to
 * the full screen as the page scrolls past it.
 *
 * The frame is always exactly one viewport; only the clip window travels, so
 * the picture never re-lays-out and never distorts — `--ix`/`--iy` carry the
 * current inset in pixels and are readable by anything inside the frame, which
 * is how the caption stays glued to the bottom-left corner of the visible
 * window while that window grows.
 *
 * With JavaScript off, or for reduced-motion readers, the insets stay at their
 * `0px` fallback: the photograph simply sits full-screen and pinned.
 */
export default function ScrollExpand({
  children,
  overlay,
  aspect = 16 / 9,
  startHeight = 0.68,
  startWidth = 0.88,
  /** Scroll distance spent expanding, in viewport heights. */
  track = 1,
  className = "",
}: {
  children: React.ReactNode;
  overlay?: React.ReactNode;
  aspect?: number;
  startHeight?: number;
  startWidth?: number;
  track?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const last = useRef<number | null>(null);

  useScrollFrame(trackRef, (rect, vh) => {
    const frame = frameRef.current;
    if (!frame) return;

    const travel = rect.height - vh;
    const raw = travel > 0 ? -rect.top / travel : 1;
    // Finish opening at four fifths of the track so the photograph holds the
    // full screen for a beat before the section lets go.
    const progress = Math.min(1, Math.max(0, raw / 0.8));

    // Clip-path repaints the whole frame, so quantise: a few hundred steps is
    // past the eye's resolution over a full screen of travel.
    const step = Math.round(progress * 300) / 300;
    if (step === last.current) return;
    last.current = step;

    // The opening window keeps the photograph's own shape, so nothing is
    // cropped until it reaches the screen's shape at full bleed.
    let height = vh * startHeight;
    let width = height * aspect;
    const maxWidth = rect.width * startWidth;
    if (width > maxWidth) {
      width = maxWidth;
      height = width / aspect;
    }

    const rest = 1 - step;
    frame.style.setProperty("--ix", `${(((rect.width - width) / 2) * rest).toFixed(1)}px`);
    frame.style.setProperty("--iy", `${(((vh - height) / 2) * rest).toFixed(1)}px`);
    frame.style.setProperty("--zoom", (1 + 0.06 * rest).toFixed(4));
  });

  return (
    <div
      ref={trackRef}
      className={`relative w-full ${className}`}
      style={{ height: `calc(100svh + ${track * 100}svh)` }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div
          ref={frameRef}
          className="relative h-full w-full bg-mira-charcoal"
          style={{ clipPath: "inset(var(--iy, 0px) var(--ix, 0px))" }}
        >
          <div
            className="absolute inset-0"
            style={{ transform: "scale(var(--zoom, 1))", transformOrigin: "center" }}
          >
            {children}
          </div>
          {overlay && (
            <div
              className="pointer-events-none absolute"
              style={{
                left: "calc(var(--ix, 0px) + clamp(1.5rem, 4vw, 5rem))",
                right: "calc(var(--ix, 0px) + clamp(1.5rem, 4vw, 5rem))",
                bottom: "calc(var(--iy, 0px) + clamp(2rem, 4vw, 4rem))",
              }}
            >
              {overlay}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
