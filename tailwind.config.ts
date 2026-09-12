import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mira: {
          ground: "#FBF8F3",
          sand: "#E9DCCF",
          sandLight: "#F6F1EA",
          sandDark: "#D8C5B2",
          brown: "#746355",
          brownDark: "#5C4E44",
          brownDeep: "#3D322B",
          teal: "#8FBCC6",
          tealDark: "#4D7D88",
          tealLight: "#C4E2E8",
          charcoal: "#241E1A",
          muted: "#6B5D52",
          border: "#E8DFD5",
          borderDark: "#7A6B5F",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "Poppins", "Outfit", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.15em",
        relaxed: "0.05em",
      },
      boxShadow: {
        subtle: "0 10px 30px -10px rgba(60, 48, 40, 0.08)",
        card: "0 20px 40px -15px rgba(60, 48, 40, 0.12)",
        float: "0 25px 50px -12px rgba(60, 48, 40, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
