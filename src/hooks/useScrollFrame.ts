"use client";

import { RefObject, useEffect, useRef } from "react";

type Subscriber = {
  el: HTMLElement;
  onFrame: (rect: DOMRect, viewportHeight: number) => void;
  visible: boolean;
};

/*
 * One scheduler for every scroll-driven element on the page.
 *
 * Each subscriber used to own its own rAF, and each callback read
 * `getBoundingClientRect()` and then immediately wrote a style. With several
 * on screen at once — the Story page runs a parallax, a rail and two insets —
 * that read/write/read/write order forces the browser to recompute layout once
 * per element per frame. Here every rect is measured first and every style
 * written afterwards, so a frame costs a single layout no matter how many
 * elements are animating.
 */
const subscribers = new Set<Subscriber>();
let frame = 0;
let listening = false;

const run = () => {
  frame = 0;
  const viewportHeight = window.innerHeight;

  // Read phase — measure everything before touching a single style.
  const measured: Array<[Subscriber, DOMRect]> = [];
  subscribers.forEach((sub) => {
    if (sub.visible) measured.push([sub, sub.el.getBoundingClientRect()]);
  });

  // Write phase — styles only, so no measurement is invalidated mid-frame.
  for (const [sub, rect] of measured) sub.onFrame(rect, viewportHeight);
};

const schedule = () => {
  if (!frame) frame = requestAnimationFrame(run);
};

const startListening = () => {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
};

const stopListening = () => {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  cancelAnimationFrame(frame);
  frame = 0;
};

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

    const sub: Subscriber = {
      el,
      onFrame: (rect, vh) => callback.current(rect, vh),
      visible: true,
    };
    subscribers.add(sub);
    startListening();

    // Off-screen elements stay subscribed but are skipped in the read phase,
    // so a long page only ever measures what is actually in view.
    const observer = new IntersectionObserver(([entry]) => {
      sub.visible = entry.isIntersecting;
      schedule();
    });
    observer.observe(el);
    schedule();

    return () => {
      observer.disconnect();
      subscribers.delete(sub);
      if (!subscribers.size) stopListening();
    };
  }, [ref]);
}
