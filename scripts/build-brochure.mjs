// Prints scripts/brochure/brochure.html to public/MIRA-LIVING-Brochure-2026.pdf
// with headless Chrome. Re-run after editing the HTML or the price guide:
//
//   node scripts/build-brochure.mjs
//
// The HTML references the site's own images under public/img, so the brochure
// never carries a photo the site does not. Chrome embeds every raster at its
// full size, which made the first print 68 MB; so before printing each
// photograph is re-encoded into scripts/brochure/.img/ at a size that still
// prints crisply on A4 (1800 px on the long edge, JPEG 82) and the HTML is
// rewritten to those copies. Fonts come from Google Fonts at print time
// (Cormorant Garamond + Poppins, the same faces as the site).
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIR = path.join(ROOT, "scripts", "brochure");
const SRC = path.join(DIR, "brochure.html");
const TMP = path.join(DIR, ".print.html");
const IMG = path.join(DIR, ".img");
const OUT = path.join(ROOT, "public", "MIRA-LIVING-Brochure-2026.pdf");
const LONG_EDGE = 1800;

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((p) => fs.existsSync(p));
if (!CHROME) throw new Error("No Chrome/Edge binary found for PDF printing.");

fs.mkdirSync(IMG, { recursive: true });
let html = fs.readFileSync(SRC, "utf8");
const refs = [...new Set([...html.matchAll(/src="(\.\.\/\.\.\/public\/img\/[^"]+)"/g)].map((m) => m[1]))];

for (const ref of refs) {
  const abs = path.resolve(DIR, ref);
  const ext = path.extname(abs).toLowerCase();
  if (ext === ".svg") continue; // vector — keep as is
  const name = ref.replace(/^\.\.\/\.\.\/public\/img\//, "").replace(/[\/\\]/g, "__").replace(/\.[^.]+$/, "");
  // Floor plans are line drawings and logos carry transparency: both stay PNG.
  // Everything else is a photograph and goes to JPEG.
  const isPlan = ref.includes("/plans/");
  const keepPng = isPlan || ext === ".png";
  const out = path.join(IMG, `${name}.${keepPng ? "png" : "jpg"}`);
  if (!fs.existsSync(out) || fs.statSync(out).mtimeMs < fs.statSync(abs).mtimeMs) {
    let img = sharp(abs).rotate().resize({ width: isPlan ? 1400 : LONG_EDGE, height: isPlan ? 2200 : LONG_EDGE, fit: "inside", withoutEnlargement: true });
    img = keepPng ? img.png({ compressionLevel: 9, palette: isPlan }) : img.jpeg({ quality: 82, mozjpeg: true });
    await img.toFile(out);
  }
  html = html.split(`src="${ref}"`).join(`src=".img/${path.basename(out)}"`);
}
fs.writeFileSync(TMP, html);

const url = "file:///" + TMP.replace(/\\/g, "/");
const r = spawnSync(
  CHROME,
  ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=15000", `--print-to-pdf=${OUT}`, url],
  { stdio: ["ignore", "ignore", "ignore"] }
);
if (r.status !== 0) {
  console.error(`chrome exited ${r.status}`);
  process.exit(r.status ?? 1);
}
const mb = (fs.statSync(OUT).size / 1024 / 1024).toFixed(2);
console.log(`wrote ${path.relative(ROOT, OUT)} (${mb} MB, ${refs.length} images)`);
