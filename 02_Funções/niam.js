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

console.log(contaVogais("sdfgh"))
// console.log(contaVogais("sdsafiouhfoauishofuasioufio"))
// console.log(contaVogais("hwqueogqwiucdxiuqbidqiu"))
// console.log(contaVogais("qiuoiayouc ouaocaocsaucasiouhcauhcoashoi"))

// Palindromo
