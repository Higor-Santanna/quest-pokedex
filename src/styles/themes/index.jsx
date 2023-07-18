import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";

export const ThemeContext = createContext({})

export const CustomThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light) 

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}