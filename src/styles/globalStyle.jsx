import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${props => props.theme.backgroundPrimary};
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
    color: black;
}

`