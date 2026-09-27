export type KioskType = 'yatay' | 'dikey' | 'klavyeli' | 'kutuphane';

export interface Product {
  slug: string;
  type: KioskType;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sizes: string[];
  features: string[];
  uses: string[];
  faq: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    slug: 'klavyeli-kiosk',
    type: 'klavyeli',
    name: 'Klavyeli Kiosk',
    title: 'Klavyeli Kiosk 21, 24 ve 32 İnç | Vectanom Kiosk Konya',
    description: '21, 24 ve 32 inç klavyeli kiosk modelleri. Bilgi sorgulama, randevu ve kayıt işlemleri için dokunmatik ekranlı, klavyeli kiosklar. Konya ve tüm Türkiye.',
    h1: 'Klavyeli Kiosk – 21, 24 ve 32 İnç',
    intro: 'Kullanıcıdan metin, T.C. kimlik no, telefon veya arama bilgisi alınması gereken uygulamalarda dokunmatik ekranın yanında fiziksel klavye kullanılması işlemleri hızlandırır. Vectanom klavyeli kiosk modelleri 21, 24 ve 32 inç ekran seçenekleriyle sunulur.',
    sizes: ['21 inç', '24 inç', '32 inç'],
    features: [
      'Dokunmatik ekran ve entegre klavye',
      'Sağlam, boyalı metal gövde',
      'Kablolar gövde içinde, kullanıcıya kapalı',
      'Kiosk modunda çalışan, kullanıcı müdahalesine kapalı yazılım altyapısı',
      'İstenirse yazıcı, barkod/QR okuyucu ve kamera entegrasyonu',
      'Zemine sabitlenebilir ayaklı veya masaüstü model seçeneği',
    ],
    uses: ['Belediye ve kamu hizmet noktaları', 'Hastane ve poliklinik kayıt', 'Okul, üniversite ve kütüphane', 'Kurumsal ziyaretçi kayıt', 'Bilgi ve sorgulama noktaları'],
    faq: [
      { q: 'Klavyeli kioskta hangi ekran boyutları var?', a: '21 inç, 24 inç ve 32 inç ekran seçenekleri mevcuttur. Kullanım alanına ve kullanıcı sayısına göre boyut seçimi konusunda size yardımcı oluruz.' },
      { q: 'Klavyeli kiosk ne zaman tercih edilmeli?', a: 'Kullanıcının isim, kimlik numarası, arama ifadesi veya form bilgisi girmesi gereken uygulamalarda klavyeli model daha hızlı ve rahat bir deneyim sunar.' },
      { q: 'Kendi yazılımımız çalışır mı?', a: 'Evet. Kiosk Windows tabanlı çalışır; web tabanlı veya masaüstü uygulamanız kiosk modunda çalıştırılabilir.' },
    ],
  },
  {
    slug: 'yatay-kiosk',
    type: 'yatay',
    name: 'Yatay Kiosk',
    title: 'Yatay Kiosk 21, 24 ve 32 İnç | Vectanom Kiosk Konya',
    description: 'Yatay dokunmatik kiosk modelleri. Sipariş, hızlı satış, bilgilendirme ve tanıtım uygulamaları için 21, 24 ve 32 inç yatay ekranlı kiosk.',
    h1: 'Yatay (Landscape) Kiosk',
    intro: 'Yatay kiosk, menü ve ürün görsellerini geniş bir alanda gösterdiği için sipariş, hızlı satış ve tanıtım uygulamalarında en çok tercih edilen formdur. Kafe, büfe ve restoranlar için doğal seçimdir.',
    sizes: ['21 inç', '24 inç', '32 inç'],
    features: [
      'Geniş yatay dokunmatik ekran',
      'Sipariş ve ödeme akışına uygun ergonomik yükseklik',
      'Fiş yazıcısı, POS ve QR okuyucu entegrasyon seçeneği',
      'Gün boyu kesintisiz çalışmaya uygun donanım',
      'Marka renklerinize uygun gövde ve arayüz tasarımı',
      'Zemine sabit veya masaüstü model',
    ],
    uses: ['Kafe ve restoran self-servis sipariş', 'Büfe ve hızlı satış noktaları', 'Alışveriş merkezi bilgilendirme', 'Etkinlik ve fuar kayıt'],
    faq: [
      { q: 'Yatay kiosk hangi işletmeler için uygundur?', a: 'Menü ve ürün görselinin geniş gösterilmesi gereken kafe, restoran, büfe ve hızlı satış işletmeleri için uygundur.' },
      { q: 'Ödeme cihazı bağlanabilir mi?', a: 'Kullanacağınız POS veya ödeme altyapısına göre entegrasyon konusunda birlikte değerlendirme yaparız.' },
      { q: 'Yatay kioskun boyutları nelerdir?', a: '21, 24 ve 32 inç seçenekleri vardır.' },
    ],
  },
  {
    slug: 'dikey-kiosk',
    type: 'dikey',
    name: 'Dikey Kiosk',
    title: 'Dikey Kiosk 21, 24 ve 32 İnç | Vectanom Kiosk Konya',
    description: 'Dikey (portrait) dokunmatik kiosk modelleri. Belediye, kamu, hastane ve bilgilendirme uygulamaları için 21, 24 ve 32 inç dikey kiosk.',
    h1: 'Dikey (Portrait) Kiosk',
    intro: 'Dikey kiosk, az yer kaplar ve liste, form veya harita gibi yukarıdan aşağıya akan içeriklerde çok iyi çalışır. Belediye, kamu ve bilgilendirme uygulamalarının standart tercihidir.',
    sizes: ['21 inç', '24 inç', '32 inç'],
    features: [
      'Dikey dokunmatik ekran, az yer kaplayan gövde',
      'Kullanım yüksekliği ve erişilebilirlik dikkate alınmış tasarım',
      'Yazıcı, kimlik/kart okuyucu ve kamera seçeneği',
      'Uzaktan içerik yönetimine uygun altyapı',
      'Kurulum yerine göre gövde seçenekleri için bizimle görüşün',
    ],
    uses: ['Belediye hizmet ve bilgilendirme noktaları', 'Hastane yönlendirme', 'Sıramatik ve randevu', 'Kampüs ve kurum içi rehber'],
    faq: [
      { q: 'Dikey kiosk ile yatay kiosk arasında nasıl seçim yapılır?', a: 'Sipariş ve görsel ağırlıklı işlerde yatay, liste, form ve bilgilendirme ağırlıklı işlerde dikey model daha uygundur.' },
      { q: 'Belediyeler için uygun mu?', a: 'Evet. Belediye ve kamu kurumlarında bilgilendirme, randevu ve sorgulama uygulamaları için sık kullanılır.' },
    ],
  },
  {
    slug: 'kutuphane-kiosk',
    type: 'kutuphane',
    name: 'Kütüphane Kiosk',
    title: 'Kütüphane Kiosk – Ödünç Alma ve İade | Vectanom Kiosk Konya',
    description: 'Kütüphane kiosk çözümleri: kitap ödünç alma, iade, üye sorgulama ve katalog tarama için dokunmatik ekranlı kiosk. Konya ve Türkiye geneli.',
    h1: 'Kütüphane Kiosk',
    intro: 'Kütüphane kiosku, kullanıcıların kitap ödünç alma, iade ve katalog sorgulama işlemlerini personele ihtiyaç duymadan yapmasını sağlar. Kütüphane otomasyon yazılımınızla birlikte kullanılabilecek şekilde hazırlanır.',
    sizes: ['21 inç', '24 inç', '32 inç'],
    features: [
      'Dokunmatik ekran ve barkod/QR okuyucu',
      'Üye kartı veya kimlik okuma seçeneği',
      'Fiş yazıcısı ile ödünç alma fişi',
      'Katalog tarama ve kullanıcı sorgulama arayüzü',
      'Kütüphane otomasyon yazılımı ile çalışacak şekilde kurulum desteği',
    ],
    uses: ['Halk ve il/ilçe kütüphaneleri', 'Üniversite kütüphaneleri', 'Okul kütüphaneleri', 'Kurum içi dokümantasyon merkezleri'],
    faq: [
      { q: 'Mevcut kütüphane otomasyonumuzla çalışır mı?', a: 'Otomasyon yazılımınızın kiosk kullanımına uygunluğunu birlikte değerlendiririz. Çoğu web tabanlı sistem kiosk modunda çalıştırılabilir.' },
      { q: 'Barkod okuyucu dahil mi?', a: 'Barkod/QR okuyucu seçenek olarak eklenir; ihtiyacınıza göre yapılandırılır.' },
    ],
  },
];
