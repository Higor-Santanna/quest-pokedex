import { useState, useEffect } from "react";
// import { Button } from "../button/button";

const baseUrl = 'https://pokeapi.co/api/v2'

const Home = () => {

    const [offset, setOffset] = useState(0);
    const [listPokemons, setListPokemons] = useState([]);

    const getStarterPokemonList = async () => {
        const linkPokemons = `${baseUrl}/pokemon?limit=10&${offset=0}`
        const response = await fetch(linkPokemons)
        const data = await response.json()

        const tenNamePokemons = data.results.map(async (data) => {
            const pokemonUrl = data.url
            console.log(pokemonUrl)
            const responsePokemon = await fetch(pokemonUrl)
            return await responsePokemon.json()
        })

        console.log(tenNamePokemons)

        const pokemonData = await Promise.all(tenNamePokemons)
        console.log(pokemonData)

        setOffset([...listPokemons, ...pokemonData])
    }


    const getListPokemons = async (offset) => {
        const linkPokemons = `${baseUrl}/pokemon?limit=10&offset=${offset}`
        const response = await fetch(linkPokemons)
        const data = await response.json()

        const namesPokemon = data.results.map(function(pokemon){
            return pokemon.name
        })

        const pokemonList = namesPokemon.map(
            async(pokemon) => await getDataPokemon(pokemon)
        )

        const list = await Promise.all(pokemonList)
        
        setListPokemons([...listPokemons, ...list])
    }

    const getDataPokemon = async(name) => {
        const response = await fetch(`${baseUrl}/pokemon/${name}`)
        return await response.json()
    }

    useEffect(() => {
        getStarterPokemonList()
        getListPokemons()
    }, [])

    const alerta = () => {
        alert('Botão clicado! porra');
    }

    return (
        <div>
            <ul>
                {listPokemons.map(pokemon => {
                    return (
                        <li>
                            <h1>{pokemon.name}</h1>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </li>
                    )
                })}
            </ul>

            <button onClick={getListPokemons}>Clique aqui</button>
        </div> 
    )

}

export { Home }