import styled from "styled-components";

const DivContainer = styled.div`
   display: flex;
   height: 100%;
   justify-content: center;
   flex-direction: column;
`
const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 10px, 35px;
`
const Li = styled.li`
    width: 250px;
    height: 250px;
    margin: 10px;
`

const A = styled.a`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundPokemon};

    :hover{
        width: 252px;
        height: 252px;
        transition: ease-in-out 0.4s;
        box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)
    }

    img{
        width: 150px;
        background-color: ${props => props.backgroundPokemon};
    }

    h1{
        text-align: center;
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 800;
        background-color: ${props => props.backgroundPokemon};
    }
`
export { DivContainer, Ul, Li, A }