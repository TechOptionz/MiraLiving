// Regenerates src/content/image-dimensions.ts — the intrinsic pixel size of
// every photograph under public/img.
//
// Layout frames read these so a frame is cut to the shape of the photograph it
// holds, instead of the photograph being cropped to the shape of the frame.
// Run after adding, replacing or re-exporting any image:
//
//   npm run images:dimensions
//
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const IMAGE_DIR = path.join(PUBLIC_DIR, "img");
const OUT_FILE = path.join(ROOT, "src", "content", "image-dimensions.ts");
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return EXTENSIONS.has(path.extname(entry.name).toLowerCase()) ? [full] : [];
  });
}

const entries = [];
for (const file of walk(IMAGE_DIR).sort()) {
  const { width, height } = await sharp(file).metadata();
  if (!width || !height) {
    console.warn(`skipped (no dimensions): ${file}`);
    continue;
  }
  const key = "/" + path.relative(PUBLIC_DIR, file).split(path.sep).join("/");
  entries.push(`  "${key}": [${width}, ${height}],`);
}

const header = `// GENERATED FILE — do not edit by hand.
// Run \`npm run images:dimensions\` to rebuild from the files in public/img.
//
// Intrinsic [width, height] of every photograph, keyed by its public path.
// Layout frames use these to take the shape of the image they hold, so nothing
// is cropped to fit — see slotAspect() below.
`;

const body = `${header}
export const imageDimensions: Record<string, [number, number]> = {
${entries.join("\n")}
};

/** Aspect ratio (w / h) of a public image path, or null if it isn't known. */
export function imageAspect(src: string | null | undefined): number | null {
  if (!src) return null;
  const size = imageDimensions[src];
  return size ? size[0] / size[1] : null;
}

/**
 * The aspect ratio a frame should take for one image slot: the photograph's
 * own, falling back to the slot's declared ratio (which is all a placeholder
 * slot — \`src: null\` — has).
 */
export function slotAspect(slot: { src: string | null; ratio: string }): number {
  const actual = imageAspect(slot.src);
  if (actual) return actual;
  const [w, h] = slot.ratio.split(":").map(Number);
  return w && h ? w / h : 1;
}
`;

fs.writeFileSync(OUT_FILE, body);
console.log(`wrote ${entries.length} entries to ${path.relative(ROOT, OUT_FILE)}`);
