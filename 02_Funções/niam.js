// impar ou par 

function verificaImparPar(n) {
  if (n % 2 == 0) {
    return `O número ${n} é par`
  }
  else {
    return `O número ${n} é impar`
  }
}

// console.log(verificaImparPar(10))
// console.log(verificaImparPar(11))

// Fatorial

function retornaFatorial(x) {

  let fatorial = 1

  for (let i = 1; i < x; i++) {
    fatorial += (fatorial * (i))
  }

  return `O fatorial de ${x} é ${fatorial}`

}

// console.log(retornaFatorial(5))

// Min e Max

function retornaMinMax(a, b) {

  let min = 0
  let max = 0


  if (a > b) {
    max = a
    min = b
  }
  else {
    max = b
    min = a
  }

  return `O número maior é ${max} e o número menor é ${min}`

}

// console.log(retornaMinMax(10, 20))

// Min e Max Array

function arrayMinMax(array) {

  const len = array.length
  let min = 1
  let max = 1

  for (let i = 0; i <= len; i++) {

    if (array[i] > max) {
      max = array[i]
    }
    if (array[i] <= min){
      min = array[i]
    }
  }

  return `Dentro dessa lista de números o maior é ${max} e menor ${min}`
}

// Inverter string

function inverteString(string){

  if(string === ''){
    return `Não há conteúdo para ser invertido `
  }
  else{
    return string.split('').reverse().join('')
  }
}

// console.log(inverteString("nikolas matheus de menezes"))

// conta vogais

function contaVogais(texto){
  const vogais = 'aeiouAEIOU'
  
  let quantidadevogais = 0
  
  for(let i = 0; i < texto.length; i++){
    for(let j = 0; j < texto.length; j++){
      if(texto[i] === vogais[j]){
        quantidadevogais += 1
      }
    }
  }

  return `A quantidade de vogais da string "${texto}" é de ${quantidadevogais}` 

}

// console.log(contaVogais("sdfgh"))
// console.log(contaVogais("sdsafiouhfoauishofuasioufio"))
// console.log(contaVogais("hwqueogqwiucdxiuqbidqiu"))
// console.log(contaVogais("qiuoiayouc ouaocaocsaucasiouhcauhcoashoi"))

// Palindromo

function palindromo(texto){
  let textoInvertido = texto.split('').reverse().join('')

  if(texto === textoInvertido){
    return `Este texto representa um palíndromo`
  }
  else{
    return `Este texto não retorna um palíndromo`
  }
}

// console.log(palindromo("roma é amor"))
// console.log(palindromo("Nikolas menezes"))
// console.log(palindromo("ana radar"))


// Array de números aleatórios

function arrayAleatorio(tamanho, max){

  let arrayAleatorio = []

  for(let i = 0; i < tamanho; i++){
    arrayAleatorio.push(Math.floor(Math.random() * max))
  }

  return arrayAleatorio
}

// console.log(arrayAleatorio(10,30))

function verificaElementoFrequente(lista){

  let guardaValores = {}
  let count = 0

  for(let i = 0; i < lista.length; i++){
    count = 0

    for(let j = 0; j < lista.length; j++){
      if(lista[j] == lista[i]){
        count++
      }
      if (!(lista[i] in guardaValores)) {
        guardaValores[i] = 0
      }
      
    }
    guardaValores[i] = count

  }
  // return `O elemento mais frequente nessa lista é ${elementoMaisFrequente} `
  return guardaValores
}

const lista = [1,2,3,3,3,3,4,4,4,4,4,3,2,1,3,2]

// console.log(verificaElementoFrequente(lista))

const maisFrequente = (arr) => {
  obj = {}
  arr.forEach((item) => {
      if(!(item in obj)) {
          obj[item] = 0
      }

      obj[item] += 1
  })

  maiorElemento = 0
  maiorNumero = 0
  Object.entries(obj).map(([key, value]) => {
      if(value > maiorNumero) {
          maiorNumero = value
          maiorElemento = key
      }
  })

  return maiorElemento
}
console.log(maisFrequente(lista))