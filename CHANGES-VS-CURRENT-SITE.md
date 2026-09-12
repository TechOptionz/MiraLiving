# Changes vs. Current WordPress / Elementor Site

A comprehensive audit of changes, corrections, architectural improvements, and open client items implemented in the rebuild of **miraliving.com.au**.

---

## 🛠️ Documented Content & Link Corrections

| # | Item | Previous Site Issue | Rebuild Resolution |
|---|---|---|---|
| **1** | **Postcode** | Footer displayed **4760** (wrong postcode). | Corrected to **4670** (Bargara's true postcode) across all pages, footers, schema, and privacy policy. |
| **2** | **Sales Phone Link** | Matthew Capuzzo's phone link in the footer was malformed: `href="tel:045960726"` (missing digit 8). | Corrected to `tel:0458960726` across all footers, contact cards, and privacy policy links. |
| **3** | **Spelling Typo** | Section 6 headline had the typo: *"Queenland's best-kept coastal secret"* (missing 's'). | Corrected to *"Queensland's best-kept coastal secret"*. |
| **4** | **Heading Hierarchy** | Current site had two H1s (a hidden zero-height "Home" container and "Connected yet worlds away"), with hero headlines downgraded to H3/H5. | Restructured to have **exactly one clean semantic H1 per page** (`"Premium Oceanfront Living in Bargara"` on Home). |
| **5** | **Download Brochure CTA** | Header button on subpages targeted `{current page}#download` which broke on `/blog/` and `/privacy-policy/`. | Built universal modal and anchor handling so clicking "Download Brochure" opens the modal or jumps smoothly to `/#register` on every page. |
| **6** | **Dead Blog Route** | Nav had a link to `/blog/`, which loaded an empty page with 0 posts and an empty RSS feed. | Removed from primary navigation to prevent buyer dead-ends. |
| **7** | **Alt Text & Accessibility** | Nearly every raster image had `alt=""` or filenames (`"mira living img 2"`). Stat icons had unlabelled numbers (`"3 1 2 2 Resort Pool"`). | Added descriptive alt text to all content images; added clear labels and ARIA attributes to all stat badges. |
| **8** | **Privacy Policy Meta & Icons** | Missing meta description; phone icons loaded from external WordPress emoji CDN (`s.w.org`). | Added unique meta description and replaced external emojis with clean inline SVG icons. |
| **9** | **Cookie Consent Banner** | Previous site loaded GTM/GA4 tracking cookies without consent UI. | Added a subtle coastal-styled Cookie Consent banner that conditionally initialises GTM (`GTM-TWFRS38X`). |
| **10**| **Google Maps Embed** | Previous site had no map embed for buyers looking to inspect the location. | Added an interactive Google Maps embed for 25–27 The Esplanade, Bargara QLD 4670 on `/location`. |

---

## 🎨 Architectural & User Experience Enhancements

1. **Multi-Page Information Architecture**:
   - Transformed the single endless scroll into dedicated, bookmarkable routes:
     - `/residences` (Specs table, finishes, floor plans, timeline)
     - `/location` (Bargara lifestyle, photo vignettes, infrastructure, mud map)
     - `/story` (The journey of creating Mira, in eight movements — existing copy only)
     - `/team` (Partners and developer bios)
     - `/privacy-policy` (Legal compliance)

2. **Interactive Floor Plans**:
   - Extracted and integrated the 3 Instagram floor plans (Type A, B, and C) into a tabbed layout viewer with a click-to-expand lightbox zoom.

3. **Construction Progress Strip**:
   - Replaced static text with a dated, chronological photo timeline featuring 11 milestones from Jan 2025 groundbreaking to Sep 2026 98% completion.

4. **Curated Social Asset Restriction**:
   - Filtered 135 social media images down to **21 high-impact assets** to maintain a peaceful, luxury aesthetic without clutter.

---

## 📋 Open Items for Client Confirmation (TODOs in Code)

| TODO Item | Code Location | Details & Next Action |
|---|---|---|
| **Completion Date** | `src/content/site-content.ts` (line 64)<br>`src/components/home/StatusBar.tsx` | Site text had conflicting dates: "Complete September 2026" vs "Q2 2026". Standardized to "Completion September 2026". **Confirm exact handover schedule with Graham Furtado.** |
| **Starting Price** | `src/content/site-content.ts` (line 61)<br>`src/app/residences/page.tsx` | Instagram bio states "FROM $1.395M" while website states "from $1.425M". Rebuilt using $1.425M. **Confirm current price release with sales team.** |
| **Brochure PDF Link** | `src/components/common/BrochureForm.tsx` (line 46) | Brochure is gated behind Gravity Forms; provide direct PDF link or configure webhook to sales CRM. |
| **Floor Plan CAD / Vector PDFs** | `src/components/residences/FloorPlanTabs.tsx` | Replace raster Instagram floor plans with architectural vector PDFs when released by Sparc. |
| **Story Page Portraits** | `src/content/story-content.ts` (`storyPage.people`) | Every visual on `/story` is an `ImageSlot`: 18 of the 22 now carry real assets (construction chapters from the project's own milestone photography in `/img/social/`, interiors and coastline from `/img/site/`). The client's curated construction set (18 files, `07_Construction_Progress`) has been copied into `/public/img/social/`; the shots not used on the page are there ready to swap into any slot. The **4 portrait slots remain placeholders** — Graham Furtado (3:4) and Sparc, IDC Construct and Sarah Wood (4:5) — because no portrait photography of people has ever been published for this project. Set `src` to a path under `/public` and write real `alt` text to drop each one in; no component changes. Note `Sold-Properties-Mira-Living-4.webp` and `progress-img.webp` are deliberately unused — both carry baked-in "SOLD"/"FUTURE RELEASE" overlays. |
| **Bundaberg Hospital Usage Rights** | `src/content/site-content.ts` | Hospital render is credited to `widebay.health.qld.gov.au`. Retained attribution caption; client to verify media clearance. |
