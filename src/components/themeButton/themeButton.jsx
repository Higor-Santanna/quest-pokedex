import React, { useContext, useState } from "react";
import { ThemeContext, themes } from "../../styles/themes";
import { Button } from "./style";

export const ButtonTheme = () => {
    // const { theme, setTheme } = useContext(ThemeContext)
    const [ theme, setTheme ] = useState('light')

    // console.log('ThemeTogglerButton themes', theme)
    
    return (
        <>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> 
                    {theme === themes.light ? (<i class="fa-solid fa-sun"></i>) : (<i class="fa-solid fa-moon"></i>)}
                    {theme === themes.light ? (<p>Dark Mode</p>) : (<p>Light Mode</p>)}
            </Button>
        </>
    )
}