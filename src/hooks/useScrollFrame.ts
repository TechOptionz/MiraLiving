"use client";

import { RefObject, useEffect, useRef } from "react";

/**
 * Calls `onFrame` once per animation frame while `ref` is on screen and the
 * page is scrolling or resizing. Skipped entirely for reduced-motion users, so
 * elements keep their static, un-animated styles.
 */
export function useScrollFrame(
  ref: RefObject<HTMLElement>,
  onFrame: (rect: DOMRect, viewportHeight: number) => void
) {
  const callback = useRef(onFrame);
  callback.current = onFrame;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = true;

    const run = () => {
      frame = 0;
      callback.current(el.getBoundingClientRect(), window.innerHeight);
    };
    const schedule = () => {
      if (visible && !frame) frame = requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    });
    observer.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    run();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref]);
}
