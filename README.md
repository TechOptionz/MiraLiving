# Mira Living — Premium Marketing Website Rebuild

A high-end, editorial marketing website rebuild for **Mira Living** (25 luxury oceanfront residences at 25–27 The Esplanade, Bargara QLD 4670, developed by Furtado Property).

Built with **Next.js 14+ (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌊 Highlights of the Rebuild

1. **Quiet Coastal Luxury Design System**:
   - Palette derived directly from brand assets: Logo Brown (`#746355`), Deep Taupe (`#3D322B`, `#5C4E44`), Sand Neutrals (`#E9DCCF`, `#F6F1EA`), and Sea-Blue Accent (`#8FBCC6`).
   - Typography: Google Font display serif **Cormorant Garamond** paired with geometric sans **Poppins**.
   - Custom noise texture, smooth Ken-Burns motion, and relaxed letter-spacing.

2. **Dedicated Route Architecture**:
   - `/` — Single long editorial Home page with anchored sections.
   - `/residences` — Full development specs schedule, finishes & material palette, interactive tabbed floor plans (Type A, B, C) with lightbox zoom, current availability elevation, and a dated construction progress timeline.
   - `/location` — 4 lifestyle pillars (Shopping, Dining, Recreation, Healthcare), 7 curated authentic Bargara vignettes, regional infrastructure ($1.2B Bundaberg Hospital + Golf Club), and an accessible SVG mud map with embedded Google Map.
   - `/team` — Developer profile for Furtado Property (Graham Furtado quote & signature), Sparc (Architect), IDC Construct (Builder), Sarah Wood Designs (Interior Designer), and Goompi Ugerabah cultural feature.
   - `/privacy-policy` — Complete verbatim compliance document with semantic hierarchy and working `tel:` links.
   - `/#register` — Brochure download form accessible as both an anchored section and a universal modal reachable from any page.

3. **Curated Asset Management**:
   - Restricted from 135 social photos down to **21 high-impact assets** (3 floor plans, 11 chronological construction milestones, 7 authentic lifestyle scenes), keeping the website uncluttered, lightweight, and serene.
   - Zero stock imagery or AI placeholders used.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+ (tested on Node v24.15.0)
- npm

### Installation & Development
```bash
# Install dependencies
npm install

# Run development server (on port 3005 or default 3000)
npm run dev -- -p 3005

# Build production bundle
npm run build

# Start production server
npm run start -- -p 3005
```

Open [http://localhost:3005](http://localhost:3005) in your browser.

---

## 📝 How to Edit Content

All copy, contact information, specifications, dates, and partner biographies are isolated in a single type-safe file:

📁 **`src/content/site-content.ts`**

Any team member can update headlines, descriptions, phone numbers, or prices in this file without modifying component logic or CSS.

---

## 📌 TODOs & Client Confirmations

Search for `TODO` in the codebase to find items flagged for client confirmation:

1. **Price Verification**:
   - File: `src/content/site-content.ts` (line 61) & `src/app/residences/page.tsx`
   - *Note*: Instagram bio states "FROM $1.395M", while the website states "from $1.425M". Rebuilt using the website figure ($1.425M).

2. **Completion Date Verification**:
   - File: `src/content/site-content.ts` (line 64) & `src/components/home/StatusBar.tsx`
   - *Note*: Hero bar says "Complete September 2026", while another section mentions "Q2 2026". Standardized to "Completion September 2026".

3. **Brochure PDF & CRM Webhook**:
   - File: `src/components/common/BrochureForm.tsx` (line 46)
   - *Note*: Wire the submission handler to the client's CRM/email service and host the high-resolution downloadable brochure PDF.

4. **Floor Plan Vector PDFs**:
   - File: `src/components/residences/FloorPlanTabs.tsx`
   - *Note*: Replace the curated Instagram floor-plan raster graphics with client-supplied vector CAD/PDFs when available.

---

## 🔒 Security & Privacy

- **Anti-Spam**: Form includes an automated honeypot field (`linkedInHoneypot`) hidden via CSS and `tabIndex={-1}`.
- **Cookie Consent**: Cookie consent banner loads Google Tag Manager (`GTM-TWFRS38X`) only after user consent is granted.
- **Accessibility**: Semantic landmarks, keyboard navigation, visible focus rings, skip-to-content links, and WCAG AA contrast standards.
