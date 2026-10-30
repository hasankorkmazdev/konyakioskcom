import type { Reference } from '../types';
export type { Reference } from '../types';

// Yeni kurum eklemek: gorsel-kaynak/referanslar/<slug>/ klasörüne fotoğrafları,
// gorsel-kaynak/referanslar/logolar/<slug>.svg|png dosyasına logoyu koyup `npm run gorsel` çalıştırın.
// Ayrıntılı proje sayfası için title, description, h1, intro, facts, sections ve faq alanları eklenir (Konya Büyükşehir örneği).
export const references: Reference[] = [
  {
    // Kart sistemi önce "Elkart" adını taşıyordu, sonra "Konya Kart" oldu; ikisi de aranıyor.
    slug: 'konya-buyuksehir-belediyesi',
    name: 'Konya Büyükşehir Belediyesi',
    group: 'referanslar/konya-buyuksehir-belediyesi',
    note: 'Konya Kart (Elkart) dolum ve satış kioskları, 58 cihaz',
    useCases: ['ulasim-karti-dolum-kiosku', 'belediye-siramatik-kiosku'],
    title: 'Konya Kart (Elkart) Dolum Kiosku Projesi | Vectanom',
    description: 'Konya Büyükşehir Belediyesi için ürettiğimiz 58 Konya Kart (Elkart) dolum ve satış kioskunun kurulum takvimi, özellikleri ve sahadan fotoğrafları.',
    h1: 'Konya Kart (Elkart) Dolum ve Satış Kioskları',
    intro: "Konya Büyükşehir Belediyesi'nin Konya Kart (eski adıyla Elkart) ulaşım kartı sistemi için 58 dolum ve satış kiosku ürettik ve kurduk. Yolcular bu kiosklarda kartlarına kâğıt para ya da kredi kartıyla bakiye ve abonman yüklüyor, bakiyelerini sorguluyor ve yeni kart alıyor. Kiosklar 7/24 çalışıyor ve günde yaklaşık 60.000 işlem yapıyor.",
    facts: [
      { value: '58', label: 'kiosk' },
      { value: '60.000', label: 'günlük işlem' },
      { value: '1 milyon TL', label: 'günlük işlem hacmi (yaklaşık)' },
      { value: '7/24', label: 'kesintisiz hizmet' },
    ],
    sections: [
      {
        heading: 'Proje kapsamı',
        paragraphs: [
          "Kioskların donanımını, dış mekân kabinlerini ve yazılımını biz ürettik, kurulumlarını biz yaptık. Kiosklar, Konya Kart sistemiyle kapalı bir yerel ağ üzerinden haberleşiyor. Bakım ve servisi, Express Bilgisayar'ın yazılım şirketi Gora Yazılım yürütüyor.",
          "İlk kiosklar Elkart'ın sarı-siyah renkleriyle kuruldu. Sonraki kiosklar mavi Konya Kart tasarımıyla üretildi.",
        ],
      },
      {
        heading: 'Kurulum takvimi',
        table: {
          head: ['Tarih', 'Kurulum'],
          rows: [
            ['12 Nisan 2022', '1 test cihazı: kâğıt para, bozuk para ve kredi kartı birimleriyle tam donanımlı'],
            ['13 Eylül 2023', '30 kiosk, bozuk para birimi olmadan'],
            ['17 Ekim 2024', '28 kiosk, bozuk para birimi olmadan'],
          ],
        },
        after: ['Test cihazının ardından kurulan 58 kiosk bozuk para birimi olmadan üretildi. Bu kiosklarda ödeme kâğıt para ve kredi kartıyla alınıyor.'],
      },
      {
        heading: 'Konya Kart kiosklarının yerleri',
        paragraphs: [
          'Kioskların çoğu toplu taşıma duraklarında. Bosna Hersek, Eski Sanayi, Kültürpark ve Kayalı Park durakları en yoğun kurulum noktaları arasında. Bazı duraklarda iki kiosk, ortak bir sundurmanın altında yan yana duruyor.',
        ],
      },
      {
        heading: 'Yolcular kioskta neler yapabiliyor?',
        list: [
          { label: 'Bakiye yükleme', text: 'Konya Kart kioskun kart haznesine bırakılır, yüklenecek tutar kâğıt para ya da kredi kartıyla ödenir.' },
          { label: 'Abonman yükleme', text: 'Kartı vizeli olan yolcu abonman seçeneğinden abonmanını yükler. Ayrıca kimlik doğrulaması gerekmez.' },
          { label: 'Bakiye sorgulama', text: 'Kartta kalan bakiye ekranda görüntülenir.' },
          { label: 'Yeni kart', text: 'Kartı olmayan yolcu kiosktan tam kart satın alır. Kart haznesi 500 kart alıyor.' },
        ],
      },
      {
        heading: 'Ödeme ve kart okuma',
        list: [
          { label: 'Kâğıt para', text: 'Kiosk tüm Türk lirası banknotlarını kabul edebiliyor. Hangi banknotların kabul edileceği ayarlardan seçiliyor.' },
          { label: 'Kredi kartı', text: 'Temassız, çipli ve manyetik şeritli kartlarla ödeme alınıyor.' },
          { label: 'Para üstü', text: 'Kiosklar para üstü verebilecek donanıma sahip. Belediye bu özelliği şu an kapalı tutuyor.' },
          { label: 'Konya Kart okuma', text: 'Kart motorsuz bir hazneye bırakılıp temassız okunuyor. Kartla yapılan işlemler kioskun içindeki SAM güvenlik modülüyle korunuyor.' },
        ],
      },
      {
        heading: 'Operatör ekranı ve kasa yönetimi',
        paragraphs: [
          'Operatör kioska arkadaki kilitli kapıdan erişir ve kendi ekranından işlem yapar. Operatör giriş yaptığında, o sırada süren bir yolcu işlemi yoksa ön ekran durdurulur.',
        ],
        list: [
          { label: 'Gün sonu', text: 'Gün sonu raporu operatör ekranından alınır.' },
          { label: 'Kasa boşaltma', text: 'Para kasaları boşaltılır ve sayım fişi yazdırılır.' },
          { label: 'Alarm kurma', text: 'Kioskun alarmı operatör ekranından kurulur.' },
        ],
      },
      {
        heading: 'Güvenlik ve uzaktan izleme',
        list: [
          { label: 'Alarm', text: 'Vandalizm, su baskını, yüksek sıcaklık ve hırsızlık girişiminde alarm verir.' },
          { label: 'Kamera', text: 'Kameralar karanlıkta da görüntü alıyor ve gece gündüz 7/24 çalışıyor.' },
          { label: 'Arıza bildirimi', text: 'Arıza ve benzeri durumlar bildirim sistemiyle ilgili ekibe iletiliyor.' },
        ],
      },
      {
        heading: 'Aydınlatma ve reklam',
        list: [
          { label: 'Gece gündüz aydınlatma', text: 'Kabin aydınlatmasının açılıp kapanma saatleri takvimden ayarlanıyor.' },
          { label: 'Reklam', text: 'Kiosklar ana ekranda reklam oynatıyor.' },
        ],
      },
      {
        heading: 'Kurumunuz için kart dolum kiosku',
        paragraphs: [
          'Kullandığınız kart sistemini, kurulum noktalarını ve cihaz sayısını iletin. Konya Kart projesindeki deneyimimizle ödeme birimlerini, kabin tasarımını ve operatör süreçlerini kurumunuza göre birlikte belirleyelim.',
        ],
        list: [{ text: 'Ulaşım kartı dolum kiosku: özellikler ve teknik bilgiler', href: '/kullanim-alanlari/ulasim-karti-dolum-kiosku/' }],
      },
    ],
    faq: [
      { q: 'Konya Kart dolum kiosklarını kim üretti?', a: "Kioskları, dış mekân kabinlerini ve yazılımını Vectanom (Express Bilgisayar) üretti ve kurdu. Bakım ve servisi Express Bilgisayar'ın yazılım şirketi Gora Yazılım yürütüyor." },
      { q: 'Bu projede kaç Konya Kart kiosku kuruldu?', a: "Nisan 2022'deki test cihazının ardından Eylül 2023'te 30, Ekim 2024'te 28 olmak üzere 58 kiosk kuruldu." },
      { q: 'Konya Kart kiosklarında hangi işlemler yapılır?', a: 'Bakiye yükleme, abonman yükleme, bakiye sorgulama ve yeni kart satın alma.' },
      { q: 'Konya Kart kiosklarına bozuk para atılır mı?', a: 'Seri kurulumdaki kiosklarda bozuk para birimi yok. Ödeme kâğıt para ve kredi kartıyla yapılıyor.' },
      { q: 'Konya Kart kioskları para üstü verir mi?', a: 'Kiosklar para üstü verebilecek donanıma sahip; ancak belediye bu özelliği şu an kapalı tutuyor.' },
      { q: 'Konya Kart kiosklarına abonman yüklemek için kimlik gerekir mi?', a: 'Hayır. Kartı vizeli olan yolcu, abonman seçeneğinden kimlik doğrulaması olmadan yükleme yapabiliyor.' },
      { q: 'Konya Kart kiosklarının bulunduğu yerler nereler?', a: 'Kioskların çoğu toplu taşıma duraklarında; Bosna Hersek, Eski Sanayi, Kültürpark ve Kayalı Park durakları en yoğun noktalar arasında.' },
    ],
  },
  { slug: 'koski', name: 'KOSKİ', group: 'referanslar/koski', note: 'Nakit ve kredi kartlı su bedeli tahsilat kioskları' },
  { slug: 'kaski', name: 'KASKİ', group: 'referanslar/kaski', note: 'Kahramanmaraş tahsilat kiosku' },
  { slug: 'sivas-belediyesi', name: 'Sivas Belediyesi', group: 'referanslar/sivas-belediyesi', note: 'Nakit ve kredi kartlı tahsilat kioskları' },
  { slug: 'igdir-belediyesi', name: 'Iğdır Belediyesi', group: 'referanslar/igdir-belediyesi', note: 'Kiosk tahsilat sistemi', logoBg: 'dark' },
  { slug: 'necmettin-erbakan-universitesi', name: 'Necmettin Erbakan Üniversitesi', group: 'referanslar/necmettin-erbakan-universitesi', note: 'Üniversite kiosk projesi' },
  { slug: 'cukurova-havalimani', name: 'Çukurova Uluslararası Havalimanı', group: 'referanslar/cukurova-havalimani', note: 'Havalimanı kiosk projesi' },
];
