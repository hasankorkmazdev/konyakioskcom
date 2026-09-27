export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string[];
}

// body: '## ' ile başlayan satır H2, '- ' ile başlayan satır liste, diğerleri paragraf.
export const posts: Post[] = [
  {
    slug: 'kiosk-nedir-nerelerde-kullanilir',
    title: 'Kiosk Nedir? Nerelerde Kullanılır?',
    description: 'Kiosk nedir, hangi sektörlerde kullanılır, işletmeye ne kazandırır? Kafe, restoran, belediye ve kütüphane örnekleriyle kısa rehber.',
    date: '2026-09-26',
    body: [
      '## Kiosk nedir?',
      'Kiosk, kullanıcının personel yardımı olmadan işlem yapabildiği dokunmatik ekranlı self-servis cihazdır. Sipariş verme, bilgi sorgulama, randevu alma veya kayıt gibi işlemler tek bir cihazda yapılır.',
      '## Nerelerde kullanılır?',
      '- Kafe ve restoran: self-servis sipariş',
      '- Büfe ve hızlı satış: kuyruğu azaltma',
      '- Belediye ve kamu: bilgilendirme, sorgulama, randevu',
      '- Kütüphane: kitap ödünç alma ve iade',
      '- Hastane ve kurumlar: kayıt ve yönlendirme',
      '## Doğru kiosk nasıl seçilir?',
      'Üç soruya cevap verin: Kullanıcı yazı yazacak mı (klavyeli model)? İçerik görsel mi, liste mi (yatay ya da dikey)? Cihaz nerede duracak (alan, yükseklik, iç veya dış mekan)? Bu cevaplara göre 21, 24 veya 32 inç seçeneklerinden biri belirlenir.',
    ],
  },
  {
    slug: 'kafe-kiosk-nasil-secilir',
    title: 'Kafe İçin Kiosk Nasıl Seçilir?',
    description: 'Kafe için self-servis sipariş kiosku seçerken dikkat edilecek ekran boyutu, yön, yazıcı ve yazılım kriterleri.',
    date: '2026-09-26',
    body: [
      '## 1. Ekran yönü',
      'Ürün görselleriyle çalışan menülerde yatay ekran daha çok alan sağlar. Dar alanlarda dikey model daha az yer kaplar.',
      '## 2. Ekran boyutu',
      '21 inç küçük ve orta ölçekli işletmeler için, 24 inç standart kullanım için, 32 inç uzaktan da görünmesi istenen alanlar için uygundur.',
      '## 3. Donanım',
      'Fiş yazıcısı, POS ve QR okuyucu gibi çevre birimleri ihtiyaca göre eklenir. Kullandığınız adisyon yazılımıyla uyumluluğu baştan sorun.',
      '## 4. Yazılım',
      'Kiosk arayüzü menü değişikliklerini kolay yapabilmeli ve kullanıcının cihazdan çıkıp başka uygulamaya geçmesini engellemelidir.',
    ],
  },
  {
    slug: 'belediyeler-icin-kiosk',
    title: 'Belediyeler İçin Kiosk: Kullanım Alanları',
    description: 'Belediye kiosku ile vatandaş bilgilendirme, borç sorgulama ve randevu. Klavyeli ve dikey model seçimi rehberi.',
    date: '2026-09-26',
    body: [
      '## Belediyelerde kiosk ne işe yarar?',
      'Vatandaş, hizmet binasında sıra beklemeden borç sorgulama, duyuru okuma, randevu alma ve yönlendirme işlemlerini yapabilir.',
      '## Hangi model?',
      'Kimlik numarası veya arama girişi gerektiren işlemlerde klavyeli model, bilgilendirme ve yönlendirmede dikey model önerilir.',
      '## Entegrasyon',
      'Web tabanlı belediye yazılımları kiosk modunda çalıştırılabilir. Teknik detaylar için iletişim formundan bize ulaşabilirsiniz.',
    ],
  },
];
