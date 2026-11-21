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
    slug: 'kiosk-nedir',
    title: 'Kiosk Nedir? Çeşitleri ve Kullanım Alanları – Vectanom',
    description: 'Kiosk nedir, ne işe yarar, çeşitleri nelerdir? Sıramatik, sipariş, tahsilat ve bilgi kioskları, bileşenleri ve kullanım alanları; gerçek örneklerle.',
    h1: 'Kiosk Nedir?',
    intro: 'Kiosk, kullanıcının personel yardımı almadan dokunmatik ekran üzerinden sıra numarası aldığı, sipariş verdiği, ödeme yaptığı ya da bilgi sorguladığı self servis cihazdır. Belediye, hastane, restoran, kütüphane ve havalimanı gibi kalabalık yerlerde kuyruğu kısaltmak ve işlemi hızlandırmak için kullanılır.',
    summary: 'Kısaca: Kiosk = dokunmatik ekran + kilitli yazılım + işe göre eklenen yazıcı, kart okuyucu ya da POS. Yaptığı işe göre sıramatik, sipariş, tahsilat, bilgilendirme ve kart dolum kiosku gibi türleri vardır.',
    published: '2026-11-21',
    modified: '2026-11-21',
    photoAlt: 'Ayaklı dikey dokunmatik kiosk, 32 inç ekran',
    sections: [
      {
        heading: 'Kiosk ne demek? Kelimenin kökeni ve üç anlamı',
        paragraphs: [
          'Kiosk kelimesi Türkçe "köşk" sözcüğünden Avrupa dillerine geçmiştir; köşk de Farsça kūşk kelimesinden gelir. Kiosk bir kısaltma değildir, bu yüzden "kiosk açılımı" diye bir şey yoktur. Kelime bugün üç ayrı anlamda kullanılır:',
        ],
        list: [
          { label: 'Mimaride', text: 'bahçe köşkü; açık ya da yarı açık küçük yapı.' },
          { label: "Avrupa'da büfe", text: 'gazete, sigara ve atıştırmalık satan küçük satış noktası. "Kiosk büfe" ve "kiosk mağaza" aramaları bu anlama işaret eder.' },
          { label: 'Teknolojide', text: "dokunmatik ekranlı self servis cihaz. Türkiye'de \"kiosk\" denince bugün çoğunlukla bu anlaşılır; bu sayfa bu anlamı anlatır." },
        ],
      },
      {
        heading: 'Kiosk cihazı ne işe yarar?',
        paragraphs: ['Kiosk, personelin yaptığı tekrarlayan işlemleri kullanıcının kendisine devreder. En yaygın işler ve her birinin ayrıntılı sayfası:'],
        list: [
          { text: 'Sıra numarası alma: hastane ve belediyede hizmeti seçip fiş alma', href: '/urunler/siramatik-kiosk/' },
          { text: 'Sipariş verme: restoran, kafe ve kantinde menüden seçip ödeme', href: '/kullanim-alanlari/self-servis-siparis-kiosku/' },
          { text: 'Fatura ve borç ödeme: su, vergi ve belediye bedellerini nakit ya da kartla ödeme', href: '/kullanim-alanlari/fatura-odeme-kiosku/' },
          { text: 'Ulaşım kartı dolumu: bakiye ve abonman yükleme, yeni kart satışı', href: '/kullanim-alanlari/ulasim-karti-dolum-kiosku/' },
          { text: 'Bilgi ve yönlendirme: harita, kat planı, duyuru ve sorgulama', href: '/kullanim-alanlari/bilgilendirme-kiosku/' },
          { text: 'Check-in ve bilet: havalimanında biniş kartı alma, bilet satışı', href: '/kullanim-alanlari/havalimani-check-in-kiosku/' },
          { text: 'Kitap ödünç alma ve iade: kütüphanede üye kartı ve barkodla işlem', href: '/kullanim-alanlari/kutuphane-kiosku/' },
          { text: 'Otopark ücreti ödeme: bilet ya da plaka ile çıkış ödemesi', href: '/kullanim-alanlari/otopark-odeme-kiosku/' },
        ],
      },
      {
        heading: 'Kiosk sistemi nasıl çalışır?',
        paragraphs: ['Kiosk sistemi üç katmandan oluşur: kullanıcının dokunduğu ekran, işlemi yürüten kiosk yazılımı ve bu yazılımın bağlandığı arka sistem. Akış her türde aynıdır:'],
        ordered: true,
        list: [
          'Kullanıcı ekrandan işlemi seçer; gerekiyorsa kimlik numarasını girer, kartını ya da barkodunu okutur.',
          'Kiosk yazılımı isteği arka sisteme iletir: hastanede hastane bilgi yönetim sistemi (HBYS), belediyede tahsilat ve abone yazılımı, restoranda adisyon programı.',
          'Sonuç ekranda gösterilir; yazıcıdan sıra fişi, makbuz ya da sipariş fişi çıkar.',
          'Ödeme gerekiyorsa POS, QR ya da nakit kabul ünitesiyle alınır ve işlem kapanır.',
        ],
        after: [
          'Yazılım "kiosk modu" denen kilitli biçimde çalışır: kullanıcı tanımlı ekranların dışına çıkamaz, cihazı kapatamaz, başka program açamaz. Bu sayede kiosk gün boyu gözetimsiz kalabilir ve 7/24 hizmet verebilir. Kurumun mevcut web uygulaması ya da yazılımı da bu modda çalıştırılabilir.',
        ],
      },
      {
        heading: 'Kiosk çeşitleri nelerdir?',
        paragraphs: ["Kiosklar yaptıkları işe göre adlandırılır. Türkiye'de en çok karşılaşılan türler:"],
        list: [
          { label: 'Sıramatik kiosk', text: 'hizmet seçimi ve sıra numarası; hastane, belediye, banka', href: '/kullanim-alanlari/hastane-kiosk/' },
          { label: 'Sipariş kiosku (self order)', text: 'restoran, kafe, fast food ve kantinde menüden sipariş ve ödeme', href: '/restoran-siparis-kiosku-nedir/' },
          { label: 'Tahsilat ve ödeme kiosku', text: 'fatura, borç ve bedel ödeme; belediye, su idaresi, otopark', href: '/kullanim-alanlari/belediye-siramatik-kiosku/' },
          { label: 'Ulaşım kartı dolum kiosku', text: 'bakiye ve abonman yükleme, kart satışı', href: '/kullanim-alanlari/ulasim-karti-dolum-kiosku/' },
          { label: 'Bilgilendirme ve haritalama kiosku', text: 'AVM, kampüs, hastane ve mezarlıkta yönlendirme ve sorgulama', href: '/urunler/haritalama-kiosk/' },
          { label: 'Check-in ve bilet kiosku', text: 'havalimanı, otogar ve etkinlik alanlarında bilet ve kayıt', href: '/kullanim-alanlari/havalimani-check-in-kiosku/' },
          { label: 'Kütüphane kiosku', text: 'kitap ödünç alma ve iade', href: '/urunler/kutuphane-kiosk/' },
          { label: "Döviz ve altın ATM'si", text: 'iki yönlü döviz işlemi ve gram altın satışı', href: '/kullanim-alanlari/doviz-altin-atm/' },
          { label: 'Otomat kiosku', text: 'yiyecek içecek otomatında ürün seçimi ve kartlı ödeme', href: '/kullanim-alanlari/yiyecek-icecek-otomati-kiosku/' },
        ],
        after: ['Self servis kasa, fotoğraf baskı ve internet kioskları da aynı mantıkla çalışır. "Self servis kiosk" bu türlerin tamamını kapsayan genel addır; sayfanın sonundaki self servis kiosk rehberinde ayrıntısı var.'],
      },
      {
        heading: 'Yapısına göre kiosk modelleri',
        paragraphs: ['Aynı iş farklı gövdelerle yapılabilir. Gövde, cihazın duracağı yere ve günlük kullanıcı sayısına göre seçilir:'],
        list: [
          { label: 'Ayaklı (standart) kiosk', text: 'zemine sabitlenen dikey ya da yatay ekranlı model; en yaygın tip', href: '/urunler/dikey-kiosk/' },
          { label: 'Klavyeli kiosk', text: 'kimlik numarası ve form girişi gereken sorgulama ve kayıt işlemleri için', href: '/urunler/klavyeli-kiosk/' },
          { label: 'Yatay masa tipi (desk) kiosk', text: 'yatay ekranlı, masa biçimli ayaklı gövde; danışma, resepsiyon ve sipariş için', href: '/urunler/yatay-kiosk/' },
          { label: 'Totem kiosk', text: 'büyük dikey ekranlı, uzaktan görünen bilgilendirme ve tanıtım kiosku', href: '/urunler/totem-kiosk/' },
          { label: 'Duvar tipi kiosk', text: 'zeminde yer kaplamayan, duvara monte model', href: '/kendi-kioskunu-olustur/' },
          { label: 'Dış mekân kiosk ve kabin', text: 'hava koşullarına ve darbeye karşı korumalı gövde; Konya Kart dolum kioskları bu tipte', href: '/referanslar/konya-buyuksehir-belediyesi/' },
        ],
        after: ['Ekran yönü de modelin parçasıdır: görsel ağırlıklı sipariş ekranlarında yatay, liste ve sorgulama ekranlarında dikey yön tercih edilir.'],
      },
      {
        heading: 'Kiosk cihazı nedir, neler içerir?',
        paragraphs: ['Kiosk cihazı, dışarıdan tek parça görünen ama içinde beş bileşen taşıyan, yoğun kullanım için üretilmiş bir bilgisayardır:'],
        list: [
          { label: 'Dokunmatik ekran', text: '21,5, 24, 27 ve 32 inç seçenekleri; yatay ya da dikey' },
          { label: 'Metal gövde', text: 'ayaklı, masa ya da duvar tipi; beyaz, siyah ya da kurumun renklerine göre giydirme' },
          { label: 'Bilgisayar', text: '4, 8 ya da 16 GB RAM; 128 ile 512 GB arası SSD ya da HDD disk; Windows, Linux (Debian), Android ya da FreeDOS işletim sistemi' },
          { label: 'Çevre birimleri', text: 'fiş yazıcısı, barkod ve QR okuyucu, Mifare kart okuyucu, POS, kamera, hoparlör, mikrofon, klavye; işe göre eklenir' },
          { label: 'Kiosk yazılımı', text: 'kilitli arayüz, uzaktan güncelleme ve arka sistem bağlantısı' },
          { text: 'Bu seçenekleri adım adım kendiniz deneyin: Kendi Kioskunu Oluştur', href: '/kendi-kioskunu-olustur/' },
        ],
        after: ['Hangi bileşenin gerektiği yapılacak işe bağlıdır: sıramatik için yazıcı, tahsilat için POS ve nakit ünitesi, kütüphane için barkod ve kart okuyucu yeterlidir. Gereksiz bileşen hem fiyatı hem arıza ihtimalini artırır.'],
      },
      {
        heading: 'Kiosk nerelerde kullanılır?',
        paragraphs: ['Kiosk, aynı işlemin gün içinde yüzlerce kez tekrarlandığı her yerde işe yarar. Aramalarda en çok sorulan yerler:'],
        list: [
          { label: 'Hastanede kiosk', text: 'poliklinik sıra alma, randevu onayı ve kimlikle kayıt', href: '/kullanim-alanlari/hastane-kiosk/' },
          { label: 'Belediyede kiosk', text: 'sıramatik, borç sorgulama ve fatura tahsilatı', href: '/kullanim-alanlari/belediye-siramatik-kiosku/' },
          { label: "AVM'de kiosk", text: 'mağaza bulma, kat planı ve kampanya bilgisi veren bilgilendirme kioskları', href: '/kullanim-alanlari/bilgilendirme-kiosku/' },
          { label: 'Restoran ve kafede kiosk', text: 'kuyruksuz sipariş ve ödeme', href: '/kullanim-alanlari/self-servis-siparis-kiosku/' },
          { label: 'Kantinde kiosk', text: 'okul, üniversite ve fabrika kantinlerinde hızlı satış', href: '/kantin-siparis-ve-satis-kiosku-nedir/' },
          { label: 'Kütüphanede kiosk', text: 'kitap ödünç alma ve iade', href: '/kullanim-alanlari/kutuphane-kiosku/' },
          { label: 'Havalimanında kiosk', text: 'check-in ve biniş kartı', href: '/kullanim-alanlari/havalimani-check-in-kiosku/' },
          { label: 'Otoparkta kiosk', text: 'park ücreti ödeme', href: '/kullanim-alanlari/otopark-odeme-kiosku/' },
          { label: 'Döviz bürosu ve kuyumcuda kiosk', text: '7/24 döviz bozdurma ve gram altın satışı', href: '/kullanim-alanlari/doviz-altin-atm/' },
        ],
      },
      {
        heading: 'Kiosk ile sıramatik, otomat, totem ve dijital tabela arasındaki fark',
        paragraphs: ['Bu adlar günlük dilde birbirinin yerine kullanılır; farkları şöyle:'],
        table: {
          head: ['Cihaz', 'Kiosktan farkı'],
          rows: [
            ['Sıramatik', 'Kioskun sıra numarası veren türüdür. Yalnızca fiş basan butonlu sıramatikler de vardır; dokunmatik sıramatik kiosk ise hizmet seçimi, kimlik okuma ve randevu onayı da yapar.'],
            ['Otomat', 'Hazır ürünü fiziksel olarak teslim eder. Kiosk ürün teslim etmez; sipariş, bilgi ya da ödeme akışını yönetir. İkisi birleşince otomat kiosku ortaya çıkar.'],
            ['Totem', 'Büyük dikey ekranlı gövde biçimidir. Dokunmatikse kiosk, yalnızca görüntü gösteriyorsa dijital tabeladır.'],
            ['Dijital tabela (digital signage)', 'Tek yönlüdür, içerik gösterir; kullanıcıdan girdi almaz. Kiosk çift yönlüdür, kullanıcı işlem yapar.'],
            ['ATM', "Bankaların nakit veren özel kioskudur. Döviz ve altın ATM'si de aynı mantıkla çalışan bir kiosk türüdür."],
            ['Tablet standı', 'Gözetimsiz ve yoğun kullanım için tasarlanmamıştır; metal gövde, kilitli yazılım ve yazıcı, POS gibi çevre birimleri yoktur.'],
          ],
        },
      },
      {
        heading: 'Kiosk işletmeye ne kazandırır?',
        list: [
          'Kuyruk kısalır: işlem, kiosk sayısı kadar paralel yürür.',
          'Personel tekrarlayan işten kurtulur; hizmete ve hazırlığa odaklanır.',
          'Mesai dışında da hizmet verilir: tahsilat ve kart dolum kioskları 7/24 çalışır.',
          'Hata azalır: kullanıcı seçimini ekranda görür ve onaylar.',
          'Menü, fiyat ve duyurular merkezden anında güncellenir.',
        ],
      },
      {
        heading: "Türkiye'den gerçek kiosk örnekleri",
        paragraphs: ["Vectanom Kiosk olarak Türkiye'nin farklı illerinde kurduğumuz kiosklardan bazıları:"],
        list: [
          { label: 'Konya Büyükşehir Belediyesi', text: '58 Konya Kart dolum ve satış kiosku; günde yaklaşık 60.000 işlem, dış mekânda 7/24 çalışma', href: '/referanslar/konya-buyuksehir-belediyesi/' },
          { label: 'Adıyaman Belediyesi', text: 'Yaman Kart yükleme ve fatura ödemeyi tek cihazda yapan 3 akıllı vezne', href: '/referanslar/adiyaman-belediyesi/' },
          { label: 'KOSKİ', text: 'nakit ve kredi kartlı su bedeli tahsilat kioskları', href: '/referanslar/koski/' },
          { label: 'KASKİ', text: 'Kahramanmaraş tahsilat kiosku', href: '/referanslar/kaski/' },
          { label: 'Sivas Belediyesi', text: 'nakit ve kredi kartlı tahsilat kioskları', href: '/referanslar/sivas-belediyesi/' },
          { label: 'Iğdır Belediyesi', text: 'kiosk tahsilat sistemi', href: '/referanslar/igdir-belediyesi/' },
          { label: 'Necmettin Erbakan Üniversitesi', text: 'üniversite kiosk projesi', href: '/referanslar/necmettin-erbakan-universitesi/' },
          { label: 'Çukurova Uluslararası Havalimanı', text: 'havalimanı kiosk projesi', href: '/referanslar/cukurova-havalimani/' },
          { text: 'Tüm projeler ve saha fotoğrafları', href: '/referanslar/' },
        ],
      },
      {
        heading: 'Hangi kiosk türü size uygun?',
        paragraphs: ['Önce yapılacak işi, sonra gövdeyi, en son donanımı seçin:'],
        list: [
          { label: 'Sıra ve randevu', text: 'sıramatik kiosk; kimlik girişi varsa klavyeli ya da kart okuyuculu model' },
          { label: 'Sipariş ve satış', text: 'yatay ekranlı sipariş kiosku; ayaklı ya da masa tipi' },
          { label: 'Tahsilat', text: 'POS ve nakit üniteli ödeme kiosku; dış mekânda kabinli' },
          { label: 'Bilgilendirme', text: 'dikey ekranlı ya da totem kiosk' },
          { label: 'Kütüphane', text: 'barkod ve kart okuyuculu kütüphane kiosku' },
          { text: 'Seçim adımlarının ayrıntısı: doğru self servis kiosk nasıl seçilir?', href: '/self-servis-kiosk-nedir/' },
          { text: 'Gereksiz donanım eklemeden bütçe kurmak için: uygun maliyetli kiosk', href: '/uygun-maliyetli-kiosk/' },
        ],
      },
      {
        heading: 'Kiosk fiyatları neye göre değişir?',
        paragraphs: ['Kiosk için tek bir liste fiyatı yoktur; fiyatı belirleyen başlıca kalemler şunlardır:'],
        list: [
          'Ekran boyutu ve yönü',
          'Gövde tipi: masa tipi, ayaklı, totem ya da dış mekân kabini',
          'Çevre birimleri: yazıcı, POS, nakit kabul ünitesi, kart ve barkod okuyucu, kamera',
          'Yazılım: hazır kiosk arayüzü mü, mevcut sisteminize entegrasyon mu',
          'Adet, kurulum yeri ve teslimat',
        ],
        after: ["İhtiyacınızı iletişim formundan ya da WhatsApp'tan iletin; kullanım alanınıza göre model ve donanım önerisiyle birlikte teklif hazırlayalım."],
      },
    ],
    product: 'dikey-kiosk',
    useCases: ['self-servis-siparis-kiosku', 'belediye-siramatik-kiosku', 'hastane-kiosk', 'havalimani-check-in-kiosku', 'kutuphane-kiosku', 'bilgilendirme-kiosku', 'otopark-odeme-kiosku', 'fatura-odeme-kiosku', 'ulasim-karti-dolum-kiosku', 'doviz-altin-atm', 'yiyecek-icecek-otomati-kiosku'],
    related: ['self-servis-kiosk-nedir', 'restoran-siparis-kiosku-nedir', 'kantin-siparis-ve-satis-kiosku-nedir'],
    faq: [
      { q: 'Kiosk ne demek?', a: 'Kelime Türkçe "köşk"ten gelir ve Avrupa dillerinde büfe anlamında kullanılır. Günümüzde ise personel olmadan işlem yapılan dokunmatik ekranlı self servis cihazı anlatır.' },
      { q: 'Kiosk nedir, ne işe yarar?', a: 'Kiosk, kullanıcının sıra alma, sipariş, ödeme, kart dolumu ya da bilgi sorgulama gibi işlemleri kendi başına yaptığı cihazdır. Kuyruğu kısaltır ve personelin tekrarlayan iş yükünü azaltır.' },
      { q: 'Kiosk sistemi nedir?', a: 'Dokunmatik kiosk cihazı, üzerindeki kilitli yazılım ve bu yazılımın bağlandığı arka sistemin bütününe kiosk sistemi denir. Arka sistem hastanede HBYS, belediyede tahsilat yazılımı, restoranda adisyon programıdır.' },
      { q: 'Kiosk ile sıramatik aynı şey mi?', a: 'Sıramatik, kioskun sıra numarası veren türüdür. Her sıramatik kiosk bir kiosktur; ama kiosk sipariş, tahsilat ve bilgilendirme gibi başka işler de yapar.' },
      { q: "AVM'deki kiosk ne demek?", a: "AVM'de iki şey kiosk diye anılır: koridordaki küçük satış standı ve mağaza bulma, kat planı ya da kampanya bilgisi veren dokunmatik bilgilendirme cihazı. Bu sayfadaki anlam ikincisidir." },
      { q: 'Hastanede kiosk nedir?', a: 'Hastanedeki kiosk, hastanın T.C. kimlik numarası ya da randevu barkoduyla kendini tanıtıp poliklinik sırası aldığı sıramatik cihazdır. Hastane bilgi yönetim sistemiyle bağlantılı çalışır.' },
      { q: 'Dokunmatik kiosk Windows mu Android mi olmalı?', a: 'İkisi de olabilir. Kiosklarımız Windows, Linux (Debian), Android ya da FreeDOS ile teslim edilir; seçim, kioskta çalışacak yazılıma göre yapılır. Tarayıcıda çalışan bir web uygulaması kullanacaksanız işletim sistemi fark yaratmaz.' },
      { q: 'Kiosk için internet bağlantısı gerekir mi?', a: 'Çoğu işlem bir sisteme bağlanmayı gerektirdiğinden kablolu ya da kablosuz ağ bağlantısı gerekir. Kurumsal projelerde kiosk çoğu zaman internete değil kurumun kapalı yerel ağına bağlanır; Konya Kart kioskları böyle çalışır.' },
      { q: 'Kiosk fiyatları ne kadar?', a: 'Fiyat ekran boyutuna, gövde tipine, yazıcı, POS ve nakit ünitesi gibi donanımlara, yazılıma ve adede göre değişir. Sabit liste fiyatı yoktur; ihtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
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
        list: [
          { text: 'Konya Kart dolum ve satış kioskları: 58 cihazlık proje', href: '/referanslar/konya-buyuksehir-belediyesi/' },
          { text: 'Ulaşım kartı dolum kiosku', href: '/kullanim-alanlari/ulasim-karti-dolum-kiosku/' },
          { text: 'Referanslarımızı inceleyin', href: '/referanslar/' },
        ],
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
    related: ['kiosk-nedir', 'restoran-siparis-kiosku-nedir', 'kantin-siparis-ve-satis-kiosku-nedir'],
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
    related: ['kiosk-nedir', 'self-servis-kiosk-nedir', 'kantin-siparis-ve-satis-kiosku-nedir'],
    faq: [
      { q: 'Restoran sipariş kiosku nedir?', a: 'Müşterinin menüden ürün seçip siparişini ve ödemesini kendisinin tamamladığı dokunmatik ekranlı cihazdır.' },
      { q: 'Sipariş kiosku mevcut adisyon programıma bağlanır mı?', a: 'Kullandığınız programın entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'Küçük bir kafe için sipariş kiosku mantıklı mı?', a: 'Yoğun saatlerde kuyruk oluşuyorsa küçük işletmeler için de faydalıdır. Gereksiz donanım eklemeden ihtiyaca göre yapılandırma mümkündür.' },
      { q: 'Sipariş kiosku sesli sipariş destekler mi?', a: 'Evet, sesli sipariş seçeneği sunulur. Kullanım ihtiyacınıza göre birlikte yapılandırırız.' },
      { q: 'Sipariş kiosku hangi ödeme yöntemlerini destekler?', a: 'POS ve QR ödeme entegrasyonu seçenek olarak sunulur; fiş yazıcısı eklenebilir.' },
      { q: 'Menüyü ve fiyatları kioskta nasıl güncellerim?', a: 'Menü ve kampanyalar kioskta anında güncellenebilir. Güncelleme yöntemi kullanılan yazılıma göre birlikte netleştirilir.' },
    ],
  },
  {
    slug: 'kantin-siparis-ve-satis-kiosku-nedir',
    title: 'Kantin Sipariş ve Satış Kiosku Nedir? Avantajları',
    description: 'Kantin sipariş ve satış kiosku nedir, nasıl çalışır? Okul, üniversite, hastane ve fabrika kantinlerinde self order kiosk ile kuyruğu azaltma rehberi.',
    h1: 'Kantin Sipariş ve Satış Kiosku Nedir?',
    intro: 'Kantin sipariş ve satış kiosku, okul, üniversite, hastane, fabrika ve kamu kurumu kantinlerinde müşterinin ürününü dokunmatik ekrandan seçip ödemesini kendisinin yaptığı self order kiosk çözümüdür. Teneffüs, öğle arası ve vardiya değişimi gibi kısa sürede yoğunlaşan saatlerde kasada oluşan kuyruğu azaltmak için kullanılır.',
    summary: 'Kısaca: Kantin kiosku = kantine özel yapılandırılmış self order kiosk. Öğrenci, çalışan ya da ziyaretçi menüden ürünü seçer, POS veya QR ile öder, fişini alır; sipariş tezgâha iletilir. Kasa tek kişiyle sınırlı kalmaz, birden fazla kişi aynı anda sipariş verebilir.',
    published: '2026-10-06',
    modified: '2026-10-06',
    photoAlt: 'Kantin için self order sipariş ve satış kiosku',
    sections: [
      {
        heading: 'Kantin sipariş ve satış kiosku nasıl çalışır?',
        paragraphs: [
          'Kantin kiosku, restoran ve kafelerde kullanılan self servis sipariş kioskunun kantin düzenine göre yapılandırılmış halidir. Müşteri görsel menüden sandviç, tost, içecek, atıştırmalık gibi ürünleri seçer, sepetini onaylar ve ödemesini yapar. İşlem tamamlanınca fiş yazıcıdan çıkar; sipariş tezgâhtaki personele ya da hazırlık noktasına iletilir.',
          'Kiosk yazılımı yalnızca tanımlı sipariş ekranlarına izin verecek şekilde kilitlenir. Bu sayede cihaz gün boyu açık kalabilir, kantin personeli kasada para almak yerine ürünü hazırlamaya ve teslim etmeye odaklanır.',
          'Self order kiosk kavramının genel tanımı için Self Servis Kiosk Nedir? rehberimize, restoran ve kafe tarafı için Restoran Sipariş Kiosku Nedir? sayfamıza bakabilirsiniz.',
        ],
      },
      {
        heading: 'Kantinlerde kuyruk neden oluşur?',
        paragraphs: [
          'Kantin satışları gün içine eşit dağılmaz. Okul ve üniversitelerde teneffüs ve ders arası, fabrikalarda vardiya ve mola saati, hastanelerde ziyaret ve nöbet değişimi kısa bir zaman diliminde çok sayıda kişiyi aynı tezgâha getirir. Tek kasa ve tek kasiyerle bu yoğunluk karşılanamaz; müşteri beklerken vazgeçer, mola süresi kuyrukta geçer.',
          'Sipariş ve satış kiosku, ürün seçimini ve ödemeyi birden fazla ekrana yayarak bu darboğazı azaltır. Kasiyer kuyruğu yönetmek yerine hazırlık hattına yardım eder.',
        ],
      },
      {
        heading: 'Hangi kantinlerde kullanılır?',
        list: [
          'Okul ve lise kantinleri: kısa teneffüslerde hızlı sipariş ve ödeme',
          'Üniversite kantinleri, kafeteryaları ve yemekhane girişleri',
          'Hastane kantinleri ve kafeteryaları',
          'Fabrika, OSB ve şirket kantinleri: vardiya aralarında yoğunluk yönetimi',
          'Belediye, kamu kurumu ve sosyal tesis kantinleri',
          'Spor kompleksi, AVM ve havalimanı yiyecek içecek noktaları',
        ],
      },
      {
        heading: 'Kantin kiosku kullanmanın avantajları',
        list: [
          'Yoğun saatlerde kasa kuyruğu kısalır, mola süresi bekleyerek geçmez',
          'Birden fazla müşteri aynı anda sipariş verebilir',
          'Ürün görselleri ve ek ürün önerileriyle sepet tutarı artabilir',
          'Sipariş hataları ve fiyat karışıklığı azalır; müşteri ne seçtiğini ekranda görür',
          'Personel para almak yerine hazırlık ve servise yönlendirilir',
          'Menü, fiyat ve günün kampanyası tek noktadan anında güncellenir',
          'Kartlı ve QR ödeme ile kasada para sayma ve para üstü işi azalır',
        ],
      },
      {
        heading: 'Kantin kiosku hangi özelliklere sahip olmalı?',
        list: [
          'Görsel, kategorili ve kolay okunur menü; küçük yaştan yetişkine herkesin kullanabileceği sade akış',
          'POS ve QR ödeme entegrasyonu',
          'Sipariş fişi ve sıra numarası için fiş yazıcısı',
          'Sesli sipariş seçeneği',
          'Kullandığınız adisyon ya da stok programıyla entegrasyon imkânı',
          'Sağlam metal gövde ve kilitli yazılım: yoğun ve gözetimsiz kullanıma uygunluk',
          'Kantinin renklerine ve markasına uygun ekran tasarımı',
        ],
      },
      {
        heading: 'Kantin siparişinin akışı',
        list: [
          'Müşteri ekrandan kategoriyi seçer (ör. tost, içecek, atıştırmalık)',
          'Ürünü ve varsa ekstra seçenekleri belirler',
          'Sepeti gözden geçirir, önerilen ek ürünü ekler ya da geçer',
          'Ödemeyi POS veya QR ile tamamlar',
          'Fişini ya da sıra numarasını alır, siparişini tezgâhtan teslim alır',
        ],
      },
      {
        heading: 'Kantin kiosku kurmadan önce hazırlık',
        list: [
          'Ürün listesi, fotoğrafları ve güncel fiyatlar hazır olmalı',
          'Ürün seçenekleri ve kampanyalar önceden belirlenmeli',
          'Yoğun saatlerdeki kuyruk akışına göre kioskun duracağı yer seçilmeli',
          'Elektrik ve ağ bağlantısı hazırlanmalı',
          'Kullanılan adisyon, stok ya da otomasyon programı netleştirilmeli',
        ],
      },
      {
        heading: 'Kantin kiosku ile yiyecek içecek otomatı arasındaki fark',
        paragraphs: [
          'Yiyecek içecek otomatı hazır, paketli ürünleri raftan veren bir makinedir. Kantin sipariş kiosku ise raf ürünü vermez; siparişi alır, ödemeyi tahsil eder ve hazırlanacak ürünü tezgâha iletir. Tost, sandviç ve sıcak içecek gibi hazırlanan ürünlerin satıldığı kantinde sipariş kiosku, paketli ürünler için ise otomat mantıklıdır. İki çözüm birlikte de kullanılabilir.',
        ],
        list: [{ text: 'Otomat çözümleri için: Yiyecek İçecek Otomatı Kiosku', href: '/kullanim-alanlari/yiyecek-icecek-otomati-kiosku/' }],
      },
      {
        heading: 'Doğru kantin kiosku nasıl seçilir?',
        list: [
          'Kantinde günlük kaç müşteriye hizmet verdiğinizi ve yoğun saat süresini belirleyin',
          'Yoğunluğa göre bir ya da birden fazla kiosk gerekip gerekmediğini değerlendirin',
          'Ekran boyutu ve yönünü, cihazın duracağı alana göre seçin',
          'Gerçekten ihtiyaç duyduğunuz çevre birimlerini (POS, QR okuyucu, yazıcı) ekleyin',
          'Satış sonrası destek ve yazılım güncelleme imkânını sorun',
        ],
      },
      {
        heading: 'Kantin kiosku için bizimle iletişime geçin',
        paragraphs: [
          'Konya ve çevresinde okul, üniversite, hastane, fabrika ve kurum kantinleri için self order sipariş ve satış kioskları üretiyor ve kuruyoruz. Kantininizin yoğunluğuna, ürün çeşidine ve ödeme yöntemine göre yapılandırılmış öneri ve teklif için bize ulaşabilirsiniz.',
        ],
        list: [
          { text: 'Model ve kurulum için: Self Servis Sipariş Kiosku kullanım alanı sayfası', href: '/kullanim-alanlari/self-servis-siparis-kiosku/' },
          { text: 'Genel kavram için: Self Servis Kiosk Nedir?', href: '/self-servis-kiosk-nedir/' },
          { text: 'Teklif alın', href: '/iletisim/' },
        ],
      },
    ],
    product: 'siparis-kiosk',
    useCases: ['self-servis-siparis-kiosku', 'yiyecek-icecek-otomati-kiosku'],
    related: ['kiosk-nedir', 'restoran-siparis-kiosku-nedir', 'self-servis-kiosk-nedir'],
    faq: [
      { q: 'Kantin sipariş ve satış kiosku nedir?', a: 'Kantinde müşterinin dokunmatik ekrandan ürünü seçip siparişini ve ödemesini kendisinin tamamladığı self order kiosk çözümüdür.' },
      { q: 'Self order kiosk ile kantin kiosku aynı şey mi?', a: 'Kantin kiosku, self order kioskun kantin düzenine göre yapılandırılmış halidir. Aynı teknolojiyle çalışır; menü, ödeme ve ekran akışı kantinin ürün ve yoğunluğuna göre hazırlanır.' },
      { q: 'Okul kantininde kiosk kullanılabilir mi?', a: 'Evet. Teneffüs gibi kısa sürede yoğunlaşan saatlerde kuyruğu azaltmak için okul ve üniversite kantinlerinde kullanılabilir. Ekran akışı sade tutulur ve kullanıcı kitlesine göre yapılandırılır.' },
      { q: 'Kantin kiosku hangi ödeme yöntemlerini destekler?', a: 'POS ve QR ödeme entegrasyonu seçenek olarak sunulur. Fiş yazıcısı eklenebilir; ödeme yöntemleri kantinin ihtiyacına göre belirlenir.' },
      { q: 'Kantin kiosku mevcut adisyon veya stok programıma bağlanır mı?', a: 'Kullandığınız programın entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'Küçük bir kantin için kiosk mantıklı mı?', a: 'Yoğun saatlerde kuyruk oluşuyorsa küçük kantinler için de faydalıdır. Gereksiz donanım eklemeden ihtiyaca göre yapılandırma mümkündür.' },
      { q: 'Menü ve fiyatları kioskta nasıl güncellerim?', a: 'Menü, fiyat ve kampanyalar kioskta anında güncellenebilir. Güncelleme yöntemi kullanılan yazılıma göre birlikte netleştirilir.' },
      { q: 'Kantin kiosku fiyatı neye göre değişir?', a: 'Ekran boyutuna, POS, QR okuyucu ve yazıcı gibi donanımlara ve kiosk adedine göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
];
