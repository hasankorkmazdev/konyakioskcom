import data from './products.json';

export type KioskType = string;

export interface Product {
  slug: string;
  type: KioskType;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sizes: string[];
  features: string[];
  uses: string[];
  faq: { q: string; a: string }[];
}

/** Kiosk modelleri: içerik src/data/products.json dosyasından gelir. */
export const products = data as Product[];
