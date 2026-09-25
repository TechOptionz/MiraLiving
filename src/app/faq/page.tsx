import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { faqItems, siteConfig } from "@/content/site-content";
import { faqGraph } from "@/content/structured-data";
import JsonLd from "@/components/common/JsonLd";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  title: "Buyer FAQ: Prices, Sizes, Parking & Completion",
  description:
    "Answers for buyers of the Mira Living beachfront apartments in Bargara: current prices and availability, apartment sizes and layouts, parking, completion date, inspections and the team behind the project.",
  alternates: { canonical: "/faq" },
};

/**
 * Buyer questions with the answers visible in full (no accordion), so the
 * FAQPage markup and the page say exactly the same thing. Everything here is
 * generated from the content file, so a new price guide updates the answers.
 */
export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqGraph(faqItems)} />

      <div className="bg-mira-ground pb-24 pt-28 sm:pt-36">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-12">
          <header className="mb-12 space-y-4 border-b border-mira-border pb-10">
            <span className="block font-sans text-xs font-medium uppercase tracking-eyebrow text-mira-brown">
              Buyer questions
            </span>
            <h1 className="font-serif text-3xl font-light text-mira-charcoal sm:text-4xl md:text-5xl">
              Frequently asked questions about Mira Living, Bargara
            </h1>
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-mira-muted sm:text-base">
              The questions buyers ask most about the {siteConfig.name} beachfront apartments at{" "}
              {siteConfig.address.full}: what they cost, how big they are, what is included and when
              you can move in. Anything not covered here, the sales team can answer directly.
            </p>
          </header>

          <dl className="divide-y divide-mira-border">
            {faqItems.map((item) => (
              <div key={item.question} className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-8">
                <dt className="sm:col-span-5">
                  <h2 className="font-serif text-xl font-medium leading-snug text-mira-charcoal sm:text-2xl">
                    {item.question}
                  </h2>
                </dt>
                <dd className="font-sans text-sm font-light leading-relaxed text-mira-muted sm:col-span-7 sm:text-base">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-col gap-6 border-t border-mira-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-sm text-mira-muted">
              See the{" "}
              <Link href="/residences" className="border-b border-mira-charcoal pb-0.5 text-mira-charcoal hover:border-mira-brown hover:text-mira-brown">
                floor plans and current availability
              </Link>{" "}
              or{" "}
              <Link href="/location" className="border-b border-mira-charcoal pb-0.5 text-mira-charcoal hover:border-mira-brown hover:text-mira-brown">
                living in Bargara
              </Link>
              .
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
              {siteConfig.contacts.map((c) => (
                <li key={c.tel}>
                  <a href={c.tel} className="inline-flex items-center gap-2 text-mira-charcoal hover:text-mira-brown">
                    <Phone className="h-3.5 w-3.5 text-mira-teal" aria-hidden="true" />
                    <span>
                      {c.name.split(" ")[0]} · {c.phone}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <RegisterSection />
    </>
  );
}
