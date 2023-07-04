import React, { useContext } from "react";
import { ThemeContext} from "../../styles/themes";
import { Themes } from "../../styles/themes/theme"
import { Button } from "./style";

export const ButtonTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    
    return (
        <>
            <Button onClick={toggleTheme}> 
                    {theme === Themes.light ? (<i class="fa-solid fa-sun"><p>Dark Mode</p></i>) : (<i class="fa-solid fa-moon"><p>Light Mode</p></i>)}
            </Button>
        </>
    )
}