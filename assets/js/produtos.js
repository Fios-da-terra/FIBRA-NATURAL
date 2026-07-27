/* ============================================================
   PRODUTOS.JS  —  A LISTA DE PEÇAS DO CATÁLOGO
   ------------------------------------------------------------
   ⭐ ESTE É O ARQUIVO QUE VOCÊ VAI EDITAR PARA ADICIONAR FOTOS.

   COMO ADICIONAR UMA PEÇA NOVA (3 passos):

   1. Coloque a foto dentro da pasta  fotos/
      Use nome simples, sem espaço e sem acento.
      Exemplo:  fotos/colar-turquesa.jpg

   2. Copie o BLOCO MODELO abaixo e cole logo depois do "[".

   3. Troque os textos. Salve. Pronto.

   ------------------------------------------------------------
   BLOCO MODELO (copie daqui):

  {
    foto: "fotos/NOME-DA-FOTO.jpg",
    categoria: "colares",
    preco: "R$ 000,00",
    destaque: false,
    nome: {
      pt: "Nome em português",
      es: "Nombre en español",
      en: "Name in English"
    },
    descricao: {
      pt: "Descrição curta em português.",
      es: "Descripción corta en español.",
      en: "Short description in English."
    }
  },

   ------------------------------------------------------------
   REGRAS QUE NÃO PODEM SER QUEBRADAS:
   • Cada peça fica entre  {  e  }
   • Depois do  }  vem sempre uma vírgula  ,  (menos na última)
   • Texto sempre entre aspas "assim"
   • categoria só pode ser: "colares", "bolsas", "caixas" ou "outros"
   • destaque: true  → aparece com selo "Destaque". false → normal.
   • Se não souber o preço ainda, escreva  preco: ""
   ============================================================ */

const PRODUTOS = [

  {
    foto: "fotos/colar-linho-pedras.jpg",
    categoria: "colares",
    preco: "R$ 320,00",
    destaque: true,
    nome: {
      pt: "Colar Gola em Linho e Pedras Naturais",
      es: "Collar Gola en Lino y Piedras Naturales",
      en: "Linen Collar Necklace with Natural Stones"
    },
    descricao: {
      pt: "Crochê em fio de linho cru com turquesa, coral e pérola de água doce. Peça única, feita à mão.",
      es: "Crochet en hilo de lino crudo con turquesa, coral y perla de agua dulce. Pieza única, hecha a mano.",
      en: "Raw linen crochet with turquoise, coral and freshwater pearl. One-of-a-kind, handmade."
    }
  },

  {
    foto: "fotos/caixas-fibra-banana.jpg",
    categoria: "caixas",
    preco: "R$ 145,00",
    destaque: true,
    nome: {
      pt: "Caixas de Fibra de Bananeira",
      es: "Cajas de Fibra de Banano",
      en: "Banana Fibre Boxes"
    },
    descricao: {
      pt: "Casca de bananeira costurada à mão com fio de linho e fecho de pedra turquesa. Upcycling puro.",
      es: "Corteza de banano cosida a mano con hilo de lino y cierre de piedra turquesa. Upcycling puro.",
      en: "Hand-stitched banana bark with linen thread and a turquoise stone clasp. Pure upcycling."
    }
  },

  {
    foto: "fotos/bolsa-colecao-autoral.jpg",
    categoria: "bolsas",
    preco: "R$ 480,00",
    destaque: false,
    nome: {
      pt: "Bolsa Coleção Autoral",
      es: "Bolso Colección de Autor",
      en: "Signature Collection Bag"
    },
    descricao: {
      pt: "Estrutura rígida com alça em corda trançada, botão de madeira e placa metálica gravada.",
      es: "Estructura rígida con asa de cuerda trenzada, botón de madera y placa metálica grabada.",
      en: "Rigid body with braided rope handle, wooden button and engraved metal plate."
    }
  }

];
