const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

const somaPropsObjetos = (obj) => {
  let soma = 0

  Object.entries(obj).map(([key, value]) => {
    soma += value
    let keys = key
  })

  return soma
}

// console.log(somaPropsObjetos(obj))

// resolução do instrutor

const somaObjetos = (obj) =>{

  let soma = 0

  for(const chave in obj){

    if(obj.hasOwnProperty(chave) && typeof obj[chave] === 'number'){
      soma += obj[chave]
    }

  } 

  return soma
}

//console.log(somaObjetos(obj))

// filtra objetos

const requisicao = ["name", "age", "address"]

const user = {
  name: "Nikolas",
  age: 18,
  job: "Programmer",
  city: "Garça",
  address: "Rua Padre leite 221"
}


const filtraPropriedades = (obj, array) => {

  let filtrado = []

  Object.entries(obj).map(([key, value]) => {
    
    if(array.includes(key)){
      filtrado.push(value)
    }

  })

  return filtrado
}

console.log(filtraPropriedades(user, requisicao))

// resolução instrutor

const filtra = (obj, arr) =>{

  let newObj = {}

  for(const prop of arr){
    if(obj.hasOwnProperty(prop)){
      newObj[prop] = obj[prop]
    }
  }

  return newObj

}

console.log(filtra(user, requisicao))

// concatenação de objetos