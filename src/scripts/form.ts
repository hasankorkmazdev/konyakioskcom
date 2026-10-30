// İletişim ve bayilik formlarının ortak gönderimi: doğrulama, meşgul durumu, WhatsApp yedeği.
import { waLink } from '../data/generalInformation';

interface Options {
  required: string[];
  missing: string; // eksik alan mesajı
  success: string;
  fallback: (data: FormData) => string; // gönderilemezse WhatsApp'a gidecek metin
}

export function bindForm(form: HTMLFormElement, o: Options) {
  const status = form.querySelector<HTMLElement>('.form-status')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (btn.getAttribute('aria-busy') === 'true') return; // çift gönderimi engelle
    const data = new FormData(form);
    if (o.required.some((k) => !String(data.get(k) ?? '').trim())) {
      status.textContent = o.missing;
      return;
    }
    btn.setAttribute('aria-busy', 'true');
    btn.setAttribute('aria-disabled', 'true');
    status.textContent = 'Gönderiliyor…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: data });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.textContent = o.success;
    } catch {
      status.innerHTML = `Form gönderilemedi. <a href="${waLink(o.fallback(data))}" target="_blank" rel="noopener">Bilgilerinizi WhatsApp ile gönderin</a>.`;
    } finally {
      btn.removeAttribute('aria-busy');
      btn.removeAttribute('aria-disabled');
    }
  });
}
