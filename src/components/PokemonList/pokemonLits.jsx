import { useState, useEffect } from "react";
import { Button } from "../buttonLoadMore/button";
import { getDataPokemon } from "../../services/pokeApi";
import { DivContainer, Ul, Li, A } from "../stylePokemonList";
import { DivLogoAndButton } from "../header/divLogoButtonTheme/logoButton"
import { Logo } from "../header/logoPokemon/logo"
import { ButtonTheme } from "../themeButton/themeButton"
import { themes} from "../../styles/themes/theme";

const baseUrl = 'https://pokeapi.co/api/v2'

const Home = () => {

    const [offset, setOffset] = useState(0);
    const [listPokemons, setListPokemons] = useState([]);

    const getListPokemons = async (offset) => {
        const linkPokemons = `${baseUrl}/pokemon?limit=10&offset=${offset}`
        const response = await fetch(linkPokemons)
        const data = await response.json()

        const namesPokemon = data.results.map(function (pokemon) {
            return pokemon.name
        })

        const pokemonList = namesPokemon.map(
            async (pokemon) => await getDataPokemon(pokemon)
        )

        const list = await Promise.all(pokemonList)

        const types = list.map((type) => type.types?.[0].type.name)
        console.log(types)
        setListPokemons([...listPokemons, ...list])
    }

    useEffect(() => {
        getListPokemons(offset)
    }, [offset])

    console.log(listPokemons)

    return (
        <>
            <header>
                <DivLogoAndButton>
                    <Logo />
                    <ButtonTheme></ButtonTheme>
                </DivLogoAndButton>
            </header>
            <DivContainer>
                <Ul>
                    {listPokemons.map(pokemon => {
                        const typePokemon = pokemon.types[0].type.name
                        const backgroundPokemon = themes.pokemonBackground[typePokemon]
                        return (
                            <Li key={pokemon.name}
                                type={pokemon.types[0].type.name}>
                                <A href={`/pokemon/${pokemon.name}`} 
                                backgroundPokemon = {backgroundPokemon}
                                > 
                                    <img 
                                        src={pokemon.sprites.other['official-artwork'].front_default} 
                                        alt={pokemon.name} backgroundPokemon = {backgroundPokemon}/>
                                    <h1 backgroundPokemon = {backgroundPokemon}>{pokemon.name}</h1>
                                </A>
                            </Li>
                        )
                    })}
                </Ul>

                <Button setOffset={setOffset} offset={offset}></Button>
            </DivContainer>
        </>
    )

}

export { Home }