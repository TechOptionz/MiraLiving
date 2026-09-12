import React from "react";
import Image from "next/image";
import type { ImageSlot as ImageSlotContent } from "@/content/story-content";
import { slotAspect } from "@/content/image-dimensions";

/**
 * Sizing for the frame that holds a slot: it takes the photograph's own shape,
 * so the image fills it exactly and nothing is cropped away.
 *
 * `maxHeightVh` keeps a tall photograph in a wide column from running past the
 * screen — the frame narrows and centres instead of the image being cut.
 */
export function frameStyle(slot: ImageSlotContent, maxHeightVh?: number): React.CSSProperties {
  const aspect = slotAspect(slot);
  return {
    aspectRatio: aspect,
    ...(maxHeightVh ? { maxWidth: `calc(${maxHeightVh}svh * ${aspect})` } : null),
  };
}

/**
 * Every photograph on the Story page renders through here.
 *
 * With `slot.src` set it is a plain filled next/image; with `src` null it is an
 * art-directed placeholder that states what belongs in the frame. Swapping a
 * placeholder for the real photograph is a one-line content change — see
 * src/content/story-content.ts.
 *
 * Fills its positioned parent, which owns the aspect ratio.
 */
export default function ImageSlot({
  slot,
  sizes = "100vw",
  priority = false,
  tone = "light",
  className = "object-cover",
}: {
  slot: ImageSlotContent;
  sizes?: string;
  priority?: boolean;
  tone?: "light" | "dark";
  className?: string;
}) {
  if (slot.src) {
    return (
      <Image
        src={slot.src}
        alt={slot.alt}
        fill
        priority={priority}
        sizes={sizes}
        // Photographs at this scale carry 72 without visible loss, and it keeps
        // the large social JPEGs from dominating page weight.
        quality={72}
        className={className}
      />
    );
  }

  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${slot.label}${slot.note ? ` — ${slot.note}` : ""}`}
      className={`absolute inset-0 overflow-hidden ${
        dark
          ? "bg-[linear-gradient(150deg,#3D322B_0%,#241E1A_55%,#151110_100%)]"
          : "bg-[linear-gradient(150deg,#F1E8DD_0%,#E4D6C6_55%,#D6C3AE_100%)]"
      }`}
    >
      <div className={`absolute inset-0 bg-noise ${dark ? "opacity-25" : "opacity-25"}`} />
      <div
        className={`absolute -left-1/4 -top-1/4 h-3/4 w-3/4 rounded-full blur-3xl ${
          dark ? "bg-mira-brown/25" : "bg-white/40"
        }`}
      />
      <div className={`absolute inset-4 border sm:inset-6 ${dark ? "border-white/15" : "border-mira-brown/20"}`} />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full border font-serif text-2xl italic ${
            dark ? "border-white/30 text-white/70" : "border-mira-brown/35 text-mira-brown/70"
          }`}
        >
          m
        </span>
        <p
          className={`mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.16em] sm:text-[12px] ${
            dark ? "text-white/75" : "text-mira-brownDark/80"
          }`}
        >
          {slot.label}
        </p>
        {slot.note && (
          <p
            className={`mt-3 max-w-[18rem] font-serif text-base italic leading-snug sm:text-lg ${
              dark ? "text-white/60" : "text-mira-brown/80"
            }`}
          >
            {slot.note}
          </p>
        )}
      </div>

      <div
        className={`absolute inset-x-6 bottom-6 flex justify-between font-sans text-[11px] uppercase tracking-[0.16em] sm:inset-x-10 sm:bottom-8 ${
          dark ? "text-white/45" : "text-mira-brown/60"
        }`}
      >
        <span>Image to come</span>
        <span>{slot.ratio}</span>
      </div>
    </div>
  );
}
