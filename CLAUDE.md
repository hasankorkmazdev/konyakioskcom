# konyakiosk.com

Vectanom Kiosk (Express Bilgisayar) tanıtım ve talep toplama sitesi. Yapı, komutlar ve veri dosyaları için [README.md](README.md) dosyasına bak.
Kullanıcıyla konuşurken, içerikte ve commit mesajlarında Türkçe kullan.

Şirket yapısı: Express Bilgisayar ana şirkettir. Gora Yazılım, Express Bilgisayar'ın yazılım şirketidir; kiosk yazılımı ve bakım-servis işlerini yürütür (örneğin Konya Kart kiosklarının bakım ve servisi). Vectanom, dijital pazarlama ve tanıtımda kullanılan kiosk markasıdır; sitede ve içerikte marka olarak Vectanom kullanılır, Gora Yazılım adı yalnızca yazılım ya da servisten söz ederken geçer.

## Hedef

1. Kiosk satışı: ziyaretçiyi iletişim formuna, WhatsApp'a veya telefona götür.
2. Google ve Yandex'te üst sıralar.

Bu ikisine katkı sağlamayan bir işe başlamadan önce sor.

## Sayfa rolleri

nedir (bilgi) → kullanım alanı (çözüm) → ürün (model) → iletişim. `/konya-kiosk/` ve `/hizmet-bolgeleri/` yerel aramaları karşılar. Her sayfa bu zincirde bir sonraki sayfaya bağlantı verir ve CTA ile biter.

## İçerik

- Yeni sayfa yazarken ya da bir sayfayı genişletirken `icerik` skill'ini kullan: önce araştırma ve plan, kullanıcı onay verince yazım.
- Bilgi kaynakları: ürün ve donanım için `products.ts` ve `configurator.ts`, referanslar için `references.ts`, telefon, e-posta ve adres için `generalInformation.ts`. Bunlarda olmayan fiyat, istatistik, sertifika ya da mevzuat bilgisini kaynağını göstermeden yazma; doğrulayamadığın bilgiyi kullanıcıya sor.

## Teknik SEO

- `title` en fazla 60 karakter olsun: ana ifade başta, marka sonda. `description` 120–155 karakter olsun. İkisi de sitede benzersiz olmalı.
- Sayfada tek H1 olur, başlık seviyesi atlanmaz.
- Slug Türkçe karakter içermez, kebab-case yazılır ve `/` ile biter. Yayındaki bir adres değişirse ya da sayfa kaldırılırsa `public/_redirects` dosyasına 301 ekle; sayfayı yönlendirme olmadan silme.
- JSON-LD yalnızca `src/lib/seo.ts` ile üretilir ve sayfada görünen bilgiyle aynı olur. Sitenin kendine verdiği puan ya da yorum şeması eklenmez.
- `modified` alanı ve sitemap `lastmod` yalnızca içerik esaslı olarak değiştiğinde güncellenir.
- Yeni bir sayfa, üst menü ve alt bilgi dışında en az 3 sayfadan bağlantı alır. Aynı şablondan üretilen sayfalar (ilçeler vb.) birbirinin kopyası olmaz.
- Varsayılan olarak tarayıcıya JavaScript gönderilmez. Kütüphane, web fontu veya üçüncü taraf betik eklemeden önce sor.

## Kod

- Sayfa metnini `.astro` dosyasına gömme; `src/data/` altındaki tipli veriye yaz.
- Şunları elle düzenleme: `gallery.generated.json` ve `public/images/` (ikisini de `npm run gorsel` üretir), `dist/`, kökteki `index.html`.

## Doğrulama

- `npm run build`, ardından `npm run seo-kontrol` çalıştır. `seo-kontrol` hata verirse iş bitmiş sayılmaz. Uyarıları, ilgili sayfaya dokunduysan düzelt.
- Görünür bir değişiklikte sayfayı geliştirme sunucusunda, dar ekranda da aç.

## Git

Commit mesajı Türkçe ve emir kipinde yazılır ("Hastane sıramatik sayfasını genişlet"). Gövdede değişikliğin nedeni ve hedeflenen arama ifadeleri yer alır. Commit ve push yalnızca kullanıcı isteyince yapılır; push siteyi yayına çıkarabilir.
