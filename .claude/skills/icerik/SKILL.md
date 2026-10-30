---
name: icerik
description: konyakiosk.com için yeni sayfa yazarken ya da mevcut bir sayfanın içeriğini genişletirken kullan. Arama ve rakip analizi, kullanıcı onaylı içerik planı ve yazım kuralları.
---

# İçerik yazma süreci

Adımları sırayla izle. 3. adımda kullanıcı onay vermeden yazmaya geçme.

## 1. Hedefi belirle

- Ana arama ifadesini ve 3–8 yan ifadeyi yaz.
- Arama niyetini belirle; niyet sayfa türünü belirler:
  - Bilgi ("sıramatik nedir") → `nedir.ts`
  - Çözüm ("hastane sıramatik sistemi") → `useCases.ts`
  - Model ("totem kiosk") → `products.ts`
  - Yerel ("Konya kiosk") → `/konya-kiosk/`, `locations.ts`
  - Uzun kuyruk soru → `posts.ts`
- Çakışma kontrolü: ifadeyi ve yakın biçimlerini `src/data/` içindeki `title`, `h1` ve `slug` alanlarında ara. Aynı ifadeyi hedefleyen bir sayfa varsa yeni sayfa açma, o sayfayı genişletmeyi öner.

## 2. Araştır

- Kullanıcı Search Console ya da Yandex Webmaster verisi paylaştıysa önce onu kullan. Gösterim alıp az tıklanan ifadeler en hızlı kazanılacak ifadelerdir.
- Ana ifadeyi ve 2–3 yan ifadeyi Türkçe ara (WebSearch). WebSearch sıralaması Türkiye'deki sıralamayla aynı olmayabilir. Mümkünse tarayıcıda `https://www.google.com.tr/search?q=<ifade>&hl=tr&gl=tr` ve `https://yandex.com.tr/search/?text=<ifade>` sonuçlarını da aç. CAPTCHA çıkarsa geç ve kullanıcıya söyle.
- İlk 5–10 organik sonucu aç (WebFetch). Reklamları, pazar yerlerini (Trendyol, Hepsiburada, n11, Sahibinden), sözlükleri ve forumları atla.
- Her rakip için not al:
  - H1, H2 ve H3 başlıkları
  - Ele aldığı alt konular ve yaklaşık kelime sayısı
  - Tablo, SSS, görsel ve fiyat kullanıyor mu
  - Eksik bıraktığı ya da yüzeysel geçtiği konular
- "Diğer kullanıcılar şunları da sordu" sorularını ve ilgili aramaları topla.

## 3. Planı sun ve onay al

```
Hedef: <ana ifade> | Yan: <...> | Niyet: <...>
Sayfa: <tür> → /<slug>/ (yeni sayfa / mevcut sayfayı genişletme)

Rakipler:
| Site | Başlık yapısı (özet) | Güçlü yönü | Eksiği |

Başlık iskeleti:
H1 ...
  H2 ... [ortak | fark]
    H3 ...

title (en fazla 60): ...
description (120–155): ...
SSS: 5–10 soru
Deneyimimiz: kullanılacak referans, kurulum ve fotoğraflar
İç bağlantılar: buradan → ..., buraya ← ... (en az 3 sayfa)
```

- Rakiplerin çoğunda ortak olan konular planda mutlaka yer alır [ortak]. Rakiplerin eksik bıraktığı konular fark yaratmak için eklenir [fark].
- Kelime sayısı hedef değildir. Rakiplerin uzunluğu yalnızca kapsamın ne kadar geniş olduğunu gösterir.

## 4. Yaz

- Rakip metni kopyalama ve cümle cümle yeniden yazarak da aktarma. Rakiplerden yalnızca konu ve yapı bilgisi al.
- İlk paragraf aranan soruya 2–3 cümlede doğrudan cevap versin.
- Başlıkları insanların arama diliyle yaz ("Sıramatik fiyatları neye göre değişir?"). İfadeler doğal cümle içinde geçsin, anahtar kelime doldurma.
- Kendi deneyimimizi kullan: `references.ts` içindeki gerçek kurulumlar, `galeri.ts` fotoğrafları, Konya merkezli kurulum ve servis. Rakiplerin çoğunda olmayan şey bu.
- Bilgi kuralları CLAUDE.md'deki "İçerik" bölümünde: uydurma bilgi yazma, kaynak göster, doğrulayamadığını kullanıcıya sor.
- Satışa bağla: önerilen modeller, ilgili kullanım alanları ve CTA bulunsun.
- Yer adı eklerinde `locative()` kullan (`src/lib/tr.ts`).
- Veri biçimi (tipler `src/types/index.ts` içinde):
  - `useCases.ts`: `sections` (her bölümde `paragraphs`, `list`, `ordered`, `table`, `after`), `benefits`, `recommended`, `faq`
  - `nedir.ts`: `summary`, `sections` (`paragraphs`, `list`), `faq`, `published` ve `modified`
  - `posts.ts`: `body` satırları; `## ` ile başlayan satır H2, `- ` ile başlayan satır liste maddesi olur

## 5. Bitir

- Plandaki sayfalardan yeni sayfaya bağlantıları ekle.
- `npm run build` ve `npm run seo-kontrol` hatasız geçmeli; yeni ya da değişen sayfa için uyarı kalmamalı.
- Sayfayı geliştirme sunucusunda aç, dar ekranda da kontrol et.
- Kullanıcıya şunları özetle: hedef ifadeler, eklenen bölümler, kullanılan kaynaklar, doğrulanamayıp onay bekleyen bilgiler.
