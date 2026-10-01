// Cloudflare Pages Function: iletişim formu -> e-posta (Resend) + isteğe bağlı Telegram bildirimi
// Ortam değişkenleri (Pages > Settings > Environment variables):
//   RESEND_API_KEY   (zorunlu)
//   MAIL_TO          (isteğe bağlı, varsayılan hasankorkmazdev@gmail.com)
//   MAIL_FROM        (isteğe bağlı, alan adı doğrulandıktan sonra örn. "Vectanom Kiosk <bilgi@konyakiosk.com>")
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID  (isteğe bağlı)
export async function onRequestPost({ request, env }) {
  const form = await request.formData();

  // honeypot
  if (form.get('website')) return new Response('ok');

  const clean = (k, max = 500) => String(form.get(k) || '').replace(/[<>]/g, '').trim().slice(0, max);
  const name = clean('name', 100);
  const phone = clean('phone', 30);
  if (!name || !phone) return new Response('Eksik bilgi', { status: 400 });

  const email = clean('email', 100);
  const lines = [
    `Ad: ${name}`,
    `Tel: ${phone}`,
    `E-posta: ${email}`,
    `Ürün: ${clean('product', 60)}`,
    `Boyut: ${clean('size', 30)}`,
    `Mesaj: ${clean('message', 1000)}`,
    `Sayfa: ${clean('page', 100)}`,
  ];
  const text = ['KIOSK ILETISIM TALEBI', ...lines].join('\n');

  const jobs = [];

  if (env.RESEND_API_KEY) {
    const body = {
      from: env.MAIL_FROM || 'Vectanom Kiosk <onboarding@resend.dev>',
      to: [env.MAIL_TO || 'hasankorkmazdev@gmail.com'],
      subject: 'KIOSK ILETISIM TALEBI',
      text,
    };
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) body.reply_to = email;
    jobs.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${env.RESEND_API_KEY}` },
        body: JSON.stringify(body),
      }).then((r) => r.ok),
    );
  }

  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
    jobs.push(
      fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
      }).then((r) => r.ok),
    );
  }

  if (!jobs.length) return new Response('Bildirim yapılandırılmadı', { status: 500 });

  const results = await Promise.all(jobs.map((j) => j.catch(() => false)));
  // en az biri ulaştıysa başarılı say
  return results.some(Boolean) ? new Response('ok') : new Response('Gönderilemedi', { status: 502 });
}
