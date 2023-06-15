// detecta e remove elementos duplicados

const arrDuplicado = [1,2,3,4,5,6,3,2,1,0]

const purificadorArrays = (arr) =>{

  let novoArray = []

  arr.forEach(element => {
    if(!novoArray.includes(element)){
      novoArray.push(element)
    }
  });

  return novoArray
}

console.log(purificadorArrays(arrDuplicado))

// resolução do instrutor
console.log(Array.from(new Set(arrDuplicado)))