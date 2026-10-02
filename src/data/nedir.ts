import type { Nedir } from '../types';
export type { Nedir } from '../types';

/**
 * "... nedir?" sayfaları: her kayıt kök adreste /<slug>/ sayfası olur (src/pages/[slug].astro).
 * Yeni sayfa eklemek için buraya bir kayıt eklemek yeterlidir; slug "-nedir" ile bitmelidir.
 * product: products.ts slug'ı (sayfada tanıtılan ürünümüz, fotoğrafları da ondan gelir).
 * useCases: useCases.ts slug'ları. related: diğer nedir sayfalarının slug'ları.
 * published/modified: Google'a bildirilen tarihler; içeriği önemli ölçüde değiştirince modified'ı güncelleyin.
 * Yazar tüm sayfalarda generalInformation.author'dır.
 * Rol ayrımı: bu sayfalar tanımı ve bilgiyi anlatır; model ve fiyat için ürün/kullanım alanı sayfalarına yönlendirir.
 */
export const nedirPages: Nedir[] = [
  {
    slug: 'self-servis-kiosk-nedir',
    title: 'Self Servis Kiosk Nedir? Nasıl Çalışır?',
    description: 'Self servis kiosk nedir, nasıl çalışır, hangi türleri vardır? Kullanım alanları, avantajları ve doğru self servis kiosk seçimi için rehber.',
    h1: 'Self Servis Kiosk Nedir?',
    intro: 'Self servis kiosk, müşterinin personele ihtiyaç duymadan kendi işlemini dokunmatik ekran üzerinden tamamlamasını sağlayan cihazdır. Sipariş vermek, ödeme yapmak, sıra numarası almak ya da bilgi sorgulamak gibi işlemler müşterinin kendi kontrolünde ve kuyruğa girmeden yapılır.',
    summary: 'Kısaca: Self servis kiosk = dokunmatik ekranlı, personelsiz işlem noktası. Sipariş, tahsilat, sıramatik, bilgilendirme ve kitap iadesi gibi tekrarlayan işlemleri üstlenir; kuyruğu ve personel yükünü azaltır.',
    published: '2026-10-02',
    modified: '2026-10-02',
    photoAlt: 'Self servis kiosk, ön görünüm',
    sections: [
      {
        heading: 'Self servis kiosk nasıl çalışır?',
        paragraphs: [
          'Müşteri dokunmatik ekrandan ilgili işlemi seçer, adımları takip eder ve işlemi bitirir. Arka planda çalışan yazılım işlemi kaydeder; gerekirse yazıcıdan fiş ya da sıra numarası çıkar, POS veya QR ile ödeme alınır.',
          'Kiosk yazılımı yalnızca tanımlı işlemlere izin verecek şekilde kilitlenir. Bu sayede cihaz gün boyu açık kalabilir ve gözetimsiz çalışabilir.',
          'Bir kiosk üç parçadan oluşur: müşterinin dokunduğu ekran, işlemleri yürüten bilgisayar ve yazılım, işleme göre eklenen çevre birimleri (yazıcı, POS, QR veya barkod okuyucu).',
        ],
      },
      {
        heading: 'Self servis kiosk çeşitleri',
        paragraphs: ['"Self servis kiosk" geniş bir kavramdır; yaptığı işe göre farklı türleri vardır:'],
        list: [
          { text: 'Sipariş kiosku: kafe, restoran ve fast food işletmelerinde menüden ürün seçip sipariş verme', href: '/restoran-siparis-kiosku-nedir/' },
          { text: 'Sıramatik kiosk: belediye, hastane ve kurumlarda hizmet seçip sıra numarası alma', href: '/urunler/siramatik-kiosk/' },
          { text: 'Tahsilat ve ödeme kiosku: nakit ve kredi kartlı fatura, bedel ve borç ödeme', href: '/kullanim-alanlari/belediye-siramatik-kiosku/' },
          { text: 'Bilgilendirme ve haritalama kiosku: AVM, kampüs ve kurumlarda yönlendirme', href: '/urunler/haritalama-kiosk/' },
          { text: 'Kütüphane kiosku: kitap ödünç alma ve iade', href: '/urunler/kutuphane-kiosk/' },
        ],
      },
      {
        heading: 'Self servis kiosk nerelerde kullanılır?',
        list: [
          'Kafe, restoran ve fast food işletmelerinde sipariş almak için',
          'Büfe ve hızlı satış noktalarında kuyruğu azaltmak için',
          'Belediye ve kamu kurumlarında sıra numarası alma ve tahsilat için',
          'Kütüphanelerde kitap ödünç alma ve iade için',
          'Hastane, AVM, üniversite ve havalimanı gibi yerlerde bilgilendirme ve yönlendirme için',
        ],
      },
      {
        heading: 'Gerçek bir örnek: belediye tahsilat kioskları',
        paragraphs: [
          'Belediyelerde vatandaşlar su, vergi ve benzeri bedelleri gişede sıra beklemeden kiosktan ödeyebilir. Konya Büyükşehir Belediyesi, KOSKİ, KASKİ, Sivas ve Iğdır belediyeleri için tahsilat kioskları ürettik. Yerinde çekilmiş fotoğraflar ve proje notları için referanslar sayfamıza bakabilirsiniz.',
        ],
        list: [{ text: 'Referanslarımızı inceleyin', href: '/referanslar/' }],
      },
      {
        heading: 'Self servis kiosk kullanmanın avantajları',
        list: [
          'Yoğun saatlerde sıra bekleme süresi kısalır',
          'Personel, tekrarlayan işlem yerine hazırlık ve müşteri hizmetine odaklanır',
          'Müşteri seçimini kendisi gördüğü için sipariş hataları azalır',
          'Menü, fiyat ve duyurular tek noktadan anında güncellenir',
          'Cihaz vardiyadan bağımsız olarak hizmet verir',
        ],
      },
      {
        heading: 'Kiosk, tablet ve normal bilgisayardan nasıl ayrılır?',
        paragraphs: [
          'Tablet ya da bilgisayar, herkesin dokunacağı ve çoğu zaman gözetimsiz duracak bir ortam için tasarlanmamıştır. Kiosk ise sağlam metal gövdesi, sabit duruşu ve kilitli yazılımıyla bu işe göre hazırlanır; yazıcı, POS ve okuyucuları tek gövdede taşıyabilir.',
        ],
      },
      {
        heading: 'Doğru self servis kiosk nasıl seçilir?',
        list: [
          'Ne için kullanılacağını belirleyin: sipariş, ödeme, sıramatik ya da bilgilendirme',
          'Ekran boyutunu ve yönünü cihazın duracağı alana göre seçin',
          'Yazıcı, POS, QR okuyucu gibi gerçekten ihtiyaç duyduğunuz çevre birimlerini ekleyin',
          'Kullandığınız adisyon ya da otomasyon programıyla uyumunu sorun',
          'Marka renklerinize uygun tasarım ve satış sonrası destek seçeneklerini değerlendirin',
        ],
      },
    ],
    product: 'self-kiosk',
    useCases: ['self-servis-siparis-kiosku', 'belediye-siramatik-kiosku'],
    related: ['restoran-siparis-kiosku-nedir'],
    faq: [
      { q: 'Self servis kiosk ne demek?', a: 'Müşterinin personele ihtiyaç duymadan, dokunmatik ekran üzerinden kendi işlemini yaptığı cihaz demektir.' },
      { q: 'Self servis kiosk ile sipariş kiosku aynı şey mi?', a: 'Sipariş kiosku, self servis kioskun yemek ve içecek siparişi için hazırlanmış türüdür. Self servis kiosk ise sıramatik, tahsilat ve bilgilendirme gibi diğer işlemleri de kapsayan geniş bir kavramdır.' },
      { q: 'Self servis kiosk hangi işletmelere uygundur?', a: 'Yoğunlukta sıra oluşan ve işlemi müşterinin kendisinin yapabileceği kafe, restoran, büfe, belediye, kütüphane gibi her işletmeye uygundur.' },
      { q: 'Self servis kiosk için internet bağlantısı gerekir mi?', a: 'Sipariş, ödeme ve sorgulama gibi işlemlerin çoğu bir sisteme bağlanmayı gerektirdiği için genellikle internet ya da ağ bağlantısı gerekir. Projenize göre ayrıntıyı birlikte netleştiririz.' },
      { q: 'Self servis kiosk hangi ödeme yöntemlerini destekler?', a: 'Kredi kartı POS, QR ödeme ve projeye göre nakit ödeme ünitesi eklenebilir. Hangi yöntemin kullanılacağı ihtiyaca ve işletmeye göre belirlenir.' },
      { q: 'Self servis kiosk fiyatı neye göre değişir?', a: 'Ekran boyutuna, yazıcı, POS ve QR okuyucu gibi donanımlara ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'restoran-siparis-kiosku-nedir',
    title: 'Restoran Sipariş Kiosku Nedir? Avantajları',
    description: 'Restoran sipariş kiosku nedir, nasıl çalışır? Kafe, restoran ve fast food için self servis sipariş kioskunun avantajları ve seçim kriterleri.',
    h1: 'Restoran Sipariş Kiosku Nedir?',
    intro: 'Restoran sipariş kiosku, müşterilerin dokunmatik ekran üzerinden menüyü incelemesini, ürünlerini seçmesini ve siparişini kendi başına oluşturmasını sağlayan self servis cihazdır. Restoran, kafe, fast food işletmeleri ve yemek katlarında kasadaki yoğunluğu azaltmak için kullanılır.',
    summary: 'Kısaca: Restoran sipariş kiosku, kasa yerine müşterinin siparişi kendisinin girdiği dokunmatik ekrandır. Sipariş mutfağa iletilir; ödeme POS veya QR ile alınır, fiş yazıcıdan çıkar.',
    published: '2026-10-02',
    modified: '2026-10-02',
    photoAlt: 'Restoran ve kafe için self servis sipariş kiosku',
    sections: [
      {
        heading: 'Restoran sipariş kiosku nasıl çalışır?',
        paragraphs: [
          'Müşteri görsel menüden ürünleri seçer, porsiyon ya da ek ürün tercihlerini belirler ve sepetini onaylar. Ödeme POS veya QR ile alınır, fiş yazıcıdan çıkar. Sipariş mutfağa ya da adisyon sistemine iletilir.',
        ],
      },
      {
        heading: 'Müşteri kioskta siparişi nasıl verir?',
        list: [
          'Ekrandan kategori seçilir (ör. burger, içecek, tatlı)',
          'Ürün seçilir; boyut, ekstra ya da çıkarılacak içerik belirlenir',
          'Sepet gözden geçirilir, varsa ek ürün önerisi görülür',
          'Ödeme yöntemi seçilip ödeme yapılır',
          'Fiş ya da sıra numarası alınır; sipariş hazırlanır',
        ],
      },
      {
        heading: 'Restoranlar için avantajları',
        list: [
          'Yoğun saatlerde kasa kuyruğu azalır, sipariş hızlanır',
          'Ürün görselleri ve ek ürün önerileriyle sepet tutarı artabilir',
          'Müşteri siparişini kendisi girdiği için sipariş hataları azalır',
          'Kasadaki personel hazırlığa ve servise yönlendirilebilir',
          'Menü ve kampanyalar anında güncellenir',
        ],
      },
      {
        heading: 'Sipariş kiosku ile kasa arasındaki fark',
        paragraphs: [
          'Kasada bir kişi aynı anda tek müşteriyle ilgilenebilir. Sipariş kioskları ise birden fazla müşterinin aynı anda sipariş vermesine izin verir; bu da özellikle öğle ve akşam yoğunluğunda bekleme süresini düşürür. Kasa tamamen kalkmak zorunda değildir; birçok işletme kiosku kasayla birlikte kullanır.',
        ],
      },
      {
        heading: 'Hangi özellikler aranmalı?',
        list: [
          'Görsel menü ve kolay sipariş akışı',
          'Sesli sipariş seçeneği',
          'POS ve QR ödeme entegrasyonu',
          'Fiş yazıcısı',
          'Mutfak ve adisyon sistemiyle entegrasyon imkânı',
        ],
      },
      {
        heading: 'Kiosk kurmadan önce hazırlık',
        list: [
          'Menü, ürün fotoğrafları ve fiyat listesi güncel ve eksiksiz olmalı',
          'Ürün seçenekleri (boyut, ekstra, çıkarılacak içerik) önceden belirlenmeli',
          'Kullandığınız adisyon programı ve entegrasyon ihtiyacı netleşmeli',
          'Kioskun duracağı alan, elektrik ve ağ bağlantısı hazırlanmalı',
        ],
      },
      {
        heading: 'Kimler için uygundur?',
        paragraphs: ['Kafe ve restoranlar, fast food ve büfeler, pastane ve kahve zincirleri ile yemek katları sipariş kioskundan en çok fayda sağlayan işletmelerdir.'],
        list: [
          { text: 'Model, kurulum ve teklif için: Self Servis Sipariş Kiosku kullanım alanı sayfası', href: '/kullanim-alanlari/self-servis-siparis-kiosku/' },
          { text: 'Genel kavram için: Self Servis Kiosk Nedir?', href: '/self-servis-kiosk-nedir/' },
        ],
      },
    ],
    product: 'siparis-kiosk',
    useCases: ['self-servis-siparis-kiosku'],
    related: ['self-servis-kiosk-nedir'],
    faq: [
      { q: 'Restoran sipariş kiosku nedir?', a: 'Müşterinin menüden ürün seçip siparişini ve ödemesini kendisinin tamamladığı dokunmatik ekranlı cihazdır.' },
      { q: 'Sipariş kiosku mevcut adisyon programıma bağlanır mı?', a: 'Kullandığınız programın entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'Küçük bir kafe için sipariş kiosku mantıklı mı?', a: 'Yoğun saatlerde kuyruk oluşuyorsa küçük işletmeler için de faydalıdır. Gereksiz donanım eklemeden ihtiyaca göre yapılandırma mümkündür.' },
      { q: 'Sipariş kiosku sesli sipariş destekler mi?', a: 'Evet, sesli sipariş seçeneği sunulur. Kullanım ihtiyacınıza göre birlikte yapılandırırız.' },
      { q: 'Sipariş kiosku hangi ödeme yöntemlerini destekler?', a: 'POS ve QR ödeme entegrasyonu seçenek olarak sunulur; fiş yazıcısı eklenebilir.' },
      { q: 'Menüyü ve fiyatları kioskta nasıl güncellerim?', a: 'Menü ve kampanyalar kioskta anında güncellenebilir. Güncelleme yöntemi kullanılan yazılıma göre birlikte netleştirilir.' },
    ],
  },
];
