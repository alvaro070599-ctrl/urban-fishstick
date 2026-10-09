# Manual Bíblico — Next.js + Tailwind + Vercel

Projeto de landing page responsiva usando Next.js App Router, React, TypeScript e Tailwind CSS.

## Requisitos
- Node.js 18.18+ (recomendado Node.js 20 LTS)
- npm

## Instalação local

1. Extraia o ZIP.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Copie `.env.local.example` para `.env.local`.
4. Edite `.env.local` com o link público do vídeo e os demais dados.
5. Inicie o servidor:

   ```bash
   npm run dev
   ```

6. Abra http://localhost:3000

## Variáveis de ambiente

```env
NEXT_PUBLIC_VIDEO_URL=https://www.youtube.com/embed/SEU_ID_DE_VIDEO
NEXT_PUBLIC_CHECKOUT_URL=https://pay.kiwify.com.br/bBAoBrp?afid=T8WmRb7E
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_CONTACT_EMAIL=contato@seudominio.com.br
```

`NEXT_PUBLIC_VIDEO_URL` aceita:
- URL de incorporação, como `https://www.youtube.com/embed/VIDEO_ID`
- URL direta de arquivo de vídeo, como `https://cdn.exemplo.com/video.mp4`

Para vídeos de YouTube, use o formato `/embed/ID`, não o endereço normal `watch?v=`. Para Vimeo ou outros provedores, use a URL de embed que o próprio provedor disponibiliza.

## Publicar no Vercel

1. Envie a pasta para um repositório GitHub.
2. No Vercel, escolha **Add New → Project** e importe o repositório.
3. Em **Settings → Environment Variables**, cadastre as variáveis do exemplo acima.
4. Faça um novo deploy após alterar variáveis de ambiente, porque `NEXT_PUBLIC_*` é incorporado no bundle durante o build.
5. A configuração de framework deve ser detectada como Next.js automaticamente.

## Observações importantes

- O vídeo não está hardcoded: o player lê `process.env.NEXT_PUBLIC_VIDEO_URL`.
- Sem URL de vídeo configurada, aparece um bloco informativo no lugar do player.
- Os textos, módulos e seções são uma versão de referência baseada nas informações fornecidas; não é uma cópia pixel-perfect verificada da página externa.
- Configure o número e o e-mail reais antes de publicar.
- Crie páginas reais de política de privacidade e termos de uso antes de usar esses links em produção.
