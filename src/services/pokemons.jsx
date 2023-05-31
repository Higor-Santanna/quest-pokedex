import { Pokemons } from "./pokeApi"

let resultsData = data.results.map(function(data){
    return data.name
})

const pokemon = resultsData.map(function(data){
    return data
})
