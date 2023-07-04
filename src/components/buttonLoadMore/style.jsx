import styled from "styled-components"

const ButtonMore = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;

    button {
        height: 35px;
        width: 250px;
        border-radius: 5px;
        border: none;
        background-color: ${props => props.theme.colorButton}; 
        margin: 25px 0;
        color: hsl(207, 26%, 17%);
        font-weight: 600;
        font-size: 15px;
        box-shadow: ${props => props.theme.boxShadow};
        cursor: pointer;
    }

    button:hover {
        height: 37px;
        width: 260px;
        transition: all 0.3s ease-out 0s;
    }
`

export { ButtonMore }