// Derlenmiş siteyi (dist/) arama motoru kurallarına göre denetler. Önce `npm run build` çalıştırılmalı.
// Hata (çıkış kodu 1): title veya description eksik ya da başka sayfayla aynı, H1 sayısı 1 değil,
//   canonical sayfanın kendi adresi değil, JSON-LD bozuk, alt özniteliği olmayan görsel,
//   bozuk / yönlendirilen / sonunda "/" olmayan iç bağlantı, sitemap ile sayfalar uyuşmuyor.
// Uyarı: title 60 karakterden uzun, description 120–155 karakter dışında,
//   sayfa üst menü ve alt bilgi dışında 3'ten az sayfadan bağlantı alıyor.
// noindex sayfalar (404) yalnızca H1, JSON-LD, görsel ve bağlantı yönünden denetlenir.
// Kullanım: npm run seo-kontrol
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const DIST = path.join(root, 'dist');
const SITE = 'https://konyakiosk.com';
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 155;
const MIN_INCOMING = 3;

if (!fs.existsSync(DIST)) {
  console.error('dist/ bulunamadı: önce npm run build çalıştırın.');
  process.exit(1);
}

const htmlFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? htmlFiles(p) : e.name.endsWith('.html') ? [p] : [];
  });

// dist/index.html → /, dist/urunler/index.html → /urunler/, dist/404.html → /404/
const urlPath = (file) => '/' + path.relative(DIST, file).split(path.sep).join('/').replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '/');

const ENTITIES = { amp: '&', quot: '"', lt: '<', gt: '>', apos: "'" };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#[0-9]+|amp|quot|lt|gt|apos);/gi, (_, e) =>
    e[0] === '#' ? String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : ENTITIES[e.toLowerCase()],
  );

// <name ...> etiketlerinin özniteliklerini { ad: değer } olarak döndürür; değersiz öznitelik '' olur.
const tags = (html, name) =>
  [...html.matchAll(new RegExp(`<${name}\\b(?:[^>"']|"[^"]*"|'[^']*')*>`, 'gi'))].map((m) =>
    Object.fromEntries(
      [...m[0].slice(name.length + 1).matchAll(/([\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)].map((a) => [a[1].toLowerCase(), decode(a[2] ?? a[3] ?? a[4] ?? '')]),
    ),
  );

const len = (s) => [...s].length;

const pages = htmlFiles(DIST).map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  // Betik, stil ve yorumlar içindeki etiketler sayfa içeriği sayılmaz
  const body = html.replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<!--[\s\S]*?-->/gi, '');
  const main = body.replace(/<header\b[\s\S]*?<\/header>|<footer\b[\s\S]*?<\/footer>/gi, '');
  const metas = tags(html, 'meta');
  const meta = (n) => metas.find((m) => m.name === n)?.content;
  return {
    path: urlPath(file),
    title: decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim(),
    desc: (meta('description') ?? '').trim(),
    noindex: /noindex/i.test(meta('robots') ?? ''),
    canonical: tags(html, 'link').find((l) => l.rel === 'canonical')?.href,
    h1: (body.match(/<h1\b/gi) ?? []).length,
    jsonLd: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => m[1]),
    links: new Set(tags(body, 'a').map((a) => a.href).filter(Boolean)),
    mainLinks: new Set(tags(main, 'a').map((a) => a.href).filter(Boolean)),
    imgs: tags(body, 'img'),
  };
});

const errors = [];
const warnings = [];
const err = (p, msg) => errors.push([p, msg]);
const warn = (p, msg) => warnings.push([p, msg]);

const redirects = new Set(
  fs.existsSync(path.join(DIST, '_redirects'))
    ? fs.readFileSync(path.join(DIST, '_redirects'), 'utf8').split('\n').map((l) => l.trim().split(/\s+/)[0]).filter((s) => s.startsWith('/'))
    : [],
);

const exists = (p) => {
  const f = path.join(DIST, decodeURIComponent(p));
  return p.endsWith('/') ? fs.existsSync(path.join(f, 'index.html')) : fs.existsSync(f) && fs.statSync(f).isFile();
};

// Site içi adresi döndürür; dış bağlantı, tel:, mailto: için null
const internal = (href, from) => {
  try {
    const u = new URL(href, SITE + from);
    return u.origin === SITE ? u.pathname : null;
  } catch {
    return null;
  }
};

const checkUrl = (from, p, what) => {
  if (redirects.has(p)) err(from, `yönlendirilen adrese ${what}: ${p}`);
  else if (!path.extname(p) && !p.endsWith('/')) err(from, `sonunda / olmayan ${what}: ${p}`);
  else if (!exists(p)) err(from, `bozuk ${what}: ${p}`);
};

const incoming = new Map(pages.map((p) => [p.path, new Set()]));

for (const page of pages) {
  const p = page.path;

  if (page.h1 !== 1) err(p, `H1 sayısı ${page.h1} (1 olmalı)`);
  for (const ld of page.jsonLd) {
    try {
      JSON.parse(ld);
    } catch {
      err(p, 'JSON-LD geçerli JSON değil');
    }
  }
  for (const img of page.imgs) {
    if (img.alt === undefined) err(p, `alt özniteliği olmayan görsel: ${img.src}`);
    const src = img.src && internal(img.src, p);
    if (src) checkUrl(p, src, 'görsel');
  }
  for (const href of page.links) {
    const target = internal(href, p);
    if (target && target !== p) checkUrl(p, target, 'iç bağlantı');
  }
  for (const href of page.mainLinks) {
    const target = internal(href, p);
    if (target && target !== p) incoming.get(target)?.add(p);
  }

  if (page.noindex) continue;

  if (!page.title) err(p, 'title yok');
  else if (len(page.title) > TITLE_MAX) warn(p, `title ${len(page.title)} karakter (en fazla ${TITLE_MAX}): ${page.title}`);
  if (!page.desc) err(p, 'description yok');
  else if (len(page.desc) < DESC_MIN || len(page.desc) > DESC_MAX) warn(p, `description ${len(page.desc)} karakter (${DESC_MIN}–${DESC_MAX} olmalı)`);
  if (page.canonical !== SITE + p) err(p, `canonical sayfanın kendi adresi değil: ${page.canonical ?? 'yok'}`);
}

const indexable = pages.filter((p) => !p.noindex);

for (const [field, label] of [['title', 'title'], ['desc', 'description']]) {
  const seen = new Map();
  for (const page of indexable) if (page[field]) seen.set(page[field], [...(seen.get(page[field]) ?? []), page.path]);
  for (const paths of seen.values()) if (paths.length > 1) for (const p of paths) err(p, `${label} şu sayfalarla aynı: ${paths.filter((x) => x !== p).join(', ')}`);
}

for (const page of indexable) {
  if (page.path === '/') continue;
  const n = incoming.get(page.path).size;
  if (n < MIN_INCOMING) warn(page.path, `üst menü ve alt bilgi dışında ${n} sayfadan bağlantı alıyor (en az ${MIN_INCOMING})`);
}

const sitemapFile = path.join(DIST, 'sitemap-0.xml');
if (fs.existsSync(sitemapFile)) {
  const inSitemap = new Set([...fs.readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname));
  for (const page of indexable) if (!inSitemap.has(page.path)) err(page.path, "sitemap'te yok");
  for (const p of inSitemap) if (!pages.some((page) => page.path === p)) err(p, "sitemap'te var ama sayfa yok");
} else {
  err('/', 'dist/sitemap-0.xml bulunamadı');
}

const report = (label, list) => {
  if (!list.length) return;
  console.log(`\n${label} (${list.length}):`);
  for (const [p, msg] of list.sort((a, b) => a[0].localeCompare(b[0]))) console.log(`  ${p}  ${msg}`);
};
report('Hatalar', errors);
report('Uyarılar', warnings);
console.log(`\n${pages.length} sayfa denetlendi: ${errors.length} hata, ${warnings.length} uyarı.`);
process.exitCode = errors.length ? 1 : 0;
