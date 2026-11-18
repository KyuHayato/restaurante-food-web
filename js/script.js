let h1 = document.getElementsByTagName('h1')
let h2 = document.getElementById('ele-mento')
console.log(h2)
let conteudo = document.querySelector('#cont-div')
let h1s = document.querySelectorAll('h1')
console.log("vendo conteudo da tag: ",conteudo.textContent)
console.log("usando Query h1: ",h1s)
function mudarConteudo(){
    if(h2.textContent == "Elemento menor"){
        h2.textContent = "Hello World DOM!"
    } else {
        h2.textContent = "Elemento menor"
    }
}

function colocarTag(){
    conteudo.innerHTML += "<h3>Nova tag inserida</h3>"
    console.log("Conteudo: ", conteudo)
}
function mudarCor(){
    if(h2.style.backgroundColor == "red"){
        h2.style.backgroundColor = "green"
        h2.style.color = "white"
        h2.style.border = "2px solid black"
        h2.style.borderRadius = "25px"
        h2.style.padding = "10px"
    } else{
        h2.style.backgroundColor = "red"
        h2.style.color = "white"
    }
}