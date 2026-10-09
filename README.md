# Manual Bíblico — projeto para Vercel

Landing page responsiva com vídeos configuráveis por variáveis de ambiente no build.

## Variáveis de ambiente

Configure em **Vercel → Project → Settings → Environment Variables**:

- `VIDEO_1_URL`: vídeo principal (YouTube, Vimeo ou URL direta HTTPS para MP4/WebM/Ogg)
- `VIDEO_2_URL`: vídeo adicional (opcional)
- `VIDEO_3_URL`: terceiro vídeo (opcional)
- `CHECKOUT_URL`: link de checkout; por padrão já usa o link Kiwify informado
- `WHATSAPP_NUMBER`: número internacional só com dígitos, por exemplo `5511999999999`
- `CONTACT_EMAIL`: e-mail de contato (opcional)

As variáveis de vídeo são inseridas durante o build. Alterou alguma variável? Faça um novo deploy para gerar o HTML atualizado.

## Publicar no Vercel

1. Envie esta pasta para um repositório GitHub.
2. Importe o repositório no Vercel.
3. O projeto usa `npm run build` e publica a pasta `dist` (já configurado em `vercel.json`).
4. Configure as variáveis de ambiente no painel do Vercel e execute um novo deploy.

## Testar localmente

Requer Node.js 18 ou superior:

```bash
npm run build
```

Depois abra `dist/index.html` ou rode um servidor estático apontando para `dist`.

## Observações

- Um HTML estático não lê variáveis de ambiente diretamente no navegador; `build.js` injeta os valores durante a compilação.
- Use URLs públicas HTTPS. Links de compartilhamento privados ou que exigem login não serão incorporados corretamente.
- Os links de Política de Privacidade e Termos de Uso gerados são modelos e devem ser substituídos por conteúdo legal real antes da publicação.
- A página de referência da Kiwify não foi copiada literalmente porque o conteúdo completo e os vídeos originais não foram fornecidos. Os campos de vídeo ficam prontos para receber as URLs reais.
