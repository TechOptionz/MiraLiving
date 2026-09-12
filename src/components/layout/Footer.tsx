import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site-content";
import { Phone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-mira-brownDeep text-mira-sandLight pt-16 pb-12 border-t border-mira-borderDark/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-mira-borderDark/40">
          {/* Col 1: Brand & Address */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-36 h-12">
                <Image
                  src="/img/site/mira-logo.svg"
                  alt="Mira Living"
                  width={144}
                  height={48}
                  className="object-contain filter brightness-110"
                />
              </div>
            </Link>

            <div className="space-y-2 text-sm text-mira-sand/90 font-sans leading-relaxed">
              <p className="font-semibold text-white">Project Address:</p>
              <p>{siteConfig.address.full}</p>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-mira-teal text-white flex items-center justify-center transition-colors"
                aria-label="Follow Mira Living on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-mira-teal text-white flex items-center justify-center transition-colors"
                aria-label="Follow Mira Living on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Sales Contacts */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-sans tracking-eyebrow uppercase text-mira-sand font-medium">
              Sales Enquiries
            </h3>
            <div className="space-y-4 pt-1">
              {siteConfig.contacts.map((c) => (
                <div key={c.name} className="text-sm font-sans">
                  <p className="text-white font-medium">{c.name}</p>
                  <a
                    href={c.tel}
                    className="inline-flex items-center gap-1.5 text-mira-sand hover:text-white transition-colors mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-mira-teal" />
                    <span>{c.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/story"
                className="text-xs font-sans tracking-eyebrow uppercase text-mira-teal hover:underline block mb-2"
              >
                Our Story →
              </Link>
              <Link
                href="/residences"
                className="text-xs font-sans tracking-eyebrow uppercase text-mira-teal hover:underline block"
              >
                View Residences →
              </Link>
              <Link
                href="/location"
                className="text-xs font-sans tracking-eyebrow uppercase text-mira-teal hover:underline block mt-2"
              >
                Explore Location →
              </Link>
            </div>
          </div>

          {/* Col 3: Artist Acknowledgement */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-xs font-sans tracking-eyebrow uppercase text-mira-sand font-medium">
              Artist Feature
            </h3>
            <p className="text-xs text-mira-sand/80 font-sans leading-relaxed">
              {siteConfig.artistAcknowledgement.text}
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="py-8 border-b border-mira-borderDark/40">
          <p className="text-[11px] text-mira-sand/70 font-sans leading-relaxed text-justify">
            {siteConfig.legalDisclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mira-sand/70 font-sans gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span>© 2026 Mira Living. All rights reserved.</span>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors underline"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span>Design & Rebuild:</span>
            <a
              href="https://icreate.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/img/site/icreate.svg"
                alt="icreate.agency"
                width={90}
                height={16}
                className="filter invert brightness-200"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
