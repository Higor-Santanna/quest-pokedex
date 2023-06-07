import { useState, useEffect } from "react";
import { Button } from "../button/button";
import { getDataPokemon } from "../../services/pokeApi";

const baseUrl = 'https://pokeapi.co/api/v2'

const Home = () => {

    const [offset, setOffset] = useState(0);
    const [listPokemons, setListPokemons] = useState([]);

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

    useEffect(() => {
        getListPokemons(offset)
    }, [offset])

    
    return (
        <div>
            <ul>
                {listPokemons.map(pokemon => {
                    return (
                        <li key={pokemon.name}>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <h1>{pokemon.name}</h1>
                        </li>
                    )
                })}
            </ul>

            <Button setOffset={setOffset} offset={offset}></Button>
        </div> 
    )

}

export { Home }