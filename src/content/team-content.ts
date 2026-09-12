/**
 * Photography for the Team page.
 *
 * These are the project's own site and event photographs (public/img/social),
 * chosen because the Team page is about people rather than renders — the crews
 * who are actually building Mira, and the day the ground was turned.
 *
 * `date` is the day the photograph was published; it is printed as a stamp on
 * the frame, so the page reads as a record rather than a gallery.
 */
export type TeamPhoto = {
  src: string;
  alt: string;
  /** Short line printed under or over the frame. */
  caption: string;
  /** Display date stamp, e.g. "April 2026". */
  date: string;
  /**
   * `object-position` for the frame. Two of the site photographs carry the
   * builder's watermark across the bottom corner; anchoring those to the top
   * means a cover crop takes the watermark rather than slicing it in half.
   */
  focus?: string;
};

export const teamPhotos = {
  /** Hero — the structural steel crew on the new floor plate. */
  crew: {
    src: "/img/social/IG_020_2026-04-16_DXLk_ADk3l8_1.jpg",
    alt: "The Mira Living structural steel and construction crew standing together on a completed floor plate, framed by green steel roof trusses and blockwork",
    caption: "The steel crew on the upper floor plate",
    date: "April 2026",
  },
  /** Developer feature — Graham Furtado and the builder at the site. */
  handshake: {
    src: "/img/social/IG_086_2025-01-22_DFHMruMxN5m_1.jpg",
    alt: "Two men in white shirts and IDC Construct hard hats shaking hands in front of the site hoarding at the start of construction",
    caption: "Developer and builder, the morning the site was handed over",
    date: "January 2025",
  },
  /** On site — the first slab pour, ocean behind. */
  pour: {
    src: "/img/social/IG_038_2025-11-12_DQ82UVlEvvc_1.jpg",
    alt: "Concrete crews working a slab pour on the Mira Living site, with a concrete boom line overhead, scaffolding and the Coral Sea behind",
    caption: "Pouring the slab, Coral Sea behind",
    date: "November 2025",
    focus: "center top",
  },
  /** On site — steel fixers tying reinforcement. */
  rebar: {
    src: "/img/social/IG_060_2025-06-17_DK_xWzORfhQ_1.jpg",
    alt: "Steel fixers tying reinforcement bar across the Mira Living foundations, capped starter bars running the length of the slab",
    caption: "Setting out the foundations",
    date: "June 2025",
    focus: "center top",
  },
  /** On site — the crew at the Esplanade shelter across the road. */
  shelter: {
    src: "/img/social/IG_019_2026-04-20_DXVz4-Sk9f2_4.jpg",
    alt: "Members of the site crew taking a break at the beachfront picnic shelter on the Bargara Esplanade, the ocean directly behind them",
    caption: "Smoko at the Esplanade shelter",
    date: "April 2026",
  },
  /** Milestone — the group who turned the first sod. */
  groundbreaking: {
    src: "/img/social/IG_086_2025-01-22_DFHMruMxN5m_4.jpg",
    alt: "Five people, including the developer and the builder in hard hats, standing together on the cleared Mira Living site in front of the project hoarding",
    caption: "The first sod turned at 25–27 The Esplanade",
    date: "January 2025",
  },
  /** Milestone — guests gathered for the ceremony. */
  gathering: {
    src: "/img/social/IG_086_2025-01-22_DFHMruMxN5m_3.jpg",
    alt: "Guests gathered beside a vintage Kombi van at the Mira Living groundbreaking, watching the ceremony on the cleared block",
    caption: "Guests at the groundbreaking",
    date: "January 2025",
  },
} satisfies Record<string, TeamPhoto>;

/** The masthead of the page. */
export const teamHero = {
  eyebrow: "The Collaborators",
  headlineTop: "The people",
  headlineBottom: "behind Mira",
  lead:
    "Two decades of residential craft, an architecture practice that builds what it draws, a local builder who knows this coastline, and an interior designer with an instinct for how a home should feel. Four disciplines, one address.",
  facts: [
    { label: "Disciplines", value: "Four" },
    { label: "Developer", value: "Furtado Property" },
    { label: "Ground turned", value: "January 2025" },
    { label: "Completion", value: "September 2026" },
  ],
};

/** Section 4 — the trades on site. */
export const onSite = {
  eyebrow: "On Site",
  headline: "Built by the hands that live here",
  lead:
    "Every pour, every bar tied, every truss lifted has been done by crews from the Wide Bay. They park on the Esplanade, take smoko facing the water, and go home to the same coastline they are building on.",
  photos: [teamPhotos.rebar, teamPhotos.pour, teamPhotos.shelter] as TeamPhoto[],
};

/** Section 5 — the day the ground was turned. */
export const milestone = {
  eyebrow: "January 2025",
  headline: "The day the ground was turned",
  paragraph:
    "Mira began on an empty block of grass on the Bargara Esplanade, with a handshake between a developer and a builder and a small crowd who had come to watch. Everything since — the foundations, the slab, the steel — has been measured from that morning.",
};
