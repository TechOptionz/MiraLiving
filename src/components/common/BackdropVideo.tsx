"use client";

import React, { useEffect, useRef } from "react";

/**
 * A decorative full-bleed video that runs while it is on screen.
 *
 * `priority` marks the footage a visitor lands on — a page hero. That one
 * carries the real `autoPlay`/`preload="auto"` attributes, so the browser
 * starts fetching during HTML parse and is already decoding before React
 * hydrates: the motion is running by the time the fold is readable, with no
 * JavaScript in the path. Everything below the fold keeps `preload="none"`
 * and is fetched the moment it comes within 300px of the viewport, so a
 * several-megabyte file never competes with the hero for bandwidth.
 *
 * Playback still pauses when the element scrolls away — left alone, a looping
 * hero keeps decoding frames for the whole visit, with the visitor ten
 * sections down the page and the GPU still drawing a beach.
 *
 * Autoplay can be refused even for muted video (iOS Low Power Mode, a data
 * saver, some enterprise policies). A refusal is not treated as final: the
 * element retries as data arrives, when the tab becomes visible again, and on
 * the visitor's first interaction with the page, which is a gesture every
 * browser accepts.
 */
export default function BackdropVideo({
  src,
  poster,
  className = "",
  priority = false,
  ...rest
}: {
  src: string;
  poster: string;
  className?: string;
  /** True for footage in the first viewport — fetches and plays immediately. */
  priority?: boolean;
} & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Reduced motion keeps the poster — which is the footage's own first
    // frame, so the composition is intact and simply still. A `priority`
    // element may already have begun under its markup `autoPlay`; stop it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.autoplay = false;
      video.pause();
      return;
    }

    let onScreen = priority;
    let disposed = false;
    let gestureArmed = false;

    const fetchNow = () => {
      if (video.preload !== "auto") video.preload = "auto";
      // `load()` resets the element and restarts the request, so it is only
      // for a source the browser has not touched yet.
      if (video.networkState === video.NETWORK_EMPTY) video.load();
    };

    const play = () => {
      if (disposed || !onScreen) return;
      fetchNow();
      const started = video.play();
      // Older Safari returns undefined rather than a promise.
      if (started?.catch) started.catch(armGesture);
    };

    // One retry on the visitor's first gesture, for the cases where the
    // browser will not autoplay muted video at all.
    const onGesture = () => {
      gestureArmed = false;
      removeGesture();
      play();
    };
    const gestures = ["pointerdown", "touchstart", "keydown"] as const;
    function armGesture() {
      if (disposed || gestureArmed) return;
      gestureArmed = true;
      for (const type of gestures) {
        window.addEventListener(type, onGesture, { once: true, passive: true });
      }
    }
    function removeGesture() {
      for (const type of gestures) window.removeEventListener(type, onGesture);
    }

    const onVisibility = () => {
      if (document.visibilityState === "visible") play();
    };

    // Enough data to show motion, or a stall the element recovered from —
    // either way, make sure it is actually running.
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", onVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) play();
        else video.pause();
      },
      // Slack ahead of the viewport, so it is already running when reached.
      { rootMargin: "300px" }
    );
    observer.observe(video);

    // Don't wait for the observer's first callback — a hero is on screen now.
    play();

    return () => {
      disposed = true;
      observer.disconnect();
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", onVisibility);
      removeGesture();
      video.pause();
    };
  }, [priority]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={priority}
      preload={priority ? "auto" : "none"}
      disablePictureInPicture
      tabIndex={-1}
      className={className}
      {...rest}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
