# Vai de Smash

Site institucional/landing page da hamburgueria artesanal **Vai de Smash**, em Louveira - SP.

## Stack

- React + Vite
- Tailwind CSS v4
- Lucide React (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/`.

## Onde editar os dados do negócio

Todas as informações reais (endereço, WhatsApp, Instagram, link do cardápio, horários e
depoimentos) ficam centralizadas em `src/data/business.js` — não é necessário mexer nos
componentes para atualizar esses dados.

## Cardápio

Os itens do cardápio (nome, descrição, preço, imagem, categoria) ficam em
`src/data/menu.js`. As imagens correspondentes estão em `public/images/menu/`. Para
atualizar preços ou adicionar/remover itens, edite apenas esse arquivo — o componente
`src/components/Menu.jsx` renderiza tudo automaticamente, com abas por categoria.

O campo `price` é numérico (em reais). Dois casos especiais:

- `priceFrom: true` — o valor é o mínimo, exibido como "a partir de".
- `price: null` — item montado pelo cliente (sem valor fixo). Esses não entram no
  carrinho: o botão abre o WhatsApp para combinar a montagem.

## Carrinho

O carrinho vive em `src/context/CartContext.jsx` e é exibido por
`src/components/CartDrawer.jsx`. O cliente adiciona itens pelo cardápio, ajusta as
quantidades e finaliza em "Enviar pedido no WhatsApp", que abre uma conversa com a lista
do pedido e o total já formatados. O conteúdo fica salvo no navegador (`localStorage`),
então o carrinho sobrevive a recarregar a página.

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste os valores. Todas são opcionais — sem elas o site
usa os valores padrão de `src/data/business.js`.

| Variável               | Descrição                                                          |
| ---------------------- | ------------------------------------------------------------------ |
| `VITE_SITE_URL`        | URL pública do site (canonical, Open Graph)                        |
| `VITE_WHATSAPP_NUMBER` | Número do WhatsApp com DDI+DDD, só dígitos                          |
| `VITE_INSTAGRAM_URL`   | Link do Instagram                                                  |
| `VITE_MENU_URL`        | Link do cardápio online                                            |
| `VITE_BASE_PATH`       | `/` para domínio próprio; `/nome-do-repo/` para GitHub Pages       |
| `VITE_GA_ID`           | ID do Google Analytics 4 (`G-XXXX`). Vazio = sem analytics         |

O `.env` **não** é versionado. Nas plataformas de hospedagem, cadastre as variáveis no painel.

## Hospedagem

O site é 100% estático (sem backend), então qualquer host de arquivos estáticos serve.

### Vercel (recomendado)

1. Suba o repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório — o `vercel.json` já
   configura build, pasta de saída, cache e headers.
3. Em *Settings → Environment Variables*, adicione as variáveis do `.env.example` que quiser.
4. Cada push na `main` gera um deploy automático.

Ou pela CLI: `npx vercel --prod`.

### Netlify

1. Em [app.netlify.com](https://app.netlify.com), *Add new site → Import from Git*.
2. O `netlify.toml` já define comando, pasta e redirects.
3. Configure as variáveis em *Site configuration → Environment variables*.

Ou pela CLI: `npx netlify deploy --prod`.

### GitHub Pages

1. No repositório, *Settings → Pages → Source: GitHub Actions*.
2. O workflow `.github/workflows/deploy-pages.yml` faz build e deploy a cada push na `main`.
   Ele já define `VITE_BASE_PATH` como `/<nome-do-repo>/`.
3. (Opcional) Em *Settings → Secrets and variables → Actions → Variables*, cadastre
   `VITE_SITE_URL` e `VITE_GA_ID`.
4. Com domínio próprio: configure em *Settings → Pages → Custom domain* e crie o arquivo
   `public/CNAME` com o domínio. Nesse caso troque `VITE_BASE_PATH` no workflow para `/`.

### Domínio próprio

Aponte o DNS para a plataforma escolhida (cada uma mostra os registros A/CNAME no painel).
Depois atualize `VITE_SITE_URL`, `public/robots.txt` e `public/sitemap.xml` com o domínio real.

### Checklist antes de publicar

- [ ] `npm run lint` e `npm run build` passam sem erros
- [ ] Dados em `src/data/business.js` e `src/data/menu.js` conferidos
- [ ] `VITE_SITE_URL` apontando para o domínio final
- [ ] `robots.txt` / `sitemap.xml` com o domínio final
- [ ] Testar o botão do WhatsApp e o envio do carrinho no celular
