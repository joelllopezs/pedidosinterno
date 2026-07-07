# Pedidos Colaboradores · Intercoffee

Formulário interno para colaboradores fazerem pedidos de produtos, com **envio
automático do e-mail** (sem abrir o app de e-mail do usuário) via [Resend](https://resend.com),
pronto para deploy na Vercel.

## Estrutura

```
├── public/
│   ├── index.html          → a página do formulário
│   └── images/logo.png     → logo Intercoffee
├── api/
│   └── send-order.js       → função serverless que envia o e-mail
├── package.json
└── README.md
```

## Como colocar no ar (Vercel)

1. Crie uma conta gratuita em [resend.com](https://resend.com) e gere uma **API Key**.
   - Para testes, você pode enviar e-mails sem verificar domínio próprio usando o
     remetente de teste da Resend (`onboarding@resend.dev`), mas o destino só pode
     ser o e-mail da conta cadastrada na Resend.
   - Para produção, verifique o domínio `intercoffee.com.br` na Resend (aba **Domains**)
     para poder enviar de `pedidos@intercoffee.com.br` para qualquer destinatário.

2. Suba esta pasta para um repositório no GitHub e importe na Vercel
   (ou rode `vercel` pela CLI dentro da pasta do projeto).

3. Em **Project Settings → Environment Variables**, adicione:

   | Nome | Valor | Obrigatória |
   |---|---|---|
   | `RESEND_API_KEY` | sua chave da Resend | Sim |
   | `ORDER_EMAIL_TO` | e-mail que deve receber os pedidos (hoje `suporte@intercoffee.com.br`, usado só para teste) | Não — usa o padrão do código se não definir |
   | `ORDER_EMAIL_FROM` | remetente verificado, ex.: `Intercoffee <pedidos@intercoffee.com.br>` | Não — usa o padrão do código se não definir |

4. Faça o deploy. A Vercel detecta automaticamente a função em `api/send-order.js`
   e serve o conteúdo de `public/` como site estático.

## Trocar o e-mail de destino depois

Basta atualizar a variável de ambiente `ORDER_EMAIL_TO` na Vercel (sem precisar
mexer no código) ou editar o valor padrão em `api/send-order.js`
(`EMAIL_DESTINO_PADRAO`).

## Testando localmente

```bash
npm install
npx vercel dev
```

Isso sobe o site e a função `/api/send-order` localmente para testes antes do deploy.
# pedidosinterno
