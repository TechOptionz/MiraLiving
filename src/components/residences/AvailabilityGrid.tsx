import React from "react";
import {
  priceGuide,
  planForUnit,
  unitStatusLabel,
  siteConfig,
  type UnitStatus,
} from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import PhotoFrame from "@/components/common/PhotoFrame";
import RegisterButton from "@/components/common/RegisterButton";

const cellTone: Record<UnitStatus, string> = {
  available: "border-mira-tealDark/40 bg-white text-mira-charcoal hover:border-mira-tealDark",
  sold: "border-mira-border bg-mira-sandLight/70 text-mira-brown/60",
  future: "border-dashed border-mira-borderDark/50 bg-transparent text-mira-brownDark",
};

const dotTone: Record<UnitStatus, string> = {
  available: "bg-mira-tealDark",
  sold: "bg-mira-sandDark",
  future: "border border-mira-borderDark bg-transparent",
};

/** "$1,950,000" → "$1.95M". */
function shortPrice(price: string): string {
  const n = Number(price.replace(/[^0-9]/g, ""));
  if (!n) return price;
  // Up to three decimals, trailing zeros dropped: $1,395,000 → $1.395M, not $1.4M.
  return `$${parseFloat((n / 1_000_000).toFixed(3))}M`;
}

/**
 * Every residence in the building, level by level, from the price guide.
 *
 * Levels are stacked top-down so the grid reads like the elevation beside it:
 * Level 5 at the top, the ground floor at the bottom.
 */
export default function AvailabilityGrid() {
  const allUnits = priceGuide.levels.flatMap((l) => l.units);
  const count = (status: UnitStatus) => allUnits.filter((u) => u.status === status).length;
  const lowest = allUnits
    .filter((u) => u.status === "available" && u.price)
    .map((u) => ({ n: Number(u.price!.replace(/[^0-9]/g, "")), label: u.price! }))
    .sort((a, b) => a.n - b.n)[0];

  const summary = [
    { value: String(count("available")), label: "Available now" },
    { value: String(count("sold")), label: "Sold" },
    { value: String(count("future")), label: "Future release" },
    { value: lowest ? lowest.label : "—", label: "From" },
  ];

  return (
    <section
      id="availability"
      className="scroll-mt-24 border-t border-mira-border bg-mira-ground px-6 py-24 sm:px-12 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="max-w-3xl space-y-4 lg:col-span-7">
            <Reveal variant="fade" className="block font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
              Availability
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4vw,3.25rem)] font-light text-mira-charcoal">
              Every residence, level by level
            </Reveal>
            <Reveal delay={220} className="font-sans text-[16px] leading-[1.75] text-mira-brownDark sm:text-lg">
              Twenty-five residences across five levels, as at the {priceGuide.issued} price guide. Each
              apartment is marked with the plan it is built to.
            </Reveal>
          </div>

          <Reveal delay={300} className="lg:col-span-5">
            <dl className="grid grid-cols-2 divide-x divide-mira-border border-y border-mira-border sm:grid-cols-4">
              {summary.map((item, idx) => (
                <div key={item.label} className={`px-4 py-5 ${idx === 2 ? "border-t border-mira-border sm:border-t-0" : ""} ${idx === 3 ? "border-t border-mira-border sm:border-t-0" : ""}`}>
                  <dd className="font-serif text-2xl font-light leading-none text-mira-charcoal sm:text-[1.7rem]">
                    {item.value}
                  </dd>
                  <dt className="mt-2 font-sans text-[11px] uppercase tracking-[0.15em] text-mira-brown">
                    {item.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* The grid */}
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {[...priceGuide.levels].reverse().map((level, idx) => (
                <Reveal key={level.name} delay={idx * 60}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
                      {level.name}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-mira-brown/70">
                      {level.units.filter((u) => u.status === "available").length} available
                    </span>
                  </div>
                  <ul className="grid grid-cols-5 gap-2 sm:gap-3">
                    {level.units.map((unit) => {
                      const plan = planForUnit(unit.number);
                      return (
                        <li
                          key={unit.number}
                          className={`flex min-h-[5.5rem] flex-col justify-between border p-2.5 transition-colors sm:min-h-[6.5rem] sm:p-3 ${cellTone[unit.status]}`}
                        >
                          <div className="flex items-start justify-between gap-1">
                            <span className="font-serif text-xl font-light leading-none sm:text-2xl">
                              {String(unit.number).padStart(2, "0")}
                            </span>
                            {plan && (
                              <span
                                className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] opacity-80"
                                title={`${plan.name} · ${plan.internalArea} internal`}
                              >
                                {plan.code}
                              </span>
                            )}
                          </div>
                          <span className="font-sans text-[10px] leading-tight sm:text-[12px]">
                            {unit.status === "available" && unit.price ? (
                              <>
                                {/* "$1.95M" at phone width, where five cells share 390px. */}
                                <span className="font-medium tabular-nums sm:hidden">{shortPrice(unit.price)}</span>
                                <span className="hidden font-medium tabular-nums sm:inline">{unit.price}</span>
                              </>
                            ) : (
                              <span className="uppercase tracking-[0.1em]">{unitStatusLabel[unit.status]}</span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
              ))}
            </div>

            {/* Legend */}
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-mira-border pt-5 font-sans text-[12px] text-mira-brownDark">
              {(["available", "sold", "future"] as UnitStatus[]).map((status) => (
                <li key={status} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${dotTone[status]}`} />
                  {unitStatusLabel[status]}
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-mira-charcoal">
                  A · B · C
                </span>
                Plan type
              </li>
            </ul>
          </div>

          {/* The elevation, so the grid reads against the building itself. */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <PhotoFrame
                src="/img/site/Mira-Facade-Dusk.webp"
                alt="Mira Living street elevation at dusk: five levels of balconies above the landscaped ground floor"
                caption="Artist Impression"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={86}
                frameClassName="border border-mira-border shadow-card"
              />
            </Reveal>
            <Reveal delay={300} className="mt-6 space-y-4 border-t border-mira-border pt-6">
              <p className="font-sans text-[15px] leading-[1.75] text-mira-brownDark">
                Five residences sit on each level, each with its balcony to the Esplanade and the Coral Sea
                beyond. The higher the level, the longer the view along the coast.
              </p>
              <RegisterButton className="w-full sm:w-auto">Request the price guide</RegisterButton>
            </Reveal>
          </div>
        </div>

        <p className="mt-12 max-w-4xl border-t border-mira-border pt-6 font-sans text-[12px] leading-relaxed text-mira-brown">
          Prices and availability as at {priceGuide.issued}. {siteConfig.legalDisclaimer}
        </p>
      </div>
    </section>
  );
}
