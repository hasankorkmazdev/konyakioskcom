
```
```

# Vectanom Kiosk – konyakiosk.com

Konya merkezli **Vectanom Kiosk** (Express Bilgisayar) için hazırlanmış tanıtım ve talep toplama sitesi.
Amaç: kafe, büfe, restoran, belediye ve kütüphane gibi işletmelerin dokunmatik kiosk modellerini
inceleyip WhatsApp, telefon veya iletişim formuyla teklif istemesini sağlamak. Aynı zamanda Google'da
"Konya kiosk", "kafe kiosk" gibi aramalarda görünmek (SEO).

Site **statiktir**: her sayfa derleme sırasında hazır HTML'e çevrilir, sunucu tarafında çalışan bir
uygulama yoktur. Tek istisna iletişim formudur (bkz. [İletişim formu](#iletişim-formu)).

## Kullanılan teknolojiler


| Ne                             | Neden                                           |
| -------------------------------- | ------------------------------------------------- |
| [Astro 5](https://astro.build) | Statik site üretir, hızlıdır                |
| TypeScript                     | Veri dosyalarını tiplerle denetler            |
| sharp                          | Fotoğrafları web için küçültür           |
| Cloudflare Pages               | Yayın ve iletişim formu fonksiyonu            |
| Resend / Telegram              | Form taleplerini e-posta ve mesaj olarak iletir |

## Kurulum ve komutlar

```bash
npm install        # ilk kurulum
npm run dev        # geliştirme sunucusu (http://localhost:4321)
npm run build      # yayın için dist/ klasörünü üretir
npm run preview    # derlenmiş siteyi yerelde dener
npm run gorsel     # gorsel-kaynak/ içindeki fotoğrafları işler (aşağıya bakın)
```

## Dosya yapısı

```
konyakiosk/
├── src/
│   ├── pages/            Sayfalar (dosya adı = adres)
│   ├── layouts/          Base.astro: tüm sayfaların ortak iskeleti
│   ├── components/
│   │   ├── layout/       Header, Footer, SeoHead, Breadcrumbs, Analytics
│   │   ├── sections/     Cta, Faq, Gallery, RefStrip, ContactForm
│   │   └── ui/           Photo, WhatsAppButton
│   ├── data/             Sitenin tüm içeriği (aşağıya bakın)
│   ├── lib/seo.ts        Google için sayfa bilgisi üreten fonksiyonlar
│   ├── types/index.ts    Veri tipleri (Product, UseCase, Post, ...)
│   └── styles/global.css Tüm stiller
├── public/               Olduğu gibi yayınlanan dosyalar (_redirects: eski adres yönlendirmeleri)
│   ├── images/           İşlenmiş fotoğraflar (otomatik üretilir)
│   ├── favicon.svg
│   ├── robots.txt
│   └── _headers          Güvenlik ve önbellek başlıkları
├── functions/api/iletisim.js   İletişim formunu karşılayan Cloudflare fonksiyonu
├── gorsel-kaynak/        Orijinal (büyük) fotoğraflar, yayınlanmaz
├── scripts/gorselleri-isle.mjs Fotoğraf işleme betiği
└── astro.config.mjs      Site adresi, sitemap ve adres biçimi ayarları
```

> Kök dizindeki `index.html` eski bir karşılama sayfasıdır, Astro tarafından kullanılmaz.

## Sayfalar


| Adres                                      | Dosya                                 | İçerik kaynağı                         |
| -------------------------------------------- | --------------------------------------- | -------------------------------------------- |
| `/`                                        | `pages/index.astro`                   | Ürünler, kullanım alanları, bölgeler özeti    |
| `/urunler/`                                | `pages/urunler/index.astro`           | `products.ts`                              |
| `/urunler/<slug>/`                         | `pages/urunler/[slug].astro`          | `products.ts` (her ürün için bir sayfa) |
| `/kullanim-alanlari/`, `/kullanim-alanlari/<slug>/` | `pages/kullanim-alanlari/`                    | `useCases.ts`                               |
| `/hizmet-bolgeleri/<slug>/`                | `pages/hizmet-bolgeleri/[slug].astro` | `locations.ts` (Konya ilçeleri)           |
| `/blog/`, `/blog/<slug>/`                  | `pages/blog/`                         | `posts.ts`                                 |
| `/referanslar/`                            | `pages/referanslar.astro`             | `references.ts` + fotoğraflar             |
| `/kendi-kioskunu-olustur/`                 | `pages/kendi-kioskunu-olustur.astro`  | `configurator.ts`                          |
| `/konya-kiosk/`, `/uygun-maliyetli-kiosk/` | ilgili`.astro` dosyaları             | SEO odaklı açılış sayfaları          |
| `/sss/`, `/hakkimizda/`, `/iletisim/`      | ilgili`.astro` dosyaları             | Genel sayfalar                             |

`[slug]` içeren sayfalar şablondur: ilgili veri dosyasına bir kayıt eklemek yeni bir sayfa oluşturur.

## İçerik nerede, nasıl değişir

Bütün metinler `src/data/` altındadır. Kod okumadan, sadece bu dosyaları düzenleyerek içerik güncellenir.


| Dosya                    | Ne var                                                                | Ne zaman düzenlenir            |
| -------------------------- | ----------------------------------------------------------------------- | --------------------------------- |
| `generalInformation.ts`  | Firma adı, telefon, WhatsApp numarası, site adresi, renk,`waLink()` | İletişim bilgisi değişince  |
| `products.ts`            | Kiosk modelleri: ad, başlık, açıklama, etiketler (`tags`), özellikler, SSS | Ürün eklerken/değiştirirken |
| `useCases.ts`             | Kullanım alanı sayfaları (self servis sipariş, sıramatik vb.) ve önerilen ürünler | Yeni kullanım alanı eklerken           |
| `locations.ts`           | Konya ilçeleri ve ilçe metinleri                                    | Yeni ilçe eklerken             |
| `references.ts`          | Referans kurumlar                                                     | Yeni referans eklerken          |
| `posts.ts`               | Blog yazıları                                                       | Yeni yazı yazarken             |
| `configurator.ts`        | "Kendi Kioskunu Oluştur" seçenekleri ve kuralları                  | Seçenek değişince            |
| `galeri.ts`              | Fotoğraf grupları ve başlıkları                                  | Yeni fotoğraf grubu açınca   |
| `gallery.generated.json` | Fotoğraf listesi,**otomatik üretilir, elle düzenlenmez**           | Hiçbir zaman                   |

Tipler `src/types/index.ts` içindedir. Bir alanı yanlış yazarsanız veya eksik bırakırsanız derleme hata verir.

Not: metinde çift tırnak (`"`) kullanacaksanız önüne `\` koyun, yoksa derleme hata verir.

### Örnek: yeni ürün eklemek

1. `src/data/products.ts` içindeki listeye mevcut bir ürünü kopyalayıp `slug`, `name`, `title`, `description`, `tags` vb. alanları değiştirin.
2. Fotoğrafları ekleyin (sonraki bölüm).
3. `npm run build` ile kontrol edin. `/urunler/<yeni-slug>/` sayfası kendiliğinden oluşur.

## Fotoğraflar

Orijinal fotoğraflar `gorsel-kaynak/` klasörüne konur. `npm run gorsel` komutu bunları kırpar, küçültür
ve `public/images/` altına üç boyutta yazar (liste, büyük, paylaşım). Aynı komut `gallery.generated.json`
listesini de günceller. Dosya adı kuralları, yeni grup ve kurum logosu ekleme adımları için
[gorsel-kaynak/README.md](gorsel-kaynak/README.md) dosyasına bakın.

Önemli: `public/images/` ve `gallery.generated.json` komutla üretilir ama repoya dahildir. Yeni fotoğraf ekledikten sonra
komutu çalıştırıp üretilen dosyaları da commit'leyin.

## SEO nasıl çalışır

Her sayfa `Base.astro` içinden geçer ve şunları otomatik alır:

- `<title>`, açıklama, canonical adres ve sosyal medya kartı (`SeoHead.astro`)
- Google için yapılandırılmış veri (`lib/seo.ts`): işletme bilgisi her sayfada, "Ana Sayfa › Ürünler" yolu
  ve soru-cevap (SSS) sayfa isterse eklenir
- `sitemap-index.xml` (Astro sitemap eklentisi derlemede üretir)

Bir sayfa `Base` bileşenini çağırırken `title`, `description`, `path` verir; `crumbs` ve `faq` isteğe bağlıdır.

## İletişim formu

`/iletisim/` sayfasındaki form `functions/api/iletisim.js` fonksiyonuna gönderilir (Cloudflare Pages Function).
Fonksiyon gelen talebi **e-posta (Resend)** ve isteğe bağlı **Telegram** ile iletir. Boş bırakılan gizli
`website` alanı spam botlarını ayıklar.

Cloudflare Pages > Settings > Environment variables içinde şunlar tanımlanır:


| Değişken                               | Zorunlu | Anlamı                                                  |
| ------------------------------------------ | --------- | ---------------------------------------------------------- |
| `RESEND_API_KEY`                         | Evet    | E-posta gönderimi için Resend anahtarı                |
| `MAIL_TO`                                | Hayır  | Taleplerin gideceği adres                               |
| `MAIL_FROM`                              | Hayır  | Gönderen adı/adresi (alan adı doğrulandıktan sonra) |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Hayır  | Telegram bildirimi                                       |

Yerelde denemek için `.dev.vars` dosyasına aynı değişkenleri yazın (repoya girmez).
`npm run dev` formu çalıştırmaz, fonksiyon için `npx wrangler pages dev dist` kullanılır.

## Yayın

Cloudflare Pages üzerinde yayınlanır (hangi dalın yayına gittiği Cloudflare panelindeki proje ayarlarından görülür).
Derleme ayarları: komut `npm run build`, çıktı klasörü `dist`.
Sayfa ziyaretleri Cloudflare Web Analytics ile ölçülür (`components/layout/Analytics.astro`).

## Kodlama kuralları

- Bileşen ve tip adları PascalCase (`Header.astro`, `Product`), değişken ve veri dosyaları camelCase (`generalInformation.ts`).
- Elle yazılan veri `.ts`, makinenin ürettiği veri `.json`.
- Sayfa adresleri Türkçe ve kebab-case (`kendi-kioskunu-olustur`), sonunda `/` ile biter.
- Yeni bileşen tek bir işi yapmalı: sayfa iskeleti `layout/`, sayfa bölümü `sections/`, küçük parça `ui/`.
