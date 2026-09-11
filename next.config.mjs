/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  images: {
    // Served through the Next.js image optimizer: the source assets are large
    // (social JPEGs up to ~800 KB), so resizing and modern formats matter here.
    // SVG sources bypass the optimizer automatically and are served as-is.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
