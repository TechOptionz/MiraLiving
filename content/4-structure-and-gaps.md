# 4 — Structure & Gaps: miraliving.com.au

Crawled 11 September 2026 via a fully rendered browser session (JS executed, page scrolled to trigger lazy content), plus sitemap, RSS feed, robots.txt and REST API probes.

---

## Platform summary

| Item | Value |
|---|---|
| CMS | WordPress |
| Page builder | Elementor 4.2.4 (Elementor Pro header/footer templates, swiper slider, motion effects, background videos) |
| SEO | Rank Math (sitemap, JSON-LD Organization + WebSite schema, og tags) |
| Forms | Gravity Forms (form ID 1, AJAX submission, honeypot enabled) |
| Security | Kadence Security (REST API `/wp-json/wp/v2/*` returns 401 for anonymous — pages/posts endpoints not readable) |
| Analytics | Google Tag Manager GTM-TWFRS38X; GA4 G-ZPTJCDSVM8 |
| robots.txt | `Disallow: /wp-admin/` · `Allow: /wp-admin/admin-ajax.php` · `Crawl-delay: 10` · Sitemap: https://miraliving.com.au/sitemap_index.xml |
| Sitemap | https://miraliving.com.au/sitemap_index.xml → https://miraliving.com.au/page-sitemap.xml (2 URLs: `/` and `/privacy-policy/`; last modified 2026-08-18). `/blog/` is NOT in the sitemap. No post-sitemap exists (no posts). |

---

## Full URL list (navigation order)

| # | URL | Page title | H1 | In sitemap | How reached |
|---|---|---|---|---|---|
| 1 | https://miraliving.com.au/ | Mira Living | "Home" (hidden) + "Connected yet worlds away" | Yes | Root / header logo / footer logo |
| 2 | https://miraliving.com.au/blog/ | Blog - Mira Living | Blog | No | Header nav "Blog" |
| 3 | https://miraliving.com.au/privacy-policy/ | Privacy Policy - Mira Living | Privacy Policy | Yes | Footer nav "Privacy Policy" |

Total unique internal pages: **3**. No nested pages, listing pages, category/tag archives, author pages, search results, or unit/apartment pages exist. `/contact/`, `/about/`, `/brochure/`, `/thank-you/` all return 404.

### Anchors on the homepage

| Anchor | Target section |
|---|---|
| `#content` | Main content wrapper (skip link) |
| `#download` | "Download the brochure" form section (Elementor container `b0dfc63`) |

### Feeds / machine endpoints

| URL | Status | Content |
|---|---|---|
| https://miraliving.com.au/feed/ | 200 | RSS channel "Mira Living", **0 items** |
| https://miraliving.com.au/sitemap_index.xml | 200 | index → page-sitemap.xml |
| https://miraliving.com.au/page-sitemap.xml | 200 | 2 URLs |
| https://miraliving.com.au/wp-sitemap.xml | (WordPress core sitemap; superseded by Rank Math) | — |
| https://miraliving.com.au/wp-json/wp/v2/pages | 401 | blocked by Kadence Security |
| https://miraliving.com.au/wp-json/wp/v2/posts | 401 | blocked |

---

## Link graph (which pages link to which)

### Site-wide (header + footer on every page)

| From | Link text / element | To |
|---|---|---|
| all | Header logo | https://miraliving.com.au/ |
| all | Nav "Blog" | https://miraliving.com.au/blog/ |
| all | Header button "Download Brochure" | `{current page}#download` — resolves to `/#download`, `/blog/#download`, `/privacy-policy/#download` (only the first works) |
| all | Footer logo | https://miraliving.com.au/ |
| all | Footer social "Facebook-f" | https://www.facebook.com/p/Mira-Living-100093669997782/ (external) |
| all | Footer social "Instagram" | https://www.instagram.com/miraliving.bargara/?hl=en (external) |
| all | Footer "0438 162 574" | tel:0438162574 |
| all | Footer "0458 960 726" | tel:045960726 ⚠ malformed (9 digits) |
| all | Footer nav "Privacy Policy" | https://miraliving.com.au/privacy-policy/ |
| all | Footer icreate logo | https://icreate.agency/ (external) |
| all | "Skip to content" (sr-only) | `{current page}#content` |

### Homepage body

| Link text | To |
|---|---|
| Download Brochure (×3 body buttons) | https://miraliving.com.au/#download |
| 0438 162 574 (Secure section) | tel:0438162574 |
| 0458 960 726 (Secure section) | tel:0458960726 |

### Blog body

No links.

### Privacy Policy body

| Link text | To |
|---|---|
| 0438 162 574 | tel:0438162574 |
| 0458 960 726 | tel:0458960726 |

### Inbound summary

| Page | Linked from |
|---|---|
| / | every page (logo ×2) |
| /blog/ | every page (header nav) — not in sitemap |
| /privacy-policy/ | every page (footer nav) |

### External domains linked

- facebook.com (footer)
- instagram.com (footer)
- icreate.agency (footer credit)
- s.w.org (privacy policy — emoji image asset, not a link)
- googletagmanager.com (GTM script/noscript iframe)
- widebay.health.qld.gov.au — cited as text in an image caption, **not a hyperlink**

---

## Downloadable files (PDFs, brochures, floor plans)

| File | URL | Label | Status |
|---|---|---|---|
| Mira Living brochure (PDF) | **not exposed** | "Download Brochure" / "Download the brochure" | Gated behind the Gravity Forms registration form. No `.pdf`, `.doc`, `.zip` or `download` attribute exists anywhere in any page's HTML. The brochure is presumably delivered via the Gravity Forms confirmation/notification email or redirect after submission — this was not tested because it would require submitting the lead form. Guessed paths (`/wp-content/uploads/2025/10/Mira-Living-Brochure.pdf`, `/…/Brochure.pdf`, `/brochure/`) all 404. **You will need the PDF from the client or WP media library.** |
| Floor plans | none | — | No floor plans, site plans, or unit schedules exist on the site. |
| Price list / availability | none | — | Availability is only shown as a static render with "SOLD"/"FUTURE RELEASE" overlays (https://miraliving.com.au/wp-content/uploads/2026/03/Sold-Properties-Mira-Living-4.webp). |
| Video files | https://miraliving.com.au/wp-content/uploads/2025/10/mira-living.mp4 · https://miraliving.com.au/wp-content/uploads/2025/10/Mira-Sunset.mp4 | (background videos) | Direct MP4s, downloadable. |

---

## Forms

### Form 1 — "Download the brochure" (Gravity Forms, `id="gform_1"`)

- **Location:** Homepage only, section `#download`
- **Method:** POST · **Action:** https://miraliving.com.au/#gf_1 (posts to same page; AJAX via hidden iframe `gform_ajax_frame_1`)
- **Intro copy:** Register now to download the Mira Living brochure and be amongst the first to experience Bargara’s most exclusive oceanfront residences.
- **Required legend:** "*" indicates required fields
- **Submit button label:** Download Brochure
- **Confirmation / success behaviour:** unknown (not submitted). Could be inline message, redirect, or emailed PDF link.

| Order | Label | Field name | Input ID | Type | Required | Options / notes |
|---|---|---|---|---|---|---|
| 1 | LinkedIn | input_17 | input_1_17 | text | no | **Honeypot** — container `display:none`, description "This field is for validation purposes and should be left unchanged." Do not render on rebuild; replicate as anti-spam. |
| 2 | First Name | input_1 | input_1_1 | text | **yes** | |
| 3 | Last Name | input_3 | input_1_3 | text | **yes** | |
| 4 | Phone | input_5 | input_1_5 | tel | no | |
| 5 | Email | input_4 | input_1_4 | email | **yes** | |
| 6 | Message | input_6 | input_1_6 | textarea | no | |
| 7 | What is your budget? | input_14 | input_1_14 | select | no | $1.4M - $1.6M · $1.6M - $1.8M · $2M+ |
| 8 | What is your purchasing Timeframe? | input_16 | input_1_16 | select | no | Ready Now · 0-3 months · 3-6 months · 6+ months |
| — | (hidden) | input_7, input_8, input_9, input_10, input_11, input_12, input_13 | | hidden | — | Seven hidden tracking fields (input_8 is pre-populated; the rest are empty at load — typical UTM / referrer / GCLID capture populated by GTM). Field labels not recoverable without admin access. |
| — | (hidden GF system) | gform_ajax, gform_submission_method, gform_theme, gform_style_settings, is_submit_1, gform_submit, gform_currency, gform_unique_id, state_1, gform_target_page_number_1, gform_source_page_number_1, gform_field_values | | hidden | — | Gravity Forms internals |

No other forms exist (no newsletter signup, no contact form on Privacy Policy, no search).

---

## Embeds

| Type | Page | Source | Notes |
|---|---|---|---|
| Background video (hosted) | Home, hero section `2d50bfb` | https://miraliving.com.au/wp-content/uploads/2025/10/mira-living.mp4 | `<video autoplay loop muted playsinline>`, no poster attribute; CSS fallback image Hero-Mira-Bg.webp |
| Background video (hosted) | Home, slider section `b20f4d3` | https://miraliving.com.au/wp-content/uploads/2025/10/Mira-Sunset.mp4#t=5 | Starts at 5 s; autoplay/loop/muted; no poster |
| Google Tag Manager | all pages | https://www.googletagmanager.com/ns.html?id=GTM-TWFRS38X | `<noscript>` iframe + gtm.js |
| Gravity Forms AJAX iframe | Home | about:blank (`gform_ajax_frame_1`) | internal plumbing |
| Google Maps | — | — | **No map embed anywhere.** Location is conveyed only by the static aerial photo and the SVG mud map. |
| YouTube / Vimeo | — | — | none |
| Third-party widgets (chat, booking, reviews, Instagram feed) | — | — | none |
| Swiper.js slider | Home | Elementor built-in | 5 slides, loop mode, fraction pagination "1 / 5" |
| Elementor progress bar | Home | built-in | value 98%, labels "Under construction" / "Complete September 2026" |

---

## Gaps, errors and things not reachable

### Could not reach

| Item | Detail |
|---|---|
| Brochure PDF | Gated behind lead form; URL not present in source. Not submitted (would create a real lead). Obtain from client. |
| WordPress REST API | `/wp-json/wp/v2/*` returns 401 (Kadence Security). Could not enumerate media library, draft pages, or hidden fields' labels. |
| Gravity Forms confirmation/notification settings | Admin-only. |
| Hidden form field purposes (input_7–13) | Labels only visible in WP admin. |
| Login-gated pages | None linked. `/wp-admin/` and `/wp-login.php` exist (standard WP) but nothing on the public site links to them. |
| Elementor popups | None registered on any page. |

### Broken / malformed links

| Where | Problem |
|---|---|
| Footer, Matthew Capuzzo phone (all 3 pages) | `href="tel:045960726"` — 9 digits; the visible text and the homepage/privacy-policy links are `tel:0458960726` (correct). |
| Header "Download Brochure" on /blog/ and /privacy-policy/ | Links to `#download` on the current page; that anchor only exists on the homepage, so the button does nothing on those two pages. Should point to https://miraliving.com.au/#download. |
| Instagram | Links to `…/miraliving.bargara/?hl=en` — works, but the `?hl=en` locale param is unnecessary. |

### Missing / empty content

| Item | Detail |
|---|---|
| Blog | `/blog/` exists in the nav but has zero posts; RSS feed is empty; no post sitemap. Decide whether to keep the section. |
| Meta descriptions | Missing on /blog/ and /privacy-policy/ (Rank Math auto-generates og:description from body). |
| Email address | No email anywhere on the site. |
| ABN / licence numbers | None. |
| Business hours / office address | None (only the project address). |
| Team page / photos | None; two sales reps named with phone numbers only. |
| FAQs | None. |
| Testimonials | None from buyers; only the developer's own quote. |
| Floor plans, unit list, pricing schedule | None. |
| Google Maps / directions | None. |
| Cookie consent banner | None present (privacy policy mentions cookies but no consent UI). |

### Missing alt text

Every raster `<img>` on the site has `alt=""` except one. Affected content images (should get descriptive alt on rebuild — descriptions provided in 2-images.md):

- Sold-Properties-Mira-Living-4 (availability render)
- Render-Slider-3, Render-Slider-4, Image-5, Render-Slider-1, Image-2 (5 interior renders)
- Mira-Pool-Living
- Shopping-Mira-Living, Cafes-Mira-Living, Recreation, Healthcare
- Bundaberg-Hospital, Bargara-Golf-Clubhouse-2-2
- MIRA-LIVING_MudMap.svg (map with place names as paths — not accessible)
- Dining-room-from-Furtado-site
- Furtado_logo, Sparc, IDC-Construct, sarahwood (partner logos)
- Graham-Furtado-sig.svg (signature)
- All three logo files (header, hero, footer) and the icreate credit logo
- Only non-empty alt: `mira-living-img-2.webp` → `"mira living img 2"` (filename, not descriptive)
- The 5 stats icons (bed/tap/car/toilet/pool) are inline SVGs with no `<title>`/aria-label; screen readers hear "3 1 2 2 Resort Pool" with no context.

### Content inconsistencies (preserve or fix — client decision)

| # | Issue |
|---|---|
| 1 | Completion date: hero bar says "Complete September 2026"; "Secure your piece of paradise" copy says "completion expected in Q2 2026". |
| 2 | Postcode: footer "Bargara QLD 4760" vs privacy policy "Bargara QLD 4670". Bargara's postcode is 4670. |
| 3 | Address spacing differs: "25 – 27 The Esplanade" (footer) vs "25–27 The Esplanade" (privacy policy). |
| 4 | Typo: "Queenland's best-kept coastal secret" (missing "s"). |
| 5 | Two H1s on the homepage; the first ("Home") is invisible (zero-height container) and adds no value. |
| 6 | Hero H3/H5 used for the main headline instead of H1. |
| 7 | og:image (`progress-img.webp`) shows an older availability state than the on-page render (`Sold-Properties-Mira-Living-4.webp`, uploaded 2026/03). |
| 8 | Bundaberg Hospital image is credited to widebay.health.qld.gov.au — confirm usage rights before reuse. |
| 9 | "Healthcare" lifestyle box uses a stock beach-walk photo, not a healthcare image. |
| 10 | Privacy policy phone icons are loaded from s.w.org (external WordPress emoji CDN). |

### Lazy-loaded / JS-dependent content (all captured)

- Elementor entrance animations hide text until scrolled into view — page was fully scrolled before extraction; all text captured.
- Swiper slider duplicates slides 1–4 for loop mode — de-duplicated in the content file.
- Background images are applied via Elementor's generated CSS (`post-*.css`), not inline — captured by parsing computed styles and the CSS files (Hero-Mira-Bg, Green-Water, contactbg-1, noise ×2, icon-bg).
- Mobile header is a hidden duplicate of the desktop header (same logo, nav, button) — no unique mobile-only content.

### Not present (confirmed)

- No 404 page customisation checked (default WP/Elementor 404 returned plain "404 Not Found").
- No hreflang / alternate languages.
- No structured data beyond Organization + WebSite (no RealEstateListing / Product / FAQ schema).
- No `humans.txt`, `ads.txt`, `security.txt` checked (out of scope).
