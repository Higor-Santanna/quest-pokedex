import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllPokemons } from "./posts";
import { GlobalStyle } from "../styles/globalStyle";
import { ThemeProvider } from "../styles/themes";

const AppRoutes = () => {
    return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<AllPokemons />} />
                    </Routes>
                </BrowserRouter>
                <GlobalStyle />
            </>
    )
}

export { AppRoutes }
