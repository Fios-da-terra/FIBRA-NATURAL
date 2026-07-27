# Guia: adicionar uma peça nova no catálogo

Tempo: **2 minutos por peça.** Não precisa saber programar.

---

## Antes: preparar a foto

| Regra | Por quê |
|---|---|
| Formato **.jpg** (ou .webp) | menor e carrega rápido |
| Largura entre **1000 e 1600 px** | nítido no celular sem pesar |
| Peso **abaixo de 400 KB** | site lento espanta comprador |
| Nome **sem espaço, sem acento, tudo minúsculo** | `colar-turquesa.jpg` ✅ · `Colar Turquesa (1).JPG` ❌ |
| Foto **vertical**, peça centralizada, fundo claro e liso | o catálogo corta em formato retrato (4:5) |

Para diminuir o peso da foto sem instalar nada: **squoosh.app** (arraste a foto,
puxe a qualidade para ~75, baixe).

Tirando foto com o celular: luz de janela, sem flash, fundo de linho ou papel
branco. Sempre o mesmo fundo em todas as peças — é o que faz o catálogo parecer
profissional.

---

## Passo 1 — jogar a foto na pasta

Copie o arquivo para dentro da pasta **`fotos/`**.

---

## Passo 2 — abrir `assets/js/produtos.js`

Abra com o Bloco de Notas, o VS Code, ou direto no GitHub (lápis ✏️).

---

## Passo 3 — colar o bloco

Copie o modelo abaixo e cole **logo depois da linha `const PRODUTOS = [`**:

```js
  {
    foto: "fotos/colar-turquesa.jpg",
    categoria: "colares",
    preco: "R$ 290,00",
    destaque: false,
    nome: {
      pt: "Colar Turquesa",
      es: "Collar Turquesa",
      en: "Turquoise Necklace"
    },
    descricao: {
      pt: "Crochê em linho cru com turquesa bruta. Peça única.",
      es: "Crochet en lino crudo con turquesa en bruto. Pieza única.",
      en: "Raw linen crochet with rough turquoise. One of a kind."
    }
  },
```

Troque:

- `foto:` → o nome exato do arquivo que você colocou em `fotos/`
- `categoria:` → só pode ser `"colares"`, `"bolsas"`, `"caixas"` ou `"outros"`
- `preco:` → escreva `""` (vazio) se preferir "Consultar valor"
- `destaque:` → `true` põe o selo laranja "Destaque"; `false` deixa normal
- `nome` e `descricao` → nos 3 idiomas

**Salve o arquivo.** Pronto — a peça aparece.

---

## Passo 4 — conferir

Dê dois cliques em `index.html`. A peça nova tem que estar lá, com foto,
preço e o botão verde de WhatsApp já com o nome dela na mensagem.

---

## As 4 regras que não podem ser quebradas

1. Cada peça começa com `{` e termina com `}`
2. Depois do `}` vem **vírgula** — menos na última peça da lista
3. Todo texto fica **entre aspas duplas** `"assim"`
4. Se o texto tiver aspas dentro, use aspas simples: `"colar 'gola' curto"`

---

## Se o catálogo aparecer vazio

Quase sempre é vírgula ou aspas faltando. Para achar:

1. Abra `index.html` no Chrome
2. Aperte **F12** → aba **Console**
3. A mensagem vermelha diz a linha exata do erro em `produtos.js`

Se não achar: desfaça o último bloco que colou, salve, e cole de novo com calma.

---

## Não quero mexer em código

Alternativa: abra a **Issue** no GitHub, ou mande a foto + os 3 textos no
WhatsApp para quem cuida do site. São as mesmas 5 linhas.

---

## Fazer tudo pelo celular (sem computador)

Dá para fazer 100% pelo site do GitHub, do celular:

1. `github.com` → seu repositório → pasta `fotos` → **Add file → Upload files**
2. Volte, entre em `assets/js/produtos.js` → ícone do **lápis ✏️**
3. Cole o bloco, desça e toque em **Commit changes**
4. Em ~1 minuto o site no ar já está atualizado
