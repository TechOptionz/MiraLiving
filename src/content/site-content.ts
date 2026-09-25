// Single source of truth for all Mira Living website content
// All copy is verbatim from 3-content.md and 1-brand-and-business.md

export interface FeatureSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  caption: string;
}

export interface KeyFeature {
  id: number;
  text: string;
  iconName: string;
  // Short scan label shown alongside the spec line (replaces the repeated
  // "Included Specification" tag, which carried no information per row).
  label: string;
}

export interface LifestyleRecord {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface InfrastructureRecord {
  id: number;
  title: string;
  description: string;
  image: string;
  caption?: string;
}

export interface PartnerRecord {
  id: number;
  name: string;
  role: string;
  logo: string;
  description: string;
}

export interface StepRecord {
  step: string;
  iconSvg: string;
  title: string;
  description: string;
}

export interface ConstructionMilestone {
  date: string;
  formattedDate: string;
  title: string;
  description: string;
  image: string;
}

export interface CuratedLifestylePhoto {
  title: string;
  location: string;
  image: string;
}

export interface FloorPlanRoom {
  name: string;
  /** Internal dimensions as drawn on the architect's typical plan, e.g. "3.7 × 3.5 m". */
  size: string;
  /** e.g. "Walk-in robe · Ensuite" */
  note?: string;
}

export interface FloorPlan {
  id: string;
  /** Single letter used on the plans and the price guide. */
  code: "A" | "B" | "C";
  name: string;
  tagline: string;
  summary: string;
  bedrooms: number;
  bathrooms: number;
  cars: number;
  /** Multi-purpose room — drawn as "Study" on the plans. */
  mpr: boolean;
  /** Areas from the marketing floor plan sheets (Sept 2026). */
  internalArea: string;
  externalArea: string;
  totalArea: string;
  /** Apartment numbers built to this plan, lowest to highest. */
  units: number[];
  rooms: FloorPlanRoom[];
  highlights: string[];
  /** The drawing alone, cropped from the marketing sheet. Portrait. */
  image: string;
  /** Dimensioned 1:100 architect sheet, served from /public. */
  pdf: string;
}

export type UnitStatus = "available" | "sold" | "future";

export interface UnitRecord {
  number: number;
  status: UnitStatus;
  /** Formatted as printed on the price guide, e.g. "$1,580,000". Available units only. */
  price?: string;
}

export interface BuildingLevel {
  /** Level naming follows the price guide: Ground Floor, then Levels 2–5. */
  name: string;
  units: UnitRecord[];
}

export interface DisplayPhoto {
  src: string;
  alt: string;
  /** Short room label shown in the gallery and lightbox. */
  room: string;
}

export const siteConfig = {
  name: "Mira Living",
  // Keyword-led (SEO audit, Sept 2026): buyers search "apartments for sale Bargara",
  // not the brand. Used as the homepage <title> and the OG title.
  title: "Beachfront Apartments for Sale in Bargara | Mira Living",
  tagline: "Premium Oceanfront Living in Bargara",
  subTagline: "Spacious 3-Bedroom + Multi-Purpose Room Coastal Living from $1.395M",
  metaDescription: "25 absolute beachfront 3-bedroom apartments on The Esplanade, Bargara QLD, from $1.395M. Nearly complete — download the brochure or book a private inspection.",
  url: "https://miraliving.com.au",
  gtmId: "GTM-TWFRS38X",
  ga4Id: "G-ZPTJCDSVM8",
  
  // Lowest available residence on the Price Guide issued September 2026
  // (Apartment 10, Type C). Keep in step with `priceGuide` below.
  startingPrice: "$1.395M",
  
  // Single completion date for the whole site. The old "Q2 2026" line in the
  // Secure section was the last conflicting copy and now derives from this.
  completionDate: "Completion September 2026",

  // Served from /public. Set to null to fall back to the "we'll email it"
  // confirmation copy (e.g. once the brochure is delivered by email instead).
  // The "-web" export is the print PDF re-encoded at 150 dpi (3.2 MB instead
  // of 12 MB); it is served with X-Robots-Tag: noindex (next.config.mjs) so
  // search engines send buyers to the form, not straight to the file.
  brochureUrl: "/MIRA-LIVING-Brochure-web.pdf" as string | null,
  constructionProgress: 98,
  
  address: {
    street: "25–27 The Esplanade",
    suburb: "Bargara",
    state: "QLD",
    postcode: "4670", // Fixed: Bargara's official postcode is 4670 (was 4760 in previous footer)
    full: "25–27 The Esplanade, Bargara QLD 4670",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.640989396263!2d152.4578508!3d-24.8194444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6be896f5b90f4cfd%3A0x2db4aa0cfc3451bf!2s25-27%20The%20Esplanade%2C%20Bargara%20QLD%204670!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau"
  },
  
  contacts: [
    {
      name: "Sonia Hancock",
      role: "Sales Representative",
      phone: "0438 162 574",
      tel: "tel:0438162574"
    },
    {
      name: "Matthew Capuzzo",
      role: "Sales Representative",
      phone: "0458 960 726",
      // Fixed: Footer link had malformed tel:045960726 (missing digit 8)
      tel: "tel:0458960726"
    }
  ],
  
  socials: {
    facebook: "https://www.facebook.com/p/Mira-Living-100093669997782/",
    instagram: "https://www.instagram.com/miraliving.bargara/"
  },
  
  artistAcknowledgement: {
    artist: "Goompi Ugerabah",
    text: "Artist feature: Goompi Ugerabah is a contemporary Aboriginal artist with deep cultural ties to the Bundaberg region. Known for his restrained earthy palettes and fluid dot formations, his work reflects the rhythms of land and sea, bringing a strong sense of Country and connection to place."
  },
  
  legalDisclaimer: "Images / photos are for marketing purposes only. Information contained within any marketing material, website or other portal should not be relied upon. Changes to availability and price may occur without notice at the discretion of the seller. All persons should make their own enquiries and seek their own independent advice with respect to any property advertised or the information about the property contained in any marketing materials."
};

export const developmentSpecs = {
  name: "Mira Living",
  totalResidences: 25,
  bedrooms: "3 Bedrooms (+ Multi-Purpose Room)",
  bathrooms: "2 Bathrooms",
  carSpaces: "2 Secure Underground Carparks",
  internalSizeRange: "118 sqm to 139 sqm internal",
  priceFrom: "$1.395M",
  status: "Under construction · 98% complete",
  completion: "September 2026",
  location: "25–27 The Esplanade, Bargara QLD 4670",
  amenities: [
    "Resident-only swimming pool & sun loungers",
    "Landscaped private alfresco entertaining area",
    "Expansive oceanfront private balconies",
    "Secure basement parking with lift access",
    "Absolute beachfront frontage onto the Coral Sea"
  ],
  // `category` is the room or zone each finish belongs to, printed above it in
  // the specification ledger.
  finishes: [
    { category: "Kitchen", title: "Porcelain Benchtops", description: "Expansive honed stone surfaces designed for entertaining." },
    { category: "Kitchen", title: "Smeg Appliances", description: "Seamlessly integrated premium Italian kitchen suite." },
    { category: "Kitchen & Living", title: "Walnut-Toned Joinery", description: "Bespoke custom cabinetry balancing modern warmth and clean lines." },
    { category: "Bathrooms", title: "Honed Tundra Stone Tiles", description: "Floor-to-ceiling natural stone wrapping private sanctuaries." },
    { category: "Bathrooms", title: "Satin Nickel Tapware", description: "Subtle brushed metal accents and ceramic basins." },
    { category: "Bedrooms", title: "Plush Wool Carpeting", description: "Soft, cushioned flooring in all bedrooms for restful acoustic comfort." },
    { category: "Bedrooms", title: "Tailored Husk & Oak Wardrobes", description: "Spacious walk-in robes continuing the neutral palette." }
  ]
};

export const collectionStatement = {
  headline: "A limited collection of just 25 generously proportioned residences, designed to celebrate the rhythm of coastal life.",
  stats: [
    { value: "3", label: "Bedrooms", icon: "bed" },
    { value: "1", label: "Multi-Purpose Room", icon: "layout" },
    { value: "2", label: "Car Parks", icon: "car" },
    { value: "2", label: "Bathrooms", icon: "bath" },
    { value: "Resort Pool", label: "Exclusive Sanctuary", icon: "pool" }
  ]
};

export const aNewWayToLive = {
  headline: "A new way to live by the sea",
  paragraph1: "Mira Living places you on the shoreline of the Coral Sea, with nothing between you and the horizon. Wake to the sound of waves, enjoy leisurely strolls along the Bargara Esplanade and watch the sun rise over the water from your own private balcony.",
  paragraph2: "This is coastal living, elevated — a rare opportunity to own oceanfront in one of Queensland’s most coveted seaside enclaves.",
  // Deliberately NOT Sold-Properties-Mira-Living-4.webp: that is this same
  // elevation with "SOLD" / "FUTURE RELEASE" burnt into the balconies, which
  // run full-bleed behind this copy reads as a sales board and misstates
  // availability. Mira-Facade-Dusk.webp is the clean render.
  image: "/img/site/Mira-Facade-Dusk.webp",
  caption: "Artist Impression"
};

export const developerQuote = {
  quote: "“Bargara has always had a special energy, yet little to match it. With Mira Living, we set out to create something worthy of this coastline — a rare, limited collection offering the space, privacy and quality discerning buyers deserve.”",
  signatureImage: "/img/site/Graham-Furtado-sig.svg",
  author: "Graham Furtado",
  title: "Developer, Furtado Property"
};

export const featureSlides: FeatureSlide[] = [
  {
    id: 1,
    title: "Walk-in wardrobes",
    description: "Tailored, timber-toned storage in soft husk and oak finishes continue the calm, natural palette that flows throughout.",
    image: "/img/site/Render-Slider-3.webp",
    caption: "Artist Impression"
  },
  {
    id: 2,
    title: "Serene private sanctuaries",
    description: "Bathrooms are wrapped in honed Tundra stone tiles, anchored by elegant ceramic basins and softened by the sheen of satin nickel tapware.",
    image: "/img/site/Render-Slider-4-scaled.webp",
    caption: "Artist Impression"
  },
  {
    id: 3,
    title: "Kitchens for entertaining",
    description: "Porcelain benchtops, soft walnut-toned joinery and seamlessly integrated Smeg appliances make every meal feel like an occasion.",
    image: "/img/site/Image-5.webp",
    caption: "Artist Impression"
  },
  {
    id: 4,
    title: "Open-plan living",
    description: "Living spaces are framed in warm vanilla tones and open through wide glazed doors to the ocean beyond.",
    image: "/img/site/Render-Slider-1.webp",
    caption: "Artist Impression"
  },
  {
    id: 5,
    title: "Restful nights",
    description: "In the bedrooms, plush wool carpet cushions every step, creating a quiet retreat to begin and end your days.",
    image: "/img/site/Image-2.webp",
    caption: "Artist Impression"
  }
];

export const poolSection = {
  headline: "Quiet moments between the waves",
  description: "After a day spent exploring the coastline, the resident-only pool offers a private sanctuary. Designed for quiet relaxation, it’s a retreat to restore, recharge and savour the simple pleasure of stillness.",
  image: "/img/site/Mira-Pool-Living.webp",
  caption: "Artist Impression"
};

export const keyFeatures: KeyFeature[] = [
  {
    id: 1,
    text: "3-beds with option for additional study or multi-purpose room",
    label: "Bedrooms",
    iconName: "bed"
  },
  {
    id: 2,
    text: "2 secure underground carparks for peace of mind",
    label: "Parking",
    iconName: "shield"
  },
  {
    id: 3,
    text: "Spacious layouts from 118sqm to 139sqm internal",
    label: "Floor area",
    iconName: "maximize"
  },
  {
    id: 4,
    text: "Refined, premium finishes throughout",
    label: "Finishes",
    iconName: "sparkles"
  },
  {
    id: 5,
    text: "Integrated Smeg appliances that elevate everyday living",
    label: "Kitchen",
    iconName: "utensils"
  },
  {
    id: 6,
    text: "Pool and alfresco area exclusive to residents",
    label: "Amenity",
    iconName: "waves"
  }
];

export const locationTeaser = {
  // Fixed typo: "Queenland's" -> "Queensland's"
  headline: "Queensland's best-kept coastal secret",
  paragraph1: "Just 20 minutes from Bundaberg, Bargara blends natural beauty with village charm. Start your day strolling the Esplanade or sipping coffee on Bauer Street, then spend the afternoon on the fairways of Bargara Golf Club.",
  paragraph2: "With every convenience close by and the ocean at your door, Bargara feels a world away — yet right where you need to be.",
  aerialImage: "/img/site/mira-living-img-2.webp",
  aerialAlt: "Aerial view of Bargara coastline showing Mira Living location, Bargara Golf Club, Bargara Central, and surrounding beaches",
  // Drive/walk times shown on the home teaser. Every figure here is one the
  // rest of the site already states — do not add a new one without a source.
  proximity: [
    { label: "The Esplanade", value: "At the door" },
    { label: "Bargara Golf Club", value: "3 min walk" },
    { label: "Bundaberg", value: "20 min drive" },
    { label: "Bundaberg Airport", value: "25 min drive" }
  ]
};

export const lifestyleRecords: LifestyleRecord[] = [
  {
    id: 1,
    title: "Shopping",
    description: "For everyday ease, Bargara Central has your grocer, pharmacy and specialty stores, plus Bargara Meats — the local butcher known for hand-made sausages and quality cuts. For fresh produce, small-batch jams and gelato, Bargara Berries on Hughes Road is a favourite.",
    image: "/img/site/Shopping-Mira-Living.webp"
  },
  {
    id: 2,
    title: "Cafés and dining",
    description: "Start the day at the award-winning Windmill Café, wander to Rick’s at Bargara for brunch with ocean views or book a sunset table at Kacy’s Restaurant. After dark, wind down at Tipsea on Bauer Street with cocktails and artful share plates.",
    image: "/img/site/Cafes-Mira-Living.webp"
  },
  {
    id: 3,
    title: "Recreation",
    description: "Morning walks along the foreshore lead you to Kellys Beach where you can take a dip in the sheltered waters of The Basin. Golfers will appreciate the neighbouring Bargara Golf Club, while nature lovers can explore the wider coastal reserves that frame the region.",
    image: "/img/site/Recreation.webp"
  },
  {
    id: 4,
    title: "Healthcare",
    description: "Local GP care is on hand at Bargara Medical Centre and Pharmacy Central. Major private facilities, Friendly Society Private Hospital and Mater Private Hospital Bundaberg, are 15–20 minutes by car, with Bundaberg Base Hospital in the same health precinct.",
    image: "/img/site/Healthcare.webp"
  }
];

export const infrastructureRecords: InfrastructureRecord[] = [
  {
    id: 1,
    title: "New Bundaberg Hospital",
    description: "Currently under construction, the new Bundaberg Hospital is a $1.2 billion investment part of Queensland’s Big Build programme. With additional beds, expanded emergency and diagnostic facilities with teaching capacity, it will deliver outstanding health services to the community.",
    image: "/img/site/Bundaberg-Hospital.webp",
    caption: "Source: widebay.health.qld.gov.au"
  },
  {
    id: 2,
    title: "Bargara Golf Club",
    description: "Within walking distance of Mira Living, Bargara Golf Club delivers a refined 18-hole experience framed by coastal landscapes. Refine your swing at the practice facilities or join a social round at sunset. With undulating fairways, sculpted greens and seaside breezes, it offers a rare balance of challenge and serenity.",
    image: "/img/site/Bargara-Golf-Clubhouse-2-2.webp"
  }
];

export const partnerRecords: PartnerRecord[] = [
  {
    id: 1,
    name: "Furtado Property",
    role: "Developer",
    logo: "/img/site/Furtado_logo-colour.png",
    description: "With over 20 years of experience in residential property across South-East Queensland, Furtado Property brings a legacy of architectural excellence and meticulous craftsmanship to every new address. Our philosophy is to create buildings that endure, combining quality workmanship with thoughtful, timeless design. At Mira Living, that same commitment ensures your residence is not just a place to live, but a landmark of refined coastal living, impeccably designed for an effortless lifestyle and lasting value."
  },
  {
    id: 2,
    name: "Sparc",
    role: "Architect",
    logo: "/img/site/Sparc-colour.png",
    description: "Sparc’s reputation for residential and multi-residential projects brings together pragmatic vision, constructional clarity and innovation. Their collaborative approach ensures each residence is not only beautifully designed but also attuned to the lifestyle aspirations of those who will call it home, for architecture that embodies prestige, practicality and a profound sense of place."
  },
  {
    id: 3,
    name: "IDC Construct",
    role: "Builder",
    logo: "/img/site/IDC-Construct-colour.png",
    description: "IDC Construct is the boundary-pushing local builder bringing precision and innovation to every project across Wide Bay, Queensland, sculpting land into exceptional, enduring structures. Their advanced technology and elevated project management ensure that what begins as an empty site becomes a refined and resilient foundation for thriving communities."
  },
  {
    id: 4,
    name: "Sarah Wood Designs",
    role: "Interior Designer",
    logo: "/img/site/sarahwood-colour.png",
    description: "Led by designer Sarah Wood, Sarah Wood Designs brings over 15 years of experience across fashion, interiors and construction to create spaces that balance beauty and function. With an instinctive eye for colour, texture and detail, Sarah crafts interiors that feel both contemporary and timeless, translating each client’s vision into a cohesive, personal expression of home."
  }
];

export const stepRecords: StepRecord[] = [
  {
    step: "01",
    iconSvg: "/img/site/01.svg",
    title: "Download the brochure",
    description: "Explore the full vision of Mira Living and see why this exclusive address is unlike anything else on the Coral Sea."
  },
  {
    step: "02",
    iconSvg: "/img/site/02.svg",
    title: "Select your residence",
    description: "Choose from a limited collection of residences, each crafted for refined living and designed to elevate your lifestyle."
  },
  {
    step: "03",
    iconSvg: "/img/site/03.svg",
    title: "Embrace a coastal lifestyle",
    description: "Secure your oceanfront sanctuary and experience every day framed by horizon views, effortless calm and the prestige of owning this truly rare coastal address."
  }
];

export const secureSection = {
  eyebrow: "Now Selling",
  headline: "Secure your piece of paradise",
  paragraph1: `Construction is ${siteConfig.constructionProgress}% complete, with completion in ${developmentSpecs.completion}.`,
  paragraph2: "With only 25 residences available, this is a rare opportunity to claim absolute beachfront living on the Bargara Esplanade."
};

export const registerSection = {
  headline: "Download the brochure",
  intro: "Register now to download the Mira Living brochure and be amongst the first to experience Bargara’s most exclusive oceanfront residences.",
  requiredNotice: "* indicates required fields",
  budgetOptions: [
    "$1.4M - $1.6M",
    "$1.6M - $1.8M",
    "$1.8M - $2M",
    "$2M+"
  ],
  timeframeOptions: [
    "Ready Now",
    "0-3 months",
    "3-6 months",
    "6+ months"
  ]
};

// Floor plans — from the marketing plan sheets and the architect's typical
// plans (Mondo Architects, 1:100). Room sizes are internal dimensions as drawn.
export const floorPlans: FloorPlan[] = [
  {
    id: "type-a",
    code: "A",
    name: "Type A",
    tagline: "The largest plan: a study off the entry, a 7.4-metre living room and the master suite on the ocean side.",
    summary:
      "Ten residences are built to this plan — two on every level. The entry opens past the laundry and a dedicated study into one long living and dining room, with the kitchen along one wall and the balcony across the far end. The master suite sits beside the balcony with a walk-in robe and ensuite; the second and third bedrooms share the main bathroom at the quiet end of the plan.",
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    mpr: true,
    internalArea: "139.22 sqm",
    externalArea: "22.80 sqm",
    totalArea: "162.02 sqm",
    units: [1, 4, 6, 9, 11, 14, 16, 19, 21, 24],
    rooms: [
      { name: "Living & dining", size: "5.1 × 7.4 m", note: "Opens to the balcony" },
      { name: "Kitchen", size: "Island bench", note: "Walk-in pantry · Integrated Smeg suite" },
      { name: "Master bedroom", size: "3.7 × 3.5 m", note: "Walk-in robe · Ensuite" },
      { name: "Bedroom 2", size: "3.1 × 3.2 m", note: "Built-in robe" },
      { name: "Bedroom 3", size: "3.2 × 3.2 m", note: "Built-in robe" },
      { name: "Study / multi-purpose", size: "2.5 × 3.1 m" },
      { name: "Main bathroom", size: "Bath & shower" },
      { name: "Laundry & linen", size: "Separate room" },
    ],
    highlights: [
      "Two residences per level, ten in all",
      "Dedicated study separate from the bedrooms",
      "Master suite on the balcony side of the plan",
      "Separate laundry and walk-in pantry",
    ],
    image: "/img/plans/type-a.webp",
    pdf: "/plans/mira-living-type-a-floor-plan.pdf",
  },
  {
    id: "type-b",
    code: "B",
    name: "Type B",
    tagline: "The mirrored corner plan: the same long living room and study, with the widest balcony of the three.",
    summary:
      "Ten residences are built to this plan, paired on every level. The arrangement mirrors Type A — study and laundry at the entry, one open living and dining room running to the balcony, and the master suite with its walk-in robe and ensuite beside it — with a slightly more compact footprint and the largest private balcony in the building at just under 25 square metres.",
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    mpr: true,
    internalArea: "131.13 sqm",
    externalArea: "24.96 sqm",
    totalArea: "156.09 sqm",
    units: [2, 3, 7, 8, 12, 13, 17, 18, 22, 23],
    rooms: [
      { name: "Living & dining", size: "5.1 × 7.2 m", note: "Opens to the balcony" },
      { name: "Kitchen", size: "Island bench", note: "Walk-in pantry · Integrated Smeg suite" },
      { name: "Master bedroom", size: "3.5 × 3.6 m", note: "Walk-in robe · Ensuite" },
      { name: "Bedroom 2", size: "3.2 × 3.0 m", note: "Built-in robe" },
      { name: "Bedroom 3", size: "3.2 × 3.0 m", note: "Built-in robe" },
      { name: "Study / multi-purpose", size: "2.5 × 3.0 m" },
      { name: "Main bathroom", size: "Bath & shower" },
      { name: "Laundry & linen", size: "Separate room" },
    ],
    highlights: [
      "Two residences per level, ten in all",
      "Largest balcony of the three plans",
      "Study and separate laundry at the entry",
      "Master suite with walk-in robe and ensuite",
    ],
    image: "/img/plans/type-b.webp",
    pdf: "/plans/mira-living-type-b-floor-plan.pdf",
  },
  {
    id: "type-c",
    code: "C",
    name: "Type C",
    tagline: "The end residence: one per level, with living and dining as two distinct rooms and the largest master bedroom.",
    summary:
      "Five residences are built to this plan — one at the end of every level. Rather than a single long room, living and dining are two connected spaces set around the kitchen, and the balcony runs off the living room. The master bedroom is the widest in the building at four metres, with a walk-in robe and ensuite. There is no separate study on this plan.",
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    mpr: false,
    internalArea: "118.29 sqm",
    externalArea: "21.42 sqm",
    totalArea: "139.71 sqm",
    units: [5, 10, 15, 20, 25],
    rooms: [
      { name: "Living", size: "5.2 × 4.0 m", note: "Opens to the balcony" },
      { name: "Dining", size: "5.3 × 3.2 m", note: "Beside the kitchen" },
      { name: "Kitchen", size: "Island bench", note: "Walk-in pantry · Integrated Smeg suite" },
      { name: "Master bedroom", size: "4.0 × 3.3 m", note: "Walk-in robe · Ensuite" },
      { name: "Bedroom 2", size: "3.0 × 3.3 m", note: "Built-in robe" },
      { name: "Bedroom 3", size: "3.0 × 3.3 m", note: "Built-in robe" },
      { name: "Main bathroom", size: "Bath & shower" },
      { name: "Laundry & linen", size: "Separate room" },
    ],
    highlights: [
      "One residence per level, five in all",
      "Separate living and dining rooms",
      "Widest master bedroom in the building",
      "Entry-level pricing in the collection",
    ],
    image: "/img/plans/type-c.webp",
    pdf: "/plans/mira-living-type-c-floor-plan.pdf",
  },
];

/** Which plan an apartment number is built to. */
export function planForUnit(unit: number): FloorPlan | undefined {
  return floorPlans.find((plan) => plan.units.includes(unit));
}

// The basement, from the carpark plan sheet.
export const basementPlan = {
  eyebrow: "Below Ground",
  headline: "Secure basement parking for every residence",
  body: "The whole of the basement is given to residents: fifty car spaces — two for each of the twenty-five residences — together with lockable storage cages, the pump and services rooms, and a lift lobby that rises to every level of the building.",
  facts: [
    { value: "50", label: "Secure car spaces" },
    { value: "2", label: "Per residence" },
    { value: "Lift", label: "Basement to every level" },
    { value: "Cages", label: "Lockable storage" },
  ],
  image: "/img/plans/basement.webp",
};

// Availability — transcribed from the Mira Living Price Guide, September 2026.
// Level naming follows the guide (Ground Floor, then Levels 2–5). Update this
// block whenever a new guide is issued; everything on the site derives from it.
export const priceGuide: { issued: string; levels: BuildingLevel[] } = {
  issued: "September 2026",
  levels: [
    {
      name: "Ground Floor",
      units: [
        { number: 1, status: "sold" },
        { number: 2, status: "available", price: "$1,580,000" },
        { number: 3, status: "available", price: "$1,620,000" },
        { number: 4, status: "sold" },
        { number: 5, status: "sold" },
      ],
    },
    {
      name: "Level 2",
      units: [
        { number: 6, status: "future" },
        { number: 7, status: "future" },
        { number: 8, status: "future" },
        { number: 9, status: "future" },
        { number: 10, status: "available", price: "$1,395,000" },
      ],
    },
    {
      name: "Level 3",
      units: [
        { number: 11, status: "sold" },
        { number: 12, status: "sold" },
        { number: 13, status: "available", price: "$1,795,000" },
        { number: 14, status: "sold" },
        { number: 15, status: "available", price: "$1,550,000" },
      ],
    },
    {
      name: "Level 4",
      units: [
        { number: 16, status: "available", price: "$2,100,000" },
        { number: 17, status: "available", price: "$1,950,000" },
        { number: 18, status: "available", price: "$1,950,000" },
        { number: 19, status: "sold" },
        { number: 20, status: "future" },
      ],
    },
    {
      name: "Level 5",
      units: [
        { number: 21, status: "sold" },
        { number: 22, status: "available", price: "$2,300,000" },
        { number: 23, status: "available", price: "$2,350,000" },
        { number: 24, status: "sold" },
        { number: 25, status: "sold" },
      ],
    },
  ],
};

/** The level an apartment number sits on, by the price guide's naming. */
export function levelOfUnit(unit: number): BuildingLevel | undefined {
  return priceGuide.levels.find((level) => level.units.some((u) => u.number === unit));
}

/** One apartment's line on the price guide. */
export function unitRecord(unit: number): UnitRecord | undefined {
  for (const level of priceGuide.levels) {
    const found = level.units.find((u) => u.number === unit);
    if (found) return found;
  }
  return undefined;
}

/** "$1,395,000" → 1395000. */
export function parsePrice(price: string): number {
  return Number(price.replace(/[^0-9.]/g, ""));
}

export interface AvailableUnit {
  number: number;
  /** As printed on the price guide, e.g. "$1,395,000". */
  price: string;
  level: string;
  plan: FloorPlan;
}

/** Every apartment currently for sale on the price guide, with its level and plan. */
export function availableUnits(): AvailableUnit[] {
  return priceGuide.levels.flatMap((level) =>
    level.units
      .filter((u): u is UnitRecord & { price: string } => u.status === "available" && !!u.price)
      .map((u) => ({
        number: u.number,
        price: u.price,
        level: level.name,
        plan: floorPlans.find((p) => p.units.includes(u.number)) ?? floorPlans[0],
      }))
  );
}

/** How many apartments sit in each status on the price guide. */
export function unitCounts(): Record<UnitStatus, number> {
  const counts: Record<UnitStatus, number> = { available: 0, sold: 0, future: 0 };
  for (const level of priceGuide.levels) for (const u of level.units) counts[u.status] += 1;
  return counts;
}

/** Lowest and highest asking price among the available apartments. */
export function availablePriceRange(): { low: number; high: number } {
  const prices = availableUnits().map((u) => parsePrice(u.price));
  return { low: Math.min(...prices), high: Math.max(...prices) };
}

export const unitStatusLabel: Record<UnitStatus, string> = {
  available: "Available",
  sold: "Sold",
  future: "Future release",
};

// The completed ground-floor residence, photographed September 2026.
export const displayResidence = {
  eyebrow: "The Completed Residence",
  headline: "Photographed, not rendered",
  intro:
    "With construction all but complete, the first ground-floor residence has been finished and furnished. These are photographs of that home — the porcelain benchtops, the walnut-toned joinery and the honed stone bathrooms exactly as they have been built.",
  note: "Photography of a completed ground-floor residence, furnished for display. Furniture and styling are not included.",
  photos: [
    {
      src: "/img/residences/display-living-to-kitchen.webp",
      alt: "Open-plan living room of the completed residence looking through to the kitchen and dining area",
      room: "Living & dining",
    },
    {
      src: "/img/residences/display-kitchen-island.webp",
      alt: "Kitchen island bench with porcelain benchtop, walnut-toned joinery and bar stools",
      room: "Kitchen",
    },
    {
      src: "/img/residences/display-master-bedroom.webp",
      alt: "Master bedroom of the completed residence with rattan bedhead and timber side tables",
      room: "Master bedroom",
    },
    {
      src: "/img/residences/display-ensuite-shower.webp",
      alt: "Ensuite bathroom with full-height stone tiles, twin rain showers and stone vanity",
      room: "Ensuite",
    },
    {
      src: "/img/residences/display-dining-to-balcony.webp",
      alt: "Dining table and lounge looking out through wide sliding doors to the terrace",
      room: "Dining to terrace",
    },
    {
      src: "/img/residences/display-kitchen-joinery.webp",
      alt: "Full-height walnut-toned kitchen joinery and stone splashback with integrated appliances",
      room: "Kitchen joinery",
    },
    {
      src: "/img/residences/display-study-nook.webp",
      alt: "Study with timber desk, round mirror and reading lamp",
      room: "Study",
    },
    {
      src: "/img/residences/display-living-tv-wall.webp",
      alt: "Living room with television wall, travertine coffee table and view through to the kitchen",
      room: "Living",
    },
    {
      src: "/img/residences/display-ensuite-vanity.webp",
      alt: "Stone vanity with wall-mounted tapware and mirrored cabinet in the ensuite",
      room: "Ensuite vanity",
    },
    {
      src: "/img/residences/display-second-bedroom.webp",
      alt: "Second bedroom with built-in robe, woven wall hanging and side table lamp",
      room: "Bedroom 2",
    },
    {
      src: "/img/residences/display-kitchen-to-living.webp",
      alt: "Kitchen island looking across the living room to the terrace doors",
      room: "Kitchen to living",
    },
    {
      src: "/img/residences/display-main-bathroom.webp",
      alt: "Main bathroom with bath, glass shower screen and full-height stone tiling",
      room: "Main bathroom",
    },
    {
      src: "/img/residences/display-island-to-living.webp",
      alt: "Waterfall stone island bench with the living room beyond",
      room: "Island bench",
    },
    {
      src: "/img/residences/display-third-bedroom.webp",
      alt: "Third bedroom with upholstered bedhead and timber side table",
      room: "Bedroom 3",
    },
    {
      src: "/img/residences/display-kitchen-bench-detail.webp",
      alt: "Kitchen bench detail with stone splashback, sink and pendant lighting",
      room: "Kitchen detail",
    },
    {
      src: "/img/residences/display-dining-table.webp",
      alt: "Round dining table and timber chairs beside the kitchen",
      room: "Dining",
    },
    {
      src: "/img/residences/display-laundry.webp",
      alt: "Laundry with stone bench, stainless sink and window",
      room: "Laundry",
    },
  ] as DisplayPhoto[],
};

// Shared spaces — the two renders of the building's common areas.
export const sharedSpaces = {
  eyebrow: "Shared Spaces",
  headline: "The arrival, and the retreat",
  intro:
    "Between the street and the front door, and between the building and the beach, two spaces belong to every resident.",
  items: [
    {
      eyebrow: "The arrival",
      title: "A lobby set among gardens",
      body: "The entry sits back from the Esplanade behind a deep planted courtyard, so the walk from the street to the lift passes under a timber pergola and between tropical planting before the glass doors and the Mira signature.",
      image: "/img/renders/lobby-arrival.webp",
      alt: "Mira Living entry lobby with tropical planting, timber pergola and glazed doors",
      caption: "Artist Impression",
    },
    {
      eyebrow: "The retreat",
      title: "A resident-only pool and lawn",
      body: "Behind the building, a lap pool, sun loungers and a covered alfresco lounge sit within the landscaped rear garden — a private sanctuary a lift ride from every residence.",
      image: "/img/site/Mira-Pool-Living.webp",
      alt: "Residents' pool with sun loungers, covered alfresco area and tropical landscaping",
      caption: "Artist Impression",
    },
  ],
};

// The home page teaser for the completed residence.
export const completedTeaser = {
  eyebrow: "Now Complete",
  headline: "From render to reality",
  body: "The first residence is finished and furnished. See the kitchens, bathrooms and bedrooms as they have been built — photographed, not rendered.",
  cta: "See the completed residence",
  href: "/residences#completed",
  photos: [
    "/img/residences/display-kitchen-island.webp",
    "/img/residences/display-living-tv-wall.webp",
    "/img/residences/display-ensuite-shower.webp",
  ],
};

// Aerial photograph used on the Location page masthead (drone still, June 2026).
export const locationHero = {
  image: "/img/site/aerial-bargara-headland.webp",
  alt: "Aerial photograph of the Bargara headland, its rock shelf and beaches, with the township and golf course behind",
  caption: "Bargara headland, June 2026",
};

// Curated Chronological Milestones (11 items instead of all 135)
export const constructionMilestones: ConstructionMilestone[] = [
  {
    date: "2025-01-02",
    formattedDate: "January 2025",
    title: "Groundbreaking Ceremony",
    description: "Official commencement of works on absolute beachfront Bargara Esplanade site.",
    image: "/img/social/IG_086_2025-01-22_DFHMruMxN5m_1.jpg"
  },
  {
    date: "2025-01-22",
    formattedDate: "Late January 2025",
    title: "Site Excavation & Mobilisation",
    description: "Heavy machinery and earthworks underway preparing the foundation perimeter.",
    image: "/img/social/IG_060_2025-06-17_DK_xWzORfhQ_2.jpg"
  },
  {
    date: "2025-02-25",
    formattedDate: "February 2025",
    title: "Deep Piling & Substructure",
    description: "Foundational engineering roots driven into the basalt coastal ground.",
    image: "/img/social/IG_078_2025-02-25_DGevtEKqrLC_1.jpg"
  },
  {
    date: "2025-05-31",
    formattedDate: "May 2025",
    title: "Basement Retention Complete",
    description: "Solid foundational retention walls established for two levels of secure underground parking.",
    image: "/img/social/IG_066_2025-05-31_DKSzHPPtavy_1.jpg"
  },
  {
    date: "2025-06-19",
    formattedDate: "June 2025",
    title: "Basement Slab Pour",
    description: "Major milestone achieved with basement slab pour completed by IDC Construct.",
    image: "/img/social/IG_059_2025-06-19_DLE5p6Rs8VO_1.jpg"
  },
  {
    date: "2025-07-26",
    formattedDate: "July 2025",
    title: "Ground Floor Structure",
    description: "Ground floor slab prepped and poured, rising above the street elevation.",
    image: "/img/social/IG_051_2025-07-26_DMkJDC_p12S_1.jpg"
  },
  {
    date: "2025-11-12",
    formattedDate: "November 2025",
    title: "Mid-Level Construction Pour",
    description: "Structure passes the halfway mark as Levels 2 and 3 form rapidly.",
    image: "/img/social/IG_038_2025-11-12_DQ82UVlEvvc_1.jpg"
  },
  {
    date: "2026-02-11",
    formattedDate: "February 2026",
    title: "Top Floor Concrete Poured",
    description: "Final floor level reached with internal framing and service fit-outs commencing.",
    image: "/img/social/IG_029_2026-02-13_DUsOOoekiN6_1.jpg"
  },
  {
    date: "2026-05-12",
    formattedDate: "May 2026",
    title: "Roof & Facade Enclosure",
    description: "Roof trusses and framing installed with sweeping Coral Sea views revealed.",
    image: "/img/social/IG_015_2026-05-12_DYOVdeSkd_R_1.jpg"
  },
  {
    date: "2026-07-29",
    formattedDate: "July 2026",
    title: "Scaffolding Comes Down",
    description: "External scaffolding removed to showcase the refined architectural facade and curves.",
    image: "/img/social/IG_007_2026-07-29_DbXvpgQJutn_1.jpg"
  },
  {
    date: "2026-09-01",
    formattedDate: "September 2026",
    title: "98% Milestone & Landscaping",
    description: "Lush tropical planting installed around the resort pool with completion only days away.",
    image: "/img/social/IG_003_2026-09-01_Dcukh9yoLfF_1.jpg"
  }
];

// Curated 7 Authentic Local Vignettes
export const curatedLifestylePhotos: CuratedLifestylePhoto[] = [
  {
    title: "Morning Foreshore Swims",
    location: "Kellys Beach & The Basin",
    image: "/img/social/IG_054_2025-07-22_DMZrYZmstuM_1.jpg"
  },
  {
    title: "Coastal Strolls on the Esplanade",
    location: "Directly in front of Mira Living",
    image: "/img/social/IG_063_2025-06-09_DKqBYo2shNn_1.jpg"
  },
  {
    title: "The Basin Tidal Pool",
    location: "Sheltered natural ocean pool",
    image: "/img/social/IG_047_2025-08-19_DNhUTgAzApi_1.jpg"
  },
  {
    title: "Oceanview Fairways",
    location: "Bargara Golf Club (3 min walk)",
    image: "/img/social/IG_068_2025-03-27_DHrb3DGSNor_1.jpg"
  },
  {
    title: "Artisanal Bakeries & Gelato",
    location: "Bauer Street & Esplanade Cafes",
    image: "/img/social/IG_072_2025-03-17_DHRuadZSxra_1.jpg"
  },
  {
    title: "Local Waterfront Dining",
    location: "Bargara Beach Hotel & Bistros",
    image: "/img/social/IG_084_2025-01-27_DFUb4amAvId_1.jpg"
  },
  {
    title: "Sunset Aperitifs & Cellar",
    location: "The Vine Bar, Bauer Street",
    image: "/img/social/IG_099_2024-12-15_DDltZLWIr7C_1.jpg"
  }
];


export const privacyPolicyContent = {
  lastUpdated: "October 2025",
  projectAddress: "25–27 The Esplanade, Bargara QLD 4670",
  intro: "This Privacy Policy outlines how we collect, use, disclose and protect your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).",
  sections: [
    {
      num: 1,
      title: "1. Information We Collect",
      items: [
        "Your name, email address and phone number",
        "Enquiry details, including any messages submitted through forms, email, or phone",
        "Information relevant to property transactions or expressions of interest"
      ],
      extra: "We may also collect non-personal information, such as website analytics, cookies, and usage data, to improve the performance and functionality of our website."
    },
    {
      num: 2,
      title: "2. How We Collect Information",
      lead: "We collect personal information directly from you when you:",
      items: [
        "Submit an enquiry via our website, email, or social media",
        "Contact our representatives (including Sonia Hancock and Matthew Capuzzo)",
        "Interact with our marketing materials or attend property inspections or events"
      ]
    },
    {
      num: 3,
      title: "3. Use of Your Information",
      lead: "Your personal information may be used for purposes including:",
      items: [
        "Responding to your enquiries about the property",
        "Providing you with updates, offers, or marketing information relevant to the project",
        "Internal administration, compliance, and record keeping",
        "Improving our services and communications"
      ]
    },
    {
      num: 4,
      title: "4. Disclosure of Information",
      lead: "We may disclose your personal information to:",
      items: [
        "Real estate agents, project partners, or marketing representatives",
        "Third-party service providers involved in website hosting, marketing, or IT support",
        "Legal or regulatory authorities, if required by law"
      ],
      extra: "We take reasonable steps to ensure that any third party we share your information with complies with privacy and confidentiality obligations."
    },
    {
      num: 5,
      title: "5. Data Security",
      content: "We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure.\n\nHowever, please note that no method of data transmission or storage is completely secure. We cannot guarantee absolute security."
    },
    {
      num: 6,
      title: "6. Access and Correction",
      content: "You may request access to, or correction of, your personal information at any time.\nPlease contact us via the details below if you would like to update or remove your details from our records."
    },
    {
      num: 7,
      title: "7. Website and Cookies",
      content: "Our website may use cookies and analytics tools to improve user experience and measure engagement.\nCookies can be disabled via your browser settings, but this may affect website functionality."
    },
    {
      num: 8,
      title: "8. External Links and Images",
      content: "Our website and marketing materials may contain links to external sites and images.\nAll images, photographs, and artist impressions are for marketing purposes only and should not be relied upon as accurate representations.\nInformation, availability, and pricing are subject to change without notice. Individuals should make their own enquiries and seek independent advice."
    },
    {
      num: 9,
      title: "9. Artist Feature",
      content: "As part of this project, works by Goompi Ugerabah, a contemporary Aboriginal artist, are featured. His artworks express strong cultural ties to the Bundaberg region and are used respectfully with acknowledgment of his connection to Country and heritage."
    },
    {
      num: 10,
      title: "10. Contact Us",
      content: "For privacy-related questions, access requests, or complaints, please contact our representatives directly."
    }
  ]
};

// ---------------------------------------------------------------------------
// FAQ — /faq page and its FAQPage schema. Every answer is drawn from the facts
// above (price guide, plans, specs, partners) so it stays in step with them.
//
// Still needed from the client before they can be added: body corporate fees,
// pet policy, stamp duty / off-the-plan concessions, and settlement timing.
// ---------------------------------------------------------------------------
export interface FaqItem {
  question: string;
  answer: string;
}

const formatAud = (n: number) => `$${n.toLocaleString("en-AU")}`;

export const faqItems: FaqItem[] = (() => {
  const counts = unitCounts();
  const range = availablePriceRange();
  const contactLine = siteConfig.contacts.map((c) => `${c.name} on ${c.phone}`).join(" or ");
  const planLine = floorPlans
    .map((p) => `${p.name}: ${p.internalArea} internal, ${p.totalArea} including the balcony`)
    .join("; ");
  return [
    {
      question: "Where is Mira Living?",
      answer: `Mira Living is at ${siteConfig.address.full}, on the absolute beachfront of the Coral Sea. Bargara is about 20 minutes from Bundaberg. Bargara Golf Club is a three-minute walk from the front door and Bundaberg Airport is a 25-minute drive.`,
    },
    {
      question: "How many apartments are there, and how many are still for sale?",
      answer: `There are ${developmentSpecs.totalResidences} residences over five levels. On the ${priceGuide.issued} price guide, ${counts.available} are available, ${counts.sold} have sold and ${counts.future} are held for a future release. Current availability is listed level by level on the Residences page.`,
    },
    {
      question: "How much do the apartments cost?",
      answer: `Available residences are priced from ${formatAud(range.low)} to ${formatAud(range.high)} on the ${priceGuide.issued} price guide, and each apartment is priced individually. Pricing can change without notice, so please confirm the current price with the sales team.`,
    },
    {
      question: "How big are the apartments, and what is the layout?",
      answer: `There are three floor plans. ${planLine}. Every plan has three bedrooms, a multi-purpose room drawn as a study, two bathrooms and a private oceanfront balcony.`,
    },
    {
      question: "What parking and storage is included?",
      answer: `Each residence comes with two secure basement car spaces and a lockable storage cage. A lift runs from the basement to every level of the building.`,
    },
    {
      question: "When will Mira Living be completed?",
      answer: `Construction is ${siteConfig.constructionProgress}% complete, with completion in ${developmentSpecs.completion}. The first ground-floor residence is already finished and furnished for display, and it is photographed on the Residences page.`,
    },
    {
      question: "Can I inspect a completed apartment?",
      answer: `Yes. Private inspections of the completed, furnished display residence are arranged through the sales team. Call ${contactLine}.`,
    },
    {
      question: "Who is behind Mira Living?",
      answer: partnerRecords
        .map((p) => `${p.role}: ${p.name}`)
        .join(". ") + ". Furtado Property brings more than 20 years of residential development in South-East Queensland; IDC Construct is a Wide Bay builder.",
    },
    {
      question: "What shared amenities do residents have?",
      answer: developmentSpecs.amenities.join(". ") + ".",
    },
    {
      question: "What finishes come as standard?",
      answer: developmentSpecs.finishes.map((f) => f.title).join(", ") + ". The finishes are shown as built in the photographs of the completed residence.",
    },
    {
      question: "How do I get the brochure and floor plans?",
      answer: `Register through the form on any page and the brochure downloads straight away, with a follow-up from the sales team. Dimensioned floor plan PDFs for each plan type are on the Residences page.`,
    },
  ];
})();
