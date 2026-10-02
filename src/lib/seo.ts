// Bu dosya arama motorları (Google) için sayfa bilgisi hazırlar. Ekranda görünen bir şey üretmez.
// Dört iş yapar: tam adres üretmek, paylaşım görselini seçmek, işletme bilgisini vermek,
// ve sayfaya göre yol (breadcrumb) ile soru-cevap (SSS) bilgisini hazırlamak.

import { generalInformation } from '../data/generalInformation';

export interface Crumb {
  name: string;
  path: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

/** Sitenin mutlak adresini üretir: absoluteUrl('/urunler/') → https://konyakiosk.com/urunler/ */
export const absoluteUrl = (path: string) => new URL(path, generalInformation.url).href;

/** Sosyal medya paylaşımlarında görsel verilmezse kullanılan varsayılan görsel. */
const DEFAULT_OG_IMAGE = '/images/urunler/klavyeli-kiosk/klavyeli-kiosk-24-inc-on-large.webp';

export const ogImageUrl = (image?: string) => absoluteUrl(image ?? DEFAULT_OG_IMAGE);

/** Google'a "bu bir yerel işletme" diyen bilgi. Her sayfada bulunur. */
const businessSchema = () => ({
  '@type': 'LocalBusiness',
  '@id': `${generalInformation.url}/#business`,
  name: generalInformation.name,
  url: generalInformation.url,
  telephone: generalInformation.phoneTel,
  email: generalInformation.email,
  description: 'Kafe, büfe, restoran, belediye ve kütüphane için dokunmatik kiosk çözümleri. Klavyeli, yatay ve dikey kiosk; 21, 24 ve 32 inç.',
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Konya' }, { '@type': 'Country', name: 'Türkiye' }],
  parentOrganization: { '@type': 'Organization', name: generalInformation.parent },
  brand: { '@type': 'Brand', name: generalInformation.brand },
});

/** Google sonuçlarında görünen "Ana Sayfa › Ürünler › ..." yolu. */
const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Ana Sayfa', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

/** Google sonuçlarında açılır soru-cevap olarak görünen SSS bilgisi. */
const faqSchema = (faq: FaqItem[]) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

/** "... nedir?" gibi bilgi sayfaları için Article bilgisi: yazar ve tarihleri Google'a bildirir. */
export function buildArticleJsonLd(a: { title: string; description: string; path: string; published: string; modified: string; image?: string }): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    inLanguage: 'tr',
    datePublished: a.published,
    dateModified: a.modified,
    image: ogImageUrl(a.image),
    mainEntityOfPage: absoluteUrl(a.path),
    author: { '@type': 'Person', name: generalInformation.author },
    publisher: { '@type': 'Organization', name: generalInformation.name, url: generalInformation.url },
  });
}

/** Sayfaya gömülecek JSON-LD metnini üretir. Breadcrumb ve SSS yalnızca verilmişse eklenir. */
export function buildJsonLd(crumbs: Crumb[], faq: FaqItem[]): string {
  // Her sayfada işletme bilgisi vardır; yol ve SSS yalnızca sayfa verdiyse eklenir.
  const bilgiler: object[] = [businessSchema()];
  if (crumbs.length) bilgiler.push(breadcrumbSchema(crumbs));
  if (faq.length) bilgiler.push(faqSchema(faq));

  // '@context' ve '@graph' Google'ın beklediği sabit adlardır, değiştirilmemeli.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': bilgiler });
}
