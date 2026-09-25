import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-content";
import Hero from "@/components/home/Hero";
import StatusBar from "@/components/home/StatusBar";
import CollectionStatement from "@/components/home/CollectionStatement";
import AnewWaySection from "@/components/home/AnewWaySection";
import DeveloperQuote from "@/components/home/DeveloperQuote";
import InteriorsSlider from "@/components/home/InteriorsSlider";
import CompletedTeaser from "@/components/home/CompletedTeaser";
import PoolSection from "@/components/home/PoolSection";
import KeyFeaturesGrid from "@/components/home/KeyFeaturesGrid";
import LocationTeaser from "@/components/home/LocationTeaser";
import TeamTeaser from "@/components/home/TeamTeaser";
import SecureSection from "@/components/home/SecureSection";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  // `absolute` skips the "| Mira Living Bargara" template: the default title
  // already ends in the brand.
  title: { absolute: siteConfig.title },
  description: siteConfig.metaDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Construction Status Bar */}
      <StatusBar />

      {/* 3. Collection Statement with 5 Stat Badges */}
      <CollectionStatement />

      {/* 4. A New Way to Live by the Sea (Availability Render) */}
      <AnewWaySection />

      {/* 5. Developer Quote (Graham Furtado) */}
      <DeveloperQuote />

      {/* 6. Interiors Editorial Slider (5 slides verbatim) */}
      <InteriorsSlider />

      {/* 6b. The completed residence, photographed */}
      <CompletedTeaser />

      {/* 7. Residents' Pool Sanctuary */}
      <PoolSection />

      {/* 8. Key Features Specifications Grid */}
      <KeyFeaturesGrid />

      {/* 9. Location Teaser (Aerial Photo) */}
      <LocationTeaser />

      {/* 10. Team Teaser (Partner Logos) */}
      <TeamTeaser />

      {/* 11. Secure Your Piece of Paradise (3 Steps) */}
      <SecureSection />

      {/* 12. Brochure Registration Form Section */}
      <RegisterSection />
    </div>
  );
}
