/* ============================================================
   POSTS.JS  —  TEXTOS DO BLOG (história da artesã)
   ------------------------------------------------------------
   Mesma lógica do produtos.js: copie o bloco, cole, troque o texto.

   BLOCO MODELO:

  {
    data: "2026-08-15",
    foto: "fotos/NOME-DA-FOTO.jpg",     // ou "" se não tiver foto
    titulo: { pt: "...", es: "...", en: "..." },
    texto: {
      pt: ["Primeiro parágrafo.", "Segundo parágrafo."],
      es: ["Primer párrafo.", "Segundo párrafo."],
      en: ["First paragraph.", "Second paragraph."]
    }
  },

   • data no formato ANO-MÊS-DIA. Os posts mais novos aparecem em cima.
   • cada parágrafo é um texto entre aspas, separado por vírgula.
   ============================================================ */

const POSTS = [

  {
    data: "2026-07-20",
    foto: "fotos/colar-linho-pedras.jpg",
    titulo: {
      pt: "A mão que trança: quem faz Fios da Terra",
      es: "La mano que teje: quién hace Fios da Terra",
      en: "The hand that weaves: who makes Fios da Terra"
    },
    texto: {
      pt: [
        "Cada peça de Fios da Terra nasce de um par de mãos, não de uma máquina. O crochê é feito ponto a ponto em fio de linho cru, e leva o tempo que precisa levar — um colar gola pode tomar três dias de trabalho.",
        "As pedras são escolhidas uma a uma. Turquesa, coral, pérola de água doce. Nenhuma peça sai igual à outra, e isso não é defeito: é assinatura.",
        "<em>Substitua este texto pela história real da artesã: onde nasceu, com quem aprendeu, há quanto tempo trabalha com fibras.</em>"
      ],
      es: [
        "Cada pieza de Fios da Terra nace de un par de manos, no de una máquina. El crochet se hace punto a punto en hilo de lino crudo, y toma el tiempo que necesita — un collar gola puede llevar tres días de trabajo.",
        "Las piedras se eligen una a una. Turquesa, coral, perla de agua dulce. Ninguna pieza sale igual a otra, y eso no es un defecto: es la firma.",
        "<em>Reemplace este texto por la historia real de la artesana.</em>"
      ],
      en: [
        "Every Fios da Terra piece is born from a pair of hands, not a machine. The crochet is worked stitch by stitch in raw linen thread, and takes as long as it needs to — a collar necklace can take three days.",
        "The stones are chosen one by one. Turquoise, coral, freshwater pearl. No two pieces come out the same, and that is not a flaw: it is the signature.",
        "<em>Replace this text with the artisan's real story.</em>"
      ]
    }
  },

  {
    data: "2026-07-05",
    foto: "fotos/caixas-fibra-banana.jpg",
    titulo: {
      pt: "Da bananeira à caixa: o que era lixo virou matéria-prima",
      es: "Del banano a la caja: lo que era basura se volvió materia prima",
      en: "From banana tree to box: what was waste became raw material"
    },
    texto: {
      pt: [
        "Depois que o cacho é colhido, a bananeira morre. O tronco vira resíduo na propriedade. É exatamente daí que sai a fibra das nossas caixas.",
        "A casca é retirada, lavada, seca à sombra por dias e só então cortada e costurada à mão com fio de linho. Nenhuma cola, nenhum plástico, nenhuma tinta.",
        "É upcycling de verdade: um material que iria apodrecer no chão vira um objeto que dura anos."
      ],
      es: [
        "Después de la cosecha, la planta de banano muere y el tronco queda como residuo. De ahí sale exactamente la fibra de nuestras cajas.",
        "La corteza se retira, se lava, se seca a la sombra durante días y solo entonces se corta y se cose a mano con hilo de lino. Sin pegamento, sin plástico, sin pintura.",
        "Es upcycling de verdad: un material que iba a pudrirse en el suelo se convierte en un objeto que dura años."
      ],
      en: [
        "Once the bunch is harvested, the banana plant dies and the trunk becomes waste on the property. That is exactly where the fibre for our boxes comes from.",
        "The bark is stripped, washed, shade-dried for days, and only then cut and hand-stitched with linen thread. No glue, no plastic, no paint.",
        "This is real upcycling: a material that would rot on the ground becomes an object that lasts for years."
      ]
    }
  }

];
