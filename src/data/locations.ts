export interface Location {
  slug: string;
  name: string;
  text: string;
}

export const locations: Location[] = [
  { slug: 'selcuklu-kiosk', name: 'Selçuklu', text: "Selçuklu; üniversite kampüsleri, alışveriş merkezleri, kütüphaneler ve yoğun kafe-restoran hattıyla Konya'nın en hareketli ilçelerinden biridir. Bu yoğunlukta kafe ve hızlı satış işletmelerinde self-servis sipariş kiosku, kütüphane ve kampüslerde ise ödünç alma ve bilgilendirme kioskları öne çıkar." },
  { slug: 'meram-kiosk', name: 'Meram', text: 'Meram; bağ evleri, restoranlar, kafeler ve hizmet işletmeleriyle bilinir. Mevsimsel yoğunluk yaşayan restoran ve kafelerde kiosk, sipariş kuyruğunu kısaltır ve geçici personel ihtiyacını azaltır.' },
  { slug: 'karatay-kiosk', name: 'Karatay', text: 'Karatay; tarihi merkez, çarşı ve turistik noktaları barındırır. Bu bölgedeki büfe, kafe ve hızlı satış noktaları ile belediye hizmet noktaları için kompakt ve dayanıklı kiosk modelleri uygundur.' },
  { slug: 'eregli-kiosk', name: 'Ereğli', text: "Ereğli; sanayi ve tarım ekonomisiyle güçlü bir ilçedir. Kurumsal tesisler, hastane, belediye ve yeme-içme işletmeleri için kiosk çözümlerimizi Ereğli'ye kurulum ve teslimatla sunuyoruz." },
  { slug: 'aksehir-kiosk', name: 'Akşehir', text: 'Akşehir; Nasreddin Hoca etkinlikleri ve ziyaretçi hareketiyle bilinir. Turizm noktaları, kafeler ve belediye hizmetleri için bilgilendirme ve sipariş kioskları sağlıyoruz.' },
  { slug: 'beysehir-kiosk', name: 'Beyşehir', text: 'Beyşehir; göl çevresindeki turizm hareketliliğiyle yaz aylarında yoğunlaşan yeme-içme ve konaklama işletmelerine sahiptir. Sezonluk yoğunlukta kiosk, personel ihtiyacını dengelemeye yardımcı olur.' },
  { slug: 'seydisehir-kiosk', name: 'Seydişehir', text: 'Seydişehir; sanayi ve kurumsal tesisleriyle öne çıkar. Kurumsal yemekhane, büfe, belediye ve kamu noktaları için kiosk çözümleri sunuyoruz.' },
  { slug: 'cumra-kiosk', name: 'Çumra', text: "Çumra; Konya ovasının tarım merkezlerinden biridir. Çumra'daki büfe, kafe, restoran ve belediye hizmet noktaları için kiosk kurulum ve teslimat hizmeti veriyoruz." },
];
