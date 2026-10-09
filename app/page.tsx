import { BookOpen, ShieldCheck, Map, Landmark, Brain, CheckCircle2, MessageCircle, ChevronDown } from "lucide-react";

const checkout =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ||
  "https://pay.kiwify.com.br/bBAoBrp?afid=T8WmRb7E";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contato@seudominio.com.br";

function VideoSection() {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL;

  return (
    <section id="apresentacao" className="border-y border-white/5 bg-[#091321] py-16 sm:py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Conheça o Manual Bíblico</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Estude a Palavra com <span className="text-gold-gradient">mais contexto e profundidade.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Veja a apresentação e conheça a proposta do aplicativo.
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-4xl overflow-hidden rounded-2xl border border-gold/25 bg-black shadow-gold">
          {videoUrl ? (
            videoUrl.match(/\.(mp4|webm|ogg)(\?.*)?$/i) ? (
              <video
                className="aspect-video w-full bg-black"
                controls
                playsInline
                preload="metadata"
                src={videoUrl}
              >
                Seu navegador não oferece suporte à reprodução de vídeo.
              </video>
            ) : (
              <iframe
                className="aspect-video w-full"
                src={videoUrl}
                title="Apresentação do Manual Bíblico"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            )
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#12243a] to-[#050b14] px-6 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                <BookOpen size={28} />
              </div>
              <p className="text-lg font-bold">Vídeo de apresentação</p>
              <p className="max-w-md text-sm leading-6 text-slate-400">
                Configure <code className="rounded bg-white/10 px-1.5 py-1 text-gold">NEXT_PUBLIC_VIDEO_URL</code>
                {" "}nas variáveis de ambiente e faça um novo deploy para exibir o vídeo aqui.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const modules = [
  {
    icon: Map,
    title: "Mapeamento Estratégico do AT",
    text: "Visão panorâmica e organização cronológica do Antigo Testamento."
  },
  {
    icon: ShieldCheck,
    title: "Apologética aplicada",
    text: "Respostas e argumentos para estudar questões complexas da fé."
  },
  {
    icon: Brain,
    title: "Ativismo ideológico",
    text: "Estudo de ideias contemporâneas, pós-modernismo e cultura woke."
  },
  {
    icon: Landmark,
    title: "Usos e costumes",
    text: "Agricultura, cidades, educação e família no contexto bíblico."
  },
  {
    icon: BookOpen,
    title: "Teologia aplicada",
    text: "Conceitos de teologia sistemática explicados de forma clara."
  }
];

const faqs = [
  ["É uma mensalidade?", "A oferta do produto informa pagamento único e acesso vitalício. Confira os termos e as condições vigentes na página oficial de compra."],
  ["Posso usar em mais de um dispositivo?", "A oferta informa acesso em smartphone, tablet e computador. Consulte a página oficial para confirmar os limites e as regras de uso simultâneo."],
  ["O aplicativo funciona online?", "O funcionamento e os recursos podem depender de conexão com a internet. Consulte os requisitos oficiais do produto."],
  ["As atualizações estão inclusas?", "A oferta informa atualizações inclusas. Confira os detalhes e as condições na página oficial."],
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050b14]/95 backdrop-blur-xl">
        <div className="container-main flex min-h-[72px] items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Manual Bíblico, início">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-xl text-gold">✝</span>
            <span>
              <span className="block text-sm font-black tracking-wide">MANUAL <span className="text-gold">BÍBLICO</span></span>
              <span className="mt-1 block text-[9px] uppercase tracking-[.18em] text-slate-500">Conhecimento que transforma</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-xs font-semibold text-slate-300 md:flex">
            <a className="hover:text-gold" href="#apresentacao">Apresentação</a>
            <a className="hover:text-gold" href="#conteudos">Conteúdos</a>
            <a className="hover:text-gold" href="#duvidas">Dúvidas</a>
          </nav>
          <a href={checkout} className="hidden rounded-lg bg-gold px-4 py-3 text-xs font-black uppercase text-[#07111f] transition hover:brightness-110 sm:inline-flex">
            Quero acessar →
          </a>
        </div>
      </header>

      <section id="inicio" className="hero-surface relative">
        <div className="container-main grid min-h-[610px] items-center gap-10 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-cream">
              Seu estudo bíblico em outro nível
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              A Bíblia tem muito mais a revelar. <span className="text-gold-gradient">Descubra cada contexto.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Um aplicativo de estudos para aprofundar seu conhecimento das Escrituras, da história bíblica, da apologética e da teologia.
            </p>
            <a href={checkout} className="gold-cta mt-8">
              EU QUERO O APLICATIVO <span aria-hidden="true">→</span>
            </a>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-gold" /> Pagamento único conforme a oferta</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-gold" /> Conteúdos de estudo</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-gold/25 bg-gradient-to-br from-[#19314d] to-[#070d16] p-3 shadow-gold">
              <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(233,185,79,.15),transparent_65%),#08111e] p-6 text-center">
                <BookOpen size={54} strokeWidth={1.2} className="text-gold" />
                <p className="mt-5 font-serif text-3xl font-bold">Manual Bíblico</p>
                <p className="mt-2 text-sm text-slate-400">História · Contexto · Teologia</p>
                <p className="mt-8 text-xs text-slate-500">Substitua por uma captura real do aplicativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoSection />

      <section className="py-16 sm:py-20">
        <div className="container-main">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Aprenda com mais clareza</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Isso faz sentido para você?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Entenda o contexto das passagens, encontre explicações e desenvolva seus estudos com mais organização.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              ["📖", "Quer compreender melhor?", "Você já leu a Bíblia e gostaria de entender melhor o contexto das passagens."],
              ["💡", "Busca explicações claras?", "Organize suas dúvidas e explore diferentes temas de estudo bíblico."],
              ["🛡️", "Quer fundamentar sua fé?", "Estude argumentos, história e conceitos teológicos com mais profundidade."]
            ].map(([icon, title, text]) => (
              <article className="card p-6" key={title}>
                <span className="text-2xl">{icon}</span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="conteudos" className="border-y border-white/5 bg-[#091321] py-16 sm:py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Explore os módulos</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Conteúdo para aprofundar seus estudos</h2>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ icon: Icon, title, text }) => (
              <article className="card p-6 transition hover:-translate-y-1 hover:border-gold/40" key={title}>
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                  <Icon size={23} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="py-16 sm:py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl rounded-3xl border border-gold/30 bg-gradient-to-br from-[#132b47] to-[#070d16] p-7 text-center shadow-gold sm:p-12">
            <p className="eyebrow">Dê o próximo passo</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Tenha o Manual Bíblico na sua rotina de estudos.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Confira a oferta oficial e veja as condições de acesso ao aplicativo.
            </p>
            <a href={checkout} className="gold-cta mt-7">
              SIM! EU QUERO AGORA! →
            </a>
            <p className="mt-4 text-xs leading-6 text-slate-500">Preço e condições disponíveis na página oficial de pagamento.</p>
          </div>
        </div>
      </section>

      <section id="duvidas" className="border-t border-white/5 bg-[#091321] py-16 sm:py-20">
        <div className="container-main grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Precisa de ajuda?</p>
            <h2 className="mt-4 text-3xl font-black">Nosso suporte</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">Entre em contato pelo canal de atendimento para tirar dúvidas sobre o produto e o acesso.</p>
            {whatsapp ? (
              <a className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-4 text-sm font-bold text-white hover:bg-green-500" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Falar agora!
              </a>
            ) : (
              <p className="mt-6 rounded-xl border border-white/10 bg-[#050b14] p-4 text-xs leading-6 text-slate-400">
                Configure <code className="text-gold">NEXT_PUBLIC_WHATSAPP_NUMBER</code> para ativar o botão de WhatsApp.
              </p>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-black sm:text-3xl">Dúvidas frequentes</h2>
            <div className="mt-6 space-y-3">
              {faqs.map(([question, answer], index) => (
                <details className="group rounded-xl border border-white/10 bg-[#050b14]/70 p-5" key={question}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">
                    {question}
                    <ChevronDown size={18} className="shrink-0 text-gold transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-br from-[#132b47] to-[#050b14] py-16 text-center sm:py-20">
        <div className="container-main mx-auto max-w-3xl">
          <p className="eyebrow">Comece hoje</p>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">Aprofunde seu conhecimento da Palavra.</h2>
          <a href={checkout} className="gold-cta mt-8">
            SIM! EU QUERO AGORA! →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050b14] py-8">
        <div className="container-main flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-black">MANUAL <span className="text-gold">BÍBLICO</span></p>
            <p className="mt-2 text-xs text-slate-500">Copyright 2025 © Manual Bíblico. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs text-slate-500">Contato: <a className="hover:text-gold" href={`mailto:${email}`}>{email}</a></p>
          </div>
          <div className="flex gap-5 text-xs text-slate-400">
            <a href="/politica-de-privacidade" className="hover:text-gold">Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-gold">Termos de uso</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
