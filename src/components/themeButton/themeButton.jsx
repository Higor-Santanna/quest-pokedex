import React, { useContext } from "react";
import { ThemeContext, themes } from "../../styles/themes";
import { Button } from "./style";

export const ButtonTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    // console.log('ThemeTogglerButton themes', theme)
    
    return (
        <>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> 
                    Clique aqui
                    <i class="fa-solid fa-sun"></i>
                    <i class="fa-solid fa-moon"></i>
            </Button>
        </>
    )
}