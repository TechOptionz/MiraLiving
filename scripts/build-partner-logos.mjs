// Builds the full-colour partner logo set used on /team, the home teaser and the
// story page.
//
// Two of the supplied marks arrived as proper brand artwork and only need to be
// normalised (trimmed, sized, flattened to a sensible pixel width):
//
//   Furtado Property  assets/partner-logos/furtado-property.png  (#273030 wordmark)
//   IDC Construct     assets/partner-logos/idc-construct.svg     (yellow chevrons + grey type)
//
// The other two only exist here as the original flat pale-sand masks drawn for a
// dark background. They are single-colour alpha masks, so we keep the alpha
// (letterforms + antialiasing) and pour the brand colour through it instead:
//
//   Sparc         wordmark in charcoal, asterisk in the brand yellow #F5CA1E
//                 (the asterisk is the last glyph, x >= 178 in the 209px mask)
//   Sarah Wood    the serif lockup in her brand gold #B08A2E, sampled from the
//                 supplied wordmark
//
// Run: npm run images:logos

import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.join(ROOT, "public", "img", "site");
const SRC = path.join(ROOT, "assets", "partner-logos");

const rgb = (hex) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
});

/** Pours flat colour through an existing logo's alpha channel.
 *  `bands` are colour runs across x, each starting at `from` (default 0). */
async function inkFromMask(file, out, bands) {
  const src = path.join(SITE, file);
  const { width, height } = await sharp(src).metadata();
  const alpha = await sharp(src).ensureAlpha().extractChannel("alpha").raw().toBuffer();

  // Sparc.png carries a near-invisible alpha-2 rectangle behind the wordmark.
  // Harmless in pale sand, but any real ink poured through it shows up as a
  // grey box, so knock the sub-visible alpha out first.
  for (let i = 0; i < alpha.length; i++) if (alpha[i] <= 8) alpha[i] = 0;

  const plate = Buffer.alloc(width * height * 3);
  for (let x = 0; x < width; x++) {
    const band = bands.filter((b) => x >= (b.from ?? 0)).pop() ?? bands[0];
    const { r, g, b } = rgb(band.hex);
    for (let y = 0; y < height; y++) {
      const i = (y * width + x) * 3;
      plate[i] = r;
      plate[i + 1] = g;
      plate[i + 2] = b;
    }
  }

  await sharp(plate, { raw: { width, height, channels: 3 } })
    .joinChannel(alpha, { raw: { width, height, channels: 1 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(SITE, out));

  console.log(`${file} -> ${out} (${width}x${height})`);
}

/** Trims the transparent margin off supplied artwork and sizes it for 2x. */
async function normalise(file, out, targetWidth) {
  const pipeline = file.endsWith(".svg")
    ? sharp(path.join(SRC, file), { density: 600 })
    : sharp(path.join(SRC, file));

  const info = await pipeline
    .trim({ threshold: 1 })
    .resize({ width: targetWidth, fit: "inside", withoutEnlargement: false })
    .png({ compressionLevel: 9 })
    .toFile(path.join(SITE, out));

  console.log(`${file} -> ${out} (${info.width}x${info.height})`);
}

await normalise("furtado-property.png", "Furtado_logo-colour.png", 900);
await normalise("idc-construct.svg", "IDC-Construct-colour.png", 760);

await inkFromMask("Sparc.png", "Sparc-colour.png", [
  { hex: "#241E1A" },
  { hex: "#F5CA1E", from: 178 },
]);

await inkFromMask("sarahwood.png", "sarahwood-colour.png", [{ hex: "#B08A2E" }]);
