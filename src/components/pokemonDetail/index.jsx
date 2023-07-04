import { useState, useEffect } from "react";
import { getDataPokemon } from "../../services/pokeApi";
import { useParams } from "react-router-dom";
import { ButtonTheme } from "../themeButton/themeButton";
import { Header, DivNameTypeImage } from "./style"

const Pokemon = () => {

    const [post, setPost] = useState({})
    const [moves, setMoves] = useState([])
    const [types, setTypes] = useState([])
    const [image, setImage] = useState({})
    const [abilitie, setAbilitie] = useState([])
    const { name } = useParams()

    useEffect(() => {
        async function fecthData() {
            const post = await getDataPokemon(name)

            const image = post.sprites.other['official-artwork'].front_default

            const types = post.types.map((type) => type.type.name)

            const moves = post.moves.map(function (move) {
                return move.move.name
            })

            const ability = post.abilities.map((abilitie) => abilitie.ability.url)
            // console.log(ability)

            const abilitie = await Promise.all(ability.map(async (abilityUrl) => {
                const abilityData = await fetch(abilityUrl)
                const response = await abilityData.json()
                return await response
            }))

            setPost(post)
            setImage(image)
            setMoves(moves)
            setTypes(types)
            setAbilitie(abilitie)
        }

        fecthData()
    }, [])

    console.log(post)

    return (
        <>
            <Header>
                <a href="/">
                    <i class="fa-solid fa-arrow-left-long"></i>
                    Back
                </a>
                <ButtonTheme></ButtonTheme>
            </Header>
            <DivNameTypeImage>
                <div>
                    <h1>{post.name}</h1>
                    {types.map(type => {
                        return (
                            <h3 key={type}>{type}</h3>
                        )
                    })}
                </div>
                <img src={image} alt={post.name} />
                {/* <h3 key={types}> {post.types[0].type.name} / {post.types[1].type.name}</h3> */}
            </DivNameTypeImage>

            <div>
                <div>
                    <h2>Movies</h2>
                    <ul>
                        {moves.map(move => {
                            return (
                                <li key={move}>{move}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h2>Abilities</h2>
                    {abilitie.map(ability => {
                        return (
                            <>
                                <h3>{ability.name}</h3>
                                <p>{ability.effect_entries[0].effect} {ability.effect_entries[1].effect}</p>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export { Pokemon }