// gorsel-kaynak/ altındaki orijinalleri web için işler:
//   public/images/<bolum>/<grup>/<id>-thumb.webp   (liste görünümü, max 600px)
//   public/images/<bolum>/<grup>/<id>-large.webp   (büyük görünüm, max 1200px)
//   public/images/<bolum>/<grup>/<id>-paylas.jpg   (indirme / paylaşım, max 1600px)
// ve src/data/gallery.generated.json manifestini yazar.
// Kullanım: npm run gorsel
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const SRC = path.join(root, 'gorsel-kaynak');
const OUT = path.join(root, 'public', 'images');
const MANIFEST = path.join(root, 'src', 'data', 'gallery.generated.json');
const SECTIONS = ['urunler', 'referanslar'];
const RASTER = /\.(png|jpe?g|webp)$/i;

const sortKey = (id) => (/-on$/.test(id) ? 0 : /-(on|1)(-|$)/.test(id) ? 1 : 2) + id;

async function process1(file, outDir, id) {
  const thumb = path.join(outDir, `${id}-thumb.webp`);
  const large = path.join(outDir, `${id}-large.webp`);
  const share = path.join(outDir, `${id}-paylas.jpg`);
  const srcTime = fs.statSync(file).mtimeMs;
  const fresh = [thumb, large, share].every((f) => fs.existsSync(f) && fs.statSync(f).mtimeMs >= srcTime);

  let base = sharp(file).rotate().flatten({ background: '#ffffff' });
  // PNG render'larda boş kenarları kırp (önce alfa kanalına, yoksa beyaz zemine göre), biraz boşluk bırak
  if (/.png$/i.test(file)) {
    // İçerik = şeffaf olmayan ve neredeyse-beyaz olmayan piksel
    const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let x0 = info.width, y0 = info.height, x1 = -1, y1 = -1;
    for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      if (data[i + 3] > 24 && (data[i] < 238 || data[i + 1] < 238 || data[i + 2] < 238)) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    }
    const box = x1 >= 0 ? { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 } : null;
    const cropped = box ? sharp(file).flatten({ background: '#ffffff' }).extract(box) : sharp(file).flatten({ background: '#ffffff' });
    const trimmed = await cropped.toBuffer({ resolveWithObject: true });
    const pad = Math.round(Math.max(trimmed.info.width, trimmed.info.height) * 0.03);
    base = sharp(trimmed.data).extend({ top: pad, bottom: pad, left: pad, right: pad, background: '#ffffff' });
  }
  const buf = await base.toBuffer();
  const meta = await sharp(buf).metadata();

  let w = meta.width, h = meta.height;
  const scale = Math.min(1, 1200 / Math.max(w, h));
  w = Math.round(w * scale); h = Math.round(h * scale);

  if (!fresh) {
    await sharp(buf).resize(600, 600, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(thumb);
    await sharp(buf).resize(1200, 1200, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(large);
    await sharp(buf).resize(1600, 1600, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile(share);
  }
  return { id, w, h };
}

const manifest = { groups: {}, logos: {} };
let count = 0;

for (const section of SECTIONS) {
  const sdir = path.join(SRC, section);
  if (!fs.existsSync(sdir)) continue;
  for (const group of fs.readdirSync(sdir, { withFileTypes: true })) {
    if (!group.isDirectory() || group.name === 'logolar') continue;
    const gdir = path.join(sdir, group.name);
    const files = fs.readdirSync(gdir).filter((f) => RASTER.test(f));
    const outDir = path.join(OUT, section, group.name);
    fs.mkdirSync(outDir, { recursive: true });
    const items = [];
    for (const f of files) {
      const id = f.replace(/\.[^.]+$/, '');
      items.push(await process1(path.join(gdir, f), outDir, id));
      count++;
    }
    items.sort((a, b) => (sortKey(a.id) < sortKey(b.id) ? -1 : 1));
    manifest.groups[`${section}/${group.name}`] = items;
  }
}

// Kurum logoları: gorsel-kaynak/referanslar/logolar/<kurum-slug>.(svg|png|jpg|webp)
// Manifestte boyutlar da tutulur; <img> width/height alır, sayfa yüklenirken kayma olmaz.
const ldir = path.join(SRC, 'referanslar', 'logolar');
if (fs.existsSync(ldir)) {
  const outL = path.join(OUT, 'referanslar', 'logolar');
  fs.mkdirSync(outL, { recursive: true });
  for (const f of fs.readdirSync(ldir)) {
    const slug = f.replace(/\.[^.]+$/, '');
    if (/\.svg$/i.test(f)) {
      fs.copyFileSync(path.join(ldir, f), path.join(outL, `${slug}.svg`));
      const { width, height } = await sharp(path.join(ldir, f)).metadata();
      manifest.logos[slug] = { src: `/images/referanslar/logolar/${slug}.svg`, w: width, h: height };
    } else if (RASTER.test(f)) {
      const { width, height } = await sharp(path.join(ldir, f)).rotate().trim({ threshold: 10 }).resize(400, 200, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 90 }).toFile(path.join(outL, `${slug}.webp`));
      manifest.logos[slug] = { src: `/images/referanslar/logolar/${slug}.webp`, w: width, h: height };
    }
  }
}

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
console.log(`${count} görsel işlendi, ${Object.keys(manifest.logos).length} logo, ${Object.keys(manifest.groups).length} grup.`);
