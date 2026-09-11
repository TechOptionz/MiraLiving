# Antigravity prompt — Mira Living website rebuild

Paste everything below the line into Antigravity. Before you do, put these in the project root:

```
/content/1-brand-and-business.md
/content/2-images.md
/content/3-content.md
/content/4-structure-and-gaps.md
/content/social-img-index.md
/content/social img/            ← unzipped folder (135 Instagram images + index.csv)
```

---

## ROLE

You are a senior product designer + front-end engineer building a production-ready marketing website for **Mira Living**, a 25-residence luxury oceanfront apartment development at 25–27 The Esplanade, Bargara QLD 4670, developed by Furtado Property. The current site is https://miraliving.com.au/ (WordPress/Elementor). Your job is to rebuild it so it looks and feels **materially more premium, more editorial, and more trustworthy** than the current site — closer to a high-end property-developer launch site than a template.

You have two MCP servers available and MUST use both:

- **Stitch MCP** — use it to generate the visual design system and every page/section layout *before* writing production code. Iterate in Stitch until the design is approved against the brief below, then export/translate the approved screens to code.
- **UI/UX MCP** — use it to audit every screen (hierarchy, spacing, typography scale, contrast/WCAG AA, responsive behaviour, interaction states, copy fit) and apply its recommendations. Run it once on the Stitch designs and again on the coded pages. Log what it flagged and what you changed.

## SOURCE OF TRUTH (read these first, in this order)

1. `content/1-brand-and-business.md` — logos, favicon, contacts, socials, partners, developer quote, legal text.
2. `content/3-content.md` — **all page copy, verbatim**, plus structured records (development record, 5 feature slides, 6 key features, 4 lifestyle records, 2 infrastructure records, 4 partner records, 3 step records, form fields).
3. `content/2-images.md` — every website image with direct URL, what it shows, role, and content/decorative flag. Includes a "Quick download list" of full-size originals.
4. `content/4-structure-and-gaps.md` — site map, link graph, form spec, embeds, and a list of errors/inconsistencies in the current site.
5. `content/social-img-index.md` + `content/social img/` — 135 Instagram images (construction progress, lifestyle, renders, floor plans) with `index.csv` (filename, post URL, date, caption).

## HARD RULES

1. **Do not invent content.** Every headline, paragraph, feature, price, contact detail, and partner description must come from `3-content.md` or `1-brand-and-business.md`. You may re-order, re-group, shorten for UI labels, and write short microcopy (button labels, form helper text, alt text, nav labels), but no new marketing claims, no fake testimonials, no fake FAQs, no invented amenities, no invented team bios.
2. **Keep copy exact** where it is used — same wording, same punctuation. Fix only the items listed under "Known fixes" below.
3. **Use only these assets:** website images from `2-images.md` (download the full-size originals from the Quick download list into `/public/img/site/`), and Instagram images from `content/social img/` (copy into `/public/img/social/`). No stock photos, no AI-generated imagery.
4. **Every content image gets descriptive alt text** — take the descriptions from the "What it shows" column in `2-images.md` and the captions in `index.csv`. Decorative textures get `alt=""`.
5. Use the real logos: `mira-logo-brown.svg` (on light), `mira-logo.svg` (on dark/photo), favicon from `cropped-mira-fav.jpg`. Do not redraw the logo.
6. Render-based images must carry the caption **"Artist Impression"** exactly as the current site does (legal requirement). Keep the footer disclaimer verbatim.
7. The brochure PDF is not available — the "Download Brochure" CTA must open the registration form (same fields as the current Gravity Form). Do not link to a fake PDF.

## KNOWN FIXES (apply these — they are documented errors in the current site)

- Postcode is **4670** everywhere (current footer says 4760 — wrong).
- Matthew Capuzzo's phone link is `tel:0458960726` everywhere (current footer has a malformed `tel:045960726`).
- Fix the typo "Queenland's" → "Queensland's".
- Completion date conflicts ("Complete September 2026" vs "completion expected in Q2 2026"). Use **"Completion September 2026"** and leave one clearly marked `TODO: confirm completion date with client` comment in code.
- The Instagram bio says "FROM $1.395M", the website says "from $1.425M". Use the **website figure ($1.425M)** and add a `TODO: confirm price` comment.
- One H1 per page. Hero headline is the H1 ("Premium Oceanfront Living in Bargara"). Remove the hidden "Home" H1 pattern.
- Header "Download Brochure" must work on every page (link to `/#register` or open the form modal), not a dead same-page anchor.
- Do not build a Blog page — the current blog has zero posts. Drop it from the nav.
- Add proper meta descriptions to every page (currently missing on Privacy Policy).

## BRAND & DESIGN DIRECTION

**Feel:** quiet coastal luxury. Editorial, unhurried, lots of air. Think high-end architecture-studio and boutique-developer launch sites — large photography, restrained type, generous whitespace, thin rules, subtle motion. Not "real-estate template", not busy, no stock icons, no gradients, no card-grid soup.

**Palette (derive from the assets; do not deviate far):**
- Primary brown (logo colour): `#746355`
- Sand / warm neutrals: sample from `icon-bg.webp` and `contactbg-1.webp` (approx `#E9DCCF`, `#F6F1EA`)
- Deep taupe for dark sections: approx `#6E5E52`–`#5C4E44`
- Accent: the soft sea-blue/teal used on the current site's buttons and progress bar (approx `#8FBCC6`) — use sparingly, only for primary CTAs and the progress indicator.
- Off-white page ground: approx `#FBF8F3`. Never pure white, never pure black.
- Run the final palette through the UI/UX MCP for WCAG AA contrast on all text/background pairs.

**Typography:** a refined high-contrast serif for display (e.g. a Fraunces / Playfair / Cormorant-class face) paired with a clean geometric sans for body and UI (Poppins-class, as the current site uses). Set a proper modular type scale; display headings large and light, body 17–18px with relaxed leading. Small-caps tracked labels for eyebrows ("Now Selling", "Under construction").

**Motion:** subtle only — fade/rise on scroll, slow Ken-Burns on hero stills, smooth slider. Respect `prefers-reduced-motion`.

**Imagery treatment:** full-bleed hero, large single images with captions, occasional two-up asymmetric layouts, image + text split sections. Use the hero video `mira-living.mp4` with `Hero-Mira-Bg.webp` poster; use `Mira-Sunset.mp4` as a muted background only if it adds calm, otherwise a still.

## SITE STRUCTURE (build exactly these routes)

```
/                 Home (single long page, anchored sections)
/residences       Residences — apartment details, finishes, floor plans, availability
/location         Bargara & lifestyle
/team             Developer & project partners
/privacy-policy   Privacy Policy (verbatim from 3-content.md)
/#register        Brochure registration form (modal or anchored section, reachable from every page)
```

Nav: Residences · Location · Team · [Download Brochure — primary button]. Footer: logo, project address, sales contacts (both with tel: links), Instagram + Facebook, artist acknowledgement, legal disclaimer, © 2026 Mira Living, Privacy Policy.

### Home — section order and content mapping

1. **Hero** — video/poster, white logo, H1 "Premium Oceanfront Living in Bargara", sub-line "Spacious 3-Bedroom + Multi-Purpose Room Coastal Living from $1.425M", CTA "Download Brochure", secondary CTA "View residences".
2. **Status bar** — "Under construction · 98% · Completion September 2026" as a clean progress indicator.
3. **Collection statement** — H2 "A limited collection of just 25 generously proportioned residences…" with the 5 stat icons: 3 bed, 1 (multi-purpose room), 2 car, 2 bath, Resort pool. Design new thin-line icons in Stitch; label them properly (the current icons are unlabelled).
4. **A new way to live by the sea** — both paragraphs verbatim; availability render `Sold-Properties-Mira-Living-4.webp` with "Artist Impression" caption.
5. **Developer quote** — full quote verbatim, signature SVG, attribution "— Graham Furtado, Developer, Furtado Property".
6. **Interiors** — H2 "Mira Living is more than a home—it's a sanctuary where elegance meets adventure"; the 5 feature slides (Walk-in wardrobes, Serene private sanctuaries, Kitchens for entertaining, Open-plan living, Restful nights) as an editorial slider or stacked split sections, each with its render + verbatim description + "Artist Impression".
7. **Pool** — "Quiet moments between the waves" + paragraph + `Mira-Pool-Living.webp`.
8. **Key features** — the 6 icon-box lines, verbatim, as a clean two-column list.
9. **Location teaser** — "Queensland's best-kept coastal secret" + both paragraphs + the labelled aerial `mira-living-img-2.webp`; link to /location.
10. **Team teaser** — 4 partner logos, link to /team.
11. **Secure your piece of paradise** — eyebrow "Now Selling", H2, both paragraphs, contacts, the 3 numbered steps verbatim, CTA.
12. **Register / Download the brochure** — form: First Name*, Last Name*, Phone, Email*, Message, "What is your budget?" ($1.4M - $1.6M / $1.6M - $1.8M / $2M+), "What is your purchasing Timeframe?" (Ready Now / 0-3 months / 3-6 months / 6+ months), honeypot field, submit "Download Brochure". Background `contactbg-1.webp`. Wire to a POST handler stub with server-side validation; add a `TODO: connect to client CRM/email`.

### Residences
Development record from `3-content.md` presented as a spec table (bedrooms, bathrooms, cars, 117–139 sqm internal, finishes list, amenities, price from). Finishes gallery using the interior renders. **Floor plans:** use the three Instagram floor-plan graphics — Type A (`IG_094_…`), Type B (`IG_085_…`), Type C (`IG_069_…`) from `content/social img/` — in a tabbed viewer with a "TODO: replace with client-supplied floor plan PDFs" note. Availability: the sold/future-release render, plus contact CTA. Construction progress strip: pick 8–12 chronological construction images from `social img` (use `index.csv` dates and captions — e.g. groundbreaking Jan 2025 → basement → floors poured → scaffolding down Jul 2026 → landscaping Aug 2026) as a dated timeline.

### Location
"Queensland's best-kept coastal secret" intro; the 4 lifestyle records (Shopping, Cafés and dining, Recreation, Healthcare) with their images and verbatim copy; "Why Bargara?" with the 2 infrastructure records (New Bundaberg Hospital — keep the "Source: widebay.health.qld.gov.au" caption; Bargara Golf Club); "Connected yet worlds away" with the mud-map SVG rebuilt as accessible HTML/SVG with real text labels (Agnes Water, Bundaberg Central, Bargara, Hervey Bay, Noosa Heads, Sunshine Coast, Caloundra, Brisbane, Gold Coast) and the two distance pills ("Bundaberg 20 min", "Bundaberg Airport 25 min"). Add an embedded map of 25–27 The Esplanade, Bargara QLD 4670 (the current site has none). Supplement with 6–8 Bargara lifestyle photos from `social img` (beach, esplanade, cafés, golf).

### Team
"Brought to life by Furtado Property" — 4 partner records verbatim with logos (Furtado Property, Sparc, IDC Construct, Sarah Wood Designs). Sales contacts: Sonia Hancock 0438 162 574, Matthew Capuzzo 0458 960 726 (no photos exist — use initials or a neutral treatment, do not fabricate photos). Artist feature: Goompi Ugerabah acknowledgement, verbatim.

### Privacy Policy
Verbatim from `3-content.md`, with correct heading hierarchy (H1 + H2 numbered sections), bold as in source, phone links.

## TECH SPEC

- Next.js (App Router) + TypeScript + Tailwind, or Astro if you judge it better for a static marketing site. Static export must work.
- All copy in a single `content/*.ts` or `.json` layer so the client can edit without touching components.
- Images through the framework's image component with responsive `srcset`; convert to WebP/AVIF; lazy-load below the fold; hero preloaded.
- SEO: unique `<title>` and meta description per page, Open Graph + Twitter cards (og:image = the availability render), canonical URLs, `robots.txt`, `sitemap.xml`, JSON-LD (`Organization`, `WebSite`, and `Residence`/`ApartmentComplex` schema for the development with address, price range, developer).
- Analytics placeholder: GTM container `GTM-TWFRS38X` behind a consent banner (privacy policy mentions cookies; the current site has no consent UI — add one).
- Accessibility: semantic landmarks, skip link, focus states, keyboard-operable slider and tabs, WCAG AA contrast, reduced-motion support.
- Performance targets: Lighthouse ≥ 95 performance / 100 accessibility / 100 SEO on mobile. Hero video ≤ 4 MB or replaced with poster on slow connections.
- Fully responsive 360px → 1920px. Side gutters never below 20px on mobile.

## WORKFLOW (follow in order and report at each checkpoint)

1. Read all five content files. Produce a 1-page content-to-section map confirming where every piece of copy and every image lands. Stop and show me.
2. In **Stitch MCP**: generate the design system (palette, type scale, spacing, buttons, form fields, cards, captions) and the Home page desktop + mobile. Show me; iterate until approved.
3. In **Stitch MCP**: Residences, Location, Team, Privacy, and the register form/modal.
4. Run **UI/UX MCP** audit on all Stitch screens. Apply fixes. Show the before/after list.
5. Scaffold the project, download and optimise all assets, build the content layer.
6. Build pages from the approved designs. Componentise: Hero, StatusBar, StatBadges, SplitSection, ImageWithCaption, FeatureSlider, IconList, PartnerGrid, StepList, RegisterForm, Timeline, FloorPlanTabs, MudMap, Footer.
7. Run **UI/UX MCP** audit on the coded pages at 360/768/1280/1920. Fix.
8. Run Lighthouse + axe. Fix until targets are met.
9. Deliver: repo, `README.md` (how to run, how to edit content, where TODOs are), and a `CHANGES-VS-CURRENT-SITE.md` listing every content correction you applied and every open TODO for the client.

## WHAT "MORE PROFESSIONAL THAN THE CURRENT SITE" MEANS HERE

- One clear H1 and a real page hierarchy instead of a single endless scroll with two H1s.
- Dedicated Residences / Location / Team pages so buyers can find specs, floor plans and partners in one click.
- Labelled stat icons, descriptive alt text, working phone links, consistent address and dates.
- A construction-progress timeline and floor plans — the current site shows neither, but the Instagram archive has them.
- A map, a cookie consent banner, structured data, and a form that works from every page.
- Calmer, more editorial layout: bigger imagery, fewer boxes, consistent spacing rhythm, restrained accent colour.

Begin with step 1.
