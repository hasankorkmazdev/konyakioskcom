import type { UseCase } from '../types';
export type { UseCase } from '../types';

/**
 * Kullanım alanları: her kayıt /kullanim-alanlari/<slug>/ adresinde bir sayfa olur.
 * recommended: products.ts içindeki ürün slug'ları.
 * Fotoğraflar galeri.ts içindeki useCasePhotoGroups tablosundan gelir.
 */
export const useCases: UseCase[] = [
  {
    slug: 'self-servis-siparis-kiosku',
    name: 'Self Servis Sipariş Kioskları',
    title: 'Self Servis Sipariş Kiosku | Restoran, Kafe, Fast Food | Vectanom Kiosk Konya',
    description: 'Restoran, kafe, fast food işletmeleri ve yemek katları için self servis sipariş kiosku. Müşteri menüyü inceler, siparişini hızlıca verir. Konya ve çevresi.',
    h1: 'Self Servis Sipariş Kiosku: Restoran, Kafe ve Fast Food İçin',
    intro: 'Self servis sipariş kiosku, müşterilerin dokunmatik ekran üzerinden menüyü incelemesini, ürünlerini seçmesini ve siparişini hızlıca oluşturmasını sağlar. Yoğun saatlerde sıra bekleme süresini azaltır; kasadaki personel siparişi almak yerine hazırlığa ve servise odaklanır. Restoran, kafe, fast food işletmeleri ve yemek katları için Konya ve çevresinde self servis kiosk çözümleri sunuyoruz.',
    benefits: [
      'Yoğun saatlerde kuyruk azalır, sipariş hızlanır',
      'Ürün görselleri ve ek ürün önerileriyle sepet tutarı artabilir',
      'Müşteri ne seçtiğini kendisi gördüğü için sipariş hataları azalır',
      'Menü ve kampanyalar kioskta anında güncellenir',
      'Sesli sipariş, POS ve QR ödeme, yazıcı seçenekleri',
    ],
    recommended: ['siparis-kiosk', 'self-kiosk', 'yatay-kiosk'],
    faq: [
      { q: 'Self servis sipariş kiosku nedir?', a: 'Müşterinin personele ihtiyaç duymadan menüden ürün seçip siparişini ve ödemesini kendisinin tamamladığı dokunmatik ekranlı cihazdır.' },
      { q: 'Restoran, kafe ve fast food için aynı kiosk mu kullanılır?', a: 'Temel yapı aynıdır. Menü büyüklüğüne, ödeme yöntemine ve yazıcı ihtiyacına göre ekran boyutu ve donanım seçilir.' },
      { q: 'Mevcut adisyon programımıza bağlanır mı?', a: 'Kullandığınız programın entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'Self servis sipariş kiosku fiyatı nedir?', a: 'Fiyat; ekran boyutuna, donanıma (yazıcı, POS, QR okuyucu, sesli sipariş) ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'belediye-siramatik-kiosku',
    name: 'Belediye Sıramatik Kioskları',
    title: 'Belediye Sıramatik Kiosku ve Tahsilat Kiosku | Vectanom Kiosk Konya',
    description: 'Belediyeler için sıramatik sistemi kiosku ve kredi kartlı, nakit tahsilat kioskları. Sıra bekleme süresini azaltın. Teklif için iletişime geçin.',
    h1: 'Belediyeler İçin Sıramatik ve Tahsilat Kiosku',
    intro: 'Belediyelerde yoğun hizmet noktalarında sıra bekleme süresini azaltmak için sıramatik kioskları, vatandaşların borç ve bedel ödemelerini kendi başına yapabilmesi için tahsilat kioskları kullanılır. Sıramatik kiosku vatandaşın hizmetini seçip sıra numarası almasını sağlar; tahsilat kiosku nakit ve kredi kartlı ödeme alabilir. Farklı belediyelerde hizmet veren tahsilat ve sıramatik kioskları üretiyoruz.',
    benefits: [
      'Yoğun hizmet noktalarında bekleme süresi azalır',
      'Vatandaş hizmetini seçip sıra numarasını kendisi alır',
      'Tahsilat kioskunda nakit ve kredi kartlı ödeme seçeneği',
      'Duyuru ve içerikler merkezi olarak güncellenir',
      'Klavyeli veya klavyesiz modeller, dayanıklı metal gövde',
    ],
    recommended: ['siramatik-kiosk', 'klavyeli-kiosk', 'dikey-kiosk'],
    faq: [
      { q: 'Belediye sıramatik sistemi nasıl çalışır?', a: 'Vatandaş dokunmatik ekrandan hizmeti seçer, fişini alır ve sırası geldiğinde çağrılır. Sıra yönetim yazılımıyla entegrasyon yapılabilir.' },
      { q: 'Tahsilat kiosku hangi ödeme yöntemlerini destekler?', a: 'Nakit ve kredi kartlı ödeme gibi seçenekler proje ihtiyacına göre belirlenir.' },
      { q: 'Hangi belediyelere kiosk sağladınız?', a: 'Referanslarımızı Referanslar sayfasında görebilirsiniz.' },
      { q: 'Belediye kiosku fiyatı nedir?', a: 'Fiyat; model, donanım ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'hastane-kiosk',
    name: 'Hastane Kioskları',
    title: 'Hastane Kiosk ve Sıramatik Donanımı | Vectanom Kiosk Konya',
    description: 'Hastaneler için sıramatik ve hasta çağırma sistemlerine uygun kiosk donanımı. Poliklinik ve randevu noktalarında bekleme süresini azaltın.',
    h1: 'Hastane Kiosku: Sıramatik ve Hasta Çağırma Sistemleri İçin',
    intro: 'Hastanelerde poliklinik, randevu ve işlem noktalarında bekleme süresini azaltmak için sıramatik kioskları kullanılır. Hastane sıramatik sistemleri için kiosk donanımını üretiyoruz; kioskları, hastanenizin hasta çağırma yazılımıyla birlikte çalışacak şekilde hazırlıyoruz. Yazılım tarafı hastanenin kullandığı sistem veya yazılım firması ile entegre edilir.',
    benefits: [
      'Hasta hizmetini seçip sıra numarasını kendisi alır',
      'Poliklinik ve işlem noktalarında bekleme düzeni sağlanır',
      'Termal yazıcı ile sıra fişi',
      'Hasta çağırma yazılımlarıyla entegrasyona uygun donanım',
      'Yoğun kullanıma uygun, sağlam gövde',
    ],
    recommended: ['siramatik-kiosk', 'dikey-kiosk', 'klavyeli-kiosk'],
    faq: [
      { q: 'Hastane sıramatik sistemi için kiosk donanımı sağlıyor musunuz?', a: 'Evet. Kiosk donanımını sağlıyoruz; hasta çağırma yazılımı hastanenin kullandığı sistem veya yazılım firması üzerinden çalışır.' },
      { q: 'Mevcut hasta çağırma yazılımımızla çalışır mı?', a: 'Yazılımın kiosk ve yazıcı entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'Hangi ekran boyutu önerilir?', a: 'Kullanım alanına göre belirlenir; teknik detayları iletişim formu üzerinden birlikte netleştirebiliriz.' },
      { q: 'Hastane kiosku fiyatı nedir?', a: 'Fiyat; model, donanım ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'kutuphane-kiosku',
    name: 'Kütüphane Kioskları',
    title: 'Kütüphane Kiosku: Kitap İade ve Ödünç Alma | Vectanom Kiosk Konya',
    description: 'Kütüphaneler için kitap iade ve ödünç alma kiosku. Barkod okuyuculu, kart okuma seçenekli, ödünç alma fişi yazıcılı kiosk.',
    h1: 'Kütüphane Kiosku: Kitap İade ve Ödünç Alma',
    intro: 'Kütüphane kiosku, okuyucuların kitap iade etme ve ödünç alma işlemlerini görevli beklemeden kendi başlarına yapabilmesini sağlar. Barkod okuyucu ile kitap tanınır, üye kartı veya kimlik okuma seçeneğiyle üye doğrulanır, istenirse ödünç alma fişi yazdırılır.',
    benefits: [
      'Kitap iade ve ödünç alma sıra beklemeden yapılır',
      'Kütüphane personelinin yükü azalır',
      'Barkod/QR okuyucu ile hızlı kitap tanıma',
      'Üye kartı veya kimlik okuma seçeneği',
      'Yazıcı ile ödünç alma fişi',
    ],
    recommended: ['kutuphane-kiosk'],
    faq: [
      { q: 'Kütüphane kiosku neler yapar?', a: 'Kitap iade ve ödünç alma işlemleri, barkod okuma ve üye doğrulama gibi işlemlerde kullanılır.' },
      { q: 'Mevcut kütüphane otomasyonumuzla çalışır mı?', a: 'Otomasyon yazılımının entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'Kütüphane kiosku fiyatı nedir?', a: 'Fiyat; ekran boyutu, donanım ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'bilgilendirme-kiosku',
    name: 'Bilgilendirme Kioskları',
    title: 'Bilgilendirme Kiosku ve Haritalama | Vectanom Kiosk Konya',
    description: 'Bina içi yönlendirme, harita ve bilgilendirme kioskları. Dikey dokunmatik ekranlı, uzaktan içerik güncellenebilen kiosk modelleri.',
    h1: 'Bilgilendirme Kiosku: Bilgi, Harita ve Yönlendirme',
    intro: 'Bilgilendirme kioskları; hastane, belediye, okul, alışveriş merkezi ve kurumsal binalarda ziyaretçilerin aradığı birimi, kişiyi veya hizmeti kendi başına bulmasını sağlar. Haritalama kiosku bina içi yönlendirme yapar, bilgi kiosku ise duyuru ve içerikleri merkezi olarak gösterir.',
    benefits: [
      'Ziyaretçi aradığı yeri harita ve arama ile kendisi bulur',
      'Danışma noktasındaki yoğunluk azalır',
      'Harita, duyuru ve içerikler uzaktan güncellenir',
      'Büyük dikey dokunmatik ekran',
      'Ayaklı, sağlam gövde',
    ],
    recommended: ['haritalama-kiosk', 'totem-kiosk', 'dikey-kiosk'],
    faq: [
      { q: 'Bilgilendirme kiosku nedir?', a: 'Ziyaretçilere bilgi, duyuru ve yönlendirme sunan dokunmatik ekranlı cihazdır.' },
      { q: 'İçerikler nasıl güncellenir?', a: 'Harita ve içerikler uzaktan güncellenebilir, kiosk başına gitmek gerekmez.' },
      { q: 'Bilgilendirme kiosku fiyatı nedir?', a: 'Fiyat; ekran boyutu ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
];
