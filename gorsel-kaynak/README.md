# Görsel kaynak klasörü

Buraya **orijinal** (büyük) görselleri koyun. Siteye doğrudan yayınlanmaz;
`npm run gorsel` komutu bunları optimize edip `public/images/` altına yazar.

```
gorsel-kaynak/
├─ marka/                     logo dosyaları
├─ urunler/<ürün-grubu>/      ürün fotoğrafları (klavyeli-kiosk, yatay-kiosk, ...)
├─ referanslar/<kurum-slug>/  kurumun kiosk fotoğrafları
├─ referanslar/logolar/       kurum logoları:  <kurum-slug>.svg | .png
└─ kullanilmayanlar/          düşük kaliteli / yayınlanmayacak görseller
```

## Dosya adı kuralı
`<grup>-<ayrıntı>-<görünüm>.png`   ör. `klavyeli-kiosk-24-inc-on.png`
Küçük harf, Türkçe karakter ve boşluk yok. Görünüm için: `on`, `arka`, `sag`, `sol`, `yan`, `ust`,
`capraz`, `perspektif`, `teknik`. Adı `-on` ile biten görsel grubun kapak görseli olur.

## Yeni görsel eklemek
1. Görseli uygun klasöre koyun.
2. `npm run gorsel`
3. Yeni bir grup (klasör) açtıysanız `src/data/galeri.ts` içindeki `titles` listesine başlığını ekleyin.

## Kurum logosu eklemek
Logoyu `referanslar/logolar/<kurum-slug>.svg` (tercihen) veya `.png` olarak koyup `npm run gorsel` çalıştırın.
Kurum slug'ları `src/data/references.ts` içindedir. Logo yoksa sitede kurum adı yazıyla gösterilir.
