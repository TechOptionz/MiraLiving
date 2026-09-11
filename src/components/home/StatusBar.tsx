import React from "react";
import { siteConfig } from "@/content/site-content";

export default function StatusBar() {
  return (
    <section id="status-bar" className="w-full bg-mira-sandLight border-y border-mira-border py-4 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans">
        {/* Left: Status Label */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mira-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mira-tealDark"></span>
          </span>
          <span className="uppercase tracking-eyebrow text-mira-charcoal font-medium">
            Under Construction
          </span>
        </div>

        {/* Center: Progress Bar */}
        <div className="w-full md:w-1/2 flex items-center gap-4">
          <div className="flex-1 h-2 bg-mira-sand rounded-full overflow-hidden relative">
            <div
              className="h-full bg-mira-teal transition-all duration-1000 ease-out"
              style={{ width: `${siteConfig.constructionProgress}%` }}
              role="progressbar"
              aria-valuenow={siteConfig.constructionProgress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <span className="font-semibold text-mira-charcoal min-w-[36px]">
            {siteConfig.constructionProgress}%
          </span>
        </div>

        {/* Right: Target Date */}
        <div className="text-mira-muted uppercase tracking-eyebrow">
          {/* TODO: confirm completion date with client ("Completion September 2026" vs "Q2 2026") */}
          <span>{siteConfig.completionDate}</span>
        </div>
      </div>
    </section>
  );
}
