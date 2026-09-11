import React from "react";
import Image from "next/image";
import Link from "next/link";
import { partnerRecords } from "@/content/site-content";
import { ArrowRight } from "lucide-react";

export default function TeamTeaser() {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-mira-sandLight border-t border-mira-border">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-sans tracking-eyebrow uppercase text-mira-brown block font-medium">
              The Collaborators
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-mira-charcoal font-light">
              Brought to life by Furtado Property
            </h2>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-eyebrow uppercase text-mira-brown hover:text-mira-charcoal transition-colors border-b border-mira-brown pb-1 w-fit"
          >
            <span>Meet the Project Partners</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Partner Logo Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {partnerRecords.map((partner) => (
            <div
              key={partner.id}
              className="p-8 bg-white border border-mira-border flex flex-col items-center justify-center text-center h-44 transition-all duration-300 hover:shadow-subtle hover:border-mira-brown group"
            >
              <div className="relative w-36 h-16 flex items-center justify-center mb-3">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={60}
                  className="object-contain max-h-12 filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-xs font-sans text-mira-muted uppercase tracking-eyebrow">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
