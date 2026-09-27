import manifest from './gallery.generated.json';

export interface Photo {
  id: string;
  group: string; // örn. "urunler/klavyeli-kiosk"
  w: number;
  h: number;
  thumb: string;
  large: string;
  download: string;
  alt: string;
}

export interface Group {
  key: string; // "urunler/klavyeli-kiosk"
  slug: string;
  title: string;
  blurb: string;
  photos: Photo[];
}

const titles: Record<string, { title: string; blurb: string }> = {
  'urunler/klavyeli-kiosk': { title: 'Klavyeli Kiosk', blurb: '24 inç dokunmatik ekranlı, klavyeli kiosk. Sorgulama ve kayıt işlemleri için.' },
  'urunler/yatay-kiosk': { title: 'Yatay (Masa Tipi) Kiosk', blurb: 'Yatay ekranlı, masa tipi kiosk. Bilgilendirme ve tanıtım uygulamaları için.' },
  'urunler/dikey-kiosk': { title: 'Dikey Kiosk', blurb: '32 inç dikey ekranlı kiosk.' },
  'urunler/kutuphane-kiosk': { title: 'Kütüphane Kiosk', blurb: '32 inç kütüphane kioskları.' },
  'urunler/self-servis-kiosk': { title: 'Self Servis Sipariş Kiosku', blurb: 'Kafe, restoran ve büfe için self-servis sipariş kioskları.' },
  'urunler/standart-kiosk': { title: 'Standart Kiosk', blurb: 'Farklı renk seçenekleriyle ayaklı standart kiosklar.' },
  'urunler/ekonomik-kiosk': { title: 'Ekonomik Kiosk', blurb: 'Bütçe dostu, ayaklı kiosk modeli.' },
  'urunler/odeme-kiosku': { title: 'Ödeme Kioskları', blurb: 'Mifare, kredi kartı okuyuculu ve yazıcılı 24 inç ödeme kioskları.' },
  'urunler/tahsilat-kabini': { title: 'Tahsilat Kabinleri', blurb: 'Dış mekan tahsilat ve su ödeme noktası kabin tasarımları.' },
  'referanslar/konya-buyuksehir-belediyesi': { title: 'Konya Büyükşehir Belediyesi', blurb: 'Kiosk tahsilat sistemi.' },
  'referanslar/koski': { title: 'KOSKİ', blurb: 'Kiosk tahsilat sistemi.' },
  'referanslar/kaski': { title: 'KASKİ', blurb: 'Kiosk tahsilat sistemi.' },
  'referanslar/sivas-belediyesi': { title: 'Sivas Belediyesi', blurb: 'Kiosk tahsilat sistemi.' },
  'referanslar/igdir-belediyesi': { title: 'Iğdır Belediyesi', blurb: 'Kiosk tahsilat sistemi.' },
};

const words: Record<string, string> = {
  on: 'ön görünüm', arka: 'arka görünüm', sag: 'sağ görünüm', sol: 'sol görünüm', yan: 'yan görünüm', ust: 'üst görünüm',
  capraz: 'çapraz görünüm', perspektif: 'perspektif görünüm', teknik: 'teknik çizim', beyaz: 'beyaz', siyah: 'siyah', gri: 'gri',
  kirmizi: 'kırmızı', mavi: 'mavi', ekran: 'ekran', yazicili: 'yazıcılı', barkod: 'barkod', okuyuculu: 'okuyuculu',
};

function altFor(title: string, id: string): string {
  const tokens = id.split('-');
  const tail: string[] = [];
  for (let i = tokens.length - 1; i >= 0; i--) {
    const t = tokens[i];
    if (words[t]) tail.unshift(words[t]);
    else if (/^\d+$/.test(t)) continue; // numaraları atla
    else break;
  }
  return tail.length ? `${title} – ${tail.join(' ')}` : `${title} – görsel`;
}

const path = (group: string, id: string, kind: 'thumb.webp' | 'large.webp' | 'paylas.jpg') => `/images/${group}/${id}-${kind}`;

export function getGroup(key: string): Group {
  const items = (manifest.groups as Record<string, { id: string; w: number; h: number }[]>)[key] ?? [];
  const meta = titles[key] ?? { title: key, blurb: '' };
  return {
    key,
    slug: key.split('/')[1],
    title: meta.title,
    blurb: meta.blurb,
    photos: items.map((p) => ({
      id: p.id,
      group: key,
      w: p.w,
      h: p.h,
      thumb: path(key, p.id, 'thumb.webp'),
      large: path(key, p.id, 'large.webp'),
      download: path(key, p.id, 'paylas.jpg'),
      alt: altFor(meta.title, p.id),
    })),
  };
}

export const productGroups = [
  'urunler/klavyeli-kiosk', 'urunler/yatay-kiosk', 'urunler/dikey-kiosk', 'urunler/kutuphane-kiosk',
  'urunler/self-servis-kiosk', 'urunler/standart-kiosk', 'urunler/ekonomik-kiosk', 'urunler/odeme-kiosku', 'urunler/tahsilat-kabini',
].map(getGroup).filter((g) => g.photos.length);

export const referenceGroups = [
  'referanslar/konya-buyuksehir-belediyesi', 'referanslar/koski', 'referanslar/kaski', 'referanslar/sivas-belediyesi', 'referanslar/igdir-belediyesi',
].map(getGroup).filter((g) => g.photos.length);

export const logos = manifest.logos as Record<string, string>;

/** Bir ürün/sektör sayfası için birden çok gruptan görsel toplar. */
export const photosOf = (...keys: string[]) => keys.flatMap((k) => getGroup(k).photos);

export const cover = (key: string): Photo => getGroup(key).photos[0];

/** Ürün sayfası -> gösterilecek galeri grupları */
export const productPhotoGroups: Record<string, string[]> = {
  'klavyeli-kiosk': ['urunler/klavyeli-kiosk'],
  'yatay-kiosk': ['urunler/yatay-kiosk'],
  'dikey-kiosk': ['urunler/dikey-kiosk', 'urunler/standart-kiosk', 'urunler/ekonomik-kiosk'],
  'kutuphane-kiosk': ['urunler/kutuphane-kiosk'],
};

/** Sektör sayfası -> gösterilecek galeri grupları */
export const sectorPhotoGroups: Record<string, string[]> = {
  'kafe-kiosk': ['urunler/self-servis-kiosk'],
  'bufe-kiosk': ['urunler/self-servis-kiosk', 'urunler/ekonomik-kiosk'],
  'restoran-kiosk': ['urunler/self-servis-kiosk'],
  'hizli-satis-kiosk': ['urunler/self-servis-kiosk', 'urunler/ekonomik-kiosk'],
  'belediye-kiosk': ['urunler/tahsilat-kabini', 'urunler/odeme-kiosku', 'urunler/standart-kiosk'],
};
