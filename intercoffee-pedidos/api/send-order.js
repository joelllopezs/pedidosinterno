// api/send-order.js
// Função serverless (Vercel) que recebe o pedido do formulário
// e envia o e-mail automaticamente usando a Resend (https://resend.com).
//
// CONFIGURAÇÃO NECESSÁRIA NA VERCEL (Project Settings > Environment Variables):
//   RESEND_API_KEY   -> sua chave de API da Resend (obrigatória)
//   ORDER_EMAIL_TO    -> e-mail que deve receber os pedidos (opcional,
//                         por padrão usa suporte@intercoffee.com.br para teste)
//   ORDER_EMAIL_FROM  -> remetente verificado na Resend (opcional,
//                         por padrão usa "Intercoffee <pedidos@intercoffee.com.br>")
//
// Instale a dependência antes do deploy:
//   npm install resend

const { Resend } = require('resend');

const EMAIL_DESTINO_PADRAO = 'suporte@intercoffee.com.br'; // <-- e-mail de teste, troque depois
const EMAIL_REMETENTE_PADRAO = 'Intercoffee <pedidos@intercoffee.com.br>';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    const { nome, cpf, pagamento, itens } = req.body || {};

    if (!nome || !cpf || !pagamento || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ error: 'Dados do pedido incompletos.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY não configurada nas variáveis de ambiente.');
      return res.status(500).json({ error: 'Configuração de e-mail ausente no servidor.' });
    }

    const resend = new Resend(apiKey);

    const destino = process.env.ORDER_EMAIL_TO || EMAIL_DESTINO_PADRAO;
    const remetente = process.env.ORDER_EMAIL_FROM || EMAIL_REMETENTE_PADRAO;

    const linhasTexto = itens
      .map(i => `- ${i.sku} (Código: ${i.codigo}) | Categoria: ${i.categoria} | Quantidade: ${i.quantidade}`)
      .join('\n');

    const linhasHtml = itens
      .map(i => `
        <tr>
          <td style="padding:8px 10px;border-bottom:1px solid #E4D9C6;">${escapeHtml(i.sku)}</td>
          <td style="padding:8px 10px;border-bottom:1px solid #E4D9C6;">${escapeHtml(i.codigo)}</td>
          <td style="padding:8px 10px;border-bottom:1px solid #E4D9C6;">${escapeHtml(i.categoria)}</td>
          <td style="padding:8px 10px;border-bottom:1px solid #E4D9C6;text-align:center;">${escapeHtml(String(i.quantidade))}</td>
        </tr>`)
      .join('');

    const textBody =
      `Novo pedido de colaborador - Intercoffee\n\n` +
      `Nome completo: ${nome}\n` +
      `CPF: ${cpf}\n\n` +
      `Itens do pedido:\n${linhasTexto}\n\n` +
      `Forma de pagamento: ${pagamento}`;

    const htmlBody = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#2B1B12;max-width:600px;margin:0 auto;">
        <div style="background:#6B1220;padding:20px 24px;border-radius:10px 10px 0 0;">
          <h2 style="color:#FAF5EC;margin:0;font-size:20px;">Novo pedido de colaborador</h2>
          <p style="color:#E9DBBD;margin:4px 0 0;font-size:13px;">Intercoffee &middot; Desde 1962</p>
        </div>
        <div style="border:1px solid #E4D9C6;border-top:none;border-radius:0 0 10px 10px;padding:20px 24px;">
          <p style="margin:0 0 6px;"><strong>Nome completo:</strong> ${escapeHtml(nome)}</p>
          <p style="margin:0 0 16px;"><strong>CPF:</strong> ${escapeHtml(cpf)}</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <thead>
              <tr style="background:#FAF5EC;">
                <th style="text-align:left;padding:8px 10px;">Produto</th>
                <th style="text-align:left;padding:8px 10px;">Código</th>
                <th style="text-align:left;padding:8px 10px;">Categoria</th>
                <th style="text-align:center;padding:8px 10px;">Qtd.</th>
              </tr>
            </thead>
            <tbody>${linhasHtml}</tbody>
          </table>
          <p style="margin:18px 0 0;font-size:15px;"><strong>Forma de pagamento:</strong> ${escapeHtml(pagamento)}</p>
        </div>
      </div>`;

    const { data, error } = await resend.emails.send({
      from: remetente,
      to: destino,
      subject: `Pedido Colaborador - ${nome}`,
      text: textBody,
      html: htmlBody
    });

    if (error) {
      console.error('Resend recusou o envio:', error);
      return res.status(502).json({ error: error.message || 'A Resend recusou o envio do e-mail.' });
    }

    return res.status(200).json({ ok: true, id: data && data.id });
  } catch (err) {
    console.error('Erro ao enviar pedido:', err);
    return res.status(500).json({ error: 'Erro ao enviar o e-mail do pedido.' });
  }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
