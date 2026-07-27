# Checklist — o que falta para o site ficar completo

Dividido em: **o que trava a publicação**, **o que faz vender mais**,
**o que é bom ter** e **o que NÃO vale a pena agora**.

---

## 🔴 1. Bloqueia — resolva antes de divulgar o link

| # | Item | Situação | O que fazer |
|---|---|---|---|
| 1 | **Número de WhatsApp confirmado** | ⚠️ presumido | O material diz `992828220`. Montei como **+55 (22) 99282-8220**. Confirme DDD e país e ajuste `assets/js/config.js`. Teste clicando no botão. |
| 2 | **Fotos reais das peças** | ⚠️ provisório | Hoje o catálogo usa recortes das artes de divulgação. Precisa de foto de cada peça em fundo liso. |
| 3 | **Preços** | ⚠️ inventados | Os valores em `produtos.js` são exemplo. Coloque os reais — ou `preco: ""` para "Consultar valor". |
| 4 | **História real da artesã** | ⚠️ rascunho | Em `posts.js` o 1º post tem um trecho em itálico pedindo para trocar. Nome, cidade, há quanto tempo trabalha, quem ensinou. |
| 5 | **Instagram confere?** | ⚠️ verificar | Está `@nordubenoroymiel`. Se o perfil for outro, corrija no `config.js`. |

---

## 🟡 2. Faz diferença em venda — primeiras 2 semanas

| # | Item | Por quê |
|---|---|---|
| 6 | **Catálogo com 8 a 12 peças** | Com 3 peças o site parece vazio. Abaixo de 8 o visitante não sente que tem escolha. |
| 7 | **Informações de envio** | "Envio para todo o Brasil pelos Correios, 5–10 dias" resolve a dúvida nº 1 de quem compra artesanato online. |
| 8 | **Formas de pagamento** | Pix? Cartão em quantas vezes? Escreva na seção Contato. |
| 9 | **Medidas de cada peça** | Comprimento do colar, tamanho da caixa. Pode entrar na própria descrição. |
| 10 | **Como cuidar da peça** | Fibra natural + pedra: não molhar, guardar seco. Reduz devolução e reclamação. |
| 11 | **Prazo de produção** | "Peça única, produção em 7 dias" — evita cliente achando que é pronta-entrega. |
| 12 | **Foto ou vídeo da artesã trabalhando** | É o que mais vende artesanato. Uma foto das mãos costurando vale mais que 3 posts. |
| 13 | site do instagram| O site só existe se alguém chegar nele. |

---

## 🟢 3. Bom ter — depois que estiver rodando

| # | Item | Custo | Observação |
|---|---|---|---|
| 14 | Domínio próprio (`fiosdaterra.com.br`) | ~R$ 40/ano | Passo a passo no `GUIA-PUBLICAR-GITHUB.md` |
| 15 | Google Analytics ou Plausible | grátis / pago | Saber quantas pessoas entram e de onde |
| 16 | Cadastro no Google Meu Negócio | grátis | Aparecer no Google Maps e nas buscas locais |
| 17 | Depoimentos de clientes | grátis | 3 frases curtas com nome e cidade |
| 18 | Página "Atacado / Lojistas" | grátis | Se quiser vender para lojas |
| 19 | Certificações (se houver) | — | Cooperativa, comércio justo, coletivo de artesãs |
| 20 | Botão de compartilhar | grátis | Ajuda a peça circular no WhatsApp |
| 21 | `sitemap.xml` + Google Search Console | grátis | Indexação mais rápida no Google |
| 22 | Versão dos textos revisada por nativo | — | O espanhol e o inglês estão corretos, mas revisão humana sempre melhora |

---

## ⚪ 4. NÃO faça agora (custa caro e não resolve nada hoje)

| Item | Por que deixar para depois |
|---|---|
| **Loja com carrinho e checkout** (Shopify, Nuvemshop) | R$ 100+/mês, taxa por venda, e obriga controle de estoque. Peça única fecha melhor por WhatsApp mesmo. Só migre passando de ~30 vendas/mês. |
| **Aplicativo próprio** | Custo alto, ninguém baixa app de loja pequena. |
| **Chatbot / IA de atendimento** | Em artesanato, a conversa pessoal é o produto. |
| **WordPress** | Precisa de hospedagem paga, plugin, atualização e manutenção. Este site é mais rápido e não quebra sozinho. |
| **Sistema de login / área do cliente** | Sem função aqui. |
| **E-mail marketing** | Só depois de ter uma lista de clientes reais. |

---

## ✅ 5. Teste final antes de divulgar

Marque um por um:

- [ ] Abri o site **no celular** — nada cortado, nada esticado
- [ ] Cliquei no botão verde flutuante → abriu o WhatsApp certo, com a mensagem já escrita
- [ ] Cliquei em "Quero esta peça" numa peça → veio o nome da peça na mensagem
- [ ] Troquei **PT → ES → EN** → todos os textos mudam, nada em branco
- [ ] Todas as fotos carregam (nenhum quadradinho quebrado)
- [ ] Cliquei numa foto → abriu ampliada; ESC fechou
- [ ] Os filtros Colares / Bolsas / Caixas mostram as peças certas
- [ ] O menu de 3 risquinhos abre e fecha no celular
- [ ] Fui em `blog.html` e voltei sem erro
- [ ] Mandei o link para 2 pessoas e pedi para tentarem comprar
- [ ] Colei o link no WhatsApp e vi se a prévia com a foto aparece bonita

---

## ⚖️ 6. Legal e formal (Brasil)

Nada disso trava o site, mas fica registrado:

- Site que só exibe catálogo e leva ao WhatsApp **não é loja virtual** — não
  exige o que o CDC pede de e-commerce (art. 33 e Decreto 7.962/2013).
- A partir do momento em que houver pagamento pelo site, passam a ser
  obrigatórios: CNPJ ou MEI visível, endereço, política de troca e prazo de
  arrependimento de 7 dias.
- **MEI Artesão** é uma mensalidade fixa baixa (confira o valor atual no Portal
  do Empreendedor) e permite emitir nota fiscal — o que abre a porta para vender
  a lojas e feiras formais.
- Se um dia adicionar formulário ou Analytics, entra a **LGPD**: basta um aviso
  curto de cookies e uma linha de política de privacidade.
