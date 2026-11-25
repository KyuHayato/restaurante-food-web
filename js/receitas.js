// ============================================================================
// 1. BASE DE DADOS INICIAL (ARRAY DE OBJETOS)
// ============================================================================
let receitas = [
  {
    id: 1,
    titulo: "Macarrão cremoso",
    categoria: "Massas",
    dificuldade: "Fácil",
    preparo:
      "Cozinhe o macarrão al dente, refogue o alho, misture creme de leite e parmesão até encorpar.",
    publicar: true,
  },
  {
    id: 2,
    titulo: "Frango grelhado",
    categoria: "Carnes",
    dificuldade: "Médio",
    preparo:
      "Tempere os filés com limão, páprica e sal por 15 minutos. Grelhe em frigideira quente com azeite.",
    publicar: true,
  },
  {
    id: 3,
    titulo: "Cheesecake de frutas",
    categoria: "Doces",
    dificuldade: "Difícil",
    preparo:
      "Faça a base com biscoito triturado e manteiga, cubra com creme de cream cheese gelado e geleia.",
    publicar: true,
  },
  {
    id: 4,
    titulo: "Salada caesar",
    categoria: "Saladas",
    dificuldade: "Fácil",
    preparo:
      "Higienize a alface americana, adicione croutons, lascas de parmesão e finalize com molho caesar.",
    publicar: true,
  },
  {
    id: 5,
    titulo: "Lasanha de abobrinha",
    categoria: "Massas",
    dificuldade: "Médio",
    preparo:
      "Intercale fatias de abobrinha grelhada, molho de tomate e muçarela. Asse por 25 minutos.",
    publicar: true,
  },
  {
    id: 6,
    titulo: "Brigadeiro gourmet",
    categoria: "Doces",
    dificuldade: "Fácil",
    preparo:
      "Misture leite condensado, chocolate meio amargo e manteiga em fogo baixo até soltar do fundo.",
    publicar: true,
  },
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
const badgeResumoDificuldadeEl = document.getElementById(
  "badge-resumo-dificuldade",
);
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

function obterClasseTema(categoria) {
  const mapaTemas = {
    Massas: "tema-massas",
    Carnes: "tema-carnes",
    Doces: "tema-doces",
    Saladas: "tema-saladas",
  };
  return mapaTemas[categoria] || "tema-massas";
}

function renderizarTabela() {
  //Apagar linhas da <tbody> da tabela no html
  const termo = filtroTabelaInput.value.trim().toLowerCase();
  // 1. Filtra pelo texto digitado
  const filtradas = receitas.filter((item) =>
    item.titulo.toLowerCase().includes(termo),
  );
  // 2. Calcula paginação
  const totalPaginas = Math.max(
    1,
    Math.ceil(filtradas.length / itensPorPagina),
  );
  if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;

  const inicio = (paginaAtual - 1) * itensPorPagina;
  const paginadas = filtradas.slice(inicio, inicio + itensPorPagina);

  // 3. Limpa e popula o <tbody>
  corpoTabelaEl.innerHTML = "";

  if (paginadas.length === 0) {
    corpoTabelaEl.innerHTML = `
      <tr>
        <td colspan="4" class="text-center text-muted py-4 small">
          Nenhuma receita encontrada. Cadastre uma nova ao lado.
        </td>
      </tr>
    `;
  } else {
    paginadas.forEach((receita) => {
      const clone = templateLinha.content.cloneNode(true);
      const classeTema = obterClasseTema(receita.categoria);

      const tr = clone.querySelector("tr");
      const thumb = clone.querySelector(".thumb-tabela");
      const celulaTitulo = clone.querySelector(".celula-titulo");
      const celulaCategoria = clone.querySelector(".celula-categoria");
      const celulaDificuldade = clone.querySelector(".celula-dificuldade");
      const btnEditar = clone.querySelector(".btn-editar");
      const btnExcluir = clone.querySelector(".btn-excluir");

      tr.dataset.id = receita.id;
      thumb.classList.add(classeTema);
      celulaTitulo.textContent = receita.titulo;
      celulaCategoria.textContent = receita.categoria;

      celulaDificuldade.classList.add(classeTema);
      celulaDificuldade.textContent = receita.dificuldade;

      btnEditar.dataset.id = receita.id;
      btnEditar.setAttribute("aria-label", `Editar ${receita.titulo}`);

      btnExcluir.dataset.id = receita.id;
      btnExcluir.setAttribute("aria-label", `Excluir ${receita.titulo}`);

      corpoTabelaEl.appendChild(clone);
    });
  }

  // 4. Atualiza contador e botões de paginação
  contadorTabelaEl.textContent = `${filtradas.length} ${
    filtradas.length === 1 ? "receita cadastrada" : "receitas cadastradas"
  }`;
}
// ============================================================================
// 6. INICIALIZAÇÃO
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  alertaFeedbackEl.classList.add("d-none"); // Inicia oculto até a primeira ação
  renderizarTabela();
});

/**
 * Exibe o alerta superior com mensagem dinâmica
 *
 */
function mostrarAlerta(mensagem) {
  textoAlertaFeedbackEl.textContent = mensagem;
  alertaFeedbackEl.classList.remove("d-none");
}
function validarFormulario() {
  let valido = true;

  // Tratamento de dados: remove espaços extras nas pontas
  const tituloLimpo = inputTitulo.value.trim();
  const categoriaValor = selectCategoria.value;
  const preparoLimpo = textareaPreparo.value.trim();

  // Validação do Título
  if (tituloLimpo.length < 3) {
    inputTitulo.classList.add("is-invalid");
    inputTitulo.classList.remove("is-valid");
    valido = false;
  } else {
    inputTitulo.classList.remove("is-invalid");
    inputTitulo.classList.add("is-valid");
  }

  // Validação da Categoria
  if (!categoriaValor) {
    selectCategoria.classList.add("is-invalid");
    selectCategoria.classList.remove("is-valid");
    valido = false;
  } else {
    selectCategoria.classList.remove("is-invalid");
    selectCategoria.classList.add("is-valid");
  }

  // Validação do Modo de Preparo
  if (preparoLimpo.length < 10) {
    textareaPreparo.classList.add("is-invalid");
    textareaPreparo.classList.remove("is-valid");
    valido = false;
  } else {
    textareaPreparo.classList.remove("is-invalid");
    textareaPreparo.classList.add("is-valid");
  }

  return valido;
}
//
function resetarFormulario() {
  formReceita.reset();
  inputId.value = "";
  tituloFormEl.textContent = "Nova receita";
  badgeModoEdicaoEl.classList.add("d-none");

  [inputTitulo, selectCategoria, textareaPreparo].forEach((campo) => {
    campo.classList.remove("is-invalid", "is-valid");
  });
}

formReceita.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validarFormulario()) return;

  // Coleta e tratamento dos dados
  const tituloTratado = inputTitulo.value.trim();
  const categoriaEscolhida = selectCategoria.value;
  const dificuldadeEscolhida = document.querySelector(
    'input[name="dificuldade"]:checked',
  ).value;
  const preparoTratado = textareaPreparo.value.trim();
  const publicarAgora = checkPublicar.checked;
  const idEdicao = Number(inputId.value);
  resetarFormulario();
});

// Limpa validação visual em tempo real conforme o usuário corrige os campos
//
inputTitulo.addEventListener("input", () => {
  if (inputTitulo.value.trim().length >= 3) {
    inputTitulo.classList.remove("is-invalid");
  }
});
//
selectCategoria.addEventListener("change", () => {
  if (selectCategoria.value) {
    selectCategoria.classList.remove("is-invalid");
  }
});
//
textareaPreparo.addEventListener("input", () => {
  if (textareaPreparo.value.trim().length >= 10) {
    textareaPreparo.classList.remove("is-invalid");
  }
});

// Botão Cancelar do formulário
//
btnCancelar.addEventListener("click", resetarFormulario);

// Fechar alerta de feedback
//
btnFecharAlerta.addEventListener("click", () => {
  alertaFeedbackEl.classList.add("d-none");
});
