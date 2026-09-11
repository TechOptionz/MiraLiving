import React from "react";
import Image from "next/image";
import { constructionMilestones } from "@/content/site-content";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function ConstructionTimeline() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-mira-ground border-t border-mira-border">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-sans tracking-eyebrow uppercase text-mira-brown block font-medium">
            Building The Vision
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-mira-charcoal font-light">
            Construction Progress Timeline
          </h2>
          <p className="text-sm font-sans text-mira-muted leading-relaxed">
            Follow the journey from our January 2025 groundbreaking to 98% completion in September 2026. Hand-built by Wide Bay master builder IDC Construct.
          </p>
        </div>

        {/* Milestone Grid / Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constructionMilestones.map((m, idx) => (
            <div
              key={m.date}
              className="bg-white border border-mira-border overflow-hidden transition-all duration-300 hover:shadow-card hover:border-mira-brown group flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] w-full bg-mira-sand overflow-hidden">
                <Image
                  src={m.image}
                  alt={`${m.title} - ${m.formattedDate}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 text-[11px] font-sans text-mira-charcoal flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-3 h-3 text-mira-tealDark" />
                  <span className="font-medium">{m.formattedDate}</span>
                </div>
                {idx === constructionMilestones.length - 1 && (
                  <div className="absolute bottom-3 right-3 bg-mira-teal text-white px-3 py-1 text-[11px] font-sans tracking-wider uppercase font-semibold flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>98% Complete</span>
                  </div>
                )}
              </div>

              {/* Text Description */}
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-eyebrow text-mira-tealDark font-semibold">
                    Milestone {idx + 1}
                  </span>
                  <h3 className="text-lg font-serif text-mira-charcoal font-medium mt-0.5">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-mira-muted leading-relaxed font-light mt-2">
                    {m.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
