// ---------------------------------------------------------------------------
// The Story (/story) — "The journey of creating Mira: from vision and design
// to bringing the residence to life."
//
// COPY RULE: every sentence below is either verbatim site copy (imported from
// site-content.ts, or quoted from the project's own Instagram milestone posts
// in content/social img/index.csv) or a short structural heading from the
// page brief. Nothing here is invented marketing copy.
//
// IMAGE RULE: every visual is one ImageSlot. A slot with `src` set renders the
// photograph; a slot with `src: null` renders a labelled placeholder at the
// stated ratio, so an empty slot is obvious in the layout rather than broken.
// To swap any image, change `src` and `alt` — no component needs to change.
//
// NOT USED, deliberately: Sold-Properties-Mira-Living-4.webp and
// progress-img.webp both carry baked-in "SOLD" / "FUTURE RELEASE" overlays,
// which read as a sales board rather than editorial photography.
// ---------------------------------------------------------------------------

import {
  aNewWayToLive,
  collectionStatement,
  developerQuote,
  developmentSpecs,
  locationTeaser,
  partnerRecords,
  poolSection,
  registerSection,
  siteConfig,
  featureSlides,
} from "./site-content";

export interface ImageSlot {
  /** Path under /public. Null renders the labelled placeholder instead. */
  src: string | null;
  /** Alt text for the photograph. Empty string for decorative texture. */
  alt: string;
  /** Shown on the placeholder so an empty slot is self-describing. */
  label: string;
  /** Second placeholder line — what the shot should show. */
  note?: string;
  ratio: "21:9" | "16:9" | "4:3" | "3:4" | "4:5" | "1:1";
  /** Legally required on every render — "Artist Impression". */
  caption?: string;
}

export interface JourneyChapter {
  step: string;
  title: string;
  period: string;
  statement: string;
  detail: string;
  meta?: string;
  image: ImageSlot;
}

const quoteBreak = developerQuote.quote.indexOf(". ") + 1;

export const storyPage = {
  meta: {
    title: "The Story",
    description:
      "The journey of creating Mira Living — from the vision and the architecture to the residence rising on the Bargara Esplanade.",
  },

  // 1 — Hero -----------------------------------------------------------------
  hero: {
    eyebrow: "The Story",
    // Headline from the page brief.
    headlineLines: ["Where vision,", "architecture and", "coastal living meet."],
    intro: collectionStatement.headline,
    scrollLabel: "Begin the journey",
    facts: [
      siteConfig.address.full,
      `${developmentSpecs.totalResidences} residences`,
      siteConfig.completionDate,
    ],
    image: {
      src: "/img/site/Hero-Mira-Bg.webp",
      alt: "",
      label: "Hero — the residence on the Coral Sea",
      note: "Cinematic full-bleed exterior or coastline at first light",
      ratio: "16:9",
    } as ImageSlot,
  },

  // 2 — The Vision Behind Mira ----------------------------------------------
  vision: {
    numeral: "I",
    chapter: "The Vision Behind Mira",
    headline: aNewWayToLive.headline,
    paragraphs: [aNewWayToLive.paragraph1, aNewWayToLive.paragraph2],
    quoteLead: developerQuote.quote.slice(0, quoteBreak),
    quoteRest: developerQuote.quote.slice(quoteBreak + 1),
    signature: developerQuote.signatureImage,
    author: developerQuote.author,
    authorTitle: developerQuote.title,
    image: {
      src: "/img/site/Image-2.webp",
      alt: "Bedroom framed by floor-to-ceiling glazing looking out to palms and the Coral Sea",
      label: "The vision",
      note: "Architectural render or the building read against the ocean",
      ratio: "4:5",
      caption: "Artist Impression",
    } as ImageSlot,
  },

  // 3 — Design Philosophy ----------------------------------------------------
  design: {
    numeral: "II",
    chapter: "Design Philosophy",
    headline: "Buildings that endure, combining quality workmanship with thoughtful, timeless design.",
    attribution: "Furtado Property",
    principles: [
      {
        step: "01",
        title: "Architecture",
        statement: "Architecture that embodies prestige, practicality and a profound sense of place.",
        detail:
          "Sparc’s reputation for residential and multi-residential projects brings together pragmatic vision, constructional clarity and innovation.",
        meta: `${developmentSpecs.totalResidences} residences · ${developmentSpecs.internalSizeRange}`,
        image: {
          src: "/img/social/IG_003_2026-09-01_Dcukh9yoLfF_1.jpg",
          alt: "Aerial view of the Bargara headland and the Coral Sea, with Mira Living among the buildings on The Esplanade",
          label: "Architecture",
          note: "Façade, balcony rhythm, the building in elevation",
          ratio: "4:3",
        } as ImageSlot,
      },
      {
        step: "02",
        title: "Materials",
        statement: "A calm, natural palette that flows throughout.",
        detail:
          "Bathrooms are wrapped in honed Tundra stone tiles, anchored by elegant ceramic basins and softened by the sheen of satin nickel tapware.",
        meta: "Tundra stone · Porcelain · Walnut · Oak · Wool",
        image: {
          src: "/img/site/Render-Slider-4-scaled.webp",
          alt: "Bathroom wrapped in honed Tundra stone tiles with a stone-topped oak vanity and satin nickel tapware",
          label: "Materials",
          note: "Stone, timber and metal close-up",
          ratio: "4:3",
          caption: "Artist Impression",
        } as ImageSlot,
      },
      {
        step: "03",
        title: "Light & Space",
        statement:
          "Living spaces are framed in warm vanilla tones and open through wide glazed doors to the ocean beyond.",
        detail: "Watch the sun rise over the water from your own private balcony.",
        meta: developmentSpecs.internalSizeRange,
        image: {
          src: "/img/site/Render-Slider-1.webp",
          alt: "Open-plan living room opening through wide glazed doors to a balcony and the ocean beyond",
          label: "Light & space",
          note: "Interior looking out — morning light across the living room",
          ratio: "4:3",
          caption: "Artist Impression",
        } as ImageSlot,
      },
      {
        step: "04",
        title: "Coastal Living",
        statement: "Wake to the sound of waves.",
        detail:
          "Mira Living places you on the shoreline of the Coral Sea, with nothing between you and the horizon.",
        meta: "Absolute beachfront · The Esplanade, Bargara",
        image: {
          src: "/img/site/Green-Water.webp",
          alt: "Sunlight rippling across clear green water",
          label: "Coastal living",
          note: "The Esplanade, the rocks and the Coral Sea",
          ratio: "4:3",
        } as ImageSlot,
      },
    ],
  },

  // 4 — From Vision To Reality ----------------------------------------------
  // Periods and quoted lines are taken from the project's own milestone posts;
  // each chapter uses the photograph from that post.
  journey: {
    numeral: "III",
    chapter: "From Vision To Reality",
    headline: "A masterpiece taking shape.",
    intro:
      "Construction commenced with a groundbreaking ceremony in January 2025. Twenty months on, the residence stands on the Esplanade — 98% complete.",
    chapters: [
      {
        step: "01",
        title: "The Beginning",
        period: "January — February 2025",
        statement: "A piece of paradise begins.",
        detail:
          "The groundbreaking ceremony marked the start of transforming our vision into reality — the first project of its kind in the area in over 15 years.",
        meta: "Groundbreaking · Bargara Esplanade",
        image: {
          src: "/img/social/IG_078_2025-02-25_DGevtEKqrLC_1.jpg",
          alt: "Two excavators working the cleared oceanfront site during early earthworks",
          label: "The beginning",
          note: "Early site works and excavation, January 2025",
          ratio: "16:9",
        } as ImageSlot,
      },
      {
        step: "02",
        title: "The Foundation",
        period: "February — June 2025",
        statement: "Mira Living begins to take form as its foundational roots are established.",
        detail:
          "Basement works completed — a major milestone for the project — with block work and core filling progressing before the ground floor slab.",
        meta: "Basement retention · Slab pour · IDC Construct",
        image: {
          src: "/img/social/IG_059_2025-06-19_DLE5p6Rs8VO_1.jpg",
          alt: "Completed basement slab ringed by blockwork walls as a worker power-trowels the fresh concrete",
          label: "The foundation",
          note: "Reinforcement and the basement slab pour, mid 2025",
          ratio: "16:9",
        } as ImageSlot,
      },
      {
        step: "03",
        title: "The Structure Takes Shape",
        period: "July 2025 — May 2026",
        statement: "The higher we go, the more breathtaking the views become.",
        detail:
          "Level after level poured through to the final floor, then the roof — the building approaching its full form above the oceanfront site.",
        meta: "Five levels · Final floor poured February 2026",
        image: {
          src: "/img/social/IG_038_2025-11-12_DQ82UVlEvvc_1.jpg",
          alt: "Crews pouring a suspended slab over steel reinforcement, the Coral Sea visible beyond the scaffold",
          label: "The structure takes shape",
          note: "The framed building under scaffold, aerial or street level",
          ratio: "16:9",
        } as ImageSlot,
      },
      {
        step: "04",
        title: "The Final Vision",
        period: "July — September 2026",
        statement: "The scaffolding is down. The vision stands proud.",
        detail:
          "Internal fit-outs, landscaping and the resident pool complete the residence, now 98% finished ahead of handover.",
        meta: `98% complete · ${siteConfig.completionDate}`,
        image: {
          src: "/img/social/IG_007_2026-07-29_DbXvpgQJutn_1.jpg",
          alt: "The completed façade on The Esplanade with balconies glazed and the scaffolding removed",
          label: "The final vision",
          note: "The completed façade, scaffolding removed",
          ratio: "16:9",
        } as ImageSlot,
      },
    ] as JourneyChapter[],
  },

  // 5 — Craftsmanship & Detail ----------------------------------------------
  craft: {
    numeral: "IV",
    chapter: "Craftsmanship & Detail",
    headline: "A level of craftsmanship that matches the beauty outside.",
    lead:
      "Every residence is thoughtfully appointed with premium finishes that elevate daily living — all while complementing the relaxed elegance of coastal life.",
    closing: "Designed for comfort, built for longevity, and styled for effortless living.",
    // Verbatim finish descriptions from the development record.
    details: developmentSpecs.finishes.slice(0, 4),
    feature: {
      src: "/img/site/Image-5.webp",
      alt: "Kitchen with a porcelain island benchtop, walnut-toned joinery and integrated appliances opening to the living area",
      label: "Interior detail",
      note: "Kitchen joinery and porcelain benchtop, close range",
      ratio: "16:9",
      caption: "Artist Impression",
    } as ImageSlot,
    secondary: {
      src: "/img/site/Render-Slider-3.webp",
      alt: "Walk-in wardrobe in soft husk and oak joinery with open shelving and folded linen",
      label: "Material close-up",
      note: "Stone, satin nickel tapware or walnut-toned joinery",
      ratio: "4:3",
      caption: "Artist Impression",
    } as ImageSlot,
  },

  // 6 — People Behind Mira ---------------------------------------------------
  // No portrait photography exists for this project — the brand pack confirms
  // the site has never published photos of people. These four slots stay as
  // placeholders until portraits are supplied.
  people: {
    numeral: "V",
    chapter: "People Behind Mira",
    headline: "Brought to life by Furtado Property",
    lead: {
      name: developerQuote.author,
      role: "Developer",
      company: "Furtado Property",
      description:
        "With over 20 years of experience in residential property across South-East Queensland, Furtado Property brings a legacy of architectural excellence and meticulous craftsmanship to every new address.",
      signature: developerQuote.signatureImage,
      image: {
        src: null,
        alt: "",
        label: "Graham Furtado",
        note: "Portrait — Developer, Furtado Property",
        ratio: "3:4",
      } as ImageSlot,
    },
    collaboratorsLabel: "In collaboration with",
    collaborators: [
      {
        name: "Sparc",
        role: "Architect",
        logo: partnerRecords[1].logo,
        description:
          "Their collaborative approach ensures each residence is not only beautifully designed but also attuned to the lifestyle aspirations of those who will call it home.",
        image: {
          src: null,
          alt: "",
          label: "Sparc",
          note: "Studio portrait — Architect",
          ratio: "4:5",
        } as ImageSlot,
      },
      {
        name: "IDC Construct",
        role: "Builder",
        logo: partnerRecords[2].logo,
        description:
          "The boundary-pushing local builder bringing precision and innovation to every project across Wide Bay, Queensland, sculpting land into exceptional, enduring structures.",
        image: {
          src: null,
          alt: "",
          label: "IDC Construct",
          note: "On-site portrait — Builder",
          ratio: "4:5",
        } as ImageSlot,
      },
      {
        name: "Sarah Wood",
        company: "Sarah Wood Designs",
        role: "Interior Designer",
        logo: partnerRecords[3].logo,
        description:
          "With an instinctive eye for colour, texture and detail, Sarah crafts interiors that feel both contemporary and timeless, translating each client’s vision into a cohesive, personal expression of home.",
        image: {
          src: null,
          alt: "",
          label: "Sarah Wood",
          note: "Portrait — Interior Designer",
          ratio: "4:5",
        } as ImageSlot,
      },
    ],
  },

  // 7 — Lifestyle & Future Living -------------------------------------------
  lifestyle: {
    numeral: "VI",
    chapter: "Lifestyle & Future Living",
    headline: "Refined living on the water’s edge",
    feature: {
      overlay: "Connected yet worlds away",
      text: locationTeaser.paragraph2,
      image: {
        src: "/img/site/Healthcare.webp",
        alt: "A couple walking barefoot along the shoreline at sunset",
        label: "The Esplanade",
        note: "Coastline and foreshore in front of the residence",
        ratio: "16:9",
      } as ImageSlot,
    },
    moments: [
      {
        label: "Morning",
        text: "Wake to the sound of waves, enjoy leisurely strolls along the Bargara Esplanade and watch the sun rise over the water from your own private balcony.",
      },
      {
        label: "The day",
        text: locationTeaser.paragraph1,
      },
    ],
    retreat: {
      label: poolSection.headline,
      text: poolSection.description,
      image: {
        src: "/img/site/Mira-Pool-Living.webp",
        alt: "Resident-only pool with sun loungers, landscaped planting and the shaded alfresco area",
        label: "The pool",
        note: "Resident-only pool and alfresco area",
        ratio: "4:3",
        caption: "Artist Impression",
      } as ImageSlot,
    },
    comfort: {
      label: "Evening",
      text: featureSlides[4].description,
    },
  },

  // 8 — Closing CTA ----------------------------------------------------------
  cta: {
    // Headline from the page brief.
    headline: "Discover your place at Mira.",
    intro: registerSection.intro,
    brochureLabel: "Download Brochure",
    enquireLabel: "Enquire Now",
    image: {
      // Decorative backdrop behind the closing headline.
      src: "/img/site/contactbg-1.webp",
      alt: "",
      label: "Closing image",
      note: "Sunset over the Coral Sea from the residence",
      ratio: "21:9",
    } as ImageSlot,
  },
};
