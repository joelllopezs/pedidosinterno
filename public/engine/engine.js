// ======= CONFIGURAÇÃO =======
// O e-mail de destino é definido no servidor (api/send-order.js),
// não aqui no front-end. Veja o arquivo api/send-order.js para trocar.

// ======= CATÁLOGO (extraído do PDF: coluna Código + SKU) =======
const CATALOGO = {
  "Grãos": [
    ["PA30010027","CAFE TORRADO EM GRAO AMERICA - VENDING - 1 KG"],
    ["PA30010028","CAFE TORRADO EM GRAO AMERICA - PREMIUM - 1 KG"],
    ["PA30010040","CAFE TORRADO EM GRAO AMERICA - GOURMET - 1 KG"],
    ["PA30016024","CAFE TORRADO EM GRAO AMERICA - RISTRETTO - 1KG"],
    ["PA30010030","CAFE TORRADO EM GRAO - PROPHETA - 1 KG"],
    ["PA30010057","CAFE TORRADO EM GRAO BEVACAFÉ - PROPHETA - 1 KG"],
    ["PA30010005","CAFE TORRADO EM GRAO AMERICA - PREMIUM - 500 GR"],
    ["PA30010006","CAFE TORRADO EM GRAO AMERICA - GOURMET - 500 GR"],
    ["PA30010089","CAFÉ TORRADO EM GRAO ESPECIAL MOKA AMERICA - 500 GR"],
    ["PA30010090","CAFÉ TORRADO EM GRAO ESPECIAL ORO AMERICA - 500 GR"]
  ],
  "T&M": [
    ["PA30020005","CAFE TOR. E MOIDO VACUO PURO AMERICA CLASSICO - 500 GR - ST"],
    ["PA30020004","CAFE TOR. E MOIDO VACUO PURO AMERICA PREMIUM - 500 GR - ST"],
    ["PA30020003","CAFE TOR. E MOIDO VACUO PURO AMERICA GOURMET - 500 GR - ST"],
    ["PA30030013","CAFE TORRADO E MOIDO AMERICA - 500 GR - ST"],
    ["PA30020006","CAFE TORRADO E MOIDO VÁCUO PURO AMERICA EXTRA FORTE - 500 GR- ST"],
    ["PA30030001","CAFE TORRADO E MOIDO AMERICA EXTRA FORTE - 500 GR- ST"],
    ["PA30020001","CAFE TOR. E MOIDO VACUO PURO PROPHETA EXTRA FORTE - 500 GR - ST"],
    ["PA30030002","CAFE TOR. E MOIDO PROPHETA EXTRA FORTE - 500 GR - ST"],
    ["PA30030006","CAFE TORRADO E MOIDO AMERICA - 250 GR - ST"]
  ],
  "Cápsulas": [
    ["PA30040020","CAPSULA DE ALUMINIO CAFE AMERICA GOURMET CARTUCHO"],
    ["PA30040021","CAPSULA DE ALUMINIO CAFE AMERICA RISTRETTO"],
    ["PA30040022","CAPSULA DE ALUMINIO CAFE AMERICA SUAVE"],
    ["PA30040014","CAPSULA DE CAFE AMERICA - GOURMET - ST"],
    ["PA30040016","CAPSULA DE CAFE AMERICA - RISTRETO - ST"],
    ["PA30040015","CAPSULA DE CAFE AMERICA - LEGGERO - ST"]
  ],
  "Monodose": [
    ["PA31010002","PREPARO PO SABOR CAPPUCCINO AMERICA CLASSICO - 20 GR"],
    ["PA31010003","PREPARO PO SABOR CAPPUCCINO AMERICA ZERO ADIC ACUCARES - 20 GR"],
    ["PA31030004","PREPARO PO SABOR CAFE COM LEITE AMERICA - 20 GR"]
  ],
  "Sachê": [
    ["PA30050055","CAFE SACHE AMERICA - 7 GR - ST"]
  ],
  "Solúvel": [
    ["PA31040001","CAFE SOLUVEL GRANULADO AMERICA - 510 GR"],
    ["PA31040006","CAFE PO SOLUVEL AMERICA - 510 GR"]
  ],
  "Potes": [
    ["PA31010015","PREPARO PO SABOR CAPPUCCINO DOCE DE LEITE AMERICA POTE 200GR"],
    ["PA31010018","PREPARO PO SABOR CAPPUCCINO ZERO ADIC ACUCAR AMERICA POTE 180GR"],
    ["PA31010072","PREPARO PO SABOR CAPPUCCINO AVELA AMERICA POTE 200GR"],
    ["PA31020020","PREPARO PO SABOR CHOCOLATE CREMOSO AMERICA POTE 200GR"],
    ["PA31016017","PREPARO PO SABOR CAPPUCCINO CLÁSSICO AMERICA - POTE 200 GR"],
    ["PA31010075","PREPARO PO SABOR CAPPUCCINO CHOCOLATE AMERICA - POTE 200 GR"]
  ],
  "Misturas América": [
    ["PA31010017","PREPARO PO SABOR CAPPUCCINO S ADIC ACUCAR AMERICA - 1 KG"],
    ["PA31010073","PREPARO PO SABOR CAPPUCCINO AMERICA CLASSICO - 1 KG"],
    ["PA31010074","PREPARO PO SABOR CAPPUCCINO AVELÃ AMÉRICA - 1 KG"],
    ["PA31010093","PREPARO PO SABOR CAPPUCCINO NAPOLI TRADICIONAL - 1 KG"],
    ["PA31020055","PREPARO PO SABOR CHOCOLATE S/ ADICAO ACUCAR AMERICA - 1,010 KG"],
    ["PA31010092","PREPARO PO SABOR CAPPUCCINO AMERICA CLASSICO - 400 GR"],
    ["PA31010011","PREPARO PO SABOR CAPPUCCINO GOURMET DOCE DE LEITE 400 GR"],
    ["PA31020021","PREPARO PO SABOR CHOCOLATE CREMOSO AMERICA 400 GR"],
    ["PA31030018","PREPARO PO SABOR CAFE COM LEITE CREMOSO AMERICA 1 KG"],
    ["PA31030020","PREPARO PO SABOR CAFE COM LEITE AMERICA - 1 KG"]
  ],
  "Bevan": [
    ["PA31010028","PREPARO PO SABOR CAPPUCCINO BEVACCINO - 1 KG"],
    ["PA31020006","PREPARO PO SABOR CHOCOLATE BEVACIOCCO - 1 KG"],
    ["PA31020015","PREPARO PO SABOR CHOCOLATE BEVACIOCCO EUROPA - 1,010 KG"],
    ["PA31036020","PREPARO PO SABOR LEITE S ADIC ACUCAR BEVALATTE ZERO - 500 GR"],
    ["PA31030026","PREPARO PO SABOR LEITE BEVALATTE - 1 KG"],
    ["PA31050001","PREPARO PO SABOR MATE COM LIMAO BEVATE - 1 KG"]
  ],
  "Complementares": [
    ["MR35020022","COPOS PLÁSICO PARA CAFE 165 ML - ST - CX C/ 3000UN"],
    ["MR35020011","MEXEDORES PLÁSTICOS - CX C/ 3000 UN - ST"],
    ["MR35030002","FILTRO DE PAPEL AMERICA 102"],
    ["MR35030001","FILTRO DE PAPEL AMERICA 103"]
  ],
  "Outros": [
    ["MR35040015","CONJUNTO 12 XICARAS E 12 PIRES PARA CAFE (PEQ.) - ST"],
    ["MR35040016","CONJUNTO 12 XICARAS E 12 PIRES PARA CAFE (GR.) - ST"]
  ]
};

// ======= ESTADO =======
let carrinho = []; // {codigo, sku, categoria, qtd}
let pagamento = null;

// ======= MONTAR SELECT DE CATEGORIAS =======
const categoriaSel = document.getElementById('categoria');
Object.keys(CATALOGO).forEach(cat=>{
  const opt = document.createElement('option');
  opt.value = cat; opt.textContent = cat;
  categoriaSel.appendChild(opt);
});

const productPanel = document.getElementById('productPanel');
const produtoSel = document.getElementById('produto');

categoriaSel.addEventListener('change', ()=>{
  const cat = categoriaSel.value;
  if(!cat){ productPanel.classList.remove('active'); return; }
  produtoSel.innerHTML = '';
  CATALOGO[cat].forEach(([codigo, sku])=>{
    const opt = document.createElement('option');
    opt.value = codigo;
    opt.textContent = codigo + ' — ' + sku;
    produtoSel.appendChild(opt);
  });
  productPanel.classList.add('active');
});

// ======= ADICIONAR AO CARRINHO =======
document.getElementById('addBtn').addEventListener('click', ()=>{
  const cat = categoriaSel.value;
  if(!cat) return;
  const codigo = produtoSel.value;
  const sku = CATALOGO[cat].find(p=>p[0]===codigo)[1];
  let qtd = parseInt(document.getElementById('quantidade').value, 10);
  if(!qtd || qtd < 1) qtd = 1;

  const existente = carrinho.find(i=>i.codigo===codigo);
  if(existente){
    existente.qtd += qtd;
  } else {
    carrinho.push({codigo, sku, categoria:cat, qtd});
  }
  renderCarrinho();
  document.getElementById('quantidade').value = 1;
});

function renderCarrinho(){
  const ticket = document.getElementById('ticket');
  if(carrinho.length === 0){
    ticket.innerHTML = '<div class="ticket-empty">Nenhum item adicionado ainda.</div>';
    return;
  }
  ticket.innerHTML = carrinho.map((item, idx)=>`
    <div class="ticket-row">
      <div class="info">
        ${item.sku}
        <span class="code">${item.codigo} · ${item.categoria}</span>
      </div>
      <div class="qty-badge">x${item.qtd}</div>
      <button class="remove-btn" onclick="removerItem(${idx})" type="button">&times;</button>
    </div>
  `).join('');
}

function removerItem(idx){
  carrinho.splice(idx, 1);
  renderCarrinho();
}

// ======= PAGAMENTO =======
document.querySelectorAll('.pay-card').forEach(card=>{
  card.addEventListener('click', ()=>{
    document.querySelectorAll('.pay-card').forEach(c=>c.classList.remove('selected'));
    card.classList.add('selected');
    pagamento = card.dataset.pay;
  });
});

// ======= MODAL: PEDIDO CONFIRMADO =======
const orderModal = document.getElementById('orderModal');
function openOrderModal(){
  orderModal.classList.add('show');
}
function closeOrderModal(){
  orderModal.classList.remove('show');
}
document.getElementById('modalCloseBtn').addEventListener('click', closeOrderModal);
orderModal.addEventListener('click', (e)=>{
  if(e.target === orderModal) closeOrderModal();
}); 
// ==== MODAL Fim =====

// ======= MÁSCARA SIMPLES DE CPF =======
document.getElementById('cpf').addEventListener('input', (e)=>{
  let v = e.target.value.replace(/\D/g,'').slice(0,11);
  v = v.replace(/(\d{3})(\d)/,'$1.$2');
  v = v.replace(/(\d{3})(\d)/,'$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
  e.target.value = v;
});

function cpfValido(cpf){
  return cpf.replace(/\D/g,'').length === 11;
}

// ======= FINALIZAR PEDIDO =======
document.getElementById('finalizeBtn').addEventListener('click', async ()=>{
  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const btn = document.getElementById('finalizeBtn');

  if(!nome){
    return showMsg('Preencha seu nome completo.', 'error');
  }
  if(!cpfValido(cpf)){
    return showMsg('Informe um CPF válido (11 dígitos).', 'error');
  }
  if(carrinho.length === 0){
    return showMsg('Adicione ao menos um produto ao pedido.', 'error');
  }
  if(!pagamento){
    return showMsg('Selecione a forma de pagamento.', 'error');
  }

  const payload = {
    nome,
    cpf,
    pagamento,
    itens: carrinho.map(i => ({
      codigo: i.codigo,
      sku: i.sku,
      categoria: i.categoria,
      quantidade: i.qtd
    }))
  };

  btn.disabled = true;
  const textoOriginal = btn.textContent;
  btn.textContent = 'Enviando pedido...';

  try{
    const resp = await fetch('/api/send-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await resp.json().catch(()=> ({}));

    if(!resp.ok){
      throw new Error(data.error || 'Falha ao enviar o pedido.');
    }

    showMsg('Pedido enviado com sucesso! A equipe Intercoffee já recebeu por e-mail.', 'success');
    openOrderModal();

    // Limpa o formulário após o envio
    carrinho = [];
    pagamento = null;
    renderCarrinho();
    document.querySelectorAll('.pay-card').forEach(c=>c.classList.remove('selected'));
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
  }catch(err){
    showMsg(err.message || 'Não foi possível enviar o pedido. Tente novamente.', 'error');
  }finally{
    btn.disabled = false;
    btn.textContent = textoOriginal;
  }
});

function showMsg(text, type){
  const msg = document.getElementById('formMsg');
  msg.textContent = text;
  msg.className = 'msg show ' + type;
}