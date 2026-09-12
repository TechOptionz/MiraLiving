import React from "react";
import Image from "next/image";
import { constructionMilestones } from "@/content/site-content";
import { Calendar, CheckCircle2 } from "lucide-react";
import { photoFrameStyle } from "@/components/common/PhotoFrame";

export default function ConstructionTimeline() {
  return (
    <section className="border-t border-mira-border bg-mira-ground px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
            Building The Vision
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,4vw,3.25rem)] font-light text-mira-charcoal">
            Construction Progress Timeline
          </h2>
          <p className="font-sans text-[16px] leading-[1.75] text-mira-brownDark sm:text-lg">
            Follow the journey from our January 2025 groundbreaking to 98% completion in September 2026. Hand-built by
            Wide Bay master builder IDC Construct.
          </p>
        </div>

        {/* Milestones. Cards are top-aligned and each photo frame takes the shape of
            its own photograph, so every progress shot is shown whole. */}
        <div className="mt-16 grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {constructionMilestones.map((m, idx) => (
            <article
              key={m.date}
              className="group flex flex-col border border-mira-border bg-white transition-all duration-300 hover:border-mira-brown hover:shadow-card"
            >
              {/* Photo */}
              <div
                style={photoFrameStyle(m.image, { fallbackAspect: 4 / 3 })}
                className="relative w-full overflow-hidden bg-mira-sand"
              >
                <Image
                  src={m.image}
                  alt={`${m.title} — ${m.formattedDate}`}
                  fill
                  quality={78}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 flex items-center gap-1.5 bg-white/95 px-3 py-1.5 font-sans text-[12px] font-medium text-mira-charcoal shadow-sm backdrop-blur-sm">
                  <Calendar className="h-3.5 w-3.5 text-mira-tealDark" />
                  {m.formattedDate}
                </span>
                {idx === constructionMilestones.length - 1 && (
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-mira-teal px-3 py-1.5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    98% complete
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="p-6">
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-mira-tealDark">
                  Milestone {idx + 1}
                </span>
                <h3 className="mt-1.5 font-serif text-xl text-mira-charcoal sm:text-2xl">{m.title}</h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-mira-brownDark">{m.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
