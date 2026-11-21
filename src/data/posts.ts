import type { Post } from '../types';
export type { Post } from '../types';

/**
 * Blog yazıları: her kayıt /blog/<slug>/ adresinde bir sayfa olur (src/pages/blog/[slug].astro).
 * Bölümler "nedir" sayfalarıyla aynı biçimdedir (ContentSection); SSS verilirse Google için işaretlenir.
 * Kaldırılan yazılar: kiosk-nedir-nerelerde-kullanilir → /kiosk-nedir/, belediyeler-icin-kiosk → belediye sayfası,
 * kafe-kiosk-nasil-secilir → /restoran-siparis-kiosku-nedir/ (hepsi public/_redirects içinde 301).
 */
export const posts: Post[] = [
  {
    slug: 'kiosk-mu-tablet-mi',
    title: 'Kiosk mu Tablet mi? İşletmeniz İçin Doğru Seçim – Vectanom',
    description: 'Kiosk mu tablet mi? Ekran, dayanıklılık, yazıcı ve POS entegrasyonu, kilit modu ve maliyet açısından karşılaştırma; tabletin yettiği ve yetmediği durumlar.',
    h1: 'Kiosk mu Tablet mi? İşletmeniz İçin Hangisi Doğru?',
    intro: 'Sipariş, kayıt ya da bilgilendirme için ekran koymaya karar verdiğinizde ilk soru şudur: elinizdeki tablet bir standla yeter mi, yoksa gerçek bir kiosk mu almalısınız? Cevap işin yoğunluğuna, cihazın nerede duracağına ve ekrana neyin bağlanacağına göre değişir. Bu yazıda ikisini aynı ölçütlerle karşılaştırıyor, tabletin yettiği ve yetmediği durumları açıkça söylüyoruz.',
    summary: 'Kısaca: Masada menü göstermek, personel giriş çıkışı ya da düşük yoğunluklu bir kayıt noktası için kilitli standa konan tablet yeter. Fiş yazıcısı, POS ya da nakit ünitesi bağlanacaksa, cihaz gün boyu gözetimsiz çalışacaksa ya da dış mekânda duracaksa kiosk gerekir.',
    published: '2026-11-21',
    modified: '2026-11-21',
    photos: ['urunler/yatay-kiosk'],
    photoAlt: 'Yatay masa tipi desk kiosk: tablet standının yerine geçen ayaklı dokunmatik kiosk',
    product: 'yatay-kiosk',
    sections: [
      {
        heading: 'Kısa cevap: kim tableti, kim kiosku seçmeli?',
        paragraphs: ['Önce işi tanımlayın: ekrana kim, ne sıklıkla ve ne için dokunacak? Cevap üç gruba ayrılır.'],
        list: [
          { label: 'Tablet yeter', text: 'masada menü ya da katalog gösterme, personel devam kontrolü, ziyaretçi kaydı, günde birkaç kişinin doldurduğu anket ya da form, bir fikri denemek' },
          { label: 'Kiosk gerekir', text: 'sipariş ve ödeme, sıra alma, fatura ya da kart dolumu gibi fiş yazıcısı, POS, barkod okuyucu ya da nakit ünitesi isteyen işler; kuyruk oluşan yoğun noktalar; dış mekân ve gözetimsiz alanlar' },
          { label: 'Kararsızsanız', text: 'yoğunluğa değil, bağlanacak donanıma bakın. Yazıcı ya da POS varsa kiosk; yoksa tabletle başlayıp kullanımı ölçebilirsiniz' },
        ],
      },
      {
        heading: '"Tablet kiosk" ne demek?',
        paragraphs: [
          'Arama sonuçlarında "tablet kiosk" diye geçen ürünlerin çoğu bir cihaz değil, üç parçanın birleşimidir: sıradan bir tablet, onu sabitleyen kilitli bir stand ya da muhafaza ve tableti tek uygulamaya kilitleyen bir kiosk modu yazılımı. Bu üçlü, hafif işler için makul bir çözümdür.',
          'Kiosk ise ekranı, bilgisayarı ve çevre birimlerini tek bir metal gövdede toplayan, herkesin dokunacağı ve gözetimsiz duracağı ortam için üretilen cihazdır. Fark "ekran var mı" sorusunda değil, cihazın neye dayanıp neyi bağlayabildiğindedir.',
        ],
        list: [{ text: 'Kiosk nedir? Çeşitleri ve kullanım alanları', href: '/kiosk-nedir/' }],
      },
      {
        heading: 'Kiosk ile tablet arasındaki 8 fark',
        paragraphs: ['Aynı ölçütlerle yan yana koyunca fark netleşir:'],
        table: {
          head: ['Ölçüt', 'Tablet ve stand', 'Kiosk'],
          rows: [
            ['Ekran', '8–13 inç; yakından tek kişi görür, parlak ortamda okunması zorlaşır', '21, 24 ya da 32 inç; uzaktan okunur, birden fazla kişi aynı anda görür'],
            ['Dokunmatik dayanımı', 'Tüketici camı; anahtar, yüzük ve sürekli dokunmada çizilir', 'Endüstriyel dokunmatik panel ve dayanıklı ön cam; yoğun kullanım için tasarlanır'],
            ['Sürekli çalışma', 'Pil ve ısınma sınırı var; sürekli şarjda kalmak pili yıpratır', 'Pil yok, şebekeden beslenir; gün boyu kesintisiz çalışmaya uygun donanım'],
            ['Yazıcı, POS, okuyucu', 'Harici eklenti ister: ayrı gövde, ayrı kablo; her uygulama her yazıcıyı tanımaz', 'Fiş yazıcısı, POS, barkod/QR ve kart okuyucu, nakit ünitesi tek gövdenin içinde'],
            ['Yazılım ve kilit', 'Kiosk modu uygulamasıyla tek uygulamaya kilitlenir; sistem güncellemesi kilidi bozabilir', 'Kilitli kiosk arayüzü ve uzaktan yönetim; Windows, Linux ya da Android ile teslim edilir'],
            ['Gövde ve güvenlik', 'Stand kilitli olsa da tablet sökülebilir; kablolar açıkta kalır', 'Zemine sabitlenen metal gövde, kilitli servis kapağı, gizli kablo geçişi'],
            ['Ömür ve servis', 'Tüketici ürünü; model birkaç yılda değişir, parça bulmak zorlaşır', 'Modüler parçalar; 2 yıl garanti, isteğe bağlı uzatılmış garanti ve bakım-destek'],
            ['Başlangıç maliyeti', 'Düşük', 'Daha yüksek; ama stand, yazıcı, kilit ve değişim maliyeti baştan içinde'],
          ],
        },
      },
      {
        heading: 'Tabletin yettiği durumlar',
        paragraphs: ['Her işe kiosk gerekmez. Şu durumlarda kilitli standa konan bir tablet işinizi görür:'],
        list: [
          { label: 'Masada menü ya da katalog', text: 'müşteri oturduğu yerden bakar; sipariş garsonla ya da QR ile tamamlanır' },
          { label: 'Personel devam kontrolü', text: 'kapıya konan tablet personel kartını ya da QR kodunu okutur; yazıcı gerekmez' },
          { label: 'Ziyaretçi kaydı ve anket', text: 'resepsiyonda personel gözetiminde, günde sınırlı sayıda kullanım' },
          { label: 'Deneme dönemi', text: 'self servisin işletmenize uyup uymadığını görmek için tabletle başlamak mantıklıdır; iş büyüyünce kioska geçilir' },
        ],
      },
      {
        heading: 'Tabletin yetmediği durumlar',
        paragraphs: ['Aşağıdakilerden biri varsa tablet kısa sürede sorun çıkarır:'],
        list: [
          { label: 'Fiş, sıra numarası ya da bilet basılacaksa', text: 'yazıcı tek gövdede olmalı; harici yazıcı kablo, kâğıt değişimi ve uyumluluk sorunu demektir' },
          { label: 'Ödeme alınacaksa', text: 'POS, temassız okuyucu ya da nakit ünitesi tablete güvenli biçimde bağlanmaz; ödeme kiosku bunun için tasarlanır' },
          { label: 'Kuyruk oluşuyorsa', text: 'küçük ekranda sipariş yavaş ilerler; yoğun saatte self servisin amacı boşa çıkar' },
          { label: 'Cihaz gözetimsiz duracaksa', text: 'AVM, hastane, belediye ve kampüs gibi herkese açık alanlarda darbe, hırsızlık ve kurcalama riski vardır' },
          { label: 'Dış mekân ya da güneş alan vitrin', text: 'tablet ekranı güneşte okunmaz, sıcakta kendini korumak için yavaşlar ya da kapanır; dış mekân kioskları kabinli üretilir' },
          { label: 'Kurumsal entegrasyon', text: 'HBYS, tahsilat ya da kart sistemine bağlanan uygulamalar çoğu zaman Windows ya da Linux üzerinde çalışır' },
        ],
      },
      {
        heading: 'Maliyet: tablet gerçekten ucuz mu?',
        paragraphs: [
          'Tabletin etiket fiyatı düşüktür; ancak gerçek maliyet kullanım süresine yayılır. Kilitli stand, yazıcı eklentisi, koruyucu cam, pil ve ekran değişimi, varsa kiosk modu yazılımının aboneliği ve birkaç yılda bir yenileme üst üste gelince aradaki fark kapanır.',
          'Kioskta bu kalemler baştan tek gövdenin içindedir. Ekran boyutunu ve çevre birimlerini ihtiyaca göre seçerseniz gereksiz donanım için ödeme yapmazsınız.',
        ],
        list: [{ text: 'Bütçeyi gereksiz donanım eklemeden kurmak için: uygun maliyetli kiosk nasıl seçilir?', href: '/uygun-maliyetli-kiosk/' }],
      },
      {
        heading: 'Kiosk alırsanız: ekran boyutu ve gövde nasıl seçilir?',
        paragraphs: ['Kiosk kararı verdiyseniz iki seçim kalır: ekran ve gövde.'],
        list: [
          { label: '21 inç', text: 'tek kişinin yakından kullandığı sipariş ve kayıt noktaları, dar alanlar' },
          { label: '24 inç', text: 'çoğu kafe, kantin ve danışma noktası için standart boyut' },
          { label: '32 inç', text: 'uzaktan da okunması istenen bilgilendirme ekranları ve geniş menüler' },
          { label: 'Yatay masa tipi (desk)', text: 'görsel menü ve harita gibi geniş içerikler; danışma bankosu ve sipariş noktası', href: '/urunler/yatay-kiosk/' },
          { label: 'Dikey', text: 'liste ve form ağırlıklı ekranlar, sıra alma, bilgilendirme', href: '/urunler/dikey-kiosk/' },
          { label: 'Totem', text: 'girişler, AVM ve kampüs yönlendirmesi', href: '/urunler/totem-kiosk/' },
        ],
      },
      {
        heading: 'Yazılım: ikisinde de kilit modu şart',
        paragraphs: [
          'Hangi cihazı seçerseniz seçin, kullanıcı ekrandan çıkıp başka uygulamaya geçememeli, ayarlara ulaşamamalı ve cihaz kapanıp açıldığında arayüz kendiliğinden gelmelidir. Tablette bunu bir kiosk modu uygulaması sağlar; işletim sistemi güncellemelerinden sonra ayarların yeniden kontrol edilmesi gerekir.',
          'Kiosklarımız Windows, Linux (Debian) ya da Android ile kilitli arayüz kurulu olarak teslim edilir; menü ve içerik uzaktan güncellenir. Mevcut adisyon, tahsilat ya da sıra yazılımınızla entegrasyonu baştan birlikte netleştiririz.',
        ],
      },
      {
        heading: 'Karar vermeden önce 6 soru',
        ordered: true,
        list: [
          'Ekrana fiş yazıcısı, POS, okuyucu ya da nakit ünitesi bağlanacak mı?',
          'Cihaz günde kaç saat ve kaç kişi tarafından kullanılacak?',
          'Cihaz personel gözetiminde mi, yoksa herkese açık bir alanda gözetimsiz mi duracak?',
          'İç mekânda mı, dış mekânda ya da güneş alan bir vitrinde mi?',
          'Arayüz hangi sisteme bağlanacak: adisyon, HBYS, tahsilat, kart dolum?',
          'Üç yıl sonra cihaz hâlâ çalışıyor olacak mı; yedek parça ve servisi kim sağlayacak?',
        ],
        after: ['İlk sorunun cevabı "evet" ise seçim bitmiştir: kiosk. Diğer sorularda yoğun, gözetimsiz, dış mekân ya da entegrasyon cevaplarından iki ya da daha fazlası varsa yine kiosk; aksi hâlde tabletle başlayabilirsiniz.'],
      },
      {
        heading: 'Deneyimimiz: tabletin olamayacağı yerler',
        paragraphs: [
          "Konya Büyükşehir Belediyesi için kurduğumuz 58 Konya Kart dolum kiosku dış mekân kabininde, kâğıt para ve kredi kartı kabul ederek 7/24 çalışıyor; nakit ünitesi, yazıcı ve bilgisayar tek gövdede. Bu iş tabletle yapılamazdı. KOSKİ, Sivas ve Iğdır belediyelerindeki tahsilat kioskları için de aynı şey geçerli.",
          'Buna karşılık kafe ve restoranlarda yatay masa tipi sipariş kiosku öneriyoruz; çünkü fiş yazıcısı ve POS tek gövdede olmalı, ekran da görsel menü için geniş olmalı. Yalnızca masada menü göstermek isteyen işletmeye ise kiosk önermeyiz: tablet yeter.',
        ],
        list: [
          { text: 'Konya Kart dolum kiosku projesi: 58 cihaz, üç etap', href: '/referanslar/konya-buyuksehir-belediyesi/' },
          { text: 'Self servis sipariş kiosku: kafe ve restoran kurulumları', href: '/kullanim-alanlari/self-servis-siparis-kiosku/' },
          { text: 'Restoran sipariş kiosku nedir, nasıl seçilir?', href: '/restoran-siparis-kiosku-nedir/' },
        ],
        after: ['İşinizi, günlük kullanıcı sayısını ve bağlanacak donanımı yazın; tabletin yeteceği bir işse bunu söyleriz, kiosk gerekiyorsa ekran boyutu ve gövde önerisiyle teklif hazırlarız.'],
      },
    ],
    related: [
      { label: 'Kiosk Nedir?', href: '/kiosk-nedir/' },
      { label: 'Self Servis Kiosk Nedir?', href: '/self-servis-kiosk-nedir/' },
      { label: 'Uygun Maliyetli Kiosk', href: '/uygun-maliyetli-kiosk/' },
      { label: 'Yatay Masa Tipi (Desk) Kiosk', href: '/urunler/yatay-kiosk/' },
    ],
    faq: [
      { q: 'Tablet kiosk nedir?', a: 'Sıradan bir tabletin kilitli bir stand ya da muhafazaya yerleştirilip kiosk modu yazılımıyla tek uygulamaya kilitlenmiş hâlidir. Hafif işler için uygundur; yazıcı, POS ve nakit ünitesi gibi donanımları tek gövdede taşıyamaz.' },
      { q: 'Tableti kiosk olarak kullanabilir miyim?', a: 'Evet. Masada menü, personel devam kontrolü ve ziyaretçi kaydı gibi düşük yoğunluklu, gözetimli işler için kilitli stand ve kiosk modu uygulaması yeterlidir. Sipariş, ödeme ve sıra alma gibi işlerde kiosk gerekir.' },
      { q: 'Tablet kiosk fiş yazıcısına bağlanır mı?', a: 'Harici bir yazıcı Bluetooth ya da kabloyla bağlanabilir; ancak ayrı gövde, ayrı güç ve uygulama uyumluluğu gerekir. Kioskta yazıcı gövdenin içindedir ve arayüzle birlikte çalışır hâlde teslim edilir.' },
      { q: 'Kiosk modu nedir?', a: 'Cihazı tek bir uygulamaya kilitleyen, ayarlara ve diğer uygulamalara erişimi kapatan çalışma biçimidir. Tablette bir uygulamayla sağlanır; kiosklarda arayüz kilitli olarak kurulu gelir.' },
      { q: 'Kiosk mu tablet mi daha ucuz?', a: 'Etiket fiyatında tablet ucuzdur. Stand, kilit, yazıcı eklentisi, kırılma ve pil değişimi ile birkaç yılda bir yenileme eklenince fark kapanır. Yazıcı ya da POS gerekiyorsa kiosk çoğu zaman baştan daha ekonomik çıkar.' },
      { q: 'Kiosk kaç yıl kullanılır?', a: 'Kiosklarımız 2 yıl garantilidir; isteğe bağlı uzatılmış garanti ve bakım-destek sözleşmesiyle kullanım süresi uzatılır. Modüler parçaları değiştirilebildiği için tablet gibi bütünüyle yenilenmesi gerekmez.', link: { href: '/hakkimizda/', label: 'Garanti ve destek' } },
      { q: 'Hangi işletmeler tabletle idare eder?', a: 'Masada menü gösteren küçük kafeler, personel giriş çıkışı için kapıya ekran koyan işyerleri ve resepsiyonda gözetimli ziyaretçi kaydı yapan ofisler. Kuyruk oluşan, ödeme alan ya da gözetimsiz noktalar kiosk ister.' },
    ],
  },
];
