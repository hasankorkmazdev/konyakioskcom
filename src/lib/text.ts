// Metin yardımcıları.

/** Metnin ilk cümlesini döndürür: firstSentence('Kısa. Uzun açıklama.') → "Kısa." */
export const firstSentence = (text: string) => `${text.split('.')[0]}.`;

/** YYYY-AA-GG tarihini Türkçe uzun biçimde yazar: formatDate('2026-03-01') → "1 Mart 2026" */
export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
