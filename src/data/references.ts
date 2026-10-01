import type { Reference } from '../types';
export type { Reference } from '../types';

// Yeni kurum eklemek: gorsel-kaynak/referanslar/<slug>/ klasörüne fotoğrafları,
// gorsel-kaynak/referanslar/logolar/<slug>.svg|png dosyasına logoyu koyup `npm run gorsel` çalıştırın.
export const references: Reference[] = [
  { slug: 'konya-buyuksehir-belediyesi', name: 'Konya Büyükşehir Belediyesi', group: 'referanslar/konya-buyuksehir-belediyesi', note: 'Konya Kart pratik kiosk tahsilat noktaları' },
  { slug: 'koski', name: 'KOSKİ', group: 'referanslar/koski', note: 'Nakit ve kredi kartlı su bedeli tahsilat kioskları' },
  { slug: 'kaski', name: 'KASKİ', group: 'referanslar/kaski', note: 'Kahramanmaraş tahsilat kiosku' },
  { slug: 'sivas-belediyesi', name: 'Sivas Belediyesi', group: 'referanslar/sivas-belediyesi', note: 'Nakit ve kredi kartlı tahsilat kioskları' },
  { slug: 'igdir-belediyesi', name: 'Iğdır Belediyesi', group: 'referanslar/igdir-belediyesi', note: 'Kiosk tahsilat sistemi', logoBg: 'dark' },
  { slug: 'necmettin-erbakan-universitesi', name: 'Necmettin Erbakan Üniversitesi', group: 'referanslar/necmettin-erbakan-universitesi', note: 'Üniversite kiosk projesi' },
  { slug: 'cukurova-havalimani', name: 'Çukurova Uluslararası Havalimanı', group: 'referanslar/cukurova-havalimani', note: 'Havalimanı kiosk projesi' },
];
