import type { Product } from '../types';
export type { KioskType, Product } from '../types';

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
    slug: "yatay-kiosk",
    type: "yatay",
    name: "Yatay Kiosk",
    title: "Yatay Kiosk 21, 24 ve 32 İnç | Vectanom Kiosk Konya",
    description: "Yatay dokunmatik kiosk modelleri. Sipariş, hızlı satış, bilgilendirme ve tanıtım uygulamaları için 21, 24 ve 32 inç yatay ekranlı kiosk.",
    h1: "Yatay (Landscape) Kiosk",
    intro: "Yatay kiosk, menü ve ürün görsellerini geniş bir alanda gösterdiği için sipariş, hızlı satış ve tanıtım uygulamalarında en çok tercih edilen formdur. Kafe, büfe ve restoranlar için doğal seçimdir.",
    tags: [
      "Yazıcı",
      "POS",
      "QR Okuyucu"
    ],
    features: [
      "Geniş yatay dokunmatik ekran",
      "Sipariş ve ödeme akışına uygun ergonomik yükseklik",
      "Fiş yazıcısı, POS ve QR okuyucu entegrasyon seçeneği",
      "Gün boyu kesintisiz çalışmaya uygun donanım",
      "Marka renklerinize uygun gövde ve arayüz tasarımı",
      "Zemine sabit veya masaüstü model"
    ],
    uses: [
      "Kafe ve restoran self-servis sipariş",
      "Büfe ve hızlı satış noktaları",
      "Alışveriş merkezi bilgilendirme",
      "Etkinlik ve fuar kayıt"
    ],
    faq: [
      {
        q: "Yatay kiosk hangi işletmeler için uygundur?",
        a: "Menü ve ürün görselinin geniş gösterilmesi gereken kafe, restoran, büfe ve hızlı satış işletmeleri için uygundur."
      },
      {
        q: "Ödeme cihazı bağlanabilir mi?",
        a: "Kullanacağınız POS veya ödeme altyapısına göre entegrasyon konusunda birlikte değerlendirme yaparız."
      },
      {
        q: "Yatay kioskun boyutları nelerdir?",
        a: "21, 24 ve 32 inç seçenekleri vardır."
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
    slug: "klavyeli-24-inc-kiosk",
    type: "klavyeli",
    name: "Klavyeli 24 İnç Kiosk",
    description: "24 inç dokunmatik ekranlı, klavyeli kiosk. Sorgulama, kayıt ve randevu işlemleri için hazır, kendi yazılımınızla çalışır.",
    h1: "Klavyeli 24 İnç Kiosk",
    intro: "24 inç dokunmatik ekran ve entegre klavye bir arada. Kimlik no, telefon ve arama gibi metin girişi gereken uygulamalar için en çok tercih edilen boyuttur.",
    tags: [
      "Entegre Klavye",
      "Yazıcı",
      "Barkod/QR Okuyucu",
      "Kamera"
    ],
    features: [
      "24 inç dokunmatik ekran",
      "Entegre fiziksel klavye",
      "Boyalı metal gövde, kablolar içeride",
      "Kiosk modunda çalışan Windows altyapısı",
      "İsteğe bağlı yazıcı, barkod/QR okuyucu ve kamera"
    ],
    uses: [
      "Belediye ve kamu hizmet noktaları",
      "Hastane kayıt ve sorgulama",
      "Okul ve üniversite",
      "Ziyaretçi kayıt"
    ],
    faq: [
      {
        q: "24 inç klavyeli kioskta kendi yazılımım çalışır mı?",
        a: "Evet. Kiosk Windows tabanlıdır; web veya masaüstü uygulamanız kiosk modunda çalıştırılabilir."
      }
    ],
    title: "Klavyeli 24 İnç Kiosk | Vectanom Kiosk Konya"
  },
  {
    slug: "desk-kiosk",
    type: "desk",
    name: "Desk Kiosk",
    description: "Masaüstü (desk) kiosk modelleri. Resepsiyon, danışma ve tezgah üstü kullanım için kompakt dokunmatik kiosk.",
    intro: "Desk kiosk, tezgah veya masa üzerine yerleştirilen kompakt bir modeldir. Resepsiyon, danışma ve kasa yanı kullanımlar için az yer kaplar.",
    tags: [
      "Yazıcı",
      "Barkod/QR Okuyucu",
      "Kart Okuyucu"
    ],
    features: [
      "Masa üstü, az yer kaplayan gövde",
      "Dokunmatik ekran",
      "Yazıcı, barkod/QR ve kart okuyucu seçeneği",
      "Kolay taşınır, hızlı kurulur"
    ],
    uses: [
      "Resepsiyon ve danışma",
      "Tezgah üstü sipariş ve bilgilendirme",
      "Ofis ve ziyaretçi kayıt"
    ],
    faq: [
      {
        q: "Desk kiosk zemine sabitlenir mi?",
        a: "Hayır, masa üstü kullanım içindir. Zemin tipi için ayaklı modellerimize bakabilirsiniz."
      }
    ],
    title: "Desk Kiosk | Vectanom Kiosk Konya",
    h1: "Desk Kiosk"
  },
  {
    slug: "self-kiosk",
    type: "self",
    name: "Self Kiosk",
    description: "Self servis kiosk: müşterinin kendi işlemini yaptığı dokunmatik kiosk. Kafe, büfe, restoran ve kamu noktaları için.",
    intro: "Self kiosk, müşterinin personele ihtiyaç duymadan kendi işlemini tamamlamasını sağlar. Bekleme süresini ve personel yükünü azaltır.",
    tags: [
      "Yazıcı",
      "POS",
      "QR Okuyucu"
    ],
    features: [
      "Self servis işlem akışına uygun arayüz",
      "Yazıcı, POS ve QR okuyucu seçeneği",
      "Gün boyu çalışmaya uygun donanım",
      "Marka renklerinize uygun tasarım"
    ],
    uses: [
      "Kafe ve restoran",
      "Büfe ve hızlı satış",
      "Belediye ve kamu hizmetleri"
    ],
    faq: [
      {
        q: "Self kiosk hangi işletmelere uygun?",
        a: "Yoğunlukta sıra oluşan, işlemi müşterinin kendisinin yapabileceği her işletmeye uygundur."
      }
    ],
    title: "Self Kiosk | Vectanom Kiosk Konya",
    h1: "Self Kiosk"
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
    title: "Totem Kiosk | Vectanom Kiosk Konya",
    h1: "Totem Kiosk"
  },
  {
    slug: "siramatik-kiosk",
    type: "siramatik",
    name: "Sıramatik Kiosk",
    description: "Sıramatik kiosk: fişli sıra alma ve randevu kiosku. Belediye, hastane, banka ve kamu kurumları için.",
    intro: "Sıramatik kiosk, ziyaretçinin hizmet türünü seçip fiş alarak sıraya girmesini sağlar. Kalabalığı düzenler, bekleme süresini yönetilebilir kılar.",
    tags: [
      "Termal Yazıcı"
    ],
    features: [
      "Dokunmatik hizmet seçimi",
      "Termal fiş yazıcısı",
      "Randevu ve kimlik doğrulama seçeneği",
      "Sıra yönetim yazılımı ile entegrasyon"
    ],
    uses: [
      "Belediye ve kamu kurumları",
      "Hastane ve poliklinik",
      "Banka ve hizmet merkezleri"
    ],
    faq: [
      {
        q: "Mevcut sıra sistemimizle çalışır mı?",
        a: "Sisteminizin kiosk kullanımına uygunluğunu birlikte değerlendiririz."
      }
    ],
    title: "Sıramatik Kiosk | Vectanom Kiosk Konya",
    h1: "Sıramatik Kiosk"
  },
  {
    slug: "haritalama-kiosk",
    type: "haritalama",
    name: "Haritalama & Navigasyon Kiosk",
    description: "Haritalama kiosku: bina içi yönlendirme, harita ve bilgilendirme. AVM, hastane, kampüs ve belediye için.",
    intro: "Haritalama kiosku, ziyaretçilere bina veya alan içinde yol tarifi, konum ve bilgi sunar. Kampüs, AVM ve hastanelerde yönlendirmeyi kolaylaştırır.",
    tags: [],
    features: [
      "Bina içi harita ve yönlendirme arayüzü",
      "Arama ve kategori bazlı konum bulma",
      "Geniş dikey dokunmatik ekran",
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
      }
    ],
    title: "Haritalama & Navigasyon Kiosk | Vectanom Kiosk Konya",
    h1: "Haritalama & Navigasyon Kiosk"
  },
  {
    slug: "siparis-kiosk",
    type: "siparis",
    name: "Self Servis Sipariş Kiosku",
    description: "Restoran, kafe ve fast food işletmeleri için self servis sipariş kiosku. Müşteri menüyü inceler, ürününü seçer, siparişini hızlıca oluşturur. Konya ve çevresi.",
    intro: "Restoran, kafe, fast food işletmeleri ve yemek katları için tasarlanan self servis sipariş kiosku, müşterilerin dokunmatik ekran üzerinden menüyü incelemesini, ürünlerini seçmesini ve siparişini hızlıca oluşturmasını sağlar. Dokunmatik sipariş kiosku, yoğun saatlerde sıra bekleme süresini azaltarak işletmelere daha hızlı ve pratik bir sipariş deneyimi sunar. Konya ve çevresinde restoran, kafe ve işletmeler için self servis kiosk çözümleri sunuyoruz.",
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
      "Mutfak/adisyon sistemi ile entegrasyon"
    ],
    uses: [
      "Kafe ve restoran",
      "Fast-food ve büfe",
      "Pastane ve kahve zincirleri"
    ],
    faq: [
      {
        q: "Mevcut adisyon programımıza bağlanır mı?",
        a: "Kullandığınız programın entegrasyon imkânlarına göre birlikte değerlendirme yapılır."
      }
    ],
    title: "Self Servis Sipariş Kiosku | Vectanom Kiosk Konya",
    h1: "Self Servis Sipariş Kiosku"
  }
];
