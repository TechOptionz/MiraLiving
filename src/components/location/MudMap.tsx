import React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site-content";
import { MapPin, Navigation } from "lucide-react";

export default function MudMap() {
  const coastalPoints = [
    { name: "Agnes Water", y: "14%", highlight: false },
    { name: "Bundaberg Central", y: "27%", highlight: false, note: "20 min" },
    { name: "Bargara (Mira Living)", y: "34%", highlight: true, note: "Absolute Oceanfront" },
    { name: "Hervey Bay", y: "48%", highlight: false },
    { name: "Noosa Heads", y: "65%", highlight: false },
    { name: "Sunshine Coast", y: "73%", highlight: false },
    { name: "Caloundra", y: "81%", highlight: false },
    { name: "Brisbane", y: "90%", highlight: false },
    { name: "Gold Coast", y: "98%", highlight: false },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-mira-border p-6 sm:p-12 shadow-card">
      {/* Left: Interactive/Accessible Coastal Mud Map */}
      <div className="lg:col-span-6 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-sans tracking-eyebrow uppercase text-mira-brown font-medium">
            Regional Connectivity
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-mira-charcoal font-light">
            Queensland&apos;s Coral Coastline
          </h3>
          <p className="text-xs sm:text-sm font-sans text-mira-muted leading-relaxed font-light">
            Conveniently connected to Bundaberg&apos;s medical, commercial, and aviation hub, yet protected in a tranquil ocean enclave.
          </p>
        </div>

        {/* Distance Pills */}
        <div className="flex flex-wrap gap-3 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mira-sandLight border border-mira-border text-xs font-sans text-mira-charcoal font-medium">
            <Navigation className="w-3.5 h-3.5 text-mira-tealDark" />
            <span>Bundaberg 20 min</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mira-sandLight border border-mira-border text-xs font-sans text-mira-charcoal font-medium">
            <Navigation className="w-3.5 h-3.5 text-mira-tealDark" />
            <span>Bundaberg Airport 25 min</span>
          </div>
        </div>

        {/* Accessible SVG Graphic List */}
        <div className="relative pl-8 border-l-2 border-mira-sand space-y-6 py-4 my-6">
          {coastalPoints.map((point) => (
            <div key={point.name} className="relative group">
              {/* Dot on line */}
              <div
                className={`absolute -left-[39px] top-1 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  point.highlight
                    ? "bg-mira-teal border-mira-brownDeep w-4 h-4 -left-[40px] shadow-sm"
                    : "bg-white border-mira-brown/60 group-hover:bg-mira-sand"
                }`}
              />

              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-sans ${
                    point.highlight
                      ? "font-semibold text-mira-charcoal text-base"
                      : "text-mira-muted"
                  }`}
                >
                  {point.name}
                </span>
                {point.note && (
                  <span
                    className={`text-[12px] font-sans px-2.5 py-0.5 rounded-none uppercase tracking-wider ${
                      point.highlight
                        ? "bg-mira-teal text-white font-medium"
                        : "bg-mira-sandLight text-mira-muted"
                    }`}
                  >
                    {point.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Embedded Google Map for 25–27 The Esplanade */}
      <div className="lg:col-span-6 space-y-6">
        <div className="relative aspect-[4/3] w-full bg-mira-sand overflow-hidden border border-mira-border shadow-subtle">
          <iframe
            title="Mira Living Project Location - 25-27 The Esplanade Bargara"
            src={siteConfig.address.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[25%] contrast-105"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-sans text-mira-charcoal flex items-center gap-1.5 shadow-sm border border-mira-border">
            <MapPin className="w-3.5 h-3.5 text-mira-tealDark" />
            <span className="font-medium">25–27 The Esplanade, Bargara QLD 4670</span>
          </div>
        </div>

        {/* Dining Render Beside Map */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border border-mira-border group shadow-subtle">
          <Image
            src="/img/site/Dining-room-from-Furtado-site.webp"
            alt="Interior dining space with ocean horizons, Furtado Property"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-3 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-[12px] text-white/90 font-sans tracking-wider">
            Artist Impression
          </div>
        </div>
      </div>
    </div>
  );
}
