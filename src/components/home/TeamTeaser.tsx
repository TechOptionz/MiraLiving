import React from "react";
import Image from "next/image";
import Link from "next/link";
import { partnerRecords } from "@/content/site-content";
import Reveal from "@/components/common/Reveal";
import { ArrowRight } from "lucide-react";

export default function TeamTeaser() {
  return (
    <section className="flex min-h-screen w-full items-center border-t border-mira-border bg-mira-sandLight px-6 pb-20 pt-28 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl space-y-14 sm:space-y-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <Reveal variant="fade" className="block font-sans text-xs font-medium uppercase tracking-eyebrow text-mira-brown">
              The Collaborators
            </Reveal>
            <Reveal as="h2" delay={120} className="font-serif text-[clamp(1.9rem,4vw,3.5rem)] font-light leading-tight text-mira-charcoal">
              Brought to life by Furtado Property
            </Reveal>
          </div>

          <Reveal variant="fade" delay={200}>
            <Link
              href="/team"
              className="inline-flex w-fit items-center gap-2 border-b border-mira-brown pb-1 font-sans text-xs uppercase tracking-eyebrow text-mira-brown transition-colors hover:text-mira-charcoal"
            >
              <span>Meet the Project Partners</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {partnerRecords.map((partner, idx) => (
            <Reveal
              key={partner.id}
              delay={idx * 100}
              className="group flex h-56 flex-col items-center justify-center border border-mira-border bg-white p-8 text-center transition-all duration-300 hover:border-mira-brown hover:shadow-subtle sm:h-64"
            >
              <div className="relative mb-4 flex h-20 w-40 items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={72}
                  quality={95}
                  className="max-h-16 object-contain contrast-125 grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
              <span className="font-sans text-xs uppercase tracking-eyebrow text-mira-muted">
                {partner.role}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
