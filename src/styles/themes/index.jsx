import { createContext, useState } from "react";

export const themes = {
    light: {
        backgroudPrimary:  '#f5f5f5',
        backgroudSecudary: 'hsl(197, 100%, 84%)',
        textColor: 'hsl(200, 15%, 8%)'
    },

    dark: {
        backgroudPrimary:  'hsl(207, 26%, 17%)',
        backgroudSecudary: 'hsl(209, 23%, 22%)',
        textColor: 'hsl(0, 0%, 100%)'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = props => {
    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}