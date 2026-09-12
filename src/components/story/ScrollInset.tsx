"use client";

import React, { useRef } from "react";
import { useScrollFrame } from "@/hooks/useScrollFrame";

/** A frame that opens from an inset window to full bleed as it scrolls into view. */
export default function ScrollInset({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useScrollFrame(ref, (rect, vh) => {
    const el = ref.current;
    if (!el) return;
    const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
    const side = (1 - progress) * (window.innerWidth < 768 ? 4 : 7);
    el.style.clipPath = `inset(${(side * 0.7).toFixed(2)}% ${side.toFixed(2)}%)`;
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
