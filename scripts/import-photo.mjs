// Re-encodes a supplied photograph into public/img as WebP, sized for the site.
//
//   node scripts/import-photo.mjs <source.jpg> <public/img/.../name.webp> [longEdge]
//
// The client supplies camera JPEGs of 4–23 MB; the layouts never ask the
// optimizer for more than 1920 px, so the long edge is cut to 2400 px by
// default (2560 for a full-bleed backdrop) and the file lands at 150–400 KB.
// EXIF orientation is applied and the metadata dropped. Run
// `npm run images:dimensions` afterwards so the layout frames learn the new
// file's shape.
import path from "node:path";
import sharp from "sharp";

const [src, out, edge = "2400"] = process.argv.slice(2);
if (!src || !out) {
  console.error("usage: node scripts/import-photo.mjs <source> <public/img/...webp> [longEdge]");
  process.exit(1);
}
const longEdge = Number(edge);
const info = await sharp(src)
  .rotate()
  .resize({ width: longEdge, height: longEdge, fit: "inside", withoutEnlargement: true })
  .webp({ quality: 82, effort: 5 })
  .toFile(out);
console.log(`${path.relative(process.cwd(), out)}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
