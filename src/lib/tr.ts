// Türkçe dil yardımcıları.

/**
 * Yer adına ünlü uyumuna uygun bulunma eki ekler:
 * locative('Akşehir') → "Akşehir'de", locative('Çumra') → "Çumra'da", locative('Kırıkkale') → "Kırıkkale'de".
 */
export function locative(name: string): string {
  const lower = name.toLocaleLowerCase('tr');
  const lastVowel = [...lower].reverse().find((c) => 'aıoueiöü'.includes(c));
  const front = lastVowel !== undefined && 'eiöü'.includes(lastVowel);
  const hard = 'fstkçşhp'.includes(lower.at(-1) ?? ''); // sert ünsüzden sonra d → t
  return `${name}'${hard ? 't' : 'd'}${front ? 'e' : 'a'}`;
}
