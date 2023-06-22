import styled from 'styled-components'
import { ThemeContext, themes } from '../../styles/themes/index'
import React, { useContext } from 'react'


export const Button = styled.button`
     border: none;
     cursor: pointer;
     color: #000;
     font-size: 14px;
     font-weight: 600;
     // background-color: ${props => props.theme.backgroundSecudary};
`
    
//     styled.button`
//     border: none;
//     cursor: pointer;
//     color: #000;
//     font-size: 14px;
//     font-weight: 600;
//     background-color: hsl(197, 100%, 84%);

// `
