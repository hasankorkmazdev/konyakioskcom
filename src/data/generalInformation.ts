export const generalInformation = {
  name: 'Vectanom Kiosk',
  brand: 'Vectanom',
  parent: 'Express Bilgisayar',
  url: 'https://konyakiosk.com',
  phoneDisplay: '0507 575 14 63',
  phoneTel: '+905075751463',
  landlineDisplay: '0332 320 20 78',
  landlineTel: '+903323202078',
  whatsapp: '905075751463',
  email: 'bilgi@konyakiosk.com',
  address: {
    street: 'Nişantaş Mah. Keyhüsrev Sk. No: 19/B',
    district: 'Selçuklu',
    city: 'Konya',
    postalCode: '42060',
    country: 'TR',
  },
  geo: { lat: 37.8821562, lng: 32.4699732 },
  color: '#2a3385',
  region: 'Konya',
  author: 'Hasan Korkmaz',
  authorBio: "Hasan Korkmaz, Express Bilgisayar'ın satış ve pazarlama markası Vectanom'da yazılım geliştirici olarak çalışıyor. Konya Kart dolum kioskları, belediye tahsilat kioskları ve kafe sipariş kioskları gibi projelerde kiosk donanımı, yazılımı ve kurulumuyla ilgileniyor; sitedeki rehberleri sahadaki kurulum deneyimiyle yazıyor.", // rehber ve blog yazılarının altındaki yazar kutusu ve Article şemasındaki yazar açıklaması
  authorTitle: 'Yazılım Geliştirici',
  authorPath: '/hakkimizda/#yazar',
};

const a = generalInformation.address;
/** Tek satır adres: "Nişantaş Mah. Keyhüsrev Sk. No: 19/B, 42060 Selçuklu / Konya" */
export const addressLine = `${a.street}, ${a.postalCode} ${a.district} / ${a.city}`;

/** Google Haritalar'da konumu açan bağlantı. */
export const mapUrl = `https://www.google.com/maps?q=${generalInformation.geo.lat},${generalInformation.geo.lng}`;

export const waLink = (text = 'Merhaba, kiosk hakkında bilgi almak istiyorum.') =>
  `https://wa.me/${generalInformation.whatsapp}?text=${encodeURIComponent(text)}`;
