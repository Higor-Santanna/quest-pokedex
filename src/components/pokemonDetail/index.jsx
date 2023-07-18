import { useState, useEffect } from "react";
import { getDataPokemon } from "../../services/pokeApi";
import { useParams } from "react-router-dom";
import { ButtonTheme } from "../themeButton/themeButton";
import { Header, DivNameImage, Link, H2, DivDados, DivContent } from "./style"
import { themes } from "../../styles/themes/theme";

const Pokemon = () => {

    const [post, setPost] = useState({});
    const [moves, setMoves] = useState([]);
    const [types, setTypes] = useState([]);
    const [image, setImage] = useState({});
    const [activeTab, setActiveTab] = useState(0);
    const { name } = useParams()
    const tabs = ['Types', 'Moves', 'Abilities']
    const [informacoesPokemon, setInformacoesPokemon] = useState([])

    useEffect(() => {
        async function fecthData() {
            const post = await getDataPokemon(name)

            const image = post.sprites.other['official-artwork'].front_default

            const types = post.types.map((type) => type.type.name)

            const moves = post.moves.map(function (move) {
                return move.move.name
            })

            const ability = post.abilities.map((abilitie) => abilitie.ability.url)


            const abilitie = await Promise.all(ability.map(async (abilityUrl) => {
                const abilityData = await fetch(abilityUrl)
                const response = await abilityData.json()
                return await response
            }))

            const abilityDescrition = abilitie.map((ability) => {
                const englishDescrition = ability.effect_entries.filter((effect) => {
                    return effect.language.name === 'en'
                })
                return englishDescrition
            })
            const description = abilityDescrition.map(effect => effect[0].short_effect)

            setPost(post)
            setImage(image)
            setMoves(moves)
            setTypes(types)
            const dadosApi = [
                {
                    content: types
                },
                {
                    content: moves
                },
                {
                    content: description
                }
            ]
            setInformacoesPokemon(dadosApi)
        }

        fecthData()
    }, [])

    const information = informacoesPokemon[activeTab]?.content

    const pokemonType = post.types?.[0].type.name;

    const pokemonBackgroundColor = themes.pokemonBackground[pokemonType]

    return (
        <>
            <Header>
                <a href="/">
                    <i class="fa-solid fa-arrow-left-long"></i>
                    Back
                </a>
                <ButtonTheme></ButtonTheme>
            </Header>
            <DivNameImage>
                <h1>{post.name}</h1>
                <img src={image} alt={post.name} />
            </DivNameImage>


            <DivDados>
                <Link
                    type={post.types?.[0].type.name}
                    style={{ backgroundColor: pokemonBackgroundColor }}>
                    {tabs.map((tab, index) => {
                        return (
                            <H2
                                onClick={() => setActiveTab(index)}
                                className={`${activeTab === index ? "ativo" : ""}`}
                                pokemonBackgroundColor = {pokemonBackgroundColor}> {tab}
                            </H2>
                        )
                    })}
                </Link>
                <DivContent>
                    {information?.map((index) => {
                        return (
                            <p>{index}</p>
                        )
                    })}
                </DivContent>
            </DivDados>
        </>
    )
}

export { Pokemon }