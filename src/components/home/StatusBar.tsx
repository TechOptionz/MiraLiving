import React from "react";
import { siteConfig } from "@/content/site-content";

/**
 * The build-status strip under the hero. Construction finished in September
 * 2026, so the bar now sits full and the right-hand stamp carries the display
 * suite rather than a target date. The left pulse was the "in progress" cue;
 * it is kept static now there is nothing left to wait for.
 */
export default function StatusBar() {
  return (
    <section id="status-bar" className="w-full bg-mira-sandLight border-y border-mira-border py-4 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans">
        {/* Left: Status Label */}
        <div className="flex items-center gap-3">
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mira-tealDark" />
          <span className="uppercase tracking-eyebrow text-mira-charcoal font-medium">
            Construction {siteConfig.completionDate}
          </span>
        </div>

        {/* Center: Progress Bar */}
        <div className="w-full md:w-1/2 flex items-center gap-4">
          <div className="flex-1 h-2 bg-mira-sand rounded-full overflow-hidden relative">
            <div
              className="h-full bg-mira-teal transition-all duration-1000 ease-out"
              style={{ width: `${siteConfig.constructionProgress}%` }}
              role="progressbar"
              aria-label="Construction progress"
              aria-valuenow={siteConfig.constructionProgress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <span className="font-semibold text-mira-charcoal min-w-[36px]">
            {siteConfig.constructionProgress}%
          </span>
        </div>

        {/* Right: what a buyer can do now */}
        <div className="text-mira-muted uppercase tracking-eyebrow">
          <span>Display Suite Now Open</span>
        </div>
      </div>
    </section>
  );
}
