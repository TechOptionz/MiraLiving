/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Rewrites `import { X } from "lucide-react"` to a direct per-icon import, so
  // a page that uses three icons no longer pulls the barrel file (and, in dev,
  // no longer compiles the whole icon set on every change). This replaces the
  // `transpilePackages` entry, which did the opposite — it forced the package
  // through the app's own compilation on every build.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    // Served through the Next.js image optimizer: the source assets are large
    // (social JPEGs up to ~1.4 MB), so resizing and modern formats matter here.
    // SVG sources bypass the optimizer automatically and are served as-is.
    // WebP only. AVIF saves ~30% more bytes but costs ~25x the encode time
    // (measured on this project: 11.0s vs 0.43s for the same source), which
    // every visitor pays on the first view of each variant.
    formats: ["image/webp"],
    // The sources top out near 2000px, so 2048/3840 variants cost optimizer
    // time without ever looking better. Cap the ladder at what the layout uses.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [256, 384],
  },
};

export default nextConfig;
