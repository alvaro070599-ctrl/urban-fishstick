const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');
const templatePath = path.join(root, 'template.html');
const checkout = process.env.CHECKOUT_URL || 'https://pay.kiwify.com.br/bBAoBrp?afid=T8WmRb7E';
const whatsapp = (process.env.WHATSAPP_NUMBER || '').replace(/\D/g, '');
const email = process.env.CONTACT_EMAIL || '';

function safeAttr(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function videoEmbed(url, title) {
  if (!url) return '';
  const u = String(url).trim();
  let embed = '';
  const yt = u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  const vimeo = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (yt) embed = `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  else if (vimeo) embed = `https://player.vimeo.com/video/${vimeo[1]}`;
  else if (/^https:\/\//i.test(u) && /\.(mp4|webm|ogg)(\?.*)?$/i.test(u)) {
    return `<article class="card overflow-hidden p-3"><video controls playsinline preload="metadata" class="w-full rounded-xl" style="aspect-ratio:16/9;background:#000"><source src="${safeAttr(u)}">Seu navegador não suporta vídeo HTML5.</video><p class="mt-3 text-sm font-semibold">${title}</p></article>`;
  } else if (/^https:\/\//i.test(u)) embed = u;
  else return '';
  return `<article class="card overflow-hidden p-3"><div style="aspect-ratio:16/9"><iframe src="${safeAttr(embed)}" title="${title}" class="h-full w-full rounded-xl" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p class="mt-3 text-sm font-semibold">${title}</p></article>`;
}

let html = fs.readFileSync(templatePath, 'utf8');
html = html.replaceAll('https://pay.kiwify.com.br/bBAoBrp?afid=T8WmRb7E', checkout);
const videos = [
  videoEmbed(process.env.VIDEO_1_URL, 'Conheça o Manual Bíblico'),
  videoEmbed(process.env.VIDEO_2_URL, 'Veja como funciona'),
  videoEmbed(process.env.VIDEO_3_URL, 'Mais conteúdos em vídeo')
].filter(Boolean);
const videoSection = videos.length ? `\n<section id="videos" class="border-y border-white/10 bg-[#07111f] py-16 md:py-20"><div class="wrap"><div class="mx-auto max-w-2xl text-center"><p class="eyebrow">Assista e conheça</p><h2 class="heading mt-3 text-3xl font-bold sm:text-4xl">Veja o Manual Bíblico em ação</h2><p class="mt-4 text-sm leading-7 text-slate-400">Vídeos de apresentação e demonstração do aplicativo.</p></div><div class="mt-8 grid gap-4 ${videos.length === 1 ? 'mx-auto max-w-3xl' : 'md:grid-cols-2'}">${videos.join('')}</div></div></section>\n` : '';
html = html.replace('<section id="conteudos"', `${videoSection}<section id="conteudos"`);
if (whatsapp) {
  html = html.replace('Configure o link do WhatsApp oficial antes de publicar.', `<a class="gold mt-4" href="https://wa.me/${whatsapp}" target="_blank" rel="noopener noreferrer">FALAR PELO WHATSAPP →</a>`);
}
if (email) {
  html = html.replace('© 2025 Manual Bíblico. Todos os direitos reservados.', `© 2025 Manual Bíblico. Todos os direitos reservados. <a href="mailto:${safeAttr(email)}" class="ml-2 hover:text-amber-300">${safeAttr(email)}</a>`);
}
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'index.html'), html, 'utf8');
for (const file of ['politica-de-privacidade.html', 'termos-de-uso.html']) {
  const title = file.startsWith('politica') ? 'Política de Privacidade' : 'Termos de Uso';
  fs.writeFileSync(path.join(dist, file), `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | Manual Bíblico</title><body style="font-family:Arial,sans-serif;max-width:760px;margin:48px auto;padding:0 20px;line-height:1.7;background:#07111f;color:#f8fafc"><h1>${title}</h1><p>Esta página deve ser preenchida com a política oficial do responsável pelo Manual Bíblico antes da publicação.</p><p><a style="color:#f4cb65" href="/">Voltar ao início</a></p></body></html>`, 'utf8');
}
console.log('Build concluído: dist/index.html');
