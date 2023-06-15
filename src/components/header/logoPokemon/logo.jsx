import React from 'react'
import { Img } from "./style";
import LogoPokemon from "../../../images/pokemon.png"

const Logo = () => {
    return(
        <Img src={LogoPokemon} alt="Logo do pokemon" ></Img>
    )
}

export { Logo }