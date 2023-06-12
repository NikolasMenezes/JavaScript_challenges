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

// check if it's divisable

const divisor = 2
const dividendo = 10

function checaDivisao(a, b){
  
  if(a%b != 0){
    console.log("Não é divisível")
  } else{
    console.log("É divisível");
  }
}

checaDivisao(dividendo, divisor)

// age group classification

const pessoa1 = 10
const pessoa2 = 17
const pessoa3 = 40
const pessoa4 = 65

function ageGroup (idade){
  
  if(idade <= 12){
    console.log("Faixa etária: Criança")
  } 
  else  if(idade <= 17){
    console.log("Faixa etária: Adolescente")
  } 
  else if(idade <= 59){
    console.log("Faixa etária: Adulto")
  }
  else{
    console.log("Faoxa etária: Idoso")
  }

}

ageGroup(pessoa1)
ageGroup(pessoa2)
ageGroup(pessoa3)
ageGroup(pessoa4)

// function which compares numbers

let anyNumberA = 54
let anyNumberB = 34

const comparingNumber = (a, b) =>{

  if (a > b){
    console.log("O Elemento A é maior que o B")
  }
  else if (b > a) {
    console.log("O Elemento B é maior que o A")    
  }
  else{
    console.log("Os elementos são iguais")
  }
}

comparingNumber(anyNumberA, anyNumberB)

// calculator

let operation = 'subtração'

const valorSwitch = 20
const valorSwitch2 = 37

const somaSwitch = (a,b) =>{
  return a + b
}
const subtracaoSwitch = (a,b) =>{
  return a - b
}
const multiplicacaoSwitch = (a,b) =>{
  return a * b
}
const divisaoSwitch = (a,b) =>{
  return a / b
}

switch (operation){
  case 'soma': {
    console.log(somaSwitch(valorSwitch, valorSwitch2))
    break
  }
  case 'subtração': {
    console.log(subtracaoSwitch(valorSwitch, valorSwitch2))
    break
  }
  case 'multiplicação': {
    console.log(multiplicacaoSwitch(valorSwitch, valorSwitch2))
    break
  }
  case 'divisão': {
    console.log(divisaoSwitch(valorSwitch, valorSwitch2))
  }
  break
}

// Costs by age

function calculaTarifa(idade, estudante = false){

  if(idade <= 6){
    console.log("Crianças menores de 6 anos não pagam tarifa.")
  }
  else if(idade > 6 && estudante){
    console.log("Pagará a metade da tarifa normal: R$:1,25")
  }
  else if (idade >= 60){
    console.log(`Pagará com 30% de desconto`)
  } 
  else{
    console.log("Pagará a tarifa normal: R$:2,50")
  }

}

calculaTarifa(60) // 30% desconto
calculaTarifa(5) // isento
calculaTarifa(10, true) // 50% desconto
calculaTarifa(30) // normal
calculaTarifa(70, true) // 50% desconto

// loop exercise

const n = 5

for(let i=1; i<n; i++){
  console.log(i)
}

// multiplication table

console.log("| Multiplication table |")

let multiplicator = 6

for(let i = 1; i < 11; i++){
  console.log(i*multiplicator)
}

// cousin number

console.log("| Exercício números primos |");

for(let i = 0; i<30; i++){
  if (i > 2){
    console.log(i);
  }
}


// printing patterns

console.log('| Printing Patterns |');

const maxNumber = 5

for(let i = 1; i <= maxNumber; i++){
  console.log("*".repeat(i))
  
  if(i == maxNumber){
    for(let j = maxNumber; j >= 0; j--){
      console.log("*".repeat(j))
    }
  }

}

// fibonacci

const targetNumber = 12
const fibonacci = [0,1]

for(let i = 2; fibonacci[i] >= targetNumber; i++){
  fibonacci[i] = (fibonacci[(i-1)] + fibonacci[i-2])
  console.log(fibonacci)
}