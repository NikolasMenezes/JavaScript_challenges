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

btnDiv.addEventListener("click", () => {
  divEstilizado.classList.toggle('ativo')
})

// Clonando elementos

const list = document.querySelector(".list-clone")
const buutonList = document.querySelector(".button-list")


function clonar() {
  const elemento = list.querySelector("li")
  const elementoClonado = elemento.cloneNode(true)
  elementoClonado.innerText = 'elemento clonado'

  list.appendChild(elementoClonado)
}

buutonList.addEventListener("click", clonar)

// Removendo itens

const items = document.querySelectorAll(".list-remove li")

items.forEach(item => item.addEventListener("click", () => {
  item.remove()
}))

// Mecanismo de busca

const input  = document.querySelector(".search")
const searchButton  = document.querySelector(".search-button")
const searchList  = document.querySelectorAll(".search-list li")

const verificaCompatibilidade = ()=>{
  const content = input.value
  searchList.forEach(item => {
    if(content === ''){
      item.classList.remove("hide")
    }
    else if(!(item.innerText === content)){
      item.classList.add("hide")
    }
  })

}

searchButton.addEventListener("click", verificaCompatibilidade)