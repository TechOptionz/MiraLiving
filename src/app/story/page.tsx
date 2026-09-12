import React from "react";
import type { Metadata } from "next";
import { storyPage } from "@/content/story-content";
import StoryHero from "@/components/story/StoryHero";
import VisionSection from "@/components/story/VisionSection";
import DesignPhilosophy from "@/components/story/DesignPhilosophy";
import ConstructionJourney from "@/components/story/ConstructionJourney";
import CraftsmanshipSection from "@/components/story/CraftsmanshipSection";
import PeopleSection from "@/components/story/PeopleSection";
import LifestyleSection from "@/components/story/LifestyleSection";
import StoryCTA from "@/components/story/StoryCTA";

export const metadata: Metadata = {
  title: storyPage.meta.title,
  description: storyPage.meta.description,
  alternates: { canonical: "/story" },
};

// Without JavaScript the scroll reveals never fire, so show everything.
const noScriptStyles =
  ".reveal{opacity:1!important;transform:none!important;clip-path:none!important}.reveal-mask>:first-child{transform:none!important}";

/**
 * The Story — the journey of creating Mira, in eight movements:
 * hero · vision · design philosophy · construction · craftsmanship ·
 * people · lifestyle · invitation.
 */
export default function StoryPage() {
  return (
    <div className="w-full bg-mira-ground">
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
      </noscript>

      <StoryHero />
      <VisionSection />
      <DesignPhilosophy />
      <ConstructionJourney />
      <CraftsmanshipSection />
      <PeopleSection />
      <LifestyleSection />
      <StoryCTA />
    </div>
  );
}
