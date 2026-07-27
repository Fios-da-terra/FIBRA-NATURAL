# Guia: colocar o site no ar (GitHub Pages, grátis)

Resultado: um endereço tipo
**`https://SEU-USUARIO.github.io/fios-da-terra/`**
funcionando, com HTTPS, sem pagar nada e sem servidor.

---

# Caminho A — pelo navegador (o mais simples, sem instalar nada)

### 1. Criar a conta
Vá em **github.com** → *Sign up*. Grátis.

### 2. Criar o repositório
Canto superior direito **+** → **New repository**

- **Repository name:** `fios-da-terra`
- Marque **Public** (obrigatório para o Pages ser grátis)
- **Não** marque "Add a README"
- **Create repository**

### 3. Subir os arquivos
Na página que abrir, clique em **uploading an existing file**.

Arraste para dentro **todo o conteúdo da pasta** — `index.html`, `blog.html`,
a pasta `fotos` e a pasta `assets`.

> ⚠️ Arraste o **conteúdo**, não a pasta `fios-da-terra` inteira. Se subir a
> pasta, o endereço vira `.../fios-da-terra/fios-da-terra/` e nada funciona.

> ⚠️ O arquivo `.nojekyll` é invisível em algumas máquinas. Se ele não subir,
> depois use **Add file → Create new file**, nomeie `.nojekyll`, deixe vazio e
> salve.

Escreva "primeira versão" e clique em **Commit changes**.

### 4. Ligar o GitHub Pages
No repositório: **Settings** → menu da esquerda **Pages**

- **Source:** `Deploy from a branch`
- **Branch:** `main` · pasta `/ (root)`
- **Save**

Espere 1 a 3 minutos e recarregue a página. Vai aparecer o link verde:

```
https://SEU-USUARIO.github.io/fios-da-terra/
```

**Está no ar.** Abra no celular e teste o botão do WhatsApp.

---

# Caminho B — pelo computador com Git

```bash
cd fios-da-terra
git init
git add .
git commit -m "Site catálogo Fios da Terra"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/fios-da-terra.git
git push -u origin main
```

Depois ligue o Pages igual ao passo 4 acima.

Para atualizar depois de mexer em qualquer arquivo:

```bash
git add .
git commit -m "peça nova no catálogo"
git push
```

---

# Atualizar o site depois (o dia a dia)

1. github.com → repositório → clique no arquivo (ex.: `assets/js/produtos.js`)
2. Ícone do **lápis ✏️**
3. Edite
4. **Commit changes** no fim da página
5. Em ~1 minuto o site no ar já mudou

Para foto nova: pasta `fotos` → **Add file → Upload files**.

---

# Domínio próprio (opcional, ~R$ 40/ano)

Se um dia quiser `fiosdaterra.com.br` em vez do endereço do GitHub:

1. Compre em **registro.br** (`.com.br`) ou **Namecheap / Hostinger** (`.com`)
2. No painel do domínio, crie os registros DNS:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | SEU-USUARIO.github.io |

3. No GitHub: **Settings → Pages → Custom domain** → escreva o domínio → **Save**
4. Marque **Enforce HTTPS** (aparece depois de alguns minutos)

---

# Problemas mais comuns

| O que acontece | Causa | Solução |
|---|---|---|
| Página em branco / erro 404 | Pages ainda processando, ou subiu a pasta em vez do conteúdo | espere 3 min; confira se `index.html` está na raiz do repositório |
| Site sem cor nenhuma | pasta `assets` não subiu | reenvie a pasta `assets` inteira |
| Foto quebrada 🖼️ | nome do arquivo diferente do escrito em `produtos.js` | maiúscula/minúscula conta: `Foto.JPG` ≠ `foto.jpg` |
| Catálogo vazio | vírgula ou aspas faltando em `produtos.js` | F12 → Console mostra a linha do erro |
| Mudei e não mudou no site | cache do navegador | Ctrl+F5 (ou Ctrl+Shift+R) |
| WhatsApp abre conversa vazia | número errado no `config.js` | tem que ser país+DDD+número, só dígitos |

---

# Alternativas ao GitHub Pages

Todas gratuitas, mesmo resultado — só arrastar a pasta:

- **netlify.com/drop** — arrasta a pasta e sai o link na hora, sem conta
- **vercel.com** — conecta no GitHub e publica sozinho a cada mudança
- **Cloudflare Pages** — igual, com CDN muito rápida no Brasil
