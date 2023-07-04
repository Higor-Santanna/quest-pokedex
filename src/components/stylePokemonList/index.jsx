import styled from "styled-components";

const DivContainer = styled.div`
   display: flex;
   height: 100%;
   justify-content: center;
   align-itens: center;
   flex-direction: column;
`
const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-itens: center;
    width: 100%;
    padding: 10px, 35px;
`
const Li = styled.li`
    width: 250px;
    height: 250px;
    margin: 10px;

    :hover{
        width: 252px;
        height: 252px;
        transition: ease-in-out 0.4s;
    }
`

const A = styled.a`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.backgroundSecudary};

    img{
        width: 150px;
        background-color: ${props => props.theme.backgroundSecudary};
    }

    h1{
        text-align: center;
        text-transform: capitalize;
        font-size: 20px;
        background-color: ${props => props.theme.backgroundSecudary};
    }
`
export { DivContainer, Ul, Li, A }