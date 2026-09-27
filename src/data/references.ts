export interface Reference {
  slug: string; // gorsel-kaynak/referanslar/<slug>/ klasörü ve logolar/<slug>.(svg|png) dosya adı
  name: string;
  group: string;
  note: string;
  logoBg?: 'dark'; // logo beyaz öğeler içeriyorsa koyu zemin kullan
}

// Yeni kurum eklemek: gorsel-kaynak/referanslar/<slug>/ klasörüne fotoğrafları,
// gorsel-kaynak/referanslar/logolar/<slug>.svg|png dosyasına logoyu koyup `npm run gorsel` çalıştırın.
export const references: Reference[] = [
  { slug: 'konya-buyuksehir-belediyesi', name: 'Konya Büyükşehir Belediyesi', group: 'referanslar/konya-buyuksehir-belediyesi', note: 'Konya Kart pratik kiosk tahsilat noktaları' },
  { slug: 'koski', name: 'KOSKİ', group: 'referanslar/koski', note: 'Nakit ve kredi kartlı su bedeli tahsilat kioskları' },
  { slug: 'kaski', name: 'KASKİ', group: 'referanslar/kaski', note: 'Kahramanmaraş tahsilat kiosku' },
  { slug: 'sivas-belediyesi', name: 'Sivas Belediyesi', group: 'referanslar/sivas-belediyesi', note: 'Nakit ve kredi kartlı tahsilat kioskları' },
  { slug: 'igdir-belediyesi', name: 'Iğdır Belediyesi', group: 'referanslar/igdir-belediyesi', note: 'Kiosk tahsilat sistemi', logoBg: 'dark' },
];
