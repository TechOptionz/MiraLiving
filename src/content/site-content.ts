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

export interface FloorPlan {
  id: string;
  name: string;
  tagline: string;
  bedrooms: number;
  bathrooms: number;
  cars: number;
  mpr: boolean;
  internalSize: string;
  image: string;
}

export const siteConfig = {
  name: "Mira Living",
  title: "Mira Living | Premium Oceanfront Living in Bargara",
  tagline: "Premium Oceanfront Living in Bargara",
  subTagline: "Spacious 3-Bedroom + Multi-Purpose Room Coastal Living from $1.425M",
  metaDescription: "Oceanfront luxury on the Coral Sea. 3-bedroom apartments now selling from $1.425M at 25–27 The Esplanade, Bargara QLD 4670.",
  url: "https://miraliving.com.au",
  gtmId: "GTM-TWFRS38X",
  ga4Id: "G-ZPTJCDSVM8",
  
  // TODO: confirm price with client ($1.395M on Instagram bio vs $1.425M on website)
  startingPrice: "$1.425M",
  
  // TODO: confirm completion date with client ("Complete September 2026" vs "Q2 2026")
  completionDate: "Completion September 2026",

  // TODO: set to the hosted brochure PDF once the client supplies it, e.g.
  // "/brochure/mira-living-brochure.pdf". While this is null the confirmation
  // panel tells the registrant the brochure will be emailed instead of offering
  // a download link that is not actually a brochure.
  brochureUrl: null as string | null,
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
  internalSizeRange: "117 sqm to 139 sqm internal",
  priceFrom: "$1.425M",
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
  finishes: [
    { title: "Porcelain Benchtops", description: "Expansive honed stone surfaces designed for entertaining." },
    { title: "Smeg Appliances", description: "Seamlessly integrated premium Italian kitchen suite." },
    { title: "Walnut-Toned Joinery", description: "Bespoke custom cabinetry balancing modern warmth and clean lines." },
    { title: "Honed Tundra Stone Tiles", description: "Floor-to-ceiling natural stone wrapping private sanctuaries." },
    { title: "Satin Nickel Tapware", description: "Subtle brushed metal accents and ceramic basins." },
    { title: "Plush Wool Carpeting", description: "Soft, cushioned flooring in all bedrooms for restful acoustic comfort." },
    { title: "Tailored Husk & Oak Wardrobes", description: "Spacious walk-in robes continuing the neutral palette." }
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
    iconName: "bed"
  },
  {
    id: 2,
    text: "2 secure underground carparks for peace of mind",
    iconName: "shield"
  },
  {
    id: 3,
    text: "Spacious layouts from 117sqm to 139sqm internal",
    iconName: "maximize"
  },
  {
    id: 4,
    text: "Refined, premium finishes throughout",
    iconName: "sparkles"
  },
  {
    id: 5,
    text: "Integrated Smeg appliances that elevate everyday living",
    iconName: "utensils"
  },
  {
    id: 6,
    text: "Pool and alfresco area exclusive to residents",
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
    logo: "/img/site/Furtado_logo.png",
    description: "With over 20 years of experience in residential property across South-East Queensland, Furtado Property brings a legacy of architectural excellence and meticulous craftsmanship to every new address. Our philosophy is to create buildings that endure, combining quality workmanship with thoughtful, timeless design. At Mira Living, that same commitment ensures your residence is not just a place to live, but a landmark of refined coastal living, impeccably designed for an effortless lifestyle and lasting value."
  },
  {
    id: 2,
    name: "Sparc",
    role: "Architect",
    logo: "/img/site/Sparc.png",
    description: "Sparc’s reputation for residential and multi-residential projects brings together pragmatic vision, constructional clarity and innovation. Their collaborative approach ensures each residence is not only beautifully designed but also attuned to the lifestyle aspirations of those who will call it home, for architecture that embodies prestige, practicality and a profound sense of place."
  },
  {
    id: 3,
    name: "IDC Construct",
    role: "Builder",
    logo: "/img/site/IDC-Construct.png",
    description: "IDC Construct is the boundary-pushing local builder bringing precision and innovation to every project across Wide Bay, Queensland, sculpting land into exceptional, enduring structures. Their advanced technology and elevated project management ensure that what begins as an empty site becomes a refined and resilient foundation for thriving communities."
  },
  {
    id: 4,
    name: "Sarah Wood Designs",
    role: "Interior Designer",
    logo: "/img/site/sarahwood.png",
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
  paragraph1: "Construction is underway, with completion expected in Q2 2026.", // Note: Conflict with "Completion September 2026"
  paragraph2: "With only 25 residences available, this is a rare opportunity to claim absolute beachfront living on the Bargara Esplanade."
};

export const registerSection = {
  headline: "Download the brochure",
  intro: "Register now to download the Mira Living brochure and be amongst the first to experience Bargara’s most exclusive oceanfront residences.",
  requiredNotice: "* indicates required fields",
  budgetOptions: [
    "$1.4M - $1.6M",
    "$1.6M - $1.8M",
    "$2M+"
  ],
  timeframeOptions: [
    "Ready Now",
    "0-3 months",
    "3-6 months",
    "6+ months"
  ]
};

// Curated 3 Floor Plans from Social Archive
export const floorPlans: FloorPlan[] = [
  {
    id: "type-a",
    name: "Type A Residence",
    tagline: "Thoughtfully designed for effortless living with fluid ocean views.",
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    mpr: true,
    internalSize: "139 sqm",
    image: "/img/social/IG_094_2024-12-28_DEHYCu4o6rH_1.jpg"
  },
  {
    id: "type-b",
    name: "Type B Residence",
    tagline: "Seamless indoor-outdoor integration framing coastal breezes.",
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    mpr: true,
    internalSize: "128 sqm",
    image: "/img/social/IG_085_2025-01-25_DFOQ0kQSsvW_1.jpg"
  },
  {
    id: "type-c",
    name: "Type C Residence",
    tagline: "Generous master suite sanctuary and open entertainer's layout.",
    bedrooms: 3,
    bathrooms: 2,
    cars: 2,
    mpr: false,
    internalSize: "117 sqm",
    image: "/img/social/IG_069_2025-03-25_DHmrxS3Swch_1.jpg"
  }
];

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
