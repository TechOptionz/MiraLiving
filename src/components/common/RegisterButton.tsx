"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

/**
 * A button that opens the register / brochure modal.
 *
 * Kept as its own tiny client component so server-rendered sections can carry
 * a call to action without becoming client components themselves.
 */
export default function RegisterButton({
  children,
  variant = "teal",
  className = "",
}: {
  children: React.ReactNode;
  /** teal: filled · outline: hairline on a light ground · light: for dark backdrops */
  variant?: "teal" | "outline" | "light";
  className?: string;
}) {
  const { openRegister } = useModal();

  const styles = {
    teal: "bg-mira-teal text-white shadow-subtle hover:bg-mira-tealDark",
    outline: "border border-mira-charcoal/30 text-mira-charcoal hover:border-mira-charcoal hover:bg-white",
    light: "bg-white/90 text-mira-charcoal shadow-subtle hover:bg-white",
  }[variant];

  return (
    <button
      type="button"
      onClick={openRegister}
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 font-sans text-[12px] uppercase tracking-[0.18em] transition-colors ${styles} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}
