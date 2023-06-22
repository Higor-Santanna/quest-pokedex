import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

export const themes = {
    light: {
        backgroundPrimary:  '#f5f5f5',
        backgroundSecudary: 'hsl(197, 100%, 29%)',
        textColor: 'hsl(200, 15%, 8%)'
    },

    dark: {
        backgroundPrimary:  'hsl(207, 26%, 17%)',
        backgroundSecudary: 'hsl(209, 23%, 22%)',
        textColor: 'hsl(0, 0%, 100%)'
    }
}

export const ThemeContext = createContext({})

export const CustomThemeProvider = props => {
    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme
        }}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}