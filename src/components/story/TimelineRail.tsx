"use client";

import React, { useRef } from "react";
import { useScrollFrame } from "@/hooks/useScrollFrame";

/** Vertical hairline whose fill follows the reader down the timeline. */
export default function TimelineRail({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const lastProgress = useRef<number | null>(null);

  useScrollFrame(railRef, (rect, vh) => {
    // A hairline one pixel wide: hundredths are far finer than it can show, and
    // skipping unchanged values keeps the rail off the compositor when idle.
    const progress =
      Math.round(Math.min(1, Math.max(0, (vh * 0.65 - rect.top) / rect.height)) * 200) / 200;
    if (progress === lastProgress.current) return;
    lastProgress.current = progress;
    if (fillRef.current) fillRef.current.style.transform = `scaleY(${progress})`;
  });

  return (
    <div
      ref={railRef}
      aria-hidden="true"
      className={`absolute bottom-0 top-0 w-px ${tone === "dark" ? "bg-white/15" : "bg-mira-border"} ${className}`}
    >
      <div
        ref={fillRef}
        className={`absolute inset-0 origin-top ${tone === "dark" ? "bg-mira-sand/80" : "bg-mira-brown/70"}`}
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
