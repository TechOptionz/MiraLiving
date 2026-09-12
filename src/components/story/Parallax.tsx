"use client";

import React, { useRef } from "react";
import { useScrollFrame } from "@/hooks/useScrollFrame";

/**
 * Fills its positioned parent and drifts its children against the scroll.
 * The moving layer is oversized so no edge is ever exposed.
 */
export default function Parallax({
  children,
  speed = 0.1,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useScrollFrame(frameRef, (rect, vh) => {
    const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
    if (layerRef.current) {
      layerRef.current.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    }
  });

  return (
    <div ref={frameRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div ref={layerRef} className="absolute inset-x-0 -top-[12%] -bottom-[12%] will-change-transform">
        {children}
      </div>
    </div>
  );
}
