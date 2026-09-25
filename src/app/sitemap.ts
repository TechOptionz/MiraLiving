import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-content";

/**
 * Every indexable route. The brochure PDF is deliberately absent: it is served
 * with X-Robots-Tag: noindex so buyers reach it through the form, not search.
 * Bump `updated` when content changes; the Residences page moves with each
 * price guide.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-25");

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/residences", priority: 0.9, changeFrequency: "weekly" },
    { path: "/location", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/story", priority: 0.6, changeFrequency: "monthly" },
    { path: "/team", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: updated,
    changeFrequency,
    priority,
  }));
}
