import React from "react";
import Reveal from "@/components/common/Reveal";

export default function ChapterLabel({
  numeral,
  title,
  tone = "light",
  className = "",
}: {
  numeral: string;
  title: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const color = tone === "dark" ? "text-mira-sandLight" : "text-mira-brownDark";
  const rule = tone === "dark" ? "bg-mira-sandLight/50" : "bg-mira-brownDark/45";

  return (
    <Reveal variant="fade" className={`flex items-center gap-4 ${color} ${className}`}>
      <span className="font-serif text-xl italic leading-none">{numeral}.</span>
      <span className={`h-px w-10 ${rule}`} aria-hidden="true" />
      <span className="text-[13px] font-sans font-semibold uppercase tracking-[0.14em] sm:text-sm">
        {title}
      </span>
    </Reveal>
  );
}
