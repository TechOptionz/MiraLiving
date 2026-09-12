"use client";

import { RefObject, useEffect, useState } from "react";

/**
 * Whether `ref` is currently near the viewport.
 *
 * Used to park decorative motion — an infinite animation, a playing video —
 * while the element the visitor is looking at is somewhere else entirely.
 * Starts as `true` so server and first client render agree and nothing is
 * suppressed before the observer has had a chance to report.
 */
export function useOnScreen(ref: RefObject<Element>, rootMargin = "200px") {
  const [onScreen, setOnScreen] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return onScreen;
}
