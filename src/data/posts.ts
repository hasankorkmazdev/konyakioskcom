import type { Post } from '../types';
export type { Post } from '../types';

// body: '## ' ile başlayan satır H2, '- ' ile başlayan satır liste, diğerleri paragraf.
export const posts: Post[] = [
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
];
