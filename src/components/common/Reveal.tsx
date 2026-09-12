"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "li" | "blockquote";
  /** up: fade + rise · fade: opacity only · mask: bottom-up clip with a slow settle of the first child */
  variant?: "up" | "fade" | "mask";
  delay?: number;
  id?: string;
  className?: string;
  /**
   * Observer root margin. The default holds an element back until it is a little
   * way onto the screen; pass "0px" where the content is laid out to fill a whole
   * viewport, so a row resting against the bottom edge still reveals.
   */
  rootMargin?: string;
  /** Merged with the reveal's own custom properties — used to size frames. */
  style?: React.CSSProperties;
};

/*
 * One IntersectionObserver per root margin, shared by every reveal that uses it.
 *
 * The residences page alone mounts twenty-odd reveals; giving each its own
 * observer meant twenty separate sets of intersection bookkeeping for what is
 * really one question asked about twenty elements.
 */
type Observed = { observer: IntersectionObserver; callbacks: Map<Element, () => void> };
const observers = new Map<string, Observed>();

function observe(el: Element, rootMargin: string, onVisible: () => void) {
  let entry = observers.get(rootMargin);
  if (!entry) {
    const callbacks = new Map<Element, () => void>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          callbacks.get(e.target)?.();
          callbacks.delete(e.target);
          observer.unobserve(e.target);
        }
      },
      { rootMargin }
    );
    entry = { observer, callbacks };
    observers.set(rootMargin, entry);
  }
  entry.callbacks.set(el, onVisible);
  entry.observer.observe(el);

  return () => {
    entry!.callbacks.delete(el);
    entry!.observer.unobserve(el);
  };
}

export default function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  id,
  className = "",
  rootMargin = "0px 0px -12% 0px",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      setSettled(true);
      return;
    }
    return observe(el, rootMargin, () => setVisible(true));
  }, [rootMargin]);

  // A reveal plays once. Once it has, drop its compositor hint and its
  // transitions so the element goes back to being ordinary static content —
  // otherwise a long page accumulates dozens of live layers behind the reader.
  useEffect(() => {
    if (!visible || settled) return;
    const timer = window.setTimeout(() => setSettled(true), delay + 2600);
    return () => window.clearTimeout(timer);
  }, [visible, settled, delay]);

  return React.createElement(
    as,
    {
      ref,
      id,
      className: `reveal reveal-${variant} ${visible ? "is-visible" : ""} ${
        settled ? "is-settled" : ""
      } ${className}`,
      style:
        delay || style
          ? ({ ...style, ...(delay ? { "--reveal-delay": `${delay}ms` } : null) } as React.CSSProperties)
          : undefined,
    },
    children
  );
}
