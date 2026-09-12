"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { siteConfig } from "@/content/site-content";
import { storyPage } from "@/content/story-content";
import ImageSlot from "./ImageSlot";
import Reveal from "@/components/common/Reveal";

/** 8 — Closing. One image, one line, two ways to act. */
export default function StoryCTA() {
  const { cta } = storyPage;
  const { openRegister } = useModal();

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative flex min-h-[88svh] items-center overflow-hidden bg-mira-charcoal text-white"
    >
      <ImageSlot slot={cta.image} tone="dark" sizes="100vw" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.09]" />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 py-28 text-center sm:px-12 lg:px-20 2xl:px-28">
        <Reveal
          as="h2"
          id="cta-heading"
          className="mx-auto max-w-6xl font-serif text-[clamp(3rem,7.6vw,7.75rem)] font-light leading-[1.01]"
        >
          {cta.headline}
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-base font-light leading-relaxed text-white/80 sm:text-lg 2xl:text-xl">
            {cta.intro}
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-12 flex flex-col items-center justify-center gap-4 sm:mt-14 sm:flex-row sm:gap-6">
          <button
            type="button"
            onClick={openRegister}
            className="group inline-flex w-full items-center justify-center gap-4 bg-white px-12 py-5 font-sans text-xs uppercase tracking-[0.3em] text-mira-charcoal transition-colors duration-500 hover:bg-mira-sand focus:outline-none focus-visible:ring-1 focus-visible:ring-mira-teal sm:w-auto"
          >
            {cta.brochureLabel}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>

          <a
            href={siteConfig.contacts[0].tel}
            className="inline-flex w-full items-center justify-center border border-white/60 px-12 py-5 font-sans text-xs uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:bg-white/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-mira-teal sm:w-auto"
          >
            {cta.enquireLabel}
          </a>
        </Reveal>

        <Reveal delay={400} className="mt-12 flex flex-col items-center gap-3 font-sans text-sm font-light text-white/75 sm:flex-row sm:justify-center sm:gap-8">
          {siteConfig.contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.tel}
              className="border-b border-transparent transition-colors hover:border-white/60 hover:text-white"
            >
              {contact.name} · {contact.phone}
            </a>
          ))}
        </Reveal>

        <p className="mt-20 font-sans text-[10px] uppercase tracking-[0.3em] text-white/50 sm:mt-24">
          {siteConfig.address.full}
        </p>
      </div>
    </section>
  );
}
