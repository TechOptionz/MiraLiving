import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/story", "/residences", "/location", "/team", "/privacy-policy"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-09-11"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
