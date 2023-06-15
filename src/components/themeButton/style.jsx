import styled from 'styled-components'
import { ThemeContext } from '../../styles/themes/index'
import React, { useContext } from 'react'

export const Button = (props) => {
    
    const { theme } = useContext(ThemeContext)

    console.log(theme)

    return(
        <button {...props} 
        style={{
            textColor: theme.textColor, backgroundColor: theme.backgroundSecudary   
        }}></button>
    )
    
//     styled.button`
//     border: none;
//     cursor: pointer;
//     color: #000;
//     font-size: 14px;
//     font-weight: 600;
//     background-color: hsl(197, 100%, 84%);

// `
}
