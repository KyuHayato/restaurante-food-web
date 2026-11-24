// let h1 = document.getElementsByTagName('h1')
// let h2 = document.getElementById('ele-mento')
// console.log(h2)
// let conteudo = document.querySelector('#cont-div')
// let h1s = document.querySelectorAll('h1')
// console.log("vendo conteudo da tag: ",conteudo.textContent)
// console.log("usando Query h1: ",h1s)
// function mudarConteudo(){
//     if(h2.textContent == "Elemento menor"){
//         h2.textContent = "Hello World DOM!"
//     } else {
//         h2.textContent = "Elemento menor"
//     }
// }

// function colocarTag(){
//     conteudo.innerHTML += "<h3>Nova tag inserida</h3>"
//     console.log("Conteudo: ", conteudo)
// }
// function mudarCor(){
//     if(h2.style.backgroundColor == "red"){
//         h2.style.backgroundColor = "green"
//         h2.style.color = "white"
//         h2.style.border = "2px solid black"
//         h2.style.borderRadius = "25px"
//         h2.style.padding = "10px"
//     } else{
//         h2.style.backgroundColor = "red"
//         h2.style.color = "white"
//     }
// }

//Seleção de itens DOM do layout
// ============================================================================
// 1. BASE DE DADOS (ARRAYS DE OBJETOS)
// ============================================================================
const receitas = [
  {
    id: 1,
    titulo: "Macarrão cremoso",
    categoria: "Massas",
    dificuldade: "Fácil",
    tempo: "20 min",
    temaClasse: "tema-massas",
    ingredientes: [
      "250g de macarrão penne",
      "1 caixa de creme de leite",
      "100g de queijo parmesão",
      "Alho e sal a gosto",
    ],
    preparo:
      "Cozinhe o macarrão al dente. Em uma panela, refogue o alho, adicione o creme de leite e o queijo até derreter, e misture a massa.",
  },
  {
    id: 2,
    titulo: "Frango grelhado",
    categoria: "Carnes",
    dificuldade: "Médio",
    tempo: "30 min",
    temaClasse: "tema-carnes",
    ingredientes: [
      "2 filés de peito de frango",
      "Suco de 1 limão",
      "Páprica doce",
      "Azeite e sal",
    ],
    preparo:
      "Tempere os filés com limão, páprica e sal por 15 minutos. Grelhe em frigideira quente com um fio de azeite por 6 minutos de cada lado.",
  },
  {
    id: 3,
    titulo: "Cheesecake de frutas",
    categoria: "Doces",
    dificuldade: "Difícil",
    tempo: "50 min",
    temaClasse: "tema-doces",
    ingredientes: [
      "200g de biscoito maisena",
      "100g de manteiga",
      "300g de cream cheese",
      "Geleia de frutas vermelhas",
    ],
    preparo:
      "Triture o biscoito com manteiga para a base. Bata o cream cheese com açúcar, leve para gelar por 4 horas e finalize com a geleia.",
  },
  {
    id: 4,
    titulo: "Salada caesar",
    categoria: "Saladas",
    dificuldade: "Fácil",
    tempo: "15 min",
    temaClasse: "tema-saladas",
    ingredientes: [
      "1 pé de alface americana",
      "Croutons crocantes",
      "Lasca de parmesão",
      "Molho caesar",
    ],
    preparo:
      "Higienize e rasgue as folhas de alface. Adicione os croutons, o parmesão e regue com o molho na hora de servir.",
  },
  {
    id: 5,
    titulo: "Lasanha de abobrinha",
    categoria: "Massas",
    dificuldade: "Médio",
    tempo: "45 min",
    temaClasse: "tema-massas",
    ingredientes: [
      "2 abobrinhas fatiadas",
      "300g de molho de tomate",
      "200g de muçarela",
      "Orégano",
    ],
    preparo:
      "Intercale camadas de abobrinha grelhada, molho de tomate e muçarela em um refratário. Asse a 200°C por 25 minutos.",
  },
  {
    id: 6,
    titulo: "Brigadeiro gourmet",
    categoria: "Doces",
    dificuldade: "Fácil",
    tempo: "25 min",
    temaClasse: "tema-doces",
    ingredientes: [
      "1 lata de leite condensado",
      "50g de chocolate meio amargo",
      "1 colher de manteiga",
      "Granulado belga",
    ],
    preparo:
      "Leve todos os ingredientes ao fogo baixo mexendo sempre até desgrudar do fundo da panela. Deixe esfriar, enrole e passe no granulado.",
  },
];
const formBusca = document.getElementById("form-busca");
const inputBusca = document.getElementById("input-busca");
const selectCategoria = document.getElementById("select-categoria");

const listaReceitasEl = document.getElementById("lista-receitas");
const contadorReceitasEl = document.getElementById("contador-receitas");
const mensagemVaziaEl = document.getElementById("mensagem-vazia");
const textoMensagemVaziaEl = document.getElementById("texto-mensagem-vazia");

const listaCategoriasEl = document.getElementById("lista-categorias");
const templateCard = document.getElementById("template-card-receita");
const templateCategoria = document.getElementById("template-categoria-item");

const formNewsletter = document.getElementById("form-newsletter");
const inputNewsletterEmail = document.getElementById("input-newsletter-email");
const feedbackNewsletterEl = document.getElementById("feedback-newsletter");
const alertaNewsletterEl = document.getElementById("alerta-newsletter");

const btnEntrar = document.getElementById("btn-entrar");
const modalDetalhesEl = document.getElementById("modalDetalhesReceita");
const modalDetalhesTitulo = document.getElementById("modalDetalhesTitulo");
const modalDetalhesCorpo = document.getElementById("modalDetalhesCorpo");
const modalBootstrap = new bootstrap.Modal(modalDetalhesEl);

const receita = document.querySelector("#receita");

// receita.addEventListener("mouseover", ()=>{
//     alert('Evento de blur!')
// })
const tituloBusca = document.querySelector("#titulo-busca");
btnEntrar.addEventListener("click", () => {
  tituloBusca.classList.toggle("exemplo-back");
});

function teste() {
  alert("Hello!");
}

let divExemplo = document.querySelector("#exemplo");
let btnExemplo = document.querySelector("#btn-exemplo");

function criarElemento() {
  let novoElemento = document.createElement("p");
  novoElemento.textContent = "Novo elemento criado!";
  divExemplo.appendChild(novoElemento);
}
// btnExemplo.addEventListener("click", criarElemento);

function atualizaElemento() {
  let elementoExistente = divExemplo.querySelector("p");
  let elementoNovo = document.createElement("p");
  let texto = prompt("Difite o novo conteúdo do elemento:");
  elementoNovo.textContent = texto;
  divExemplo.replaceChild(elementoNovo, elementoExistente);
}

function removeElemento() {
  divExemplo.remove();
}

function renderizarReceitas(listaFiltrada) {
  listaReceitasEl.innerHTML = "";
  contadorReceitasEl.textContent = `Mostrando ${listaFiltrada.length} de ${receitas.length}`;

  // Controle de estado vazio
  if (listaFiltrada.length === 0) {
    mensagemVaziaEl.classList.remove("d-none");
    const termo = inputBusca.value.trim();
    textoMensagemVaziaEl.textContent = termo
      ? `Nenhuma receita encontrada para "${termo}".`
      : "Nenhuma receita encontrada nesta categoria.";
    return;
  }
  mensagemVaziaEl.classList.add("d-none");
  // Cria os nós clonando o <template> para cada item filtrado
  const fragmentos = listaFiltrada.map((receita) => {
    const clone = templateCard.content.cloneNode(true);

    const article = clone.querySelector(".card-receita");
    const thumb = clone.querySelector(".card-thumb");
    const titulo = clone.querySelector(".titulo-receita");
    const info = clone.querySelector(".info-receita");
    const badge = clone.querySelector(".badge-dificuldade");
    const btnDetalhes = clone.querySelector(".btn-detalhes");

    article.dataset.id = receita.id;
    article.dataset.categoria = receita.categoria;

    thumb.classList.add(receita.temaClasse); 
    titulo.textContent = receita.titulo;
    info.textContent = `${receita.categoria} · ${receita.tempo}`;

    badge.classList.add(receita.temaClasse);
    badge.textContent = receita.dificuldade;

    btnDetalhes.dataset.id = receita.id;

    return clone;
  });

  fragmentos.forEach((no) => listaReceitasEl.appendChild(no));
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarReceitas(receitas);
   renderizarCategoriasLateral(); //Bloco 5
});

btnEntrar.addEventListener("click", () => {
  const logado = btnEntrar.dataset.logado === "true";

  if (!logado) {
    btnEntrar.textContent = "Olá, Chef!";
    btnEntrar.dataset.logado = "true";
    btnEntrar.classList.replace("btn-outline-receitas", "btn-receitas");
  } else {
    btnEntrar.textContent = "Entrar";
    btnEntrar.dataset.logado = "false";
    btnEntrar.classList.replace("btn-receitas", "btn-outline-receitas");
  }
});

function aplicarFiltros() {
  const termoBusca = inputBusca.value.trim().toLowerCase();
  const categoriaSelecionada = selectCategoria.value;

  const receitasFiltradas = receitas.filter((receita) => {
    const bateCategoria =
      categoriaSelecionada === "todas" || receita.categoria === categoriaSelecionada;
    const bateTexto = receita.titulo.toLowerCase().includes(termoBusca);

    return bateCategoria && bateTexto;
  });

  renderizarReceitas(receitasFiltradas);
  atualizarDestaqueCategoriaLateral(categoriaSelecionada); 
}

formBusca.addEventListener("submit", (event) => {
  event.preventDefault();
  aplicarFiltros();
});


listaReceitasEl.addEventListener("click", (event) => {
  const botaoDetalhes = event.target.closest(".btn-detalhes");
  if (!botaoDetalhes) return;

  const idSelecionado = Number(botaoDetalhes.dataset.id);
  const receitaEncontrada = receitas.find((item) => item.id === idSelecionado);

  if (!receitaEncontrada) return;

  modalDetalhesTitulo.textContent = receitaEncontrada.titulo;
  modalDetalhesCorpo.innerHTML = `
    <div class="d-flex gap-2 mb-3">
      <span class="badge rounded-pill ${receitaEncontrada.temaClasse}">${receitaEncontrada.categoria}</span>
      <span class="badge bg-light text-dark border">${receitaEncontrada.dificuldade}</span>
      <span class="badge bg-light text-dark border">${receitaEncontrada.tempo}</span>
    </div>
    <h4 class="h6 fw-semibold">Ingredientes</h4>
    <ul class="small mb-3">
      ${receitaEncontrada.ingredientes.map((ing) => `<li>${ing}</li>`).join("")}
    </ul>
    <h4 class="h6 fw-semibold">Modo de preparo</h4>
    <p class="small text-muted mb-0">${receitaEncontrada.preparo}</p>
  `;

  modalBootstrap.show();
});

function renderizarCategoriasLateral() {
  // Acumula a contagem de cada categoria: { Massas: 2, Carnes: 1, ... }
  const contagemPorCategoria = receitas.reduce((acumulador, item) => {
    acumulador[item.categoria] = (acumulador[item.categoria] || 0) + 1;
    return acumulador;
  }, {});

  const categoriasDisponiveis = ["todas", ...Object.keys(contagemPorCategoria)];
  listaCategoriasEl.innerHTML = "";

  categoriasDisponiveis.forEach((cat) => {
    const clone = templateCategoria.content.cloneNode(true);
    const botao = clone.querySelector(".btn-categoria-item");
    const nomeSpan = clone.querySelector(".nome-categoria");
    const qtdSpan = clone.querySelector(".qtd-categoria");

    const isTodas = cat === "todas";
    botao.dataset.categoria = cat;
    nomeSpan.textContent = isTodas ? "Todas" : cat;
    qtdSpan.textContent = isTodas ? receitas.length : contagemPorCategoria[cat];

    if (selectCategoria.value === cat) {
      botao.classList.add("active");
    }

    listaCategoriasEl.appendChild(clone);
  });
}

function atualizarDestaqueCategoriaLateral(categoriaAtiva) {
  const botoes = listaCategoriasEl.querySelectorAll(".btn-categoria-item");
  botoes.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.categoria === categoriaAtiva);
  });
}

// Filtra em tempo real enquanto o usuário digita 
//Bloco 5
inputBusca.addEventListener("input", aplicarFiltros);

// Filtra ao trocar a opção no <select>
//Bloco 5
selectCategoria.addEventListener("change", aplicarFiltros);

// Delegação de eventos de clique na lista de categorias do <aside>
//Bloco 5
listaCategoriasEl.addEventListener("click", (event) => {
  const botaoCategoria = event.target.closest(".btn-categoria-item");
  if (!botaoCategoria) return;

  selectCategoria.value = botaoCategoria.dataset.categoria;
  aplicarFiltros();
});