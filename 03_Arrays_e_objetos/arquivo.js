// detecta e remove elementos duplicados

const arrDuplicado = [1, 2, 3, 4, 5, 6, 3, 2, 1, 0]

const purificadorArrays = (arr) => {

  let novoArray = []

  arr.forEach(element => {
    if (!novoArray.includes(element)) {
      novoArray.push(element)
    }
  });

  return novoArray
}

// console.log(purificadorArrays(arrDuplicado))

// resolução do instrutor

// console.log(Array.from(new Set(arrDuplicado)))


// concatenação de arrays

const concatenaArrays = (arr1, arr2) => {

  let novo = []

  novo.push(arr1.join(", "))
  novo.push(arr2.join(", "))

  return novo
}

// console.log(concatenaArrays([1,2,3,4,5], [9,8,7,6]))


const agrupaArrays = (arr1, arr2) => {

  let novoArr = []

  for (let i = 0; i < arr1.length; i++) {
    novoArr.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    novoArr.push(arr2[i])
  }

  return novoArr

}
// console.log(agrupaArrays([1,2,3,4,5], [9,8,7,6]))


// resolusão do instrutor

const concatenarArray = (arr1, arr2) => {

  return arr1.concat(arr2)

}

// console.log(concatenarArray([1,2,3], [4,5,6]))


// encontra intersecção entre arrays

const interseccaoArrays = (arr1, arr2) => {

  let interseccao = []

  arr1.forEach((element => {
    if (arr2.includes(element)) {
      interseccao.push(element)
    }
  }))

  return interseccao
}

// console.log(interseccaoArrays([3, 3, 4, 5, 6, 7, 4, 8, 6, 5], [8, 90, 30, 40]))

// media dos elementos

const retornaMedia = (arr) =>{
  
  let soma = 0
  
  arr.forEach(element =>{
    soma += element
  })

  const media = soma / arr.length

  return media
}


// console.log(retornaMedia([1,2,3,4,5,6,7,8,9]))

// solução do instrutor

function mediaArray(arr){
  const soma = arr.reduce((acc, element) =>{
    return acc + element
  }, 0)

  console.log(soma)

  return soma / arr.length
}


console.log(mediaArray([1,2,3,4,5,6,7,8,9]))