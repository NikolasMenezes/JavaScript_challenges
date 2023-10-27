function mapearArray (arr, callback) {
    return callback(arr)
}

function tranformacao(arr) {
    const tranformado = []

    arr.forEach(element => {
          if(element > 3) {
            tranformado.push(element)
          }  
    });

    return tranformado
}

console.log(mapearArray([4,5,6,7,8,1,2], tranformacao))