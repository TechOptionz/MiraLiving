import React from "react";
import BackdropVideo from "@/components/common/BackdropVideo";
import Parallax from "@/components/story/Parallax";
import { developmentSpecs, siteConfig } from "@/content/site-content";

/**
 * The development's masthead.
 *
 * A short interior film — the kitchen, then a bedroom — cut from two
 * cinematic clips and joined with a crossfade (public/video/residences-hero.mp4,
 * 13 s, silent). The poster is the footage's own first frame, so the hero
 * paints finished and never swaps one picture for another; reduced-motion
 * visitors keep that still.
 */
const heroFilm = {
  src: "/video/residences-hero.mp4",
  poster: "/video/residences-hero-poster.jpg",
  description: "Interior film of a Mira residence: the kitchen and living room, then the master bedroom.",
};
const headlineFacts = [
  { value: String(developmentSpecs.totalResidences), label: "Oceanfront residences" },
  { value: "3 + MPR", label: "Bedrooms" },
  { value: "118–139", label: "Sqm internal" },
  { value: "2", label: "Secure carparks" },
];

export default function ResidencesHero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-mira-charcoal text-white">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Parallax speed={0.12}>
          <BackdropVideo
            src={heroFilm.src}
            poster={heroFilm.poster}
            aria-label={heroFilm.description}
            // The page's own landing frame — fetched and playing from the markup.
            priority
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </Parallax>

        {/* Directional scrim — enough to seat the type, the footage stays the subject. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-[0.08]" />
      </div>

      <div className="relative z-10 flex flex-1 items-end pb-12 pt-32 sm:items-center sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-[54rem]">
            <div
              className="flex animate-softFade items-center gap-4"
              style={{ "--d": "200ms" } as React.CSSProperties}
            >
              <span className="hidden h-px w-12 bg-mira-sand/70 sm:block" />
              <p className="hero-legible font-sans text-[11px] uppercase tracking-eyebrow text-mira-sandLight/90 sm:text-[12px]">
                The Residences
                <span className="mx-2 text-white/35">/</span>
                {siteConfig.address.street} · {siteConfig.address.suburb}, {siteConfig.address.state}
              </p>
            </div>

            <h1 className="hero-legible mt-7 font-serif text-[clamp(2.6rem,7vw,6rem)] font-light leading-[1.04] text-white sm:mt-9">
              <span className="line-mask">
                <span style={{ "--d": "350ms" } as React.CSSProperties}>Residences of Quiet</span>
              </span>
              <span className="line-mask">
                <span
                  className="italic text-mira-sandLight"
                  style={{ "--d": "500ms" } as React.CSSProperties}
                >
                  Coastal Distinction
                </span>
              </span>
            </h1>

            <p
              className="hero-legible mt-7 max-w-2xl animate-softFade font-sans text-base font-light leading-relaxed text-white/85 sm:mt-8 sm:text-lg"
              style={{ "--d": "750ms" } as React.CSSProperties}
            >
              A limited boutique collection of 25 oceanfront homes directly on the Bargara Esplanade — engineered
              for absolute comfort, generous internal space, and panoramic Coral Sea views.
            </p>
          </div>
        </div>
      </div>

      {/* Quick facts, so the essentials read at a glance before the full schedule. */}
      <div
        className="relative z-10 animate-softFade border-t border-white/15 bg-black/45"
        style={{ "--d": "1100ms" } as React.CSSProperties}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <dl className="grid grid-cols-2 sm:grid-cols-4">
            {headlineFacts.map((fact, index) => (
              <div
                key={fact.label}
                className={`border-white/12 py-5 sm:px-8 sm:py-6 sm:first:pl-0 ${
                  index > 1 ? "border-t sm:border-t-0" : ""
                } ${index % 2 === 1 ? "border-l pl-5 sm:pl-8" : ""} sm:border-l sm:first:border-l-0`}
              >
                <dd className="font-serif text-2xl font-light leading-none text-mira-sandLight sm:text-3xl">
                  {fact.value}
                </dd>
                <dt className="mt-2 font-sans text-[11px] uppercase tracking-eyebrow text-white/75 sm:text-[12px]">
                  {fact.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
