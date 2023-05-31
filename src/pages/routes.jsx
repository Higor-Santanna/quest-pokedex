import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllPokemons } from "./posts";
import { Button } from "../components/button/button";

const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<AllPokemons />} />
            <Route exact path='/' element={<Button />} /> 
        </Routes>
    </BrowserRouter>
    )
}

export { AppRoutes }
