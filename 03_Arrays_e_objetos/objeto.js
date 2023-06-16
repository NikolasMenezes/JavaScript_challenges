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

console.log(somaPropsObjetos(obj))