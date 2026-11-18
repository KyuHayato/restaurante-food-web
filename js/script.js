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


const receita  = document.querySelector("#receita")

// receita.addEventListener("mouseover", ()=>{
//     alert('Evento de blur!')
// })
const tituloBusca = document.querySelector("#titulo-busca")
btnEntrar.addEventListener('click', () =>{
    tituloBusca.classList.toggle('exemplo-back')
})

function teste(){
    alert("Hello!")
}