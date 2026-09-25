import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-content";

/**
 * No crawl-delay (the audit found one on the old host slowing Bing; Googlebot
 * ignores it and the CDN handles normal crawl rates). The form endpoint is the
 * only path kept out. The brochure PDF is handled with an X-Robots-Tag header
 * rather than a Disallow, so crawlers can still read the noindex.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
