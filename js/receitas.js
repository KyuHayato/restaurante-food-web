// ============================================================================
// 1. BASE DE DADOS INICIAL (ARRAY DE OBJETOS)
// ============================================================================
let receitas = [
  {
    id: 1,
    titulo: "Macarrão cremoso",
    categoria: "Massas",
    dificuldade: "Fácil",
    preparo: "Cozinhe o macarrão al dente, refogue o alho, misture creme de leite e parmesão até encorpar.",
    publicar: true
  },
  {
    id: 2,
    titulo: "Frango grelhado",
    categoria: "Carnes",
    dificuldade: "Médio",
    preparo: "Tempere os filés com limão, páprica e sal por 15 minutos. Grelhe em frigideira quente com azeite.",
    publicar: true
  },
  {
    id: 3,
    titulo: "Cheesecake de frutas",
    categoria: "Doces",
    dificuldade: "Difícil",
    preparo: "Faça a base com biscoito triturado e manteiga, cubra com creme de cream cheese gelado e geleia.",
    publicar: true
  },
  {
    id: 4,
    titulo: "Salada caesar",
    categoria: "Saladas",
    dificuldade: "Fácil",
    preparo: "Higienize a alface americana, adicione croutons, lascas de parmesão e finalize com molho caesar.",
    publicar: true
  },
  {
    id: 5,
    titulo: "Lasanha de abobrinha",
    categoria: "Massas",
    dificuldade: "Médio",
    preparo: "Intercale fatias de abobrinha grelhada, molho de tomate e muçarela. Asse por 25 minutos.",
    publicar: true
  },
  {
    id: 6,
    titulo: "Brigadeiro gourmet",
    categoria: "Doces",
    dificuldade: "Fácil",
    preparo: "Misture leite condensado, chocolate meio amargo e manteiga em fogo baixo até soltar do fundo.",
    publicar: true
  }
];

// Estado de controle da paginação
let paginaAtual = 1;
const itensPorPagina = 4;

// ============================================================================
// 2. SELEÇÃO DE ELEMENTOS DO DOM
// ============================================================================
const corpoTabelaEl = document.getElementById("corpo-tabela-receitas");
const contadorTabelaEl = document.getElementById("contador-tabela");
const filtroTabelaInput = document.getElementById("filtro-tabela");
const paginacaoEl = document.getElementById("paginacao-receitas");
const badgeResumoDificuldadeEl = document.getElementById("badge-resumo-dificuldade");
const templateLinha = document.getElementById("template-linha-receita");

// Alerta de feedback
const alertaFeedbackEl = document.getElementById("alerta-feedback");
const textoAlertaFeedbackEl = document.getElementById("texto-alerta-feedback");
const btnFecharAlerta = document.getElementById("btn-fechar-alerta");

// Formulário CRUD
const formReceita = document.getElementById("form-receita");
const tituloFormEl = document.getElementById("titulo-form-receita");
const badgeModoEdicaoEl = document.getElementById("badge-modo-edicao");
const inputId = document.getElementById("receita-id");
const inputTitulo = document.getElementById("input-titulo");
const selectCategoria = document.getElementById("select-receita-categoria");
const textareaPreparo = document.getElementById("textarea-preparo");
const checkPublicar = document.getElementById("check-publicar");
const btnCancelar = document.getElementById("btn-cancelar-receita");
const btnEntrar = document.getElementById("btn-entrar");
