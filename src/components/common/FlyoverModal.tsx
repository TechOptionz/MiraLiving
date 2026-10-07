"use client";

import React from "react";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { siteConfig } from "@/content/site-content";

/**
 * Lightbox for the local fly-over film that replaced the "Check Availability"
 * button on the home page (client request, Oct 2026).
 *
 * The film plays with its own controls and sound available — unlike the
 * decorative backdrops, this one is the content, so it is not muted or looped.
 * It only mounts once `siteConfig.flyoverVideo.src` is set; until the client's
 * footage arrives the trigger renders as a "coming soon" stamp and nothing here
 * is reachable.
 */
export default function FlyoverModal() {
  const { isFlyoverOpen, closeFlyover } = useModal();
  const panelRef = useFocusTrap<HTMLDivElement>(isFlyoverOpen, closeFlyover);
  const film = siteConfig.flyoverVideo;

  if (!isFlyoverOpen || !film.src) return null;

  return (
    <div
      className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-mira-charcoal/85 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="flyover-title"
    >
      <div className="fixed inset-0" onClick={closeFlyover} aria-hidden="true" />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-6xl bg-black shadow-float focus:outline-none"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <h2
            id="flyover-title"
            className="font-sans text-[11px] uppercase tracking-eyebrow text-mira-sandLight/85"
          >
            Local fly over · {film.title}
          </h2>
          <button
            type="button"
            onClick={closeFlyover}
            aria-label="Close the fly-over film"
            className="flex h-9 w-9 items-center justify-center text-white/70 transition-colors hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <video
            src={film.src}
            poster={film.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
          >
            {film.description}
          </video>
        </div>
      </div>
    </div>
  );
}
