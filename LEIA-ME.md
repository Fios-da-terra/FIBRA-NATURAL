# Fios da Terra — site catálogo

Site de uma página só, sem banco de dados, sem senha, sem mensalidade.
Funciona de graça no GitHub Pages. Abre em português, espanhol e inglês.

---

## O que tem pronto

| Item | Onde |
|---|---|
| Página principal (catálogo, materiais, sobre, contato) | `index.html` |
| Blog da artesã | `blog.html` |
| **Lista de peças — você edita este** | `assets/js/produtos.js` |
| **Textos do blog — você edita este** | `assets/js/posts.js` |
| **Telefone, Instagram, marca — você edita este** | `assets/js/config.js` |
| Fotos das peças | pasta `fotos/` |
| Logo | `assets/img/logo.jpg` |
| Aparência (cores, tamanhos) | `assets/css/estilo.css` |
| Textos de menus/botões nos 3 idiomas | `assets/js/traducoes.js` |
| Motor do site | `assets/js/app.js` — **não precisa mexer** |

---

## Os 3 arquivos que importam

Você só precisa entender **três** arquivos. Todos abrem em qualquer editor de texto
(Bloco de Notas, VS Code, ou direto no site do GitHub).

### 1. `assets/js/config.js` — os dados de contato

Abra, mude o número, salve. Muda no site inteiro de uma vez.

```js
whatsapp: "5522992828220",              // só números: país + DDD + número
whatsappVisivel: "+55 (22) 99282-8220", // como aparece escrito
instagram: "naturaven.oroymd",          // sem o @
mostrarPrecos: true                     // false esconde todos os preços
```

> ⚠️ **Confira o número antes de publicar.** Ele foi montado a partir de
> "992828220" com DDD 92 (Manaus). Se o certo for outro DDD ou for o Paraguai
> (`595992828220`), troque essa linha.

### 2. `assets/js/produtos.js` — as peças

É a vitrine. Veja o guia detalhado em **`GUIA-ADICIONAR-FOTOS.md`**.

### 3. `assets/js/posts.js` — o blog

Mesma lógica dos produtos: copia bloco, cola, troca o texto.

---

## Como testar no computador antes de publicar

Basta dar **dois cliques em `index.html`**. Ele abre no navegador e funciona.
Nada precisa ser instalado.

---

## Idiomas

O site detecta o idioma do navegador do visitante (PT / ES / EN) e ainda
deixa trocar no botãozinho `PT ES EN` no topo. A escolha fica guardada.

Se quiser que abra sempre em português independente do visitante, em
`config.js` troque `idiomaPadrao: "pt"` — e em `app.js` a linha
`let idioma = localStorage_get("fdt_idioma") || detectarIdioma();`
vira `let idioma = localStorage_get("fdt_idioma") || CONFIG.idiomaPadrao;`

---

## Botões de WhatsApp que já existem

1. Botão verde flutuante no canto (todas as páginas)
2. Botão no topo da página inicial
3. Um botão em **cada peça** — a mensagem já vai escrita com o nome e o preço
   daquela peça ("Olá! Tenho interesse nesta peça: Colar Gola... (R$ 320,00)")
4. Botão grande na seção Contato

Nada disso precisa de configuração — todos leem o número do `config.js`.

---

## Estrutura de pastas

```
fios-da-terra/
├── index.html
├── blog.html
├── robots.txt
├── .nojekyll          ← não apague (faz o GitHub Pages servir os arquivos crus)
├── fotos/             ← suas fotos de produto entram aqui
└── assets/
    ├── css/estilo.css
    ├── img/logo.jpg
    └── js/{config,produtos,posts,traducoes,app}.js
```

---

Outros guias nesta pasta:

- `GUIA-ADICIONAR-FOTOS.md` — passo a passo para pôr peça nova no catálogo
- `GUIA-PUBLICAR-GITHUB.md` — como colocar o site no ar de graça
- `CHECKLIST-ONLINE.md` — o que falta antes e depois de publicar
