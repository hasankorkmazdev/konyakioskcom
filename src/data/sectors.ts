export interface Sector {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  benefits: string[];
  recommended: string[];
  faq: { q: string; a: string }[];
}

export const sectors: Sector[] = [
  {
    slug: 'kafe-kiosk',
    name: 'Kafe Kiosk',
    title: 'Kafe Kiosk – Self Servis Sipariş | Vectanom Kiosk Konya',
    description: 'Kafeler için self-servis sipariş kiosku. Kuyruğu azaltın, sepet tutarını artırın, personel yükünü hafifletin. Konya kafe kiosk çözümleri.',
    h1: 'Kafe Kiosk: Kuyruksuz Sipariş, Daha Yüksek Sepet',
    intro: 'Yoğun saatlerde kasada oluşan kuyruk, müşteri kaybının en yaygın nedenidir. Kafe kiosku müşterinin siparişini kendisinin vermesini sağlar; kasiyer siparişi almakla değil hazırlamakla ilgilenir.',
    benefits: [
      'Yoğun saatlerde kuyruk azalır, sipariş hızlanır',
      'Ürün görselleri ve ek ürün önerileriyle sepet tutarı artabilir',
      'Sipariş hataları azalır; müşteri ne seçtiğini kendisi görür',
      'Menü ve kampanyalar kioskta anında güncellenir',
    ],
    recommended: ['yatay-kiosk'],
    faq: [
      { q: 'Kafe için hangi kiosk modeli uygun?', a: 'Menü görsellerini geniş gösterdiği için genellikle yatay ekranlı kiosk tercih edilir.' },
      { q: 'Küçük kafeler için de mantıklı mı?', a: 'Sipariş hacmi ve kasadaki yoğunluğa bağlıdır. İşletmenizi dinleyip size uygun modeli birlikte belirleriz.' },
    ],
  },
  {
    slug: 'bufe-kiosk',
    name: 'Büfe Kiosk',
    title: 'Büfe Kiosk – Hızlı Sipariş Sistemi | Vectanom Kiosk Konya',
    description: 'Büfe ve tezgah satışları için kiosk. Sipariş süresini kısaltın, tezgah verimini artırın. Konya büfe kiosk çözümleri.',
    h1: 'Büfe Kiosk: Tezgahta Hız ve Düzen',
    intro: 'Büfelerde aynı anda hem sipariş almak hem hazırlamak hız kaybettirir. Büfe kiosku sipariş alma yükünü müşteriye devrederek tezgah çalışanının yalnızca hazırlığa odaklanmasını sağlar.',
    benefits: [
      'Az yer kaplayan gövde ile dar alanlara uyum',
      'Sipariş fişi doğrudan hazırlık noktasına yazdırılabilir',
      'Kısa menülerde çok hızlı sipariş akışı',
      'Kasa hataları ve sipariş karışıklığı azalır',
    ],
    recommended: ['dikey-kiosk', 'yatay-kiosk'],
    faq: [
      { q: 'Büfe gibi küçük bir alana sığar mı?', a: 'Dikey model az yer kapladığı için dar alanlarda tercih edilir.' },
      { q: 'Sipariş fişi yazdırılabilir mi?', a: 'Evet. Fiş yazıcısı entegrasyonu ile siparişler hazırlık noktasına yazdırılabilir.' },
    ],
  },
  {
    slug: 'restoran-kiosk',
    name: 'Restoran Kiosk',
    title: 'Restoran Kiosk – Self Servis Sipariş | Vectanom Kiosk Konya',
    description: 'Restoranlar için sipariş kiosku. Masa devir hızını artırın, garson yükünü azaltın. Konya restoran kiosk çözümleri.',
    h1: 'Restoran Kiosk: Hızlı Sipariş, Rahat Servis',
    intro: 'Özellikle fast-food ve self-servis restoranlarda kiosk, sipariş sürecini hızlandırır ve personelin servis kalitesine odaklanmasını sağlar.',
    benefits: [
      'Siparişler doğrudan mutfağa iletilebilir',
      'Menü görselleri ve varyasyon seçenekleri sipariş doğruluğunu artırır',
      'Yoğun saatlerde sipariş kapasitesi yükselir',
      'Marka kimliğine uygun arayüz',
    ],
    recommended: ['yatay-kiosk'],
    faq: [
      { q: 'Restoran kiosku mutfak sistemiyle çalışır mı?', a: 'Kullandığınız adisyon/POS yazılımına bağlı olarak entegrasyon seçeneklerini birlikte değerlendiririz.' },
    ],
  },
  {
    slug: 'belediye-kiosk',
    name: 'Belediye Kiosk',
    title: 'Belediye Kiosk – Bilgilendirme ve Randevu | Vectanom Kiosk Konya',
    description: 'Belediyeler için bilgilendirme, sorgulama ve randevu kioskları. Vatandaş memnuniyetini artırın. Konya belediye kiosk çözümleri.',
    h1: 'Belediye Kiosk: Vatandaşa Hızlı Hizmet',
    intro: 'Belediye kioskları vatandaşların borç sorgulama, randevu alma, duyuru okuma ve yönlendirme gibi işlemleri sıra beklemeden yapmasını sağlar.',
    benefits: [
      'Yoğun hizmet noktalarında bekleme süresi azalır',
      'Duyuru ve kampanyalar merkezi olarak güncellenir',
      'Belediye yazılımlarıyla web tabanlı entegrasyon',
      'Klavyeli veya klavyesiz seçenekler',
    ],
    recommended: ['dikey-kiosk', 'klavyeli-kiosk'],
    faq: [
      { q: 'Teknik şartname konusunda destek veriyor musunuz?', a: 'Teknik özellikler ve şartname konusunda iletişim formu üzerinden bizimle görüşebilirsiniz.' },
      { q: 'Hangi model önerilir?', a: 'Sorgulama ve form ağırlıklı işlerde klavyeli, bilgilendirmede dikey model uygundur.' },
    ],
  },
  {
    slug: 'hizli-satis-kiosk',
    name: 'Hızlı Satış Kiosk',
    title: 'Hızlı Satış Kiosk – Self Servis Satış | Vectanom Kiosk Konya',
    description: 'Hızlı satış noktaları için self-servis kiosk. Kısa sürede çok sipariş alın. Konya hızlı satış kiosk çözümleri.',
    h1: 'Hızlı Satış Kiosk',
    intro: 'Sipariş süresinin kritik olduğu hızlı satış noktalarında kiosk, işlem sayısını artırır ve sıra oluşmasını önler.',
    benefits: [
      'Kısa menüde saniyeler içinde sipariş',
      'Kasa ve kiosk aynı anda çalışarak kapasiteyi artırır',
      'Sabit kampanya ve kombinasyon önerileri',
      'Dayanıklı gövde, yoğun kullanıma uygun',
    ],
    recommended: ['yatay-kiosk', 'dikey-kiosk'],
    faq: [
      { q: 'Hızlı satış için hangi kiosk?', a: 'Genellikle yatay 21 veya 24 inç ekranlı model yeterlidir. Kullanım senaryonuza göre öneri yaparız.' },
    ],
  },
];
