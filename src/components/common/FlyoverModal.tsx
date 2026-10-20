"use client";

import React, { useEffect, useRef } from "react";
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
 * It opens from a click, which is the gesture every browser accepts for
 * autoplay with audio. It only mounts once `siteConfig.flyoverVideo.src` is
 * set; with the src null the trigger renders as a "coming soon" stamp and
 * nothing here is reachable.
 *
 * Two encodes: the 720p file is listed first behind a `media` query so a
 * phone never downloads the 1080p one. Browsers pick the first `<source>`
 * whose query matches at load time.
 */
export default function FlyoverModal() {
  const { isFlyoverOpen, closeFlyover } = useModal();
  const panelRef = useFocusTrap<HTMLDivElement>(isFlyoverOpen, closeFlyover);
  const videoRef = useRef<HTMLVideoElement>(null);
  const film = siteConfig.flyoverVideo;

  // `autoPlay` in markup is honoured by most browsers after a click, but a
  // few (older Safari, some Android WebViews) want an explicit call once the
  // element exists. The catch is deliberate: if playback is refused the
  // poster and native controls remain, and the visitor presses play.
  useEffect(() => {
    if (!isFlyoverOpen) return;
    const video = videoRef.current;
    if (!video) return;
    const started = video.play();
    if (started?.catch) started.catch(() => {});
    return () => {
      video.pause();
    };
  }, [isFlyoverOpen]);

  if (!isFlyoverOpen || !film.src) return null;

  return (
    <div
      className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-mira-charcoal/90 p-3 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="flyover-title"
      aria-describedby="flyover-description"
    >
      <div className="fixed inset-0" onClick={closeFlyover} aria-hidden="true" />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-6xl bg-black text-white shadow-float focus:outline-none"
      >
        {/* Header: eyebrow on the left, running time and close on the right */}
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <span className="font-sans text-[11px] uppercase tracking-eyebrow text-mira-sandLight/85">
            Local fly over
            <span className="hidden text-white/40 sm:inline"> · {siteConfig.address.suburb}, Queensland</span>
          </span>
          <div className="flex items-center gap-3">
            <span className="font-sans text-[11px] tabular-nums tracking-[0.12em] text-white/45">
              {film.duration}
            </span>
            <button
              type="button"
              onClick={closeFlyover}
              aria-label="Close the fly-over film"
              className="flex h-9 w-9 items-center justify-center text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* The film. object-contain keeps the whole frame on any panel ratio. */}
        <div className="relative aspect-video w-full bg-black">
          <video
            ref={videoRef}
            poster={film.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
            controlsList="nodownload"
            className="h-full w-full object-contain"
          >
            {film.smallSrc && (
              <source src={film.smallSrc} type="video/mp4" media="(max-width: 767px)" />
            )}
            <source src={film.src} type="video/mp4" />
            {film.description}
          </video>
        </div>

        {/* Caption: title and the one-line description, with the credit set apart */}
        <div className="flex flex-col gap-2 border-t border-white/10 px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-5">
          <div className="min-w-0">
            <h2 id="flyover-title" className="font-serif text-xl font-light leading-tight sm:text-2xl">
              {film.title}
            </h2>
            <p id="flyover-description" className="mt-1 font-sans text-sm font-light text-white/65">
              {film.description}
            </p>
          </div>
          <span className="shrink-0 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-sand/80">
            {siteConfig.address.street} · {film.credit}
          </span>
        </div>
      </div>
    </div>
  );
}
