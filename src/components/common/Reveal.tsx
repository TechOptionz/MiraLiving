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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return React.createElement(
    as,
    {
      ref,
      id,
      className: `reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`,
      style:
        delay || style
          ? ({ ...style, ...(delay ? { "--reveal-delay": `${delay}ms` } : null) } as React.CSSProperties)
          : undefined,
    },
    children
  );
}
