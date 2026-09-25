import React from "react";
import Image from "next/image";
import { storyPage } from "@/content/story-content";
import ChapterLabel from "./ChapterLabel";
import ImageSlot, { frameStyle } from "./ImageSlot";
import Reveal from "@/components/common/Reveal";

// Staggered vertical rhythm for the three collaborators on desktop.
const collaboratorOffsets = ["", "md:mt-24", "md:mt-12"];

/** 6 — People Behind Mira. Large portraits, no cards. */
export default function PeopleSection() {
  const { people } = storyPage;
  const { lead } = people;

  return (
    <section
      aria-labelledby="people-heading"
      className="overflow-hidden border-t border-mira-border bg-mira-sandLight section-pad-lg"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-20 2xl:px-28">
        <ChapterLabel numeral={people.numeral} title={people.chapter} />
        <Reveal
          as="h2"
          id="people-heading"
          className="mt-10 max-w-5xl font-serif text-[clamp(2.5rem,5.4vw,5.5rem)] font-light leading-[1.03] text-mira-charcoal"
        >
          {people.headline}
        </Reveal>

        {/* The developer */}
        <div className="mt-12 grid grid-cols-1 items-end gap-12 sm:mt-16 lg:grid-cols-12 lg:gap-16">
          <figure className="-mx-6 sm:mx-0 lg:col-span-6">
            <Reveal
              variant="mask"
              style={frameStyle(lead.image)}
              className="relative w-full overflow-hidden bg-mira-sand"
            >
              <ImageSlot slot={lead.image} sizes="(min-width: 1024px) 40vw, 100vw" />
            </Reveal>
          </figure>

          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pb-12">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
              {lead.role} · {lead.company}
            </p>
            <h3 className="mt-5 font-serif text-6xl font-light leading-none text-mira-charcoal sm:text-7xl lg:text-[5.5rem]">
              {lead.name}
            </h3>
            <p className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-mira-muted sm:text-lg 2xl:text-xl">
              {lead.description}
            </p>
            <Image
              src={lead.signature}
              alt={`${lead.name} signature`}
              width={193}
              height={37}
              className="mt-10 h-9 w-auto opacity-80"
            />
          </Reveal>
        </div>

        {/* Collaborators */}
        <Reveal variant="fade" className="mt-16 flex items-center gap-6 sm:mt-24">
          <span className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-mira-brown">
            {people.collaboratorsLabel}
          </span>
          <span className="h-px flex-1 bg-mira-border" aria-hidden="true" />
        </Reveal>

        <ul className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible lg:gap-16">
          {people.collaborators.map((person, i) => (
            <li
              key={person.name}
              className={`w-[78%] shrink-0 snap-start sm:w-[45%] md:w-auto ${collaboratorOffsets[i] ?? ""}`}
            >
              <Reveal delay={i * 120}>
                <div
                  style={frameStyle(person.image)}
                  className="relative w-full overflow-hidden bg-mira-sand"
                >
                  <ImageSlot slot={person.image} sizes="(min-width: 768px) 30vw, 78vw" />
                </div>
                {/* Two of the three slots hold renders, not photographs. */}
                {person.image.caption && (
                  <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.16em] text-mira-brown/60">
                    {person.image.caption}
                  </p>
                )}
                <div className="mt-8 flex items-center justify-between gap-4 border-b border-mira-border pb-5">
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-mira-brown sm:text-[12px]">
                    {person.role}
                  </p>
                  <Image
                    src={person.logo}
                    alt={`${person.company ?? person.name} logo`}
                    width={160}
                    height={64}
                    className="h-7 w-auto"
                  />
                </div>
                <h3 className="mt-6 font-serif text-3xl font-light text-mira-charcoal sm:text-4xl">{person.name}</h3>
                {person.company && (
                  <p className="mt-1 font-sans text-xs tracking-wide text-mira-muted">{person.company}</p>
                )}
                <p className="mt-5 font-sans text-sm font-light leading-relaxed text-mira-muted sm:text-[15px]">
                  {person.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
