// schema.org graphs for the site. Recommended by the September 2026 SEO audit
// in place of the WordPress defaults (Article/Person): the development as an
// ApartmentComplex with an AggregateOffer, the developer as seller, the agents,
// each available apartment as an Apartment + Offer, and the FAQ as FAQPage.
import {
  siteConfig,
  developmentSpecs,
  partnerRecords,
  priceGuide,
  availableUnits,
  availablePriceRange,
  unitCounts,
  parsePrice,
  type FaqItem,
} from "./site-content";

const url = siteConfig.url;
export const ids = {
  organization: `${url}/#organization`,
  developer: `${url}/#developer`,
  development: `${url}/#apartmentcomplex`,
  website: `${url}/#website`,
};

/** Fixed OG / share image, 1200×630, generated from the dusk facade render. */
export const ogImagePath = "/img/site/og-image.jpg";

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.suburb,
  addressRegion: siteConfig.address.state,
  postalCode: siteConfig.address.postcode,
  addressCountry: "AU",
};

/** "0438 162 574" → "+61438162574". */
const e164 = (phone: string) => "+61" + phone.replace(/\s/g, "").replace(/^0/, "");

/** Site-wide graph, rendered once from the root layout. */
export function siteGraph() {
  const developer = partnerRecords.find((p) => p.role === "Developer");
  const range = availablePriceRange();
  const counts = unitCounts();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ids.organization,
        name: siteConfig.name,
        url,
        logo: `${url}/img/site/mira-logo-brown.svg`,
        image: `${url}${ogImagePath}`,
        address: postalAddress,
        sameAs: [siteConfig.socials.instagram, siteConfig.socials.facebook],
        contactPoint: siteConfig.contacts.map((c) => ({
          "@type": "ContactPoint",
          telephone: e164(c.phone),
          contactType: "sales",
          areaServed: "AU",
          availableLanguage: "en",
        })),
      },
      ...(developer
        ? [
            {
              "@type": "Organization",
              "@id": ids.developer,
              name: developer.name,
              description: developer.description,
              logo: `${url}${developer.logo}`,
            },
          ]
        : []),
      ...siteConfig.contacts.map((c) => ({
        "@type": "Person",
        name: c.name,
        jobTitle: c.role,
        telephone: e164(c.phone),
        worksFor: { "@id": ids.organization },
      })),
      {
        "@type": "ApartmentComplex",
        "@id": ids.development,
        name: siteConfig.name,
        description: siteConfig.metaDescription,
        url,
        image: `${url}${ogImagePath}`,
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: -24.8194,
          longitude: 152.4578,
        },
        numberOfAccommodationUnits: {
          "@type": "QuantitativeValue",
          value: developmentSpecs.totalResidences,
        },
        numberOfAvailableAccommodationUnits: {
          "@type": "QuantitativeValue",
          value: counts.available,
        },
        amenityFeature: developmentSpecs.amenities.map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "AUD",
          lowPrice: range.low,
          highPrice: range.high,
          offerCount: counts.available,
          availability: "https://schema.org/InStock",
          url: `${url}/residences`,
          seller: { "@id": developer ? ids.developer : ids.organization },
        },
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url,
        name: siteConfig.name,
        inLanguage: "en-AU",
        publisher: { "@id": ids.organization },
      },
    ],
  };
}

/** The Residences page: every available apartment as its own listing. */
export function residencesGraph() {
  const developer = partnerRecords.find((p) => p.role === "Developer");
  const pageUrl = `${url}/residences`;
  const listItems = availableUnits().map((u, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Apartment",
      "@id": `${pageUrl}#apartment-${u.number}`,
      name: `Apartment ${u.number}, ${siteConfig.name} — ${u.plan.name}, ${u.level}`,
      url: `${pageUrl}#availability`,
      floorLevel: u.level,
      numberOfBedrooms: u.plan.bedrooms,
      numberOfBathroomsTotal: u.plan.bathrooms,
      floorSize: {
        "@type": "QuantitativeValue",
        value: parseFloat(u.plan.internalArea),
        unitCode: "MTK",
      },
      address: postalAddress,
      containedInPlace: { "@id": ids.development },
      offers: {
        "@type": "Offer",
        price: parsePrice(u.price),
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        url: `${pageUrl}#availability`,
        seller: { "@id": developer ? ids.developer : ids.organization },
      },
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        "@id": `${pageUrl}#listing`,
        url: pageUrl,
        name: `Residences, Floor Plans & Availability | ${siteConfig.name} Bargara`,
        description: `Apartments for sale at ${siteConfig.name}, ${siteConfig.address.full}, from the ${priceGuide.issued} price guide.`,
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.development },
        mainEntity: {
          "@type": "ItemList",
          name: `Available apartments at ${siteConfig.name}`,
          numberOfItems: listItems.length,
          itemListElement: listItems,
        },
      },
    ],
  };
}

/** The FAQ page. Answers must match the visible text exactly. */
export function faqGraph(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}/faq#faq`,
    url: `${url}/faq`,
    isPartOf: { "@id": ids.website },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
