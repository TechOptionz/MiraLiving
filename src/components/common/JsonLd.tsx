import React from "react";

/**
 * Emits a schema.org JSON-LD graph for the page it sits in. The root layout
 * carries the site-wide graph (organisation, development, website); pages add
 * their own (listings, FAQ) through this component.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: "<" in content is escaped below so a
      // string value can never close the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
