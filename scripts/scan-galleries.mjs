import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "public", "galleries");
const BACKUP = path.join(ROOT, "photos-originals");
const OUT = path.join(ROOT, "lib", "data", "galleries.generated.json");
const MAX_EDGE = 2560;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`;

function* imageFolders(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const images = entries
    .filter(
      (e) => e.isFile() && EXTENSIONS.has(path.extname(e.name).toLowerCase()),
    )
    .map((e) => e.name)
    .sort();
  if (images.length) yield { dir, images };
  for (const e of entries) {
    if (e.isDirectory() && e.name !== "_placeholders") {
      yield* imageFolders(path.join(dir, e.name));
    }
  }
}

async function processImage(absolute, relative) {
  const before = fs.statSync(absolute).size;

  const backupPath = path.join(BACKUP, relative);
  if (!fs.existsSync(backupPath)) {
    fs.mkdirSync(path.dirname(backupPath), { recursive: true });
    fs.copyFileSync(absolute, backupPath);
  }

  const meta = await sharp(absolute).metadata();
  const rotated = (meta.orientation ?? 1) >= 5;
  const width = rotated ? meta.height : meta.width;
  const height = rotated ? meta.width : meta.height;
  const needsResize =
    Math.max(width, height) > MAX_EDGE || (meta.orientation ?? 1) > 1;

  if (!needsResize)
    return { width, height, before, after: before, resized: false };

  const tmp = absolute + ".tmp";
  const pipeline = sharp(absolute)
    .rotate()
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  const ext = path.extname(absolute).toLowerCase();
  if (ext === ".png") pipeline.png({ compressionLevel: 9 });
  else if (ext === ".webp") pipeline.webp({ quality: 82 });
  else pipeline.jpeg({ quality: 80, mozjpeg: true });

  const info = await pipeline.toFile(tmp);
  fs.renameSync(tmp, absolute);
  return {
    width: info.width,
    height: info.height,
    before,
    after: info.size,
    resized: true,
  };
}

const manifest = {};
let totalBefore = 0,
  totalAfter = 0,
  totalResized = 0;

for (const { dir, images } of imageFolders(SRC)) {
  const key = path.relative(SRC, dir).split(path.sep).join("/");
  const entries = [];
  let folderBefore = 0,
    folderAfter = 0,
    resizedCount = 0,
    landscapeCount = 0;

  for (const file of images) {
    const absolute = path.join(dir, file);
    const relative = path.relative(SRC, absolute);
    const r = await processImage(absolute, relative);
    entries.push({ file, width: r.width, height: r.height });
    folderBefore += r.before;
    folderAfter += r.after;
    if (r.resized) resizedCount += 1;
    if (r.width > r.height) landscapeCount += 1;
  }

  manifest[key] = entries;
  totalBefore += folderBefore;
  totalAfter += folderAfter;
  totalResized += resizedCount;
  console.log(
    `${key} — ${entries.length} photos (${landscapeCount} landscape), ` +
      `resized ${resizedCount}, ${mb(folderBefore)} → ${mb(folderAfter)}`,
  );
}

const sorted = Object.fromEntries(
  Object.keys(manifest)
    .sort()
    .map((k) => [k, manifest[k]]),
);
fs.writeFileSync(OUT, JSON.stringify(sorted, null, 2) + "\n");

console.log(
  `\n${Object.keys(sorted).length} folders, resized ${totalResized} files, ` +
    `${mb(totalBefore)} → ${mb(totalAfter)}`,
);
console.log(`manifest: ${path.relative(ROOT, OUT)}`);
console.log(
  `originals backed up in: ${path.relative(ROOT, BACKUP)} (gitignored)`,
);
