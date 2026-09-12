"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: "div" | "p" | "h2" | "h3" | "li" | "blockquote";
  /** up: fade + rise · fade: opacity only · mask: bottom-up clip with a slow settle of the first child */
  variant?: "up" | "fade" | "mask";
  delay?: number;
  id?: string;
  className?: string;
};

export default function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  id,
  className = "",
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
      { rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    as,
    {
      ref,
      id,
      className: `reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`,
      style: delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined,
    },
    children
  );
}
