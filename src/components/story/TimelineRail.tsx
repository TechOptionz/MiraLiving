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

  useScrollFrame(railRef, (rect, vh) => {
    const progress = Math.min(1, Math.max(0, (vh * 0.65 - rect.top) / rect.height));
    if (fillRef.current) fillRef.current.style.transform = `scaleY(${progress.toFixed(3)})`;
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
