"use client";

import React, { useRef } from "react";
import { useScrollFrame } from "@/hooks/useScrollFrame";

/** A frame that opens from an inset window to full bleed as it scrolls into view. */
export default function ScrollInset({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const lastSide = useRef<number | null>(null);

  useScrollFrame(ref, (rect, vh) => {
    const el = ref.current;
    if (!el) return;

    const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
    // Clip-path cannot be composited — every change repaints the frame and the
    // full-bleed photograph inside it. Quantising to tenths of a percent keeps
    // the motion smooth to the eye while cutting the repaints by an order of
    // magnitude, and an unchanged value is never written back at all.
    const side = Math.round((1 - progress) * (window.innerWidth < 768 ? 4 : 7) * 10) / 10;
    if (side === lastSide.current) return;
    lastSide.current = side;

    // Fully open: drop the clip entirely rather than paying for inset(0% 0%).
    el.style.clipPath = side === 0 ? "" : `inset(${(side * 0.7).toFixed(2)}% ${side.toFixed(2)}%)`;
  });

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
