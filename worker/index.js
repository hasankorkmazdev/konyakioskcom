// Cloudflare Worker giriş noktası. Site statik dosyalardan (dist/) sunulur;
// Worker yalnızca /api/* isteklerinde önce çalışır (wrangler.jsonc > assets.run_worker_first).
import { handleContact } from './iletisim.js';

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/iletisim' || pathname === '/api/iletisim/') {
      if (request.method !== 'POST') return new Response('Yalnızca POST', { status: 405, headers: { allow: 'POST' } });
      return handleContact(request, env);
    }

    // Diğer her şey statik siteye (404 sayfası ve sondaki / yönlendirmesi dahil)
    return env.ASSETS.fetch(request);
  },
};
