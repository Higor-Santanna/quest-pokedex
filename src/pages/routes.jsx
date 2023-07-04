import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllPokemons } from "./posts";
import { PokemonDetail } from "./pokemonDetail";
import React, { useState } from "react";

const AppRoutes = () => {
    const [pokemonData, setPokemonData] = useState()
    return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<AllPokemons setPokemonData={setPokemonData}/>} />
                        <Route exeact path="/pokemon/:name" element={<PokemonDetail pokemonData={pokemonData}/>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
    )
}

export { AppRoutes }
