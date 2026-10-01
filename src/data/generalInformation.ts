export const generalInformation = {
  name: 'Vectanom Kiosk',
  brand: 'Vectanom',
  parent: 'Express Bilgisayar',
  url: 'https://konyakiosk.com',
  phoneDisplay: '0507 575 14 63',
  phoneTel: '+905075751463',
  whatsapp: '905075751463',
  color: '#2a3385',
  region: 'Konya',
};

export const waLink = (text = 'Merhaba, kiosk hakkında bilgi almak istiyorum.') =>
  `https://wa.me/${generalInformation.whatsapp}?text=${encodeURIComponent(text)}`;
