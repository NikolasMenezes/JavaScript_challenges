// Temprature Conversion

const fahrenheit = 100
const celsius = 24

const fahrenheitToCelsius = (F) => {
  let celsius = ((F - 32) * (5 / 9))

  console.log(`A temperatura ${F} em Fahrenheit corresponde a temperatura ${celsius.toFixed(2)} em Celsius `)
}

const celsiusToFahrenheit = (C) => {
  let fahrenheit = ((C * 9 / 5) + 32)

  console.log(`A temperatura ${C} em Celsius corresponde a temperatura ${fahrenheit.toFixed(2)} em Fahrenheit `)
}

fahrenheitToCelsius(fahrenheit)
celsiusToFahrenheit(celsius)

// IMC Calc

const btn = document.querySelector("#imc-btn")

btn.addEventListener("click", (e) => {
  e.preventDefault()

  const peso = document.querySelector("#peso")
  const altura = document.querySelector("#altura")
  let pesoValue = peso.value
  let alturaValue = altura.value

  let imc = pesoValue / (alturaValue * alturaValue)

  const userImc = document.querySelector("#imc")

  userImc.innerHTML = imc.toFixed(2)
})

// String concatenation

const userName = 'Nikolas'
const userAge = 18
const userCity = 'Garça'

console.log(`Olá ${userName}, tudo bem? 
Chequei aqui no meu Banco de dados e vi que você têm ${userAge} anos e mora na cidade de ${userCity}.
Essas informações estão corretas?`)

// Area and perimeter

const apBtn = document.querySelector("#ap-btn")

apBtn.addEventListener("click", (e) => {
  e.preventDefault()

  const comprimento = document.querySelector("#comprimento")
  const largura = document.querySelector("#largura")
  let comprimentoValue = comprimento.value
  let larguraValue = largura.value

  let areaCalc = comprimentoValue * larguraValue
  let perimetroCalc = (comprimentoValue * 2) + (larguraValue * 2)

  const area = document.querySelector("#area")
  const perimetro = document.querySelector("#perimetro")

  area.innerHTML = areaCalc
  perimetro.innerHTML = perimetroCalc
})
