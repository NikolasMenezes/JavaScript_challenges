const apiRoutes = [
    'https://swapi.dev/api/people/1/',
    'https://pokeapi.co/api/v2/pokemon/ditto',
]

async function promiseChain(urls) {

    const results = []

    urls.forEach(async (url) => {
        await fetch(url)
            .then(response => response.json())
            .then(data => results.push(data))

    })

    return results 
}
promiseChain(apiRoutes)