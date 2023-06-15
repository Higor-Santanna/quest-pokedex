import { useState, useEffect } from "react";
import { Button } from "../buttonLoadMore/button";
import { getDataPokemon } from "../../services/pokeApi";
import { DivContainer, Ul, Li, A } from "../stylePokemonList";
import { DivLogoAndButton } from "../header/divLogoButtonTheme/logoButton"
import { Logo } from "../header/logoPokemon/logo"
import { ButtonTheme } from "../themeButton/themeButton"
import { DivFilterAndSearch } from "../header/DivFilterAndSearch/DivFilterAndSearch"
import { Input } from "../inputSearch/index"

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
        console.log(list)
        setListPokemons([...listPokemons, ...list])
    }

    useEffect(() => {
        getListPokemons(offset)
    }, [offset])


    return (
        <>
            <header>
                <DivLogoAndButton>
                    <Logo/>
                    <ButtonTheme></ButtonTheme>
                </DivLogoAndButton>
                <DivFilterAndSearch>
                    <Input />
                    <select name='Tipo'>
                        <option value="">Select by type</option>
                        <option value="">Selecione</option>
                        <option value="">Selecione</option>
                        <option value="">Selecione</option>
                        <option value="">Selecione</option>
                    </select>
                </DivFilterAndSearch>
            </header>
            <DivContainer>
                <Ul>
                    {listPokemons.map(pokemon => {
                        return (
                            <Li key={pokemon.name}>
                                <A href=".">
                                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                                    <h1>{pokemon.name}</h1>
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