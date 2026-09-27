// Cloudflare Pages Function: iletişim formu -> Telegram bildirimi
// Ortam değişkenleri (Pages > Settings > Environment variables):
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
export async function onRequestPost({ request, env }) {
  const form = await request.formData();

  // honeypot
  if (form.get('website')) return new Response('ok');

  const clean = (k, max = 500) => String(form.get(k) || '').replace(/[<>]/g, '').trim().slice(0, max);
  const name = clean('name', 100);
  const phone = clean('phone', 30);
  if (!name || !phone) return new Response('Eksik bilgi', { status: 400 });

  const text = [
    'Yeni kiosk iletişim formu',
    `Ad: ${name}`,
    `Tel: ${phone}`,
    `E-posta: ${clean('email', 100)}`,
    `Ürün: ${clean('product', 60)}`,
    `Boyut: ${clean('size', 30)}`,
    `Mesaj: ${clean('message', 1000)}`,
    `Sayfa: ${clean('page', 100)}`,
  ].join('\n');

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return new Response('Bildirim yapılandırılmadı', { status: 500 });
  }

  const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
  });

  return new Response(res.ok ? 'ok' : 'Gönderilemedi', { status: res.ok ? 200 : 502 });
}
