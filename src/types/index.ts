export interface Photo {
  id: string;
  group: string; // örn. "urunler/klavyeli-kiosk"
  w: number;
  h: number;
  thumb: string;
  large: string;
  download: string;
  alt: string;
}

export interface Group {
  key: string; // "urunler/klavyeli-kiosk"
  slug: string;
  title: string;
  blurb: string;
  photos: Photo[];
}

export interface Location {
  slug: string;
  name: string;
  text: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string[];
}

export type KioskType = string;

export interface Product {
  slug: string;
  type: KioskType;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  tags: string[];
  features: string[];
  uses: string[];
  faq: { q: string; a: string }[];
}

export interface Reference {
  slug: string; // gorsel-kaynak/referanslar/<slug>/ klasörü ve logolar/<slug>.(svg|png) dosya adı
  name: string;
  group: string;
  note: string;
  logoBg?: 'dark'; // logo beyaz öğeler içeriyorsa koyu zemin kullan
}

export interface UseCase {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  benefits: string[];
  recommended: string[];
  faq: { q: string; a: string }[];
}

export interface NedirListItem {
  text: string;
  href?: string; // verilirse madde bir iç bağlantı olur
}

export interface NedirSection {
  heading: string;
  paragraphs?: string[];
  list?: (string | NedirListItem)[];
}

export interface Nedir {
  slug: string; // /<slug>/ adresinde yayınlanır, örn. "self-servis-kiosk-nedir"
  title: string;
  description: string;
  h1: string;
  intro: string;
  summary: string; // girişin hemen altında kısa cevap
  published: string; // YYYY-AA-GG
  modified: string; // içerik güncellendikçe değiştirin
  photoAlt: string;
  sections: NedirSection[];
  product: string; // products.ts slug'ı: sayfada referans verilen bizim ürünümüz
  useCases: string[]; // useCases.ts slug'ları
  related: string[]; // başka nedir sayfalarının slug'ları
  faq: { q: string; a: string }[];
}
