import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site-content";
import { Phone, Instagram, Facebook, MapPin, ArrowUpRight } from "lucide-react";

const footerNav = [
  { name: "Our Story", href: "/story" },
  { name: "Residences", href: "/residences" },
  { name: "Location", href: "/location" },
  { name: "The Team", href: "/team" },
];

/* One focus treatment shared by every interactive element in the footer. */
const focusRing =
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-mira-teal focus-visible:ring-offset-2 focus-visible:ring-offset-mira-brownDeep rounded-sm";

/*
 * The acknowledgement copy in site-content is written as a standalone sentence
 * beginning "Artist feature:", which duplicated the column heading. Drop the
 * prefix here so the heading carries the label and the paragraph reads as prose.
 */
const artistCopy = siteConfig.artistAcknowledgement.text.replace(/^Artist feature:\s*/i, "");

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-sans font-medium uppercase tracking-eyebrow text-mira-sand/55">
      {children}
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address.full
  )}`;

  return (
    <footer className="relative bg-gradient-to-b from-mira-charcoal via-mira-brownDeep to-mira-brownDeep text-mira-sandLight">
      {/* Hairline that fades out towards the page edges rather than cutting straight across */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-mira-sand/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ---------- Brand band ---------- */}
        <div className="flex flex-col gap-10 pb-12 pt-16 sm:pt-20 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-md space-y-5">
            <Link href="/" className={`inline-block ${focusRing}`} aria-label="Mira Living home">
              <Image
                src="/img/site/mira-logo.svg"
                alt="Mira Living"
                width={152}
                height={51}
                className="h-auto w-[132px] sm:w-[152px]"
              />
            </Link>
            <p className="font-serif text-[1.375rem] leading-snug text-mira-sandLight sm:text-2xl">
              Premium oceanfront living on the&nbsp;Coral&nbsp;Sea.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-mira-sand/25 text-mira-sandLight transition-colors duration-300 hover:border-mira-teal hover:bg-mira-teal hover:text-mira-charcoal ${focusRing}`}
              aria-label="Follow Mira Living on Instagram"
            >
              <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-mira-sand/25 text-mira-sandLight transition-colors duration-300 hover:border-mira-teal hover:bg-mira-teal hover:text-mira-charcoal ${focusRing}`}
              aria-label="Follow Mira Living on Facebook"
            >
              <Facebook className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ---------- Columns ---------- */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-mira-sand/10 py-14 sm:grid-cols-2 md:grid-cols-12">
          {/* Explore */}
          <nav className="space-y-5 md:col-span-2" aria-label="Footer navigation">
            <Eyebrow>Explore</Eyebrow>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group inline-block font-sans text-sm text-mira-sand/85 transition-colors duration-300 hover:text-white ${focusRing}`}
                  >
                    <span className="relative">
                      {link.name}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-mira-teal transition-transform duration-300 group-hover:scale-x-100"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sales enquiries */}
          <div className="space-y-5 md:col-span-3">
            <Eyebrow>Sales Enquiries</Eyebrow>
            <ul className="space-y-5">
              {siteConfig.contacts.map((c) => (
                <li key={c.name} className="font-sans">
                  <p className="text-sm font-medium text-white">{c.name}</p>
                  <p className="mt-0.5 text-xs text-mira-sand/55">{c.role}</p>
                  <a
                    href={c.tel}
                    className={`mt-1.5 inline-flex items-center gap-2 text-sm text-mira-sand/85 transition-colors duration-300 hover:text-mira-teal ${focusRing}`}
                  >
                    <Phone className="h-3.5 w-3.5 text-mira-teal" aria-hidden="true" />
                    <span>{c.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="space-y-5 md:col-span-3">
            <Eyebrow>Visit</Eyebrow>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start gap-2.5 font-sans text-sm leading-relaxed text-mira-sand/85 transition-colors duration-300 hover:text-white ${focusRing}`}
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mira-teal" aria-hidden="true" />
              <span>
                {siteConfig.address.street},
                <br />
                {siteConfig.address.suburb} {siteConfig.address.state} {siteConfig.address.postcode}
                <ArrowUpRight
                  className="ml-1 inline h-3.5 w-3.5 -translate-y-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </a>
            <dl className="space-y-1.5 font-sans text-sm">
              <div className="flex gap-2">
                <dt className="text-mira-sand/55">Residences from</dt>
                <dd className="text-mira-sandLight">{siteConfig.startingPrice}</dd>
              </div>
              <div>
                <dt className="sr-only">Completion</dt>
                <dd className="text-mira-sand/55">{siteConfig.completionDate}</dd>
              </div>
            </dl>
          </div>

          {/* Artist feature */}
          <div className="space-y-5 sm:col-span-2 md:col-span-4">
            <Eyebrow>Artist Feature</Eyebrow>
            <div className="border-l border-mira-teal/40 pl-5">
              <p className="font-serif text-lg text-mira-sandLight">
                {siteConfig.artistAcknowledgement.artist}
              </p>
              <p className="mt-2 font-sans text-xs leading-relaxed text-mira-sand/65">
                {artistCopy}
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Legal ---------- */}
        <div className="border-t border-mira-sand/10 py-8">
          <p className="max-w-5xl font-sans text-[11px] leading-[1.7] text-mira-sand/45">
            {siteConfig.legalDisclaimer}
          </p>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="flex flex-col-reverse items-start gap-6 border-t border-mira-sand/10 py-8 font-sans text-xs text-mira-sand/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              &copy; {year} {siteConfig.name}. All rights reserved.
            </span>
            <Link
              href="/privacy-policy"
              className={`transition-colors duration-300 hover:text-white ${focusRing}`}
            >
              Privacy Policy
            </Link>
          </div>

          <a
            href="https://icreate.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-2.5 ${focusRing}`}
          >
            <span className="text-mira-sand/45 transition-colors duration-300 group-hover:text-mira-sand/70">
              Design &amp; Rebuild
            </span>
            <Image
              src="/img/site/icreate.svg"
              alt="icreate.agency"
              width={90}
              height={16}
              className="h-4 w-auto opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
