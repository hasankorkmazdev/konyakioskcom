// İletişim ve bayilik formu (POST /api/iletisim) -> Cloudflare Email Routing ile e-posta.
// worker/index.js tarafından çağrılır. E-posta wrangler.jsonc'deki MAIL (send_email) bağlantısıyla gönderilir.
// Alıcı, Cloudflare > Email Routing > Destination addresses altında doğrulanmış bir adres olmalıdır.
// Ortam değişkeni (Workers & Pages > konyakioskcom > Settings > Variables and Secrets):
//   MAIL_TO   (isteğe bağlı, varsayılan hasankorkmazdev@gmail.com)
import { EmailMessage } from 'cloudflare:email';

// Gönderen adres konyakiosk.com üzerinde olmalı (Email Routing bu alan adında açık).
const FROM = 'form@konyakiosk.com';

export async function handleContact(request, env) {
  const form = await request.formData();

  // honeypot
  if (form.get('website')) return new Response('ok');

  const clean = (k, max = 500) => String(form.get(k) || '').replace(/[<>]/g, '').trim().slice(0, max);
  const name = clean('name', 100);
  const phone = clean('phone', 30);
  if (!name || !phone) return new Response('Eksik bilgi', { status: 400 });

  const email = clean('email', 100);
  const isDealer = clean('page', 100) === 'bayilik';
  const title = isDealer ? 'KIOSK BAYILIK BASVURUSU' : 'KIOSK ILETISIM TALEBI';
  const lines = isDealer
    ? [
        `Ad: ${name}`,
        `Firma: ${clean('company', 100)}`,
        `Tel: ${phone}`,
        `E-posta: ${email}`,
        `Şehir: ${clean('city', 100)}`,
        `Faaliyet: ${clean('field', 100)}`,
        `Mesaj: ${clean('message', 1000)}`,
      ]
    : [
        `Ad: ${name}`,
        `Tel: ${phone}`,
        `E-posta: ${email}`,
        `Ürün: ${clean('product', 60)}`,
        `Boyut: ${clean('size', 30)}`,
        `Mesaj: ${clean('message', 1000)}`,
        `Sayfa: ${clean('page', 100)}`,
      ];
  const text = [title, ...lines].join('\n');

  if (!env.MAIL) return new Response('E-posta yapılandırılmadı', { status: 500 });

  const to = env.MAIL_TO || 'hasankorkmazdev@gmail.com';
  // Gelen e-postada "Yanıtla" denince doğrudan formu dolduran kişiye gitsin
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '';
  try {
    await env.MAIL.send(new EmailMessage(FROM, to, mimeMessage({ to, subject: title, text, replyTo })));
    return new Response('ok');
  } catch (err) {
    console.error('Form e-postası gönderilemedi:', err);
    return new Response('Gönderilemedi', { status: 502 });
  }
}

/** Düz metin, UTF-8 e-posta (MIME). Cloudflare Message-ID başlığını zorunlu tutar. */
function mimeMessage({ to, subject, text, replyTo }) {
  const base64 = (s) => {
    let bin = '';
    for (const byte of new TextEncoder().encode(s)) bin += String.fromCharCode(byte);
    return btoa(bin);
  };
  return [
    `From: Vectanom Kiosk <${FROM}>`,
    `To: ${to}`,
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
    `Subject: =?UTF-8?B?${base64(subject)}?=`,
    `Message-ID: <${crypto.randomUUID()}@konyakiosk.com>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    base64(text).replace(/.{76}/g, '$&\r\n'),
  ].join('\r\n');
}
