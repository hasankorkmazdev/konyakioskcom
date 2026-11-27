import type { Product } from '../types';
export type { KioskType, Product } from '../types';

/** Sipariş kioskunun entegre çalıştığı adisyon ve POS sistemleri (ürün ve kullanım alanı sayfalarında ortak). */
export const siparisEntegrasyonlari = ['Akınsoft', 'Volvox', 'SambaPOS', 'Adisyo', 'Menulux', 'Dion', 'Pavo', 'GoPos', 'Beko'];
/** "Akınsoft, Volvox, ... ve Beko" */
export const siparisEntegrasyonlariMetni = `${siparisEntegrasyonlari.slice(0, -1).join(', ')} ve ${siparisEntegrasyonlari.at(-1)}`;

/** Kiosk modelleri. Yeni model eklemek için listeye bir kayıt ekleyin. */
export const products: Product[] = [
  {
    slug: "klavyeli-kiosk",
    type: "klavyeli",
    name: "Klavyeli Kiosk",
    title: "Klavyeli Kiosk 21, 24 ve 32 İnç | Vectanom Kiosk Konya",
    description: "21, 24 ve 32 inç klavyeli kiosk modelleri. Bilgi sorgulama, randevu ve kayıt işlemleri için dokunmatik ekranlı, klavyeli kiosklar. Konya ve tüm Türkiye.",
    h1: "Klavyeli Kiosk – 21, 24 ve 32 İnç",
    intro: "Kullanıcıdan metin, T.C. kimlik no, telefon veya arama bilgisi alınması gereken uygulamalarda dokunmatik ekranın yanında fiziksel klavye kullanılması işlemleri hızlandırır. Vectanom klavyeli kiosk modelleri 21, 24 ve 32 inç ekran seçenekleriyle sunulur.",
    tags: [
      "Entegre Klavye",
      "Yazıcı",
      "Barkod/QR Okuyucu",
      "Kamera"
    ],
    features: [
      "Dokunmatik ekran ve entegre klavye",
      "Sağlam, boyalı metal gövde",
      "Kablolar gövde içinde, kullanıcıya kapalı",
      "Kiosk modunda çalışan, kullanıcı müdahalesine kapalı yazılım altyapısı",
      "İstenirse yazıcı, barkod/QR okuyucu ve kamera entegrasyonu",
      "Zemine sabitlenebilir ayaklı veya masaüstü model seçeneği"
    ],
    uses: [
      "Belediye ve kamu hizmet noktaları",
      "Hastane ve poliklinik kayıt",
      "Okul, üniversite ve kütüphane",
      "Kurumsal ziyaretçi kayıt",
      "Bilgi ve sorgulama noktaları"
    ],
    faq: [
      {
        q: "Klavyeli kioskta hangi ekran boyutları var?",
        a: "21 inç, 24 inç ve 32 inç ekran seçenekleri mevcuttur. Kullanım alanına ve kullanıcı sayısına göre boyut seçimi konusunda size yardımcı oluruz."
      },
      {
        q: "Klavyeli kiosk ne zaman tercih edilmeli?",
        a: "Kullanıcının isim, kimlik numarası, arama ifadesi veya form bilgisi girmesi gereken uygulamalarda klavyeli model daha hızlı ve rahat bir deneyim sunar."
      },
      {
        q: "Kendi yazılımımız çalışır mı?",
        a: "Evet. Kiosk Windows tabanlı çalışır; web tabanlı veya masaüstü uygulamanız kiosk modunda çalıştırılabilir."
      }
    ]
  },
  {
    // "Desk kiosk" ile aynı üründür: yatay ekran, masa biçimli ayaklı gövde. Eski /urunler/desk-kiosk/ adresi buraya 301 ile gelir.
    slug: "yatay-kiosk",
    type: "yatay",
    name: "Yatay Desk Kiosk",
    title: "Yatay Masa Tipi Desk Kiosk 21, 24 ve 32 İnç – Vectanom",
    description: "Yatay ekranlı, masa biçimli ayaklı desk kiosk. Danışma, resepsiyon, bilgilendirme, haritalama ve sipariş için 21, 24 ve 32 inç masa tipi kiosk.",
    h1: "Yatay Masa Tipi (Desk) Kiosk",
    intro: "Yatay kiosk ya da desk kiosk, yatay dokunmatik ekranın masa biçimli ayaklı bir gövdeye yerleştiği modeldir. Ekran kullanıcıya doğru eğimli durduğu için menü, harita ve form gibi geniş içerikler rahat okunur; danışma bankosu, resepsiyon, sipariş noktası ve bilgilendirme için tercih edilir. Gövde zemine sabitlenebilir, masa üstü kurulum gerektirmez.",
    tags: [
      "Yazıcı",
      "POS",
      "Barkod/QR Okuyucu",
      "Kart Okuyucu"
    ],
    features: [
      "Geniş yatay dokunmatik ekran: 21, 24 ve 32 inç",
      "Masa biçimli, kullanıcıya eğimli ayaklı gövde; zemine sabitlenebilir",
      "Sipariş, bilgilendirme ve kayıt akışına uygun ergonomik yükseklik",
      "Fiş yazıcısı, POS, barkod/QR ve kart okuyucu seçeneği",
      "Gün boyu kesintisiz çalışmaya uygun donanım",
      "Marka renklerinize uygun gövde ve arayüz tasarımı"
    ],
    uses: [
      "Kafe ve restoran self-servis sipariş",
      "Büfe ve hızlı satış noktaları",
      "Hastane, AVM ve kampüs danışması: bina içi haritalama ve bilgilendirme",
      "Resepsiyon ve ziyaretçi kayıt",
      "Etkinlik ve fuar kayıt"
    ],
    faq: [
      {
        q: "Yatay kiosk ile desk kiosk aynı şey mi?",
        a: "Evet. Desk kiosk, yatay ekranın masa biçimli ayaklı gövdeye yerleştiği modelin diğer adıdır; masa tipi kiosk olarak da anılır."
      },
      {
        q: "Desk kiosk zemine sabitlenir mi?",
        a: "Evet. Gövde ayaklıdır ve zemine sabitlenebilir; masa ya da tezgah üstüne konmaz."
      },
      {
        q: "Yatay kiosk hangi işletmeler için uygundur?",
        a: "Menü ve ürün görselinin geniş gösterilmesi gereken kafe, restoran ve büfeler ile danışma bankosunda bilgilendirme ve haritalama sunan hastane, AVM ve kampüsler için uygundur."
      },
      {
        q: "Ödeme cihazı bağlanabilir mi?",
        a: "Kullanacağınız POS veya ödeme altyapısına göre entegrasyon konusunda birlikte değerlendirme yaparız."
      },
      {
        q: "Yatay kioskun boyutları nelerdir?",
        a: "21, 24 ve 32 inç ekran seçenekleri vardır."
      }
    ]
  },
  {
    slug: "dikey-kiosk",
    type: "dikey",
    name: "Dikey Kiosk",
    title: "Dikey Kiosk 21, 24 ve 32 İnç | Vectanom Kiosk Konya",
    description: "Dikey (portrait) dokunmatik kiosk modelleri. Belediye, kamu, hastane ve bilgilendirme uygulamaları için 21, 24 ve 32 inç dikey kiosk.",
    h1: "Dikey (Portrait) Kiosk",
    intro: "Dikey kiosk, az yer kaplar ve liste, form veya harita gibi yukarıdan aşağıya akan içeriklerde çok iyi çalışır. Belediye, kamu ve bilgilendirme uygulamalarının standart tercihidir.",
    tags: [
      "Yazıcı",
      "Kimlik/Kart Okuyucu",
      "Kamera"
    ],
    features: [
      "Dikey dokunmatik ekran, az yer kaplayan gövde",
      "Kullanım yüksekliği ve erişilebilirlik dikkate alınmış tasarım",
      "Yazıcı, kimlik/kart okuyucu ve kamera seçeneği",
      "Uzaktan içerik yönetimine uygun altyapı",
      "Kurulum yerine göre gövde seçenekleri için bizimle görüşün"
    ],
    uses: [
      "Belediye hizmet ve bilgilendirme noktaları",
      "Hastane yönlendirme",
      "Sıramatik ve randevu",
      "Kampüs ve kurum içi rehber"
    ],
    faq: [
      {
        q: "Dikey kiosk ile yatay kiosk arasında nasıl seçim yapılır?",
        a: "Sipariş ve görsel ağırlıklı işlerde yatay, liste, form ve bilgilendirme ağırlıklı işlerde dikey model daha uygundur."
      },
      {
        q: "Belediyeler için uygun mu?",
        a: "Evet. Belediye ve kamu kurumlarında bilgilendirme, randevu ve sorgulama uygulamaları için sık kullanılır."
      }
    ]
  },
  {
    slug: "kutuphane-kiosk",
    type: "kutuphane",
    name: "Kütüphane Kiosk",
    title: "Kütüphane Kiosk – Ödünç Alma ve İade | Vectanom Kiosk Konya",
    description: "Kütüphane kiosk çözümleri: kitap ödünç alma, iade, üye sorgulama ve katalog tarama için dokunmatik ekranlı kiosk. Konya ve Türkiye geneli.",
    h1: "Kütüphane Kiosk",
    intro: "Kütüphane kiosku, kullanıcıların kitap ödünç alma, iade ve katalog sorgulama işlemlerini personele ihtiyaç duymadan yapmasını sağlar. Kütüphane otomasyon yazılımınızla birlikte kullanılabilecek şekilde hazırlanır.",
    tags: [
      "Barkod/QR Okuyucu",
      "Üye Kartı Okuma",
      "Yazıcı"
    ],
    features: [
      "Dokunmatik ekran ve barkod/QR okuyucu",
      "Üye kartı veya kimlik okuma seçeneği",
      "Fiş yazıcısı ile ödünç alma fişi",
      "Katalog tarama ve kullanıcı sorgulama arayüzü",
      "Kütüphane otomasyon yazılımı ile çalışacak şekilde kurulum desteği"
    ],
    uses: [
      "Halk ve il/ilçe kütüphaneleri",
      "Üniversite kütüphaneleri",
      "Okul kütüphaneleri",
      "Kurum içi dokümantasyon merkezleri"
    ],
    faq: [
      {
        q: "Mevcut kütüphane otomasyonumuzla çalışır mı?",
        a: "Otomasyon yazılımınızın kiosk kullanımına uygunluğunu birlikte değerlendiririz. Çoğu web tabanlı sistem kiosk modunda çalıştırılabilir."
      },
      {
        q: "Barkod okuyucu dahil mi?",
        a: "Barkod/QR okuyucu seçenek olarak eklenir; ihtiyacınıza göre yapılandırılır."
      }
    ]
  },
  {
    slug: "totem-kiosk",
    type: "totem",
    name: "Totem Kiosk",
    description: "Totem kiosk: büyük dikey ekranlı, ayaklı bilgilendirme ve tanıtım kiosku. AVM, hastane ve kurum girişleri için.",
    intro: "Totem kiosk, büyük dikey ekranı ve ayaklı gövdesiyle dikkat çeker. Yönlendirme, tanıtım ve bilgilendirme için idealdir.",
    tags: [
      "Kamera",
      "Hoparlör"
    ],
    features: [
      "Büyük dikey dokunmatik ekran",
      "Ayaklı, sağlam gövde",
      "Uzaktan içerik yönetimi",
      "İsteğe bağlı kamera ve hoparlör"
    ],
    uses: [
      "AVM ve fuar alanı yönlendirme",
      "Hastane ve kurum girişi",
      "Tanıtım ve reklam"
    ],
    faq: [
      {
        q: "Totem kiosk içerik güncellemesi nasıl yapılır?",
        a: "Uzaktan içerik yönetimi altyapısıyla ekran içeriği kiosk başında olmadan güncellenebilir."
      }
    ],
    title: "Totem Kiosk – Ayaklı Bilgilendirme Kiosku | Vectanom Konya",
    h1: "Totem Kiosk"
  },
  {
    slug: "siramatik-kiosk",
    type: "siramatik",
    name: "Sıramatik Kiosk",
    description: "Sıramatik kiosk (sıra alma makinesi): ziyaretçi ekrandan işlemini seçer, numaralı sıra fişini alır. Belediye, hastane ve banka için yerli üretim.",
    intro: "Sıramatik kiosk, halk arasında sıra alma makinesi ya da sıra fişi makinesi denen cihazdır: ziyaretçi dokunmatik ekrandan işlemini seçer, sıra numarasını termal yazıcıdan basılan fişle alır ve sırası gelince ekranda ve sesli anonsla çağrılır. Nüfus müdürlüğünde, hastanede ya da bankada ekrandan işlem seçip fiş aldığınız cihaz budur. Kioskun gövdesini ve sıramatik yazılımını kendimiz geliştiriyor, Türkiye geneline gönderiyoruz.",
    tags: [
      "Termal Yazıcı",
      "Barkod/QR Okuyucu",
      "Kimlik Okuyucu"
    ],
    features: [
      "Dokunmatik ekrandan hizmet veya birim seçimi",
      "Termal yazıcıdan numaralı sıra fişi",
      "T.C. kimlik numarası, randevu barkodu veya kartla sıra alma seçeneği",
      "Kendi sıramatik yazılımımızla ya da kurumunuzun mevcut sıra yazılımıyla çalışma",
      "Sanal terminal: görevli sıradaki kişiyi bilgisayarından çağırır",
      "Fiziksel terminal: bankoda tuşlu çağrı cihazı",
      "Banko yapısı: her banko ayrı tanımlanır, çağrılan numara banko ekranında görünür",
      "Online randevu: internetten alınan randevuyla kioskta sıraya girme",
      "Önceliklendirme: 65 yaş üstü, engelli, hamile ve gaziler için öncelikli sıra",
      "Kiosk modu: ziyaretçi yalnızca sıra alma ekranını görür",
      "Ayaklı, zemine sabitlenebilir gövde"
    ],
    uses: [
      "Belediye hizmet binaları ve vezneler",
      "Hastane, poliklinik ve aile sağlığı merkezleri",
      "Nüfus müdürlüğü, göç idaresi ve diğer kamu kurumları",
      "Banka, vergi dairesi ve noterler"
    ],
    faq: [
      {
        q: "Sıra alma makinesi ile sıramatik aynı şey mi?",
        a: "Evet. Sıramatik, sıra numarası veren ve sırası gelen numarayı çağıran sistemin adıdır. Halk arasında sıra alma makinesi, sıra fişi makinesi ya da numaratör denen cihaz bu sistemin fiş veren parçası, yani sıramatik kiosktur. Numaranın çağrılması ve ekranda gösterilmesi ise sıramatik yazılımı, sanal ya da fiziksel terminaller ve banko ekranlarıyla yapılır."
      },
      {
        q: "Sıramatik cihazı nasıl çalışır?",
        a: "Ziyaretçi ekrandan işlemini seçer ya da T.C. kimlik numarası veya randevu barkoduyla kendini tanıtır. Kiosk, sıramatik yazılımından sıra numarasını alır ve termal yazıcıdan fişi basar. Görevli sıradaki numarayı çağırdığında numara bekleme alanındaki ekranda görünür ve sesli anons yapılır."
      },
      {
        q: "Görevli sıradaki kişiyi nasıl çağırır?",
        a: "Sıramatik yazılımımızda iki yol var. Sanal terminalde görevli, bilgisayarındaki çağırma ekranından sıradaki numarayı çağırır; ayrı bir cihaz gerekmez. Fiziksel terminalde bankoya konan tuşlu çağrı cihazı kullanılır. Her banko yazılımda ayrı tanımlanır ve çağrılan numara o bankonun ekranında görünür."
      },
      {
        q: "Online randevu ve 65 yaş önceliği var mı?",
        a: "Evet. Sıramatik yazılımımızla ziyaretçi internetten randevu alabilir ve geldiğinde kioskta randevusuyla sıraya girer. 65 yaş üstü, engelli, hamile ve gaziler gibi öncelik hakkı olan kişiler için ayrı öncelikli sıra tanımlanır; bu kişiler çağrıda öne alınır."
      },
      {
        q: "Kendi sıra yazılımımızla çalışır mı?",
        a: "İki seçenek var. Kurumunuz bir sıramatik yazılımı kullanıyorsa yalnızca kioskları alırsınız; kiosk, o yazılımın sıra alma ekranını kiosk modunda çalıştıracak şekilde hazırlanır. Yazılımınız yoksa kioskla birlikte kendi sıramatik yazılımımızı kurarız: online randevu, öncelikli sıra, banko yapısı ve banko ekranları, sanal ve fiziksel terminal, raporlar ve kullanıcı yönetimi içerir. Yazıcı ve okuyucuların yazılımla nasıl haberleşeceği kurulumdan önce netleştirilir."
      },
      {
        q: "Butonlu sıramatik ile dokunmatik sıramatik kiosk arasındaki fark nedir?",
        a: "Butonlu sıramatikte her hizmet için bir tuş bulunur; az sayıda hizmeti olan noktalar için yeterlidir. Dokunmatik sıramatik kioskta ekrandaki menüde çok sayıda birim listelenir ve hizmetler yazılımdan değiştirilir, tuş eklemek gerekmez. Yazılım destekliyorsa randevu sorgulama ve T.C. kimlik numarasıyla sıra alma da yapılır."
      },
      {
        q: "Sıramatik kiosk hangi kurumlarda kullanılır?",
        a: "Aynı anda çok kişinin hizmet beklediği her yerde: belediye, nüfus müdürlüğü, göç idaresi, hastane, aile sağlığı merkezi, banka, vergi dairesi ve noter gibi. Hastanede sıramatik sisteminin nasıl kurulduğunu ayrıntılı anlattık.",
        link: { href: "/kullanim-alanlari/hastane-kiosk/", label: "Hastane sıramatik sistemi" }
      },
      {
        q: "Sıramatik fiyatları neye göre değişir?",
        a: "Fiyat; ekran boyutuna, yazıcı, barkod/QR ve kimlik okuyucu gibi donanımlara ve adede göre değişir. Sıramatik yazılımı da bizden alınacaksa teklif yazılımı, fiziksel terminal ve banko ekranı sayısını da kapsar. İhtiyacınızı iletin, size özel teklif hazırlayalım.",
        link: { href: "/iletisim/", label: "Teklif isteyin" }
      }
    ],
    title: "Sıramatik Kiosk (Sıra Alma Makinesi) | Vectanom",
    h1: "Sıramatik Kiosk (Sıra Alma Makinesi)"
  },
  {
    slug: "haritalama-kiosk",
    type: "haritalama",
    name: "Haritalama & Navigasyon Kiosk",
    description: "Haritalama kiosku: bina içi yönlendirme, harita ve bilgilendirme. AVM, hastane, kampüs ve belediye için dikey, totem ya da yatay masa tipi (desk) gövde.",
    intro: "Haritalama kiosku, ziyaretçilere bina veya alan içinde yol tarifi, konum ve bilgi sunar. Kampüs, AVM ve hastanelerde yönlendirmeyi kolaylaştırır.",
    tags: [],
    features: [
      "Bina içi harita ve yönlendirme arayüzü",
      "Arama ve kategori bazlı konum bulma",
      "Girişler için ayaklı dikey ya da totem gövde, danışma bankosu için yatay masa tipi (desk) gövde",
      "Uzaktan harita ve içerik güncelleme"
    ],
    uses: [
      "AVM ve fuar alanı",
      "Hastane ve kampüs",
      "Belediye ve şehir rehberi"
    ],
    faq: [
      {
        q: "Haritamızı sizin için hazırlıyor musunuz?",
        a: "Alan planınıza göre harita arayüzünün hazırlanması konusunda birlikte çalışırız."
      },
      {
        q: "Masa tipi haritalama kiosku var mı?",
        a: "Evet. Danışma bankosu ve resepsiyon için haritalama arayüzü yatay masa tipi (desk) kiosk gövdesinde sunulur; girişler ve koridorlar için ayaklı dikey ya da totem gövde kullanılır."
      }
    ],
    title: "Haritalama & Navigasyon Kiosk | Vectanom Kiosk Konya",
    h1: "Haritalama & Navigasyon Kiosk"
  },
  {
    // "Self kiosk" ile aynı ürün; eski /urunler/self-kiosk/ adresi buraya 301 ile gelir.
    slug: "siparis-kiosk",
    type: "siparis",
    name: "Self Servis Sipariş Kiosku",
    description: "Self servis sipariş kiosku (self kiosk): restoran, kafe, fast food için görsel menü, sesli sipariş, POS ve QR ödeme, fiş yazıcısı ve adisyon entegrasyonu.",
    intro: "Restoran, kafe, fast food işletmeleri ve yemek katları için tasarlanan self servis sipariş kiosku, müşterilerin dokunmatik ekran üzerinden menüyü incelemesini, ürünlerini seçmesini ve siparişini hızlıca oluşturmasını sağlar. Dokunmatik sipariş kiosku, yoğun saatlerde sıra bekleme süresini azaltarak işletmelere daha hızlı ve pratik bir sipariş deneyimi sunar. Kısaca self kiosk olarak da anılır; Türkiye genelinde kurulum ve servis sağlıyoruz.",
    tags: [
      "POS",
      "QR Ödeme",
      "Yazıcı",
      "Sesli Sipariş"
    ],
    features: [
      "Görsel menü ve sipariş akışı",
      "Sesli sipariş özelliği",
      "POS ve QR ödeme entegrasyonu seçeneği",
      "Fiş yazıcısı",
      "Mutfak/adisyon sistemi ile entegrasyon",
      "Yerli üretim; marka renginde gövde ve reklam kaplama seçeneği"
    ],
    uses: [
      "Kafe ve restoran",
      "Fast-food ve büfe",
      "Pastane ve kahve zincirleri",
      "Kantin ve yemek katları"
    ],
    faq: [
      {
        q: "Mevcut adisyon programımıza bağlanır mı?",
        a: `Evet. ${siparisEntegrasyonlariMetni} ile entegre çalışır; farklı bir program için entegrasyon imkânını birlikte değerlendiririz.`
      },
      {
        q: "Self kiosk ile self servis sipariş kiosku aynı şey mi?",
        a: "Evet. Self kiosk, müşterinin kendi işlemini yaptığı kioskun kısa adıdır; kafe ve restoranda bu işlem sipariş ve ödeme olduğu için sipariş kiosku olarak adlandırılır."
      },
      {
        q: "Sipariş kiosku hangi işletmelere uygun?",
        a: "Yoğun saatlerde kasada sıra oluşan kafe, restoran, fast food, büfe, pastane ve kantinlere uygundur."
      }
    ],
    title: "Self Servis Sipariş Kiosku (Self Kiosk) – Vectanom",
    h1: "Self Servis Sipariş Kiosku"
  }
];
