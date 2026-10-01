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
