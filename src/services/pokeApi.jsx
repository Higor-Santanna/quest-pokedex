const baseUrl = 'https://pokeapi.co/api/v2'

async function pokemons(){
    const response = await fetch(`${baseUrl}/pokemon?limit=10`)
    let data = await response.json()

    let resultsData = data.results.map(function(data){
        return data.name
    })

    const pokemon = resultsData.map(function(data){
        console.log(data)
    })

    console.log(pokemon)


    // console.log(resultsData)
    // .then((data) => {
    //     const pokemons = data.results;
        
    //     pokemons.forEach(pokemon => {
    //         fetch(pokemon.url)
    //         .then(response => response.json())
    //         .then(pokemonData => {
    //           const pokemonName = pokemonData.name;
    //           const pokemonImage = pokemonData.sprites.front_default;
    //         })
    //     })
    // })
}




export { pokemons }