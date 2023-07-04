import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Themes } from "./theme";

export const ThemeContext = createContext({})

export const CustomThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(Themes.dark) 

    const toggleTheme = () => {
        setTheme(theme === Themes.light ? Themes.dark : Themes.light)
    }
    console.log(theme)
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}