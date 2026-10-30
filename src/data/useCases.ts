import type { UseCase } from '../types';
import { siparisEntegrasyonlari, siparisEntegrasyonlariMetni } from './products';
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
    title: 'Restoran Self Servis Sipariş Kiosku (Self Order Kiosk)',
    description: 'Restoran, kafe ve fast food için self servis sipariş kiosku: sesli sipariş, kart, yemek kartı ve nakit ödeme, adisyon entegrasyonu, 2 yıl garanti.',
    h1: 'Self Servis Sipariş Kiosku (Self Order Kiosk): Restoran, Kafe ve Fast Food İçin',
    intro: 'Self servis sipariş kiosku (self order kiosk), müşterinin dokunmatik ekrandan menüyü inceleyip siparişini ve ödemesini kasaya uğramadan tamamladığı cihazdır. Yoğun saatlerde kuyruğu kısaltır, kasadaki personeli hazırlık ve servise kaydırır. Vectanom self servis sipariş kioskları sesli sipariş, kart, yemek kartı ve nakit dahil farklı ödeme seçenekleri ve mevcut adisyon programınızla entegrasyonla gelir; Konya merkezli ekibimiz Türkiye geneline gönderir ve kurar.',
    sections: [
      {
        heading: 'Self servis sipariş kiosku nasıl çalışır?',
        ordered: true,
        list: [
          'Müşteri ekrana dokunur ya da konuşarak siparişe başlar.',
          'Kategorilerden ürünlerini seçer; boyut, ekstra malzeme ve menü seçeneklerini belirler.',
          'Sepetini kontrol eder; ekranda önerilen yan ürün ya da içecekleri ekleyebilir.',
          'Seçtiği yöntemle ödemesini yapar: kart, temassız, QR, yemek kartı veya nakit.',
          'Fişini ve sipariş numarasını alır.',
          'Sipariş adisyon programınıza ve mutfağa iletilir; personelin tekrar girmesi gerekmez.',
        ],
      },
      {
        heading: 'Restoranınıza ne kazandırır?',
        list: [
          { label: 'Daha kısa kuyruk', text: 'Birden fazla müşteri aynı anda sipariş verebilir; kasa tek darboğaz olmaktan çıkar.' },
          { label: 'Daha az sipariş hatası', text: 'Müşteri ne seçtiğini ekranda kendisi gördüğü için yanlış anlama azalır.' },
          { label: 'Daha yüksek sepet tutarı', text: 'Ürün görselleri ve ek ürün önerileri, müşterinin sepetine bir şey daha eklemesini kolaylaştırır.' },
          { label: 'Personel verimliliği', text: 'Kasada sipariş alan çalışan, hazırlık ve servise geçebilir.' },
          { label: 'Güncel menü', text: 'Menü, fiyat ve kampanyalar kioskta anında güncellenir.' },
        ],
      },
      {
        heading: 'Sesli sipariş: müşteri konuşarak sipariş verir',
        paragraphs: [
          'Vectanom kiosklarda sesli sipariş özelliği bulunur. Müşteri ekrana dokunmadan, konuşarak siparişini oluşturabilir. Sesli sipariş her dilde çalışır; yabancı turistlerin geldiği restoranlarda ve ekran kullanmakta zorlanan müşteriler için ciddi kolaylık sağlar.',
          'Kioskta çift mikrofon, gürültü azaltma ve yakın alan ses algılama bulunur; bu sayede kalabalık bir salonda da ekranın önündeki müşterinin sesi anlaşılır. 2 x 5W hoparlör ile kiosk müşteriye sesli yanıt verir.',
        ],
      },
      {
        heading: 'Adisyon ve POS programınızla entegre çalışır',
        paragraphs: ['Kiosk almak için mevcut sisteminizi değiştirmeniz gerekmez. Vectanom self servis sipariş kiosku şu adisyon ve POS sistemleriyle entegre çalışır:'],
        list: siparisEntegrasyonlari,
        after: ['Kioskta verilen sipariş, kasada açılan sipariş gibi programınıza aktarılır. Listede olmayan bir program kullanıyorsanız entegrasyon imkânını birlikte değerlendiririz.'],
      },
      {
        heading: 'Ödeme seçenekleri',
        paragraphs: ['Ödeme yöntemleri işletmenizin tercihine göre belirlenir ve çeşitlendirilebilir:'],
        list: [
          { label: 'Kartlı ödeme', text: 'EMV uyumlu fiziksel POS (Pavo, Ingenico)' },
          { label: 'Temassız ödeme', text: 'NFC ile' },
          'QR ödeme ve sanal POS',
          { label: 'Yemek kartları', text: 'Pluxee (Sodexo), Metropolcard ve benzerleri' },
          'Nakit ödeme',
          { label: 'Fiş ve sipariş numarası', text: 'Fiş yazıcısı ile' },
        ],
      },
      {
        heading: 'Teknik özellikler (ayaklı model)',
        table: {
          head: ['Özellik', 'Değer'],
          rows: [
            ['Ekran', '21.5 inç IPS, 1920 x 1080 Full HD, 16:9'],
            ['Parlaklık', '450–500 nit, yansımayı azaltan (anti-glare) ön cam'],
            ['Dokunmatik', 'Kapasitif (PCAP), 10 noktalı, temperli ve çizilmeye dayanıklı cam'],
            ['Eldiven ile kullanım', 'İsteğe bağlı'],
            ['Ses', 'Çift mikrofon, gürültü azaltma, yakın alan ses algılama, 2 x 5W hoparlör'],
            ['Ödeme (tercihe göre)', 'EMV uyumlu fiziksel POS (Pavo, Ingenico), NFC temassız, QR / sanal POS, yemek kartları, nakit'],
            ['Bilgisayar', 'Endüstriyel mini PC veya Android Box'],
            ['Gövde', 'Metal'],
            ['Çalışma', '7/24 kullanıma uygun'],
            ['Toplam yükseklik', '1550–1650 mm'],
            ['Genişlik / derinlik', '480–520 mm / 120–160 mm'],
            ['Ekran merkezi yerden', '1300–1400 mm'],
            ['Kart okuyucu yüksekliği', '900–1050 mm'],
          ],
        },
        after: ['Ölçüler kurulum yerine göre uyarlanabilir. 24 ve 32 inç ekran seçenekleri de sunulur.'],
      },
      {
        heading: 'Ayaklı mı, masa üstü mü?',
        list: [
          { label: 'Ayaklı model', text: 'Girişte ya da kasa önünde tek başına duran sipariş noktası. Fast food restoranları ve yemek katları için en yaygın tercih.' },
          { label: 'Masa üstü model', text: 'Tezgâh veya masa üzerine yerleştirilir, az yer kaplar. Kafe, pastane, kahve dükkânı ve dar alanlı işletmelere uygundur.' },
        ],
        after: ['Gövde rengi ve giydirmesi markanıza göre hazırlanır.'],
      },
      {
        heading: 'Hangi işletmeler için uygun?',
        list: [
          'Fast food ve hamburger restoranları',
          'Kafe, kahve zincirleri ve pastaneler',
          'Pizza, döner ve paket servis ağırlıklı restoranlar',
          'AVM yemek katları',
          { text: 'Okul, üniversite, hastane ve fabrika kantinleri', href: '/kantin-siparis-ve-satis-kiosku-nedir/' },
        ],
      },
      {
        heading: 'Kurulum, garanti ve destek',
        list: [
          { label: 'Kurulum', text: 'Sipariş onayından sonra yaklaşık 15 gün' },
          { label: 'Garanti', text: '2 yıl' },
          { label: 'Destek', text: 'Konya merkezli teknik destek; Türkiye geneline sevkiyat' },
        ],
      },
      {
        heading: 'Self servis sipariş kiosku fiyatı neye göre değişir?',
        paragraphs: ['Fiyat; ekran boyutuna, ayaklı ya da masa üstü olmasına, ödeme seçeneklerine (POS, NFC, QR, yemek kartı, nakit), yazıcıya, sesli sipariş özelliğine ve adede göre değişir. İşletmenizi, günlük sipariş yoğunluğunuzu ve kullandığınız adisyon programını iletin, size özel teklif hazırlayalım.'],
      },
    ],
    recommended: ['siparis-kiosk', 'self-kiosk', 'yatay-kiosk'],
    faq: [
      { q: 'Self servis sipariş kiosku nedir?', a: 'Müşterinin personele ihtiyaç duymadan menüden ürün seçip siparişini ve ödemesini kendisinin tamamladığı dokunmatik ekranlı cihazdır.' },
      { q: 'Mevcut adisyon programımızla çalışır mı?', a: `${siparisEntegrasyonlariMetni} ile entegre çalışır. Farklı bir program kullanıyorsanız entegrasyon imkânını birlikte değerlendiririz.` },
      { q: 'Sesli sipariş hangi dillerde çalışır?', a: 'Sesli sipariş her dilde çalışır; müşteri kendi dilinde konuşarak sipariş verebilir.' },
      { q: 'Hangi ödeme yöntemleri kullanılabilir?', a: 'Tercihe göre EMV uyumlu POS (Pavo, Ingenico) ile kartlı ödeme, NFC ile temassız ödeme ve isteğe bağlı QR ödeme kullanılabilir. Nakit, yemek kartları, fiziksel POS ve sanal POS ile ödeme seçenekleri çeşitlendirilebilir.' },
      { q: 'Yemek kartı ile ödeme alınabilir mi?', a: 'Evet. Pluxee (Sodexo), Metropolcard ve benzeri yemek kartlarıyla ödeme alınabilir.' },
      { q: 'Kurulum ne kadar sürer?', a: 'Sipariş onayından sonra yaklaşık 15 gün içinde kiosk teslim edilir ve kurulur.' },
      { q: 'Garanti süresi nedir?', a: 'Kiosklarımız 2 yıl garantilidir.' },
      { q: 'Restoran, kafe ve fast food için aynı kiosk mu kullanılır?', a: 'Temel yapı aynıdır. Menü büyüklüğüne, alan durumuna ve ödeme ihtiyacına göre ayaklı veya masa üstü model ve ekran boyutu seçilir.' },
      { q: 'Self servis sipariş kiosku fiyatı nedir?', a: 'Fiyat; ekran boyutu, model, ödeme seçenekleri ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'belediye-siramatik-kiosku',
    name: 'Belediye Sıramatik Kioskları',
    title: 'Belediye Sıramatik ve Tahsilat Kiosku | Vectanom Konya',
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
    name: 'Hastane Sıramatik ve Kiosk Sistemi',
    title: 'Hastane Sıramatik Sistemi ve Sıramatik Kiosk | Vectanom',
    description: 'Sıramatik kiosk ve sıramatik yazılımı nedir, hastanede nasıl çalışır? Poliklinik, laboratuvar ve vezne için HBYS ile çalışan sıramatik kiosk.',
    h1: 'Hastane Sıramatik Sistemi: Sıramatik Kiosk ve Hasta Çağırma',
    intro: 'Hastane sıramatik sistemi, hastaya kiosktan sıra numarası veren ve sırası gelen hastayı ekran ve sesli anonsla ilgili odaya çağıran sıra yönetim sistemidir. Poliklinik, hasta kabul, kan alma, radyoloji ve vezne gibi yoğun noktalarda kuyruğu düzene sokar. Vectanom olarak sistemin hastanın kullandığı parçası olan sıramatik kiosku üretiyoruz; kioskları hastanenizin HBYS veya hasta çağırma yazılımıyla birlikte çalışacak şekilde hazırlıyor, Konya merkezli ekibimizle Türkiye geneline gönderiyoruz.',
    sections: [
      {
        heading: 'Sıramatik nedir?',
        paragraphs: [
          'Sıramatik, hizmet almak için bekleyen kişilere sıra numarası veren ve bu numaraları sırası geldiğinde ekranda gösterip sesli anonsla çağıran elektronik sıra yönetim sistemidir. Halk arasında sıra alma makinesi ya da numaratör olarak da bilinir. Kişi kuyrukta ayakta beklemek yerine numarasını alır, oturur ve çağrıldığında ilgili bankoya veya odaya gider.',
          'Sıramatik; hastane, aile sağlığı merkezi, banka, belediye, vergi dairesi ve noter gibi aynı anda çok sayıda kişinin hizmet beklediği yerlerde kullanılır. Hastanelerde aynı sistem çoğu zaman hasta çağırma sistemi adıyla anılır.',
        ],
      },
      {
        heading: 'Sıramatik sistemi hangi parçalardan oluşur?',
        list: [
          { label: 'Sıramatik kiosk', text: 'Hastanın hizmet seçip sıra fişini aldığı dokunmatik ekranlı cihaz.' },
          { label: 'Sıramatik yazılımı', text: 'Sıra numaralarını üreten, birimlere dağıtan, çağrıları yöneten ve raporlayan yazılım.' },
          { label: 'Çağrı terminali', text: 'Hekimin veya görevlinin sıradaki hastayı çağırdığı tuşlu cihaz ya da bilgisayardaki çağırma ekranı.' },
          { label: 'Ana ekran', text: 'Bekleme salonunda çağrılan numarayı ve gidilecek odayı ya da bankoyu gösteren büyük ekran.' },
          { label: 'Oda ve banko ekranları', text: 'Poliklinik kapısında veya bankonun üstünde, o noktaya çağrılan numarayı gösteren küçük ekranlar.' },
          { label: 'Sesli anons', text: 'Çağrıyı zil sesi ve anonsla duyuran hoparlör sistemi.' },
        ],
        after: ['Bu parçalar kablolu ya da kablosuz ağ üzerinden haberleşir. Yazılım merkezde çalışır; kiosk, ekranlar ve terminaller yazılımın verdiği bilgiyi gösterir ya da yazılıma komut gönderir.'],
      },
      {
        heading: 'Sıramatik kiosk nedir?',
        paragraphs: [
          'Sıramatik kiosk, sıramatik sisteminin hastanın kullandığı ön yüzüdür. Hasta dokunmatik ekrandan gitmek istediği birimi seçer, kiosk termal yazıcıdan sıra fişini basar. Fişte genellikle sıra numarası, birim veya poliklinik adı, tarih ve saat yer alır; yazılıma göre önünde bekleyen kişi sayısı da yazdırılabilir.',
          'Hastanelerde sıramatik kiosk yalnızca fiş vermekle kalmaz. Entegrasyona göre hasta T.C. kimlik numarasını girerek ya da randevu barkodunu okutarak kendini tanıtır; kiosk randevusunu bulur ve hastayı doğru polikliniğin sırasına alır. Bu akış kurulduğunda hasta, sıra almak için önce kayıt bankosunda beklemez.',
        ],
      },
      {
        heading: 'Butonlu sıramatik ile dokunmatik sıramatik kiosk arasındaki fark',
        list: [
          { label: 'Butonlu sıramatik', text: 'Her hizmet için bir tuş bulunur. Az sayıda hizmeti olan ve hastayı tanımaya gerek olmayan noktalar için yeterlidir.' },
          { label: 'Dokunmatik sıramatik kiosk', text: 'Ekrandaki menüde onlarca poliklinik ve birim listelenebilir; hizmetler yazılımdan değiştirilir, tuş eklemek gerekmez. Yazılım destekliyorsa randevu sorgulama, T.C. kimlik numarasıyla giriş ve farklı dil seçenekleri de sunulur.' },
        ],
        after: ['Çok sayıda polikliniği ve birimi olan hastaneler için dokunmatik sıramatik kiosk daha uygundur.'],
      },
      {
        heading: 'Sıramatik yazılımı nedir?',
        paragraphs: [
          'Sıramatik yazılımı, sistemin beynidir. Hangi birimin hangi numara serisini kullanacağını, kimin önce çağrılacağını, hangi ekranda ne görüneceğini belirler ve tüm işlemleri kayıt altına alır. Hastanelerde sıramatik yazılımı ya hastane bilgi yönetim sisteminin (HBYS) bir modülüdür ya da HBYS ile entegre çalışan ayrı bir yazılımdır. Hekim, sıradaki hastayı çoğu zaman doğrudan HBYS ekranından çağırır.',
          'Bir hastane sıramatik yazılımında genellikle şu özellikler bulunur:',
        ],
        list: [
          { label: 'Birim ve sıra tanımı', text: 'Poliklinik, laboratuvar, radyoloji ve vezne için ayrı sıra serileri (A, B, C gibi) ve çalışma saatleri' },
          { label: 'Randevu entegrasyonu', text: "MHRS'den veya hastanenin kendi kanallarından alınan randevuyu tanıyıp hastayı doğru sıraya alma" },
          { label: 'Öncelikli sıra', text: 'Mevzuatta öncelik hakkı tanınan hastaların sırasını ayrı yönetme' },
          { label: 'Çağırma ve yönlendirme', text: 'Sıradaki hastayı çağırma, çağrıyı tekrarlama, gelmeyen hastayı atlama ve hastayı başka birimin sırasına aktarma' },
          { label: 'Ekran ve anons yönetimi', text: 'Ana ekran ve oda ekranlarında gösterilecek bilgiler, kayan yazı duyuruları ve anons ayarları' },
          { label: 'Raporlama', text: 'Birim ve hekim bazında hasta sayısı, ortalama bekleme süresi ve işlem süresi' },
          { label: 'Cihaz izleme', text: 'Yazıcı kâğıdı azaldığında veya bir kiosk çalışmadığında uyarı' },
        ],
        after: ['Bazı yazılımlar, sırası yaklaşan hastaya SMS gönderme ya da mobil uygulamadan sıra takibi gibi ek özellikler de sunar.'],
      },
      {
        heading: 'Hastanede sıramatik sistemi nasıl çalışır?',
        ordered: true,
        list: [
          'Hasta, hastane girişindeki ya da birim önündeki sıramatik kioska gelir.',
          'T.C. kimlik numarasını girer, randevu barkodunu okutur ya da gideceği birimi ekrandan seçer.',
          'Sıramatik yazılımı, HBYS ile entegrasyon varsa hastanın randevu ve kayıt bilgisini kontrol eder ve hastayı ilgili birimin sırasına ekler.',
          'Kiosk, sıra numarasının ve gidilecek birimin yazılı olduğu fişi termal yazıcıdan verir.',
          'Hasta bekleme salonuna geçer ve ana ekranda çağrılan numaraları takip eder.',
          'Hekim veya görevli, HBYS ekranından ya da çağrı terminalinden sıradaki hastayı çağırır.',
          'Numara ana ekranda ve oda ekranında görünür, sesli anons yapılır; hasta ilgili odaya ya da bankoya gider.',
          'Muayeneden sonra tahlil, görüntüleme veya ödeme gerekiyorsa hasta laboratuvar, radyoloji ya da vezne sırasına yönlendirilir.',
        ],
      },
      {
        heading: 'Hastanede sıramatik nerelerde kullanılır?',
        list: [
          { label: 'Hasta kabul ve kayıt', text: 'Kayıt bankolarına gelen hastaların sırası' },
          { label: 'Poliklinikler', text: 'Hekim odası önündeki muayene sırası' },
          { label: 'Kan alma ve laboratuvar', text: 'Tahlil için numune verme sırası' },
          { label: 'Radyoloji', text: 'Röntgen, ultrason, tomografi ve MR çekim sırası' },
          { label: 'Vezne', text: 'Ödeme işlemleri' },
          { label: 'Hastane eczanesi', text: 'İlaç teslim sırası' },
          'Aile sağlığı merkezleri, ağız ve diş sağlığı merkezleri, özel poliklinikler ve tıp merkezleri',
          { text: 'Hastane içinde yol tarifi için bilgilendirme ve yönlendirme kioskları', href: '/kullanim-alanlari/bilgilendirme-kiosku/' },
        ],
      },
      {
        heading: 'Sıramatik sistemi hastaneye ne kazandırır?',
        list: [
          { label: 'Düzenli bekleme salonu', text: 'Hastalar kapı önünde ya da bankoda ayakta beklemez; numarasını alıp oturarak bekler.' },
          { label: 'Adil sıra', text: 'Hasta geliş sırasına ve randevu saatine göre çağrılır; sıra tartışmaları azalır.' },
          { label: 'Daha az personel yükü', text: 'Görevliler sıra ve yönlendirme sorularıyla daha az uğraşır, asıl işlerine odaklanır.' },
          { label: 'Hasta mahremiyeti', text: 'Çağrı ekranında hastanın adı yerine sıra numarası gösterilebilir.' },
          { label: 'Ölçülebilir hizmet', text: 'Bekleme ve işlem süreleri raporlanır; hangi poliklinikte ne zaman yoğunluk olduğu görülür, hekim ve personel planlaması buna göre yapılır.' },
        ],
      },
      {
        heading: 'Öncelikli hastalar sıramatikte nasıl yönetilir?',
        paragraphs: [
          "Sağlık Bakanlığı'nın 2024/11 sayılı Poliklinik Hizmetlerinde Öncelik Sırası Genelgesi; acil vakalar, engelli hastalar, hamileler, 65 yaş üstü hastalar, 7 yaşından küçük çocuklar, şehit yakınları ve gaziler gibi gruplara poliklinik muayenesinde öncelik tanır. Sıramatik yazılımında bu hastalar için ayrı bir öncelikli sıra tanımlanır ve çağrı sırasında öne alınır.",
          'Kioskta öncelikli hastalar için ayrı bir seçenek bulunabilir; entegrasyon varsa öncelik, hastanın kayıt bilgisine göre yazılım tarafından da verilebilir.',
        ],
      },
      {
        heading: 'Hasta mahremiyeti ve KVKK',
        paragraphs: [
          "Sağlık verileri, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (KVKK) göre özel nitelikli kişisel veridir. Bekleme salonundaki ekranda hastanın tam adının poliklinik adıyla birlikte görünmesi, başkalarının hastanın hangi bölümde muayene olacağını öğrenmesine yol açabilir. Sağlık Bakanlığı'nın kalite standartları da sağlık tesisinin her alanında mahremiyetin sağlanmasını ister.",
          'Bu nedenle çağrı ekranında tam ad yerine sıra numarası ya da ad ve soyadın baş harfleri gösterilebilir. Ekranda hangi bilginin görüneceği sıramatik yazılımında ayarlanır; kararı hastanenin KVKK ve kalite birimleri verir.',
        ],
      },
      {
        heading: 'Sıramatik kiosk hangi yazılımla çalışır?',
        paragraphs: [
          "Vectanom sıramatik kioskun donanımını üretir. Sıramatik yazılımı, hastanenizin kullandığı HBYS'nin sıramatik modülünden ya da anlaştığınız sıramatik yazılım firmasından gelir. Kiosk, yazılım firmanızın kiosk uygulamasını veya web tabanlı sıra alma ekranını çalıştıracak şekilde hazırlanır.",
          'Kiosk, kiosk modunda çalışır: hasta yalnızca sıra alma ekranını görür, masaüstüne veya başka uygulamalara erişemez. Yazıcı, barkod okuyucu ve kimlik okuyucu gibi donanımların yazılımla nasıl haberleşeceği kurulumdan önce yazılım firmanızla birlikte netleştirilir.',
        ],
      },
      {
        heading: 'Hastane sıramatik kiosku donanım seçenekleri',
        table: {
          head: ['Özellik', 'Seçenek'],
          rows: [
            ['Ekran', '21, 24 veya 32 inç dokunmatik ekran'],
            ['Sıra fişi', 'Termal yazıcı'],
            ['T.C. kimlik numarası girişi', 'Dokunmatik ekran veya entegre fiziksel klavye'],
            ['Randevu ve etiket okuma', 'Barkod / QR okuyucu'],
            ['Kimlik doğrulama', 'Kimlik / kart okuyucu'],
            ['Kamera', 'İsteğe bağlı'],
            ['Gövde', 'Sağlam, boyalı metal gövde; kablolar gövde içinde'],
            ['Model', 'Ayaklı (zemine sabitlenebilir) veya masa üstü'],
          ],
        },
        after: ['Model ve donanım; kioskun konacağı yere, günlük hasta sayısına ve kullandığınız yazılımın gerekliliklerine göre birlikte seçilir.'],
      },
      {
        heading: 'Hastane sıramatik kiosku fiyatı neye göre değişir?',
        paragraphs: ['Fiyat; ekran boyutuna, dikey veya klavyeli model tercihine, yazıcı, barkod/QR okuyucu ve kimlik okuyucu gibi donanımlara ve adede göre değişir. Sıramatik yazılımı hastanenizin yazılım firmasından sağlandığı için teklifimiz kiosk donanımını kapsar. Hastanenizi, kioskun kullanılacağı birimleri ve kullandığınız HBYS veya sıramatik yazılımını iletin, size özel teklif hazırlayalım.'],
      },
    ],
    recommended: ['siramatik-kiosk', 'dikey-kiosk', 'klavyeli-kiosk'],
    faq: [
      { q: 'Sıramatik nedir?', a: 'Hizmet bekleyen kişilere sıra numarası veren ve sırası gelen numarayı ekran ve sesli anonsla çağıran elektronik sıra yönetim sistemidir. Hastanelerde hasta çağırma sistemi olarak da bilinir.' },
      { q: 'Sıramatik kiosk nedir?', a: 'Hastanın dokunmatik ekrandan birim seçtiği ya da T.C. kimlik numarası veya randevu barkoduyla kendini tanıttığı ve termal yazıcıdan sıra fişi aldığı cihazdır. Sıramatik sisteminin hastanın kullandığı parçasıdır.' },
      { q: 'Sıramatik yazılımı nedir?', a: "Sıra numaralarını üreten, birimlere dağıtan, çağrıları ve ekranları yöneten, bekleme ve işlem sürelerini raporlayan yazılımdır. Hastanelerde genellikle HBYS'nin bir modülüdür ya da HBYS ile entegre çalışır." },
      { q: 'Hastane sıramatik sistemi nasıl çalışır?', a: 'Hasta kiosktan sıra numarası alır ve bekleme salonuna geçer. Hekim veya görevli sıradaki hastayı HBYS ekranından ya da çağrı terminalinden çağırır; numara ekranda görünür, sesli anons yapılır ve hasta ilgili odaya gider.' },
      { q: 'Sıramatik ile hemşire çağrı sistemi aynı şey mi?', a: 'Hayır. Sıramatik, poliklinik ve banko önündeki bekleme sırasını yönetir. Hemşire çağrı sistemi ise serviste yatan hastanın yatağının başındaki butonla hemşireyi çağırmasını sağlar.' },
      { q: 'Sıramatik yazılımını da siz mi sağlıyorsunuz?', a: 'Kiosk donanımını sağlıyoruz; sıramatik yazılımı hastanenizin kullandığı HBYS veya yazılım firması üzerinden çalışır. Kioskları bu yazılımla birlikte çalışacak şekilde hazırlarız.' },
      { q: 'Mevcut HBYS veya hasta çağırma yazılımımızla çalışır mı?', a: 'Yazılımın kiosk ve yazıcı entegrasyon imkânlarına göre yazılım firmanızla birlikte değerlendirme yapılır.' },
      { q: 'Kiosk T.C. kimlik numarası veya randevu barkoduyla çalışır mı?', a: 'Dokunmatik ekran veya entegre klavyeyle T.C. kimlik numarası girilebilir; barkod/QR okuyucu ve kimlik/kart okuyucu seçenekleri vardır. Hangi yöntemin kullanılacağını hastanenin sıramatik yazılımı belirler.' },
      { q: 'Çağrı ekranında hastanın adı görünür mü?', a: 'Bu, sıramatik yazılımındaki ayara bağlıdır. Hasta mahremiyeti için ekranda tam ad yerine sıra numarası ya da baş harfler gösterilebilir.' },
      { q: 'Hangi ekran boyutu önerilir?', a: '21, 24 ve 32 inç dokunmatik ekran seçenekleri vardır. Kullanım alanına göre birlikte belirleriz.' },
      { q: 'Hastane sıramatik kiosku fiyatı nedir?', a: 'Fiyat; ekran boyutu, model, donanım (yazıcı, okuyucu, klavye) ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'havalimani-check-in-kiosku',
    name: 'Havalimanı Check-in ve Bilet Kioskları',
    title: 'Havalimanı Check-in ve Uçak Bileti Kiosku | Vectanom',
    description: 'Havalimanı ve havaalanları için self servis check-in ve uçak bileti alma kiosku. Yolcular kayıt ve bilet işlemlerini sıra beklemeden kendi yapar.',
    h1: 'Havalimanı Check-in ve Uçak Bileti Alma Kiosku',
    intro: 'Havalimanı ve havaalanlarında check-in kiosku, yolcuların kayıt (check-in) ve uçak bileti alma işlemlerini gişede sıra beklemeden kendi başlarına yapabilmesini sağlar. Dokunmatik ekranda yolcu rezervasyonunu veya bilet kodunu girer ya da QR/barkod okuyucuyla okutur, kimlik okuma ve yazıcı ile bilet çıktısı seçenekleriyle işlemini tamamlar. Check-in ve bilet yazılımı havayolu ya da yer hizmetleri sisteminden sağlanır, kiosk donanımı bu sistemle çalışacak şekilde hazırlanır.',
    benefits: [
      'Yolcu check-in ve uçak bileti işlemini gişe beklemeden kendisi yapar',
      'Gişe personelinin yükü azalır, yoğun saatlerde kuyruk kısalır',
      'QR/barkod okuyucu ile rezervasyon veya bilet kodu okuma',
      'Kimlik/kart okuyucu ve kamera seçeneği',
      'Yazıcı ile bilet çıktısı seçeneği',
    ],
    recommended: ['dikey-kiosk', 'klavyeli-kiosk'],
    faq: [
      { q: 'Check-in kiosku nedir?', a: 'Yolcunun uçuş kaydını (check-in) ve uçak bileti işlemlerini gişeye gitmeden kendi başına yaptığı dokunmatik ekranlı self servis cihazdır.' },
      { q: 'Havayolu veya yer hizmetleri yazılımıyla çalışır mı?', a: 'Check-in ve bilet yazılımı havayolu ya da yer hizmetleri sisteminden gelir. Kiosk donanımını yazılımın entegrasyon imkânlarına göre birlikte değerlendiririz.' },
      { q: 'Kimlik veya pasaport okuma yapılabilir mi?', a: 'Kimlik/kart okuyucu ve kamera seçenekleri proje ihtiyacına göre değerlendirilir.' },
      { q: 'Check-in kiosku fiyatı nedir?', a: 'Fiyat; ekran boyutu, donanım (yazıcı, okuyucu, kamera) ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'kutuphane-kiosku',
    name: 'Kütüphane Kioskları',
    title: 'Kütüphane Kiosku: Kitap İade ve Ödünç Alma | Vectanom',
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
      { q: 'Kütüphane kiosku otomasyon programımıza entegre edilebilir mi?', a: 'Otomasyon yazılımının entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'Kütüphane kiosku fiyatı nedir?', a: 'Fiyat; ekran boyutu, donanım ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'bilgilendirme-kiosku',
    name: 'Bilgilendirme Kioskları',
    title: 'Bilgilendirme Kiosku: Harita, Yönlendirme, Mezarlık Bilgi',
    description: 'Bina içi yönlendirme, harita ve mezar yeri sorgulama için bilgilendirme kioskları. Dikey dokunmatik ekranlı, içeriği uzaktan güncellenen modeller.',
    h1: 'Bilgilendirme Kiosku: Bilgi, Harita, Yönlendirme ve Mezarlık Bilgi',
    intro: 'Bilgilendirme kioskları; hastane, belediye, okul, alışveriş merkezi ve kurumsal binalarda ziyaretçilerin aradığı birimi, kişiyi veya hizmeti kendi başına bulmasını sağlar. Haritalama kiosku bina içi yönlendirme yapar, bilgi kiosku ise duyuru ve içerikleri merkezi olarak gösterir. Mezarlık bilgi kiosku, mezarlıklarda ziyaretçilerin mezar yeri sorgulaması yapıp aradığı mezarı harita üzerinde bulmasını sağlar; mezar bilgisi belediyenin mezarlık bilgi sisteminden alınır.',
    benefits: [
      'Ziyaretçi aradığı yeri harita ve arama ile kendisi bulur',
      'Danışma noktasındaki yoğunluk azalır',
      'Harita, duyuru ve içerikler uzaktan güncellenir',
      'Mezarlıklarda mezar yeri sorgulama ve harita üzerinde yönlendirme',
      'Büyük dikey dokunmatik ekran',
      'Ayaklı, sağlam gövde',
    ],
    recommended: ['haritalama-kiosk', 'totem-kiosk', 'dikey-kiosk'],
    faq: [
      { q: 'Bilgilendirme kiosku nedir?', a: 'Ziyaretçilere bilgi, duyuru ve yönlendirme sunan dokunmatik ekranlı cihazdır.' },
      { q: 'Mezarlık bilgi kiosku nedir?', a: 'Mezarlıklarda ziyaretçilerin vefat edenin adıyla mezar yeri sorgulayıp mezarı harita üzerinde bulduğu bilgilendirme kioskudur.' },
      { q: 'Mezar bilgileri nereden gelir?', a: 'Bilgiler belediyenin veya mezarlık yönetiminin mezarlık bilgi sisteminden alınır. Entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'İçerikler nasıl güncellenir?', a: 'Harita ve içerikler uzaktan güncellenebilir, kiosk başına gitmek gerekmez.' },
      { q: 'Bilgilendirme kiosku fiyatı nedir?', a: 'Fiyat; ekran boyutu ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'otopark-odeme-kiosku',
    name: 'Otopark Ödeme Kioskları',
    title: 'Otopark Ödeme Kiosku | Kredi Kartlı ve Nakit – Vectanom',
    description: 'Otoparklar için otopark ödeme kiosku. Sürücü park ücretini bilet veya QR/barkod okutarak kiosktan öder, fişini alır. Konya ve çevresi.',
    h1: 'Otopark Ödeme Kiosku: Park Ücretini Kiosktan Ödeme',
    intro: 'Otopark ödeme kiosku, sürücülerin park ücretini gişede sıra beklemeden kendi başlarına ödemesini sağlar. Sürücü park biletini veya QR/barkodunu okutur, ücreti ekranda görür ve ödemesini yapar; istenirse ödeme fişi yazdırılır. Kiosk donanımı otopark otomasyonunun kullandığı yazılımla çalışacak şekilde hazırlanır. Otoparklar, belediyeler ve özel işletmeler için ödeme kioskları üretiyoruz.',
    benefits: [
      'Sürücü park ücretini gişe beklemeden kendisi öder',
      'Çıkış anındaki kuyruk kısalır, personel yükü azalır',
      'QR/barkod okuyucu ile bilet okuma',
      'Kredi kartı / POS ve nakit ödeme seçenekleri',
      'Termal yazıcı ile ödeme fişi',
      'Dış mekana uygun kabin seçenekleri',
    ],
    recommended: ['dikey-kiosk', 'klavyeli-kiosk', 'siramatik-kiosk'],
    faq: [
      { q: 'Otopark ödeme kiosku nedir?', a: 'Sürücünün park ücretini bilet veya QR/barkod okutarak, gişeye gitmeden kendi başına ödediği dokunmatik ekranlı cihazdır.' },
      { q: 'Otopark otomasyon yazılımımızla çalışır mı?', a: 'Otomasyon yazılımının entegrasyon imkânlarına göre birlikte değerlendirme yapılır. Kiosk donanımını bu sistemle çalışacak şekilde hazırlarız.' },
      { q: 'Otopark ödeme kioskunda hangi ödeme yöntemleri kullanılabilir?', a: 'Kredi kartı / POS ve nakit gibi seçenekler otopark işletmesinin ihtiyacına göre belirlenir.' },
      { q: 'Dış mekanda kullanılabilir mi?', a: 'Dış mekan ödeme kabini seçenekleri mevcuttur. Kullanım yerinize göre birlikte değerlendirelim.' },
      { q: 'Otopark ödeme kiosku fiyatı nedir?', a: 'Fiyat; model, donanım (POS, okuyucu, yazıcı) ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'fatura-odeme-kiosku',
    name: 'Fatura Ödeme Kioskları',
    title: 'Fatura Ödeme Kiosku | Su ve Belediye Borç Tahsilatı',
    description: 'Belediye, su idaresi ve kurumlar için fatura ödeme kiosku. Abone fatura ve borcunu sorgular, kredi kartı veya nakit ile öder. Konya ve çevresi.',
    h1: 'Fatura Ödeme Kiosku: Sorgula, Öde, Fişini Al',
    intro: 'Fatura ödeme kiosku, abonelerin ve vatandaşların fatura ve borçlarını sıra beklemeden kendi başlarına sorgulayıp ödemesini sağlar. Kullanıcı abone numarasını girer veya okutur, borcunu görür ve ödemesini yapar; ödeme fişi yazıcıdan alınır. Su, belediye hizmet bedelleri ve benzeri tahsilatlar için kullanılır. Fatura ve borç bilgisi kurumun kendi yazılımından alınır, kiosk donanımı bu sistemle çalışacak şekilde hazırlanır. Farklı kurumlarda hizmet veren tahsilat kioskları üretiyoruz.',
    benefits: [
      'Abone borcunu sorgular ve sıra beklemeden öder',
      'Tahsilat gişesindeki yoğunluk azalır',
      'Kredi kartı / POS ve nakit ödeme seçenekleri',
      'QR/barkod okuyucu ile fatura okutma',
      'Termal yazıcı ile ödeme fişi',
      'Dış mekan tahsilat kabini seçeneği',
    ],
    recommended: ['klavyeli-kiosk', 'dikey-kiosk', 'siramatik-kiosk'],
    faq: [
      { q: 'Fatura ödeme kiosku nedir?', a: 'Abonenin fatura veya borcunu sorgulayıp kredi kartı ya da nakitle kendi başına ödediği dokunmatik ekranlı cihazdır.' },
      { q: 'Kurumumuzun tahsilat yazılımıyla çalışır mı?', a: 'Fatura ve borç bilgisi kurumun kendi yazılımından alınır. Entegrasyon imkânlarına göre birlikte değerlendirme yapılır.' },
      { q: 'Fatura ödeme kioskunda hangi ödeme yöntemleri kullanılabilir?', a: 'Kredi kartı / POS ve nakit gibi seçenekler kurumun tahsilat altyapısına göre belirlenir.' },
      { q: 'Hangi kurumlara tahsilat kiosku sağladınız?', a: 'Referanslarımızı Referanslar sayfasında görebilirsiniz.' },
      { q: 'Fatura ödeme kiosku fiyatı nedir?', a: 'Fiyat; model, donanım (POS, okuyucu, yazıcı) ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    // Hedef: "kart dolum kiosku"; yan ifadeler: ulaşım kartı dolum kiosku, kent kart dolum makinesi, bakiye/abonman yükleme kiosku.
    // Kanıt: Konya Kart (Elkart) projesi, references.ts içindeki konya-buyuksehir-belediyesi kaydı.
    slug: 'ulasim-karti-dolum-kiosku',
    name: 'Ulaşım Kartı Dolum Kiosku',
    title: 'Ulaşım Kartı Dolum Kiosku | Bakiye ve Abonman – Vectanom',
    description: "Belediye ve ulaşım şirketleri için kart dolum kiosku: nakit ve kredi kartıyla bakiye, abonman yükleme ve yeni kart satışı. Konya'da 58 cihazla çalışıyor.",
    h1: 'Ulaşım Kartı Dolum ve Satış Kiosku',
    intro: "Ulaşım kartı dolum kiosku, yolcunun toplu taşıma kartına gişeye uğramadan bakiye ve abonman yüklediği, bakiyesini sorguladığı ve yeni kart satın aldığı self servis cihazdır. Kâğıt para ve kredi kartıyla ödeme alır; bozuk para birimi isteğe bağlı olarak eklenir. Ürettiğimiz kart dolum kioskları, Konya Büyükşehir Belediyesi'nin Konya Kart (Elkart) sisteminde 58 cihazla 7/24 hizmet veriyor.",
    sections: [
      {
        heading: 'Kart dolum kiosku hangi işlemleri yapar?',
        list: [
          { label: 'Bakiye yükleme', text: 'Yolcu kartını kioskun kart haznesine bırakır, tutarı seçer ve ödemesini yapar; tutar kartına yüklenir.' },
          { label: 'Abonman yükleme', text: 'Abonman seçeneği vizeli kartlarda açılır; yolcunun ayrıca kimlik göstermesi gerekmez.' },
          { label: 'Bakiye sorgulama', text: 'Yolcu kartını okutup kalan bakiyesini ekranda görür.' },
          { label: 'Yeni kart satışı', text: 'Kartı olmayan yolcu kiosktan yeni kart satın alır; kart haznesi 500 kart alır.' },
        ],
      },
      {
        heading: 'Hangi ödeme yöntemleriyle çalışır?',
        list: [
          { label: 'Kâğıt para', text: 'Tüm Türk lirası banknotları kabul edilebilir. Kurum, hangi banknotların alınacağını ayarlardan seçer.' },
          { label: 'Bozuk para', text: 'İsteğe bağlı birimdir. Konya Kart projesinde test cihazı bozuk para birimiyle, seri kurulumdaki 58 kiosk bu birim olmadan üretildi.' },
          { label: 'Kredi kartı', text: 'POS birimi temassız, çipli ve manyetik şeritli kartlarla ödeme alır.' },
          { label: 'Para üstü', text: "Kiosk para üstü verebilir. Kurum isterse bu özellik kapatılır; Konya'da belediye para üstünü kapalı tutuyor." },
        ],
      },
      {
        heading: 'Ulaşım kartı nasıl okunur?',
        paragraphs: [
          'Yolcu kartını motorsuz bir hazneye bırakır ve kart temassız olarak okunur. Hazne kartı içeri çekmediği için hareketli parça içermez. Kartla yapılan okuma ve yazma işlemleri, kioskun içindeki SAM (güvenli erişim modülü) ile korunur.',
        ],
      },
      {
        heading: 'Operatör ekranı: gün sonu, kasa boşaltma ve alarm',
        paragraphs: [
          'Kioskun arkasında kilitli bir operatör kapısı ve ayrı bir operatör ekranı bulunur. Operatör giriş yaptığında, süren bir yolcu işlemi yoksa ön ekran durur; servis sırasında yeni işlem başlamaz.',
        ],
        list: [
          { label: 'Gün sonu', text: 'Operatör gün sonu raporunu kendi ekranından alır.' },
          { label: 'Kasa boşaltma', text: 'Para kasaları boşaltılır ve sayım fişi yazdırılır.' },
          { label: 'Alarm kurma', text: 'Kioskun alarmı operatör ekranından kurulur.' },
        ],
      },
      {
        heading: 'Güvenlik ve uzaktan izleme',
        list: [
          { label: 'Alarm', text: 'Vandalizm, su baskını, yüksek sıcaklık ve hırsızlık girişiminde devreye girer.' },
          { label: 'Kamera', text: 'Karanlıkta da görüntü alan kameralar 7/24 çalışır.' },
          { label: 'Arıza bildirimi', text: 'Arıza ve benzeri durumlar bildirim sistemiyle servis ekibine iletilir.' },
          { label: 'Kapalı ağ', text: 'Kiosklar kart sistemine internet yerine kapalı bir yerel ağ üzerinden bağlanır.' },
        ],
      },
      {
        heading: 'Dış mekân kabini, aydınlatma ve reklam',
        list: [
          { label: 'Kabin', text: 'Kiosk ve kabin dış mekâna göre üretilir. Kabinin rengi ve görselleri kurumun kart markasına göre hazırlanır; bir durakta iki kiosk ortak bir sundurmanın altında yan yana kurulabilir.' },
          { label: 'Aydınlatma', text: 'Kabin ışıklarının gece açılıp gündüz kapanma saatleri takvimden ayarlanır.' },
          { label: 'Reklam', text: 'Ana ekranda reklam oynatılabilir.' },
        ],
      },
      {
        heading: 'Teknik özellikler',
        table: {
          head: ['Özellik', 'Değer'],
          rows: [
            ['İşlemler', 'Bakiye yükleme, abonman yükleme, bakiye sorgulama, yeni kart satışı'],
            ['Nakit', 'Tüm TL banknotları (kabul edilecekler ayarlanır), bozuk para birimi isteğe bağlı'],
            ['Kredi kartı', 'Temassız, çipli, manyetik şeritli'],
            ['Para üstü', 'Var; kurumun tercihine göre açılır veya kapatılır'],
            ['Ulaşım kartı okuma', 'Temassız okuyucu, motorsuz kart haznesi, SAM güvenlik modülü'],
            ['Kart satışı', '500 kartlık hazne'],
            ['Operatör', 'Arkadan kilitli kapı ve ayrı operatör ekranı: gün sonu, kasa boşaltma (sayım fişi), alarm kurma'],
            ['Güvenlik', 'Vandalizm, su baskını, yüksek sıcaklık ve hırsızlık alarmı; karanlıkta görüntü alan kameralar'],
            ['İzleme', 'Arıza bildirimi'],
            ['Bağlantı', 'Kapalı yerel ağ'],
            ['Aydınlatma', 'Takvimle ayarlanan gece/gündüz aydınlatması'],
            ['Reklam', 'Ana ekranda reklam oynatma'],
          ],
        },
      },
      {
        heading: 'Konya Kart deneyimimiz: 58 kiosk',
        paragraphs: [
          "Konya Büyükşehir Belediyesi'nin Konya Kart (Elkart) projesinde Nisan 2022'de bozuk para birimi dahil tam donanımlı bir test cihazı sahaya kondu; ardından Eylül 2023'te 30, Ekim 2024'te 28 kiosk kuruldu. Kiosklar başta Bosna Hersek, Eski Sanayi, Kültürpark ve Kayalı Park olmak üzere toplu taşıma duraklarında günde yaklaşık 60.000 işlem yapıyor.",
        ],
        list: [
          { text: 'Konya Kart projesinin ayrıntıları ve fotoğrafları', href: '/referanslar/konya-buyuksehir-belediyesi/' },
          { text: 'Tüm referanslarımız', href: '/referanslar/' },
        ],
      },
      {
        heading: 'Adıyaman: Yaman Kart yükleme ve fatura ödeme tek cihazda',
        paragraphs: [
          "Adıyaman Belediyesi için Haziran 2026'da kurduğumuz 3 akıllı vezne, Yaman Kart yükleme ve tam kart satışını fatura ödemesi ve su kartı yüklemesiyle aynı cihazda topluyor. Tahsilat iki kuruma ait olduğu için her vezne iki ayrı POS cihazıyla çalışıyor: biri ASKİM'in, diğeri Adıyaman Ulaşım'ın.",
        ],
        list: [{ text: 'Adıyaman akıllı vezne projesinin ayrıntıları', href: '/referanslar/adiyaman-belediyesi/' }],
      },
      {
        heading: 'Kart dolum kiosku fiyatı neye göre değişir?',
        paragraphs: [
          'Fiyat; ödeme birimlerine (kâğıt para, bozuk para, kredi kartı, para üstü), kart satış haznesine, kabin ve sundurma tasarımına, kart sisteminizle entegrasyona ve adede göre değişir. Kullandığınız kart sistemini, kurulum noktalarını ve cihaz sayısını iletin, size özel teklif hazırlayalım.',
        ],
      },
    ],
    recommended: [], // özel üretim; katalogdaki model kartlarına uymuyor, "Önerilen Modeller" bölümü gizlenir
    faq: [
      { q: 'Kart dolum kiosku nedir?', a: 'Yolcunun ulaşım kartına gişeye uğramadan bakiye ve abonman yüklediği, bakiyesini sorguladığı ve yeni kart aldığı self servis cihazdır.' },
      { q: 'Kart dolum kiosku hangi ödeme yöntemlerini kabul eder?', a: 'Kâğıt para ve kredi kartı (temassız, çipli, manyetik şeritli). Bozuk para birimi isteğe bağlı olarak eklenir.' },
      { q: 'Bozuk para birimi şart mı?', a: 'Hayır. Konya Kart projesindeki 58 seri kiosk bozuk para birimi olmadan kuruldu; ödeme kâğıt para ve kredi kartıyla alınıyor.' },
      { q: 'Kiosk para üstü verir mi?', a: 'Verebilir. Para üstü kurumun tercihine göre açılır ya da kapatılır.' },
      { q: 'Abonman yüklemek için kimlik doğrulaması gerekir mi?', a: 'Hayır. Abonman seçeneği vizeli kartlarda açılır; yolcunun ayrıca kimlik göstermesi gerekmez.' },
      { q: 'Kiosk yeni ulaşım kartı satabilir mi?', a: 'Evet. Kiosk 500 kartlık haznesinden yeni kart verir.' },
      { q: 'Kiosk ulaşım kartı dışında fatura da tahsil edebilir mi?', a: "Evet. Adıyaman'daki akıllı vezneler Yaman Kart yüklemenin yanında ASKİM'e ait fatura ve su kartı ödemesi de alıyor; iki kurumun tahsilatı ayrı POS cihazlarından geçiyor." },
      { q: 'Kiosk internete bağlı mı çalışır?', a: 'Kiosk, kart sistemine kapalı bir yerel ağ üzerinden bağlanacak şekilde kurulabilir; Konya Kart kioskları bu şekilde çalışıyor.' },
      { q: 'Kart dolum kiosku dış mekâna kurulabilir mi?', a: 'Evet. Kiosk ve kabin dış mekâna göre üretilir; vandalizm, su baskını, yüksek sıcaklık ve hırsızlığa karşı alarm verir, kameraları karanlıkta da görüntü alır.' },
      { q: 'Kart dolum kiosku fiyatı nedir?', a: 'Fiyat; ödeme birimlerine, kart haznesine, kabin tasarımına, entegrasyon ihtiyacına ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    // Türkiye'de bu cihaz "ATM" diye aranıyor (döviz bozdurma atm, altın veren atm, atm makinesi); "kiosk" ikincil.
    slug: 'doviz-altin-atm',
    name: "Döviz ve Altın ATM'leri",
    title: "Döviz ve Altın ATM'si | Döviz Bozdurma ve Gram Altın Kiosku",
    description: "Döviz büroları, kuyumcular ve bankalar için 7/24 çalışan döviz ve altın ATM'si: iki yönlü döviz işlemi, 1 gram altın satışı, 2 yıl garanti.",
    h1: "Döviz ve Altın ATM'si: Döviz Bozdurma ve Gram Altın Satış Kiosku",
    intro: "Döviz ve altın ATM'si, müşterinin gişeye uğramadan döviz bozdurduğu, TL karşılığında döviz aldığı ve blisterli 1 gram altın satın aldığı self servis cihazdır. Personel gerektirmeden 7/24 çalışır. Vectanom döviz ve altın ATM'si; döviz büroları, kuyumcular, bankalar ve katılım bankaları ile otel, havalimanı ve AVM gibi yoğun noktalar için tasarlandı. GoldaEx yazılımıyla gelir, kuyumcu yazılımınız ve banka sistemleriyle entegre çalışır; iç mekan ve dış mekan versiyonları vardır.",
    sections: [
      {
        heading: "Döviz ve altın ATM'si nasıl çalışır?",
        ordered: true,
        list: [
          'Müşteri işlemini seçer: döviz bozdurma, döviz alma veya altın alma.',
          'İşletmenin tercihine ve yasal yükümlülüklere göre pasaportunu ya da kimliğini okutur.',
          'Döviz bozdururken banknotlarını yerleştirir; ATM banknotları tanır ve sahteliğini kontrol eder.',
          'Ekranda kur ya da altın fiyatı ve işlem tutarı görünür; müşteri onaylar.',
          'Döviz veya altın alırken ödemeyi nakit ya da kartla yapar.',
          "ATM; TL'yi, dövizi ya da blisterli 1 gram altını verir ve işlem fişini yazdırır.",
        ],
      },
      {
        heading: 'Kimler kullanır?',
        list: [
          { label: 'Döviz büroları', text: 'Yeni bir şube açmadan ek döviz noktası' },
          { label: 'Kuyumcular', text: 'Dükkân kapalıyken de gram altın satışı' },
          { label: 'Bankalar ve katılım bankaları', text: 'Şube içinde veya dışında döviz ve altın noktası' },
          { label: 'Otel, havalimanı ve AVM', text: 'Turistlerin ve ziyaretçilerin yoğun olduğu alanlarda döviz hizmeti' },
        ],
      },
      {
        heading: 'İşletmenize ne kazandırır?',
        list: [
          { label: '7/24 hizmet', text: 'ATM gece gündüz çalışır; büro veya dükkân kapalıyken de müşteri işlemini yapabilir.' },
          { label: 'Personel ve mesai gideri yok', text: 'Gişe görevlisi, vardiya ve mesai saati gerektirmez; personel giderleri azalır.' },
          { label: 'Daha kısa kuyruk', text: "Basit döviz ve altın işlemleri gişeden ATM'ye kayar." },
          { label: 'Kayıtlı işlem', text: 'Her işlem kamera ve işlem fişiyle kayıt altına alınır.' },
        ],
      },
      {
        heading: 'Döviz bozdurma ve döviz satışı',
        paragraphs: [
          "ATM iki yönlü çalışır. Müşteri döviz banknotlarını yatırıp karşılığında TL alabilir (döviz bozdurma) ya da TL ödeyip döviz alabilir. Döviz alırken TL ödemesi nakit veya kartla yapılır; döviz banknotlarını ATM kendisi verir.",
        ],
      },
      {
        heading: 'Gram altın satışı',
        paragraphs: [
          'ATM, blisterli 1 gram külçe altın satar. Altın için ödeme kredi kartı, nakit TL veya nakit döviz ile yapılabilir. Altın verme ünitesinde yaklaşık 80 adet altın stoklanır.',
          'ATM altın satın almaz; müşteriden altın alımı yapılmaz, yalnızca satış yapılır.',
        ],
      },
      {
        heading: 'Donanım',
        list: [
          { label: 'Banknot kabul ünitesi', text: 'Döviz ve TL banknotlarını tanır, sahteliğini kontrol eder' },
          { label: 'Para verme ünitesi', text: 'TL ve döviz banknot verir' },
          { label: 'Altın verme ünitesi', text: 'Blisterli 1 gram altın, yaklaşık 80 adet kapasite' },
          { label: 'Kartlı ödeme', text: 'Döviz ve altın alımında kredi kartı' },
          'Pasaport / kimlik okuyucu',
          'Kamera ve fiş yazıcısı',
          { label: 'Ekran', text: 'Boyutu tercihe göre' },
        ],
      },
      {
        heading: 'Yazılım ve entegrasyon',
        paragraphs: [
          "ATM, GoldaEx yazılımıyla birlikte gelir. GoldaEx dışında kuyumcu yazılımınız ve banka entegrasyonuyla da çalışır; işletme mevcut sistemini değiştirmek zorunda kalmaz. Döviz kurları ve altın fiyatı kullanılan yazılım üzerinden ATM'ye anlık olarak yansır.",
        ],
      },
      {
        heading: 'Güvenlik ve yasal uyum',
        list: ['Titanyum alaşımlı kasa', 'Alarm ve uzaktan izleme', 'Vandalizme ve su baskınına karşı koruma', 'Kamera ve işlem fişiyle kayıt'],
        after: [
          "Döviz ve altın ATM'si, döviz ve altın alım satımına yetkili kurumların kullanımı için üretilir. Kimlik doğrulama, ATM'yi işletecek kurumun tercihine ve yasal yükümlülüklerine göre yapılandırılır.",
        ],
      },
      {
        heading: 'Nakit işleyen kiosklarda deneyimimiz',
        paragraphs: [
          "Vectanom; Konya Büyükşehir Belediyesi (Konya Kart), KOSKİ, KASKİ, Sivas Belediyesi ve Iğdır Belediyesi için tahsilat kioskları üretti. KOSKİ ve Sivas Belediyesi'ndeki kiosklar nakit ve kredi kartıyla ödeme alıyor.",
        ],
        list: [
          { text: 'Tahsilat kiosku referanslarımız', href: '/referanslar/' },
          { text: 'Ulaşım kartı dolum kiosku: Konya Kart projesinde 58 cihaz', href: '/kullanim-alanlari/ulasim-karti-dolum-kiosku/' },
          { text: 'Fatura ödeme kiosku', href: '/kullanim-alanlari/fatura-odeme-kiosku/' },
        ],
      },
      {
        heading: 'Teknik özellikler',
        table: {
          head: ['Özellik', 'Değer'],
          rows: [
            ['İşlemler', 'Döviz bozdurma (döviz → TL), döviz satışı (TL → döviz), 1 gram altın satışı'],
            ['Ödeme', 'Nakit TL, nakit döviz, kredi kartı'],
            ['Altın', 'Blisterli 1 gram külçe altın, yaklaşık 80 adet kapasite'],
            ['Kimlik', 'Pasaport / kimlik okuyucu'],
            ['Kayıt', 'Kamera, fiş yazıcısı'],
            ['Ekran', 'Boyutu tercihe göre'],
            ['Kasa', 'Titanyum alaşımlı'],
            ['Güvenlik', 'Alarm, uzaktan izleme, vandalizm ve su baskınına karşı koruma'],
            ['Yazılım', 'GoldaEx; kuyumcu yazılımınız ve banka entegrasyonu'],
            ['Versiyon', 'İç mekan ve dış mekan'],
            ['Garanti', '2 yıl'],
          ],
        },
      },
      {
        heading: 'Teslimat, kurulum, garanti ve destek',
        list: [
          { label: 'Kurulum', text: 'Sipariş onayından sonra yaklaşık 45 gün' },
          { label: 'Garanti', text: '2 yıl' },
          { label: 'Destek', text: 'Konya merkezli teknik destek; Türkiye geneline sevkiyat' },
        ],
      },
      {
        heading: "Döviz ve altın ATM'si fiyatı neye göre değişir?",
        paragraphs: [
          "Fiyat; iç veya dış mekan versiyonuna, ekran boyutuna, yapılacak işlemlere (döviz, altın), ödeme seçeneklerine, yazılım ve entegrasyon ihtiyacına ve adede göre değişir. Kurumunuzu, ATM'yi kuracağınız yeri ve kullandığınız yazılımı iletin, size özel teklif hazırlayalım.",
        ],
      },
    ],
    recommended: [], // bu ATM'ye uyan model kartı yok; "Önerilen Modeller" bölümü gizlenir
    faq: [
      { q: "Döviz ve altın ATM'si nedir?", a: 'Müşterinin gişeye uğramadan döviz bozdurduğu, TL karşılığında döviz aldığı ve gram altın satın aldığı self servis cihazdır.' },
      { q: 'ATM 7/24 çalışır mı?', a: 'Evet. Personel gerektirmeden 7/24 çalışır; mesai saatine bağlı kalmadan döviz ve altın işlemi yapılır.' },
      { q: "ATM'den döviz alınabilir mi?", a: "Evet. Müşteri TL'yi nakit veya kartla öder, ATM döviz banknotunu verir." },
      { q: "ATM'den hangi altın satılır?", a: "Blisterli 1 gram külçe altın satılır. ATM'de yaklaşık 80 adet altın stoklanabilir." },
      { q: 'ATM altın alımı yapar mı?', a: 'Hayır. ATM yalnızca altın satar; müşteriden altın almaz.' },
      { q: 'Altın için ödeme nasıl yapılır?', a: 'Kredi kartı, nakit TL veya nakit döviz ile ödeme yapılabilir.' },
      { q: 'ATM hangi yazılımla çalışır?', a: 'GoldaEx yazılımıyla gelir; kuyumcu yazılımınız ve banka entegrasyonuyla da çalışır.' },
      { q: "ATM'de kimlik doğrulama yapılır mı?", a: "Kimlik doğrulama, ATM'yi işletecek kurumun tercihine ve yasal yükümlülüklerine göre pasaport / kimlik okuyucuyla yapılır." },
      { q: 'ATM dış mekanda kullanılabilir mi?', a: 'Evet. İç mekan ve dış mekan versiyonları vardır. Titanyum alaşımlı kasa, alarm ve uzaktan izleme ile vandalizme ve su baskınına karşı korunur.' },
      { q: "Döviz ve altın ATM'sinin kurulumu ne kadar sürer?", a: 'Sipariş onayından sonra yaklaşık 45 gün içinde kurulur. ATM 2 yıl garantilidir.' },
      { q: "Döviz ve altın ATM'si fiyatı nedir?", a: 'Fiyat; versiyona, ekran boyutuna, işlemlere, ödeme seçeneklerine ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
  {
    slug: 'yiyecek-icecek-otomati-kiosku',
    name: 'Yiyecek İçecek Otomatı Kioskları',
    title: 'Yiyecek İçecek Otomatı İçin Dokunmatik Kiosk | Vectanom',
    description: 'Akıllı otomat nedir? Yiyecek içecek otomatı işletmeleri için 7/24 çalışan, ürün seçimi ile kartlı, temassız ve QR ödemeyi tek ekranda toplayan kiosk.',
    h1: 'Yiyecek İçecek Otomatı İşletmeleri İçin Dokunmatik Kiosk',
    intro: 'Yiyecek içecek otomatı işletmeleri; okul, hastane, fabrika, ofis ve AVM gibi toplu kullanım alanlarında sıcak ve soğuk içecek, atıştırmalık ve hazır yiyecek satar. Dokunmatik ekranlı kiosk, otomat noktasını akıllı otomata dönüştürür: müşteri ürünleri ekranda görselleriyle inceler, seçimini yapar ve ödemesini tek noktada tamamlar. Personel gerektirmediği için otomatınızla birlikte 7/24 satış yapar. Vectanom olarak otomat işletmeleri için dokunmatik kiosk üretiyoruz; kiosku işletmenizin kullandığı otomat veya satış yazılımıyla çalışacak şekilde hazırlıyor, Konya merkezli ekibimizle Türkiye geneline gönderiyoruz.',
    sections: [
      {
        heading: 'Yiyecek içecek otomatı nedir?',
        paragraphs: [
          'Yiyecek içecek otomatı (vending machine), personel olmadan paketli yiyecek, içecek ve atıştırmalık satan makinedir. Müşteri ürünü seçer, ödemesini yapar ve otomat ürünü verir. Kasiyer gerektirmediği için mesai saatine bağlı kalmadan 7/24 satış yapabilir. Otomatın başlıca türleri şunlardır:',
        ],
        list: [
          { label: 'Soğuk içecek otomatı', text: 'Su, meşrubat, ayran ve meyve suyu gibi şişe ve kutu içecekler; soğutmalı gövde' },
          { label: 'Sıcak içecek otomatı', text: 'Çay, kahve, sıcak çikolata ve çorba gibi içecekleri bardakta taze hazırlar' },
          { label: 'Atıştırmalık otomatı', text: 'Bisküvi, kraker, kuruyemiş ve çikolata gibi paketli ürünler; genellikle spiral raflı' },
          { label: 'Yiyecek otomatı', text: 'Sandviç, salata ve hazır yemek gibi soğuk zincir gerektiren ürünler' },
          { label: 'Kombine otomat', text: 'Atıştırmalık ve soğuk içeceği tek gövdede birlikte satar' },
        ],
      },
      {
        heading: 'Akıllı otomat nedir?',
        paragraphs: [
          'Akıllı otomat, dokunmatik ekranlı ve internete bağlı otomattır. Klasik otomatta müşteri camın arkasındaki ürüne bakıp raf numarasını tuşlar ve çoğunlukla bozuk parayla öder. Akıllı otomatta ise:',
        ],
        list: [
          'Ürünler ekranda görseli, fiyatı ve içerik bilgisiyle listelenir',
          'Kredi kartı, temassız kart, QR ve kurumsal kartla ödeme alınır',
          'Fiyat, ürün listesi ve kampanyalar merkezden, uzaktan güncellenir',
          'Satış, stok ve arıza bilgisi telemetriyle işletmeciye anlık ulaşır',
          'Ekran, satış olmadığı zamanlarda kampanya ve reklam gösterebilir',
        ],
        after: ['Dokunmatik kiosk, mevcut otomat noktanıza bu ekranı ve ödeme altyapısını kazandırır.'],
      },
      {
        heading: 'Otomat kiosku işletmenize ne kazandırır?',
        list: [
          { label: '7/24 satış', text: 'Kiosk personel gerektirmeden gece gündüz çalışır; mesai dışında, hafta sonu ve tatilde de satış devam eder.' },
          { label: 'Personel gideri yok', text: 'Satış için kasiyer, vardiya ya da mesai planı gerekmez.' },
          { label: 'Ürünü görerek seçme', text: 'Ürün görselleri, fiyat ve içerik bilgisi ekranda net görünür; müşteri raf numarası aramaz.' },
          { label: 'Tek noktada ödeme', text: 'Ürün seçimi ve ödeme aynı ekranda tamamlanır; kredi kartı / POS, temassız ve QR seçenekleri sunulur.' },
          { label: 'Kolay güncelleme', text: 'Ürün listesi, fiyat ve kampanyalar ekrandan güncellenir; etiket değiştirmek gerekmez.' },
          { label: 'Fiş ve sipariş numarası', text: 'Termal yazıcı ile müşteriye fiş veya sipariş numarası verilir.' },
          { label: 'Kendi yazılımınız', text: 'Kullandığınız satış yazılımı veya web uygulamanız kioskta kiosk modunda çalışır.' },
          { label: 'Markanıza uygun görünüm', text: 'Gövde rengi ve ekran tasarımı markanıza göre hazırlanır.' },
        ],
      },
      {
        heading: 'Otomat kiosku nasıl çalışır?',
        ordered: true,
        list: [
          'Müşteri kioskun ekranında ürünleri kategori ve görselleriyle inceler.',
          'Ürünün fiyatını ve içerik bilgisini görür, seçimini yapar.',
          'Ödeme yöntemini seçer ve kredi kartı, temassız kart ya da QR ile öder.',
          'Ödeme onaylanınca satış, işletmenizin otomat veya satış yazılımına iletilir ve ürün teslim edilir.',
          'Müşteri isterse fişini ya da sipariş numarasını yazıcıdan alır.',
          'Satış ve stok bilgisi yazılımınıza kaydedilir; raporları merkezden izlersiniz.',
        ],
        after: ['Kioskun otomatla nasıl haberleşeceği, kullandığınız otomatın ve yazılımın entegrasyon imkânlarına göre kurulumdan önce birlikte netleştirilir.'],
      },
      {
        heading: 'Otomat ödeme sistemleri',
        paragraphs: ['Otomatlarda kullanılan başlıca ödeme yöntemleri şunlardır:'],
        list: [
          { label: 'Bozuk para ve kâğıt para', text: 'Para üstü veren bozuk para mekanizması ve banknot okuyucu' },
          { label: 'Kredi ve banka kartı', text: 'Temaslı ve NFC ile temassız ödeme; telefon ve akıllı saatle ödeme dahil' },
          { label: 'QR ödeme', text: 'Müşteri ekrandaki QR kodu mobil uygulamasıyla okutup öder' },
          { label: 'Yemek kartları', text: 'Pluxee (Sodexo), Metropol, Multinet, Edenred ve benzeri kartlar' },
          { label: 'Kurumsal kartlar', text: 'Fabrika ve üniversitelerde kredisi yüklenen personel, öğrenci veya kampüs kartı (Mifare / RFID)' },
        ],
        after: [
          'Otomatlarda ödeme cihazları çoğunlukla MDB (Multi-Drop Bus) adlı sektör standardıyla otomatın kontrol kartına bağlanır. Bu standarda uyan bir ödeme cihazı, farklı üreticilerin otomatlarıyla çalışabilir.',
          'Vectanom otomat kioskunda ödeme; kredi kartı / POS, temassız ve QR seçenekleri arasından işletmenizin ihtiyacına göre belirlenir.',
        ],
      },
      {
        heading: 'Telemetri: otomatı uzaktan izlemek',
        paragraphs: [
          'Telemetri, otomatın satış, stok ve arıza bilgisini internet üzerinden işletmeciye göndermesidir. İşletmeci hangi makinede hangi ürünün bittiğini sahaya gitmeden görür; dolum rotasını boşalan makinelere göre planlar, arızaya daha hızlı müdahale eder ve hangi ürünün hangi noktada sattığını raporlardan izler.',
          'Dokunmatik kiosk internete bağlı çalıştığı için ekrandaki ürün, fiyat ve kampanya içeriği de merkezden yönetilir.',
        ],
      },
      {
        heading: 'Otomat kiosku nerelerde kullanılır?',
        list: [
          { label: 'Fabrika ve üretim tesisleri', text: 'Vardiyalı çalışan personele gece gündüz yiyecek ve içecek' },
          { label: 'Ofis ve plazalar', text: 'Çalışanlar için kat içi atıştırmalık ve içecek noktası' },
          { label: 'Hastaneler', text: 'Hasta yakınları ve personel için, kantinin kapalı olduğu saatlerde de' },
          { label: 'Okul ve üniversiteler', text: 'Öğrenci ve personel için hızlı satış; kampüs kartıyla ödeme' },
          { label: 'AVM, spor salonu ve otel', text: 'Yoğun ve uzun süre açık kalan kapalı alanlar' },
          { text: 'Okul, hastane ve fabrika kantinleri için: kantin sipariş ve satış kiosku', href: '/kantin-siparis-ve-satis-kiosku-nedir/' },
        ],
      },
      {
        heading: 'Otomat mı, sipariş kiosku mu?',
        paragraphs: [
          'Otomat, hazır ve paketli ürünü raftan veren bir makinedir. Sipariş kiosku ise ürün vermez; siparişi ve ödemeyi alır, hazırlanacak ürünü mutfağa veya tezgâha iletir. Paketli ürün ve içecek için otomat, tost, sandviç ve sıcak yemek gibi hazırlanan ürünler için sipariş kiosku uygundur. Kantin ve yemek alanlarında ikisi birlikte de kullanılır.',
        ],
        list: [{ text: 'Restoran, kafe ve kantinler için: self servis sipariş kiosku', href: '/kullanim-alanlari/self-servis-siparis-kiosku/' }],
      },
      {
        heading: 'Otomat işletmesi kurarken dikkat edilecekler',
        list: [
          { label: 'Yer seçimi', text: 'Noktadan günde kaç kişinin geçtiğine, binanın çalışma saatlerine ve yakında kantin ya da market olup olmadığına bakın.' },
          { label: 'Lokasyon sözleşmesi', text: 'Cihazın kaplayacağı alan, elektrik ve internet kullanımı, dolum saatleri, arıza erişimi ve gelir paylaşımı yazılı olarak belirlenmelidir.' },
          { label: 'Ürün seçimi', text: 'Ürünleri noktanın kitlesine göre seçin. Okullarda kantinde satılabilecek ürünler Millî Eğitim Bakanlığı düzenlemeleriyle sınırlandırıldığından, okul içindeki otomatın ürün listesini okul yönetimiyle birlikte netleştirin.' },
          { label: 'Gıda güvenliği', text: 'Son kullanma tarihi takibi, soğuk zincir ve temizlik planı gerekir. Gıda işletmesi kaydı gerekip gerekmediğini il veya ilçe tarım ve orman müdürlüğünden teyit edin.' },
          { label: 'Vergi ve satış belgesi', text: 'Otomattan yapılan satışların nasıl belgelendirileceğini mali müşavirinizle netleştirin.' },
          { label: 'Ödeme altyapısı', text: 'Kartlı ve QR ödeme için bir banka veya ödeme kuruluşuyla üye iş yeri anlaşması yapılır.' },
        ],
      },
      {
        heading: 'Otomat kiosku hangi yazılımla çalışır?',
        paragraphs: [
          'Kiosk, işletmenizin kullandığı otomat yönetim veya satış yazılımıyla çalışacak şekilde hazırlanır. Web tabanlı bir satış uygulamanız varsa kioskta kiosk modunda çalışır: müşteri yalnızca satış ekranını görür, masaüstüne veya başka uygulamalara erişemez.',
          'POS, QR okuyucu ve yazıcının yazılımla nasıl haberleşeceği kurulumdan önce yazılım firmanızla birlikte netleştirilir.',
        ],
      },
      {
        heading: 'Donanım seçenekleri',
        table: {
          head: ['Özellik', 'Seçenek'],
          rows: [
            ['Ekran', '21,5 inç, 24 inç veya 32 inç dokunmatik ekran'],
            ['Ödeme', 'Kredi kartı / POS, NFC ile temassız ödeme, QR ödeme'],
            ['Okuyucu', 'QR okuyucu'],
            ['Fiş', 'Termal yazıcı ile fiş veya sipariş numarası'],
            ['Yazılım', 'Kendi satış yazılımınız veya web uygulamanız, kiosk modunda'],
            ['Model', 'Ayaklı veya masa üstü, kapalı alan için'],
            ['Tasarım', 'Gövde rengi ve ekran tasarımı markanıza göre'],
            ['Çalışma', '7/24 kullanıma uygun'],
          ],
        },
      },
      {
        heading: 'Otomat kiosku fiyatı neye göre değişir?',
        paragraphs: ['Fiyat; ekran boyutuna, ayaklı ya da masa üstü olmasına, ödeme seçeneklerine (POS, temassız, QR), yazıcıya ve adede göre değişir. Otomatlarınızın sayısını ve türünü, kioskun konacağı yeri ve kullandığınız otomat veya satış yazılımını iletin, size özel teklif hazırlayalım.'],
      },
    ],
    recommended: ['self-kiosk', 'siparis-kiosk', 'dikey-kiosk'],
    faq: [
      { q: 'Yiyecek içecek otomatı nedir?', a: 'Personel olmadan paketli yiyecek, içecek ve atıştırmalık satan makinedir. Müşteri ürünü seçer, öder ve otomat ürünü verir.' },
      { q: 'Akıllı otomat nedir?', a: 'Dokunmatik ekranlı ve internete bağlı otomattır. Ürünler ekranda görselleriyle listelenir; kartlı, temassız ve QR ödeme alınır, satış ve stok bilgisi telemetriyle uzaktan izlenir.' },
      { q: 'Otomat kiosku nedir?', a: 'Müşterinin otomattaki ürünleri dokunmatik ekranda inceleyip seçtiği ve ödemesini yaptığı kiosk cihazıdır.' },
      { q: 'Otomat kiosku 7/24 çalışır mı?', a: 'Evet. Kiosk 7/24 kullanıma uygun donanımla gelir ve personel gerektirmez; otomatınızla birlikte mesai saatine bağlı kalmadan gece gündüz satış yapar.' },
      { q: 'Otomat ile sipariş kiosku arasındaki fark nedir?', a: 'Otomat hazır ve paketli ürünü raftan verir. Sipariş kiosku ürün vermez; siparişi ve ödemeyi alıp hazırlanacak ürünü mutfağa veya tezgâha iletir.' },
      { q: 'Otomat işletmemin mevcut yazılımıyla çalışır mı?', a: 'Kullandığınız otomat veya satış yazılımının entegrasyon imkânlarına göre birlikte değerlendirme yapılır. Kiosk donanımını bu sistemle çalışacak şekilde hazırlarız.' },
      { q: 'Otomat kioskunda hangi ödeme yöntemleri kullanılabilir?', a: 'Kredi kartı / POS, NFC ile temassız ödeme ve QR ödeme gibi seçenekler işletmenizin ihtiyacına göre belirlenir.' },
      { q: 'Otomat telemetrisi nedir?', a: 'Otomatın satış, stok ve arıza bilgisini internet üzerinden işletmeciye göndermesidir. Böylece biten ürün ve arıza sahaya gitmeden görülür.' },
      { q: 'Otomat işletmek için hangi izinler gerekir?', a: 'Vergi kaydı, satışların belgelendirilmesi ve gıda satışına göre gıda işletmesi kaydı gündeme gelir. Gereklilikler noktaya ve ürüne göre değiştiği için mali müşaviriniz, belediye ve il veya ilçe tarım ve orman müdürlüğüyle teyit edin.' },
      { q: 'Hangi mekanlar için uygundur?', a: 'Okul, hastane, fabrika, ofis ve AVM gibi kapalı ve toplu kullanım alanları için uygundur. Kullanım yerinize göre model ve donanım birlikte seçilir.' },
      { q: 'Otomat kiosku fiyatı nedir?', a: 'Fiyat; model, ekran boyutu, donanım (POS, okuyucu, yazıcı) ve adede göre değişir. İhtiyacınızı iletin, size özel teklif hazırlayalım.' },
    ],
  },
];
