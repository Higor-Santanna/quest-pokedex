import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllPokemons } from "./posts";

const AppRoutes = () => {
    return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<AllPokemons />} />
                    </Routes>
                </BrowserRouter>
            </>
    )
}

export { AppRoutes }
