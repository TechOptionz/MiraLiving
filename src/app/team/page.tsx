import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { partnerRecords, siteConfig, developerQuote } from "@/content/site-content";
import { Phone, Building2, Sparkles, Award, Palette } from "lucide-react";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  title: "Project Partners & Development Team",
  description: "Meet the team behind Mira Living: Furtado Property, Sparc Architects, IDC Construct, Sarah Wood Designs, and featured artist Goompi Ugerabah.",
};

export default function TeamPage() {
  const getPartnerIcon = (role: string) => {
    switch (role) {
      case "Developer":
        return <Building2 className="w-5 h-5 text-mira-tealDark" />;
      case "Architect":
        return <Sparkles className="w-5 h-5 text-mira-tealDark" />;
      case "Builder":
        return <Award className="w-5 h-5 text-mira-tealDark" />;
      case "Interior Designer":
        return <Palette className="w-5 h-5 text-mira-tealDark" />;
      default:
        return <Building2 className="w-5 h-5 text-mira-tealDark" />;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 bg-mira-ground">
      {/* Hero */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 bg-mira-sandLight border-b border-mira-border text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
            The Collaborators
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-mira-charcoal font-light leading-[1.1]">
            A Vision Realised Through Collaborative Excellence
          </h1>
          <p className="text-lg sm:text-xl font-sans text-mira-muted max-w-2xl mx-auto font-light leading-relaxed">
            Bringing together over two decades of residential craftsmanship, visionary architecture, and local construction precision to create Bargara&apos;s landmark address.
          </p>
        </div>
      </section>

      {/* Developer Feature: Furtado Property (Monograph style) */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-mira-ground">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-mira-border pb-8">
            <div className="relative w-56 h-20 flex items-center">
              <Image
                src={partnerRecords[0].logo}
                alt="Furtado Property logo"
                width={220}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="space-y-1 text-right">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-mira-tealDark font-semibold block">
                The Developer
              </span>
              <span className="text-sm font-serif text-mira-muted">
                South-East Queensland
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-8 text-base sm:text-lg font-sans text-mira-muted leading-relaxed font-light space-y-6">
              <p>{partnerRecords[0].description}</p>
            </div>

            <div className="lg:col-span-4 p-8 bg-mira-sandLight border border-mira-border space-y-4">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-mira-brown font-semibold block">
                Leadership
              </span>
              <Image
                src={developerQuote.signatureImage}
                alt="Graham Furtado signature"
                width={180}
                height={36}
                className="object-contain filter contrast-125"
              />
              <p className="text-xs font-sans uppercase tracking-wider text-mira-charcoal font-medium">
                Graham Furtado
              </p>
              <p className="text-xs font-sans text-mira-muted">
                Developer, Furtado Property
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Project Partners Grid */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-16 bg-mira-sandLight border-t border-mira-border">
        <div className="max-w-[1500px] mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
              Architectural & Building Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-mira-charcoal font-light leading-tight">
              Craft, Precision & Design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {partnerRecords.slice(1).map((partner) => (
              <div
                key={partner.id}
                className="bg-white border border-mira-border p-8 sm:p-10 shadow-subtle flex flex-col justify-between space-y-8 transition-all duration-300 hover:shadow-card hover:border-mira-brown"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-mira-border pb-6">
                    <div className="relative w-40 h-16 flex items-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={150}
                        height={60}
                        className="object-contain max-h-14 filter contrast-125"
                      />
                    </div>
                    <div className="p-2 bg-mira-sandLight">
                      {getPartnerIcon(partner.role)}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-mira-tealDark font-semibold">
                      {partner.role}
                    </span>
                    <h3 className="text-2xl font-serif text-mira-charcoal font-light">
                      {partner.name}
                    </h3>
                  </div>

                  <p className="text-sm font-sans text-mira-muted leading-relaxed font-light">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Acknowledgement Feature */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 bg-mira-ground border-t border-mira-border">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-white border border-mira-border p-8 sm:p-16 shadow-subtle">
          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
            Cultural Connection to Country
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-mira-charcoal font-light">
            Featured Artist: {siteConfig.artistAcknowledgement.artist}
          </h2>
          <p className="text-base sm:text-lg font-sans text-mira-muted leading-relaxed font-light max-w-2xl mx-auto">
            {siteConfig.artistAcknowledgement.text}
          </p>
        </div>
      </section>

      {/* Sales Representation */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-16 bg-mira-sandLight border-t border-mira-border">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-mira-brown block font-medium">
              Appointments & Walkthroughs
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-mira-charcoal font-light">
              Sales Representation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {siteConfig.contacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-white border border-mira-border p-8 flex items-center gap-6 shadow-subtle hover:border-mira-brown transition-colors"
              >
                <div className="w-16 h-16 bg-mira-brown text-white flex items-center justify-center font-serif text-2xl font-light shrink-0">
                  {contact.name.split(" ").map((n) => n[0]).join("")}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-mira-muted">
                    {contact.role}
                  </span>
                  <h3 className="text-xl font-serif text-mira-charcoal font-medium">
                    {contact.name}
                  </h3>
                  <a
                    href={contact.tel}
                    className="inline-flex items-center gap-2 text-sm font-sans text-mira-tealDark hover:underline pt-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Registration Form */}
      <RegisterSection />
    </div>
  );
}
