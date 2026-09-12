import React from "react";
import Image from "next/image";
import { imageAspect } from "@/content/image-dimensions";

/**
 * Sizing for a frame that holds one photograph: it takes the photograph's own
 * shape, so the image fills it exactly and nothing is cropped away.
 *
 * `maxHeightVh` keeps a tall photograph from running past the screen — the
 * frame narrows and centres instead of the image being cut.
 */
export function photoFrameStyle(
  src: string,
  { maxHeightVh, fallbackAspect = 16 / 10 }: { maxHeightVh?: number; fallbackAspect?: number } = {}
): React.CSSProperties {
  const aspect = imageAspect(src) ?? fallbackAspect;
  return {
    aspectRatio: aspect,
    ...(maxHeightVh ? { maxWidth: `calc(${maxHeightVh}svh * ${aspect})` } : null),
  };
}

/**
 * A photograph shown whole.
 *
 * The frame is cut to the image's intrinsic ratio (from image-dimensions.ts),
 * so `object-cover` has nothing left to trim — the full picture is visible at
 * every width, with no letterboxing either.
 */
export default function PhotoFrame({
  src,
  alt,
  sizes,
  caption,
  maxHeightVh,
  priority = false,
  quality = 82,
  className = "",
  frameClassName = "",
  zoom = true,
}: {
  src: string;
  alt: string;
  sizes: string;
  /** Small corner note, e.g. "Artist Impression". */
  caption?: string;
  maxHeightVh?: number;
  priority?: boolean;
  quality?: number;
  /** Applied to the outer wrapper (margins, shadow width, etc.). */
  className?: string;
  /** Applied to the frame itself (border, shadow, background). */
  frameClassName?: string;
  zoom?: boolean;
}) {
  return (
    <div className={className}>
      <div
        style={photoFrameStyle(src, { maxHeightVh })}
        className={`group relative mx-auto w-full overflow-hidden bg-mira-sand ${frameClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes={sizes}
          className={`object-cover ${zoom ? "transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]" : ""}`}
        />
        {caption && (
          <span className="absolute bottom-3 right-3 bg-mira-charcoal/75 px-3 py-1.5 font-sans text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:bottom-4 sm:right-4">
            {caption}
          </span>
        )}
      </div>
    </div>
  );
}
