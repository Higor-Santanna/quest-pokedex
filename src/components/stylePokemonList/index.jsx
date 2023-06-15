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
    background-color: green;
    border-radius: 5px;
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
    justify-content: center;
    align-items: center;

    img{
        width: 150px;
    }

    img:hover{
        filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
        transition: ease-in-out 0.4s;
    }

    h1{
        text-align: center;
        text-transform: capitalize;
        font-size: 20px;
    }
`
export { DivContainer, Ul, Li, A }