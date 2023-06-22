// Mudar conteúdo de tag
const titulo = document.querySelector("#titulo")

titulo.innerHTML = "titulo modificado"

// alterando cor do body

const body = document.body

body.style.backgroundColor = '#2d2d2d'
body.style.color = '#fff'

// mudando estilo dos elementos
const paragrafos = document.querySelectorAll("p")

paragrafos.forEach(paragrafo => paragrafo.style.color = '#ff0066')

// Alterando o título do documento

const title = document.querySelector("title").textContent = "JavaScript Challenges"

// Mudando estilo através de evento

const divEstilizado = document.querySelector(".div-estilizada")
const btnDiv = document.querySelector(".btn-div")

btnDiv.addEventListener("click", ()=>{
  divEstilizado.classList.toggle('ativo')
})