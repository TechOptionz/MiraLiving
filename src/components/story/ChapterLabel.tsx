import React from "react";
import Reveal from "./Reveal";

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
  const color = tone === "dark" ? "text-mira-sand" : "text-mira-brown";
  const rule = tone === "dark" ? "bg-mira-sand/50" : "bg-mira-brown/40";

  return (
    <Reveal variant="fade" className={`flex items-center gap-4 ${color} ${className}`}>
      <span className="font-serif text-lg italic leading-none">{numeral}.</span>
      <span className={`h-px w-10 ${rule}`} aria-hidden="true" />
      <span className="text-[11px] font-sans font-medium uppercase tracking-[0.3em]">{title}</span>
    </Reveal>
  );
}
