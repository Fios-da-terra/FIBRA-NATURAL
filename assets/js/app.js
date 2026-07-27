/* ============================================================
   APP.JS  —  motor do site.
   ⚠️ Você normalmente NÃO precisa mexer neste arquivo.
   Para adicionar fotos, edite  assets/js/produtos.js
   Para o blog, edite         assets/js/posts.js
   Para telefone/redes, edite assets/js/config.js
   ============================================================ */

(function () {
  "use strict";

  /* ---------- IDIOMA ---------- */
  const IDIOMAS = ["pt", "es", "en"];
  let idioma = localStorage_get("fdt_idioma") || detectarIdioma();
  if (!IDIOMAS.includes(idioma)) idioma = CONFIG.idiomaPadrao;

  function detectarIdioma() {
    const n = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return IDIOMAS.includes(n) ? n : CONFIG.idiomaPadrao;
  }
  // localStorage pode estar bloqueado em alguns navegadores; nunca quebrar o site por isso.
  function localStorage_get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function localStorage_set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }

  function t(chave) {
    return (T[idioma] && T[idioma][chave]) || (T.pt[chave]) || chave;
  }
  // Aceita tanto  "texto simples"  quanto  {pt:"", es:"", en:""}
  function multi(valor) {
    if (!valor) return "";
    if (typeof valor === "string") return valor;
    return valor[idioma] || valor.pt || valor.es || valor.en || "";
  }

  /* ---------- LINKS DE WHATSAPP ---------- */
  function linkWpp(mensagem) {
    const num = String(CONFIG.whatsapp).replace(/\D/g, "");
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(mensagem);
  }

  /* ---------- ÍCONES (SVG inline, sem depender de internet) ---------- */
  const ICO = {
    wpp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 15 3.7 13.5 3.7 12 3.7 7.4 7.4 3.7 12 3.7S20.3 7.4 20.3 12 16.6 20.2 12 20.2z"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
    folha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-8 5-14 16-15 0 10-5 15-12 15H4z"/><path d="M4 20c4-5 7-7 11-9"/></svg>',
    fio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><path d="M6 8c4 1 8 4 10 8M5 13c3-3 8-5 12-5M9 19c1-5 4-9 8-11"/></svg>',
    pedra: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M4 13.5 8 6h8l4 7.5L12 21z"/><path d="M8 6l4 7.5L16 6M4 13.5h16"/></svg>'
  };

  /* ---------- APLICAR TRADUÇÕES NOS TEXTOS FIXOS ---------- */
  function traduzirPagina() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });
    document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
    document.querySelectorAll(".idiomas button").forEach(function (b) {
      b.classList.toggle("ativo", b.dataset.lang === idioma);
    });
  }

  /* ---------- CATÁLOGO ---------- */
  let filtroAtual = "todos";

  function renderProdutos() {
    const grade = document.getElementById("grade");
    if (!grade || typeof PRODUTOS === "undefined") return;

    const lista = PRODUTOS.filter(function (p) {
      return filtroAtual === "todos" || p.categoria === filtroAtual;
    });

    if (!lista.length) {
      grade.innerHTML = '<p class="vazio-aviso">—</p>';
      return;
    }

    grade.innerHTML = lista.map(function (p) {
      const nome = multi(p.nome);
      const desc = multi(p.descricao);
      const temPreco = CONFIG.mostrarPrecos && p.preco && String(p.preco).trim() !== "";
      const preco = temPreco
        ? '<div class="preco">' + esc(p.preco) + "</div>"
        : '<div class="preco vazio">' + t("prod.consultar") + "</div>";
      const msg = t("wpp.msgProduto") + " " + nome + (temPreco ? " (" + p.preco + ")" : "");
      const selo = p.destaque ? '<span class="selo">' + t("prod.destaque") + "</span>" : "";

      return (
        '<article class="card">' +
          '<div class="card-foto" data-zoom="' + esc(p.foto) + '">' +
            selo +
            '<img src="' + esc(p.foto) + '" alt="' + esc(nome) + '" loading="lazy">' +
          "</div>" +
          '<div class="card-corpo">' +
            "<h3>" + esc(nome) + "</h3>" +
            '<p class="desc">' + esc(desc) + "</p>" +
            preco +
            '<a class="btn btn-wpp" target="_blank" rel="noopener" href="' + linkWpp(msg) + '">' +
              ICO.wpp + "<span>" + t("prod.pedir") + "</span>" +
            "</a>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ---------- BLOG ---------- */
  function renderPosts() {
    const alvo = document.getElementById("posts");
    if (!alvo || typeof POSTS === "undefined") return;

    const locales = { pt: "pt-BR", es: "es-ES", en: "en-GB" };
    const ordenados = POSTS.slice().sort(function (a, b) {
      return String(b.data).localeCompare(String(a.data));
    });

    alvo.innerHTML = ordenados.map(function (p) {
      let data = "";
      if (p.data) {
        const d = new Date(p.data + "T12:00:00");
        if (!isNaN(d)) {
          data = d.toLocaleDateString(locales[idioma], { day: "2-digit", month: "long", year: "numeric" });
        }
      }
      const paras = (multi(p.texto) || []);
      const corpo = (Array.isArray(paras) ? paras : [paras]).map(function (x) {
        return "<p>" + x + "</p>";           // permite <em> e <strong> nos textos
      }).join("");
      const foto = p.foto ? '<img src="' + esc(p.foto) + '" alt="" loading="lazy">' : "";

      return (
        '<article class="post">' + foto +
          '<div class="post-corpo">' +
            '<div class="data">' + esc(data) + "</div>" +
            "<h2>" + esc(multi(p.titulo)) + "</h2>" +
            corpo +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------- CONTATOS DINÂMICOS ---------- */
  function renderContatos() {
    document.querySelectorAll("[data-wpp]").forEach(function (a) {
      a.href = linkWpp(t("wpp.msg"));
    });
    document.querySelectorAll("[data-wpp-num]").forEach(function (el) {
      el.textContent = CONFIG.whatsappVisivel;
    });
    const box = document.getElementById("contato-links");
    if (box) {
      let html =
        '<a target="_blank" rel="noopener" href="' + linkWpp(t("wpp.msg")) + '">' +
          ICO.wpp + CONFIG.whatsappVisivel + "</a>";
      if (CONFIG.instagram) {
        html += '<a target="_blank" rel="noopener" href="https://instagram.com/' + esc(CONFIG.instagram) + '">' +
          ICO.insta + "@" + esc(CONFIG.instagram) + "</a>";
      }
      if (CONFIG.email) {
        html += '<a href="mailto:' + esc(CONFIG.email) + '">' + ICO.mail + esc(CONFIG.email) + "</a>";
      }
      box.innerHTML = html;
    }
    document.querySelectorAll("[data-marca]").forEach(function (e) { e.textContent = CONFIG.marca; });
    document.querySelectorAll("[data-cidade]").forEach(function (e) { e.textContent = CONFIG.cidade; });
    document.querySelectorAll("[data-ano]").forEach(function (e) { e.textContent = new Date().getFullYear(); });
    document.querySelectorAll("[data-ico]").forEach(function (e) {
      if (ICO[e.dataset.ico]) e.innerHTML = ICO[e.dataset.ico];
    });
  }

  /* ---------- LIGHTBOX ---------- */
  function iniciarLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb) return;
    const img = lb.querySelector("img");
    document.addEventListener("click", function (e) {
      const alvo = e.target.closest("[data-zoom]");
      if (alvo) {
        img.src = alvo.dataset.zoom;
        lb.classList.add("aberto");
        document.body.style.overflow = "hidden";
      } else if (e.target.closest("#lightbox")) {
        fechar();
      }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") fechar(); });
    function fechar() {
      lb.classList.remove("aberto");
      document.body.style.overflow = "";
    }
  }

  /* ---------- INICIALIZAÇÃO ---------- */
  function atualizarTudo() {
    traduzirPagina();
    renderProdutos();
    renderPosts();
    renderContatos();
  }

  document.addEventListener("DOMContentLoaded", function () {
    // trocar idioma
    document.querySelectorAll(".idiomas button").forEach(function (b) {
      b.addEventListener("click", function () {
        idioma = b.dataset.lang;
        localStorage_set("fdt_idioma", idioma);
        atualizarTudo();
      });
    });

    // filtros de categoria
    document.querySelectorAll(".filtros button").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll(".filtros button").forEach(function (x) { x.classList.remove("ativo"); });
        b.classList.add("ativo");
        filtroAtual = b.dataset.cat;
        renderProdutos();
      });
    });

    // menu no celular
    const mb = document.querySelector(".menu-btn");
    if (mb) {
      mb.addEventListener("click", function () {
        document.querySelector(".menu").classList.toggle("aberto");
      });
      document.querySelectorAll(".menu a").forEach(function (a) {
        a.addEventListener("click", function () {
          document.querySelector(".menu").classList.remove("aberto");
        });
      });
    }

    iniciarLightbox();
    atualizarTudo();
  });
})();
