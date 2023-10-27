function simularAPI (coiso, tempo) {

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(coiso)
        }, tempo)
    })

    return promise
}

simularAPI('Resultado da promise', 3000).then(resposta => console.log(resposta))