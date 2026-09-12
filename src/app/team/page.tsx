import React from "react";
import type { Metadata } from "next";
import TeamHero from "@/components/team/TeamHero";
import DeveloperFeature from "@/components/team/DeveloperFeature";
import PartnersGrid from "@/components/team/PartnersGrid";
import OnSiteSection from "@/components/team/OnSiteSection";
import MilestoneSection from "@/components/team/MilestoneSection";
import ArtistSection from "@/components/team/ArtistSection";
import SalesSection from "@/components/team/SalesSection";
import RegisterSection from "@/components/home/RegisterSection";

export const metadata: Metadata = {
  title: "Project Partners & Development Team",
  description:
    "Meet the team behind Mira Living: Furtado Property, Sparc Architects, IDC Construct, Sarah Wood Designs, the crews on site, and featured artist Goompi Ugerabah.",
  alternates: { canonical: "/team" },
};

// Without JavaScript the scroll reveals never fire, so show everything.
const noScriptStyles =
  ".reveal{opacity:1!important;transform:none!important;clip-path:none!important}.reveal-mask>:first-child{transform:none!important}";

/**
 * The Team — the people behind Mira, in seven full-screen movements:
 * masthead · developer · disciplines · the trades · groundbreaking ·
 * acknowledgement · who to call.
 *
 * Every section carries its own viewport rather than stacking as bands, so the
 * page is read one screen at a time; the motion is the site's existing reveal
 * and parallax vocabulary, nothing new.
 */
export default function TeamPage() {
  return (
    <div className="w-full bg-mira-ground">
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
      </noscript>

      <TeamHero />
      <DeveloperFeature />
      <PartnersGrid />
      <OnSiteSection />
      <MilestoneSection />
      <ArtistSection />
      <SalesSection />
      <RegisterSection />
    </div>
  );
}
