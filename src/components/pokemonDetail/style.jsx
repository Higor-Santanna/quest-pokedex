import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 25px;
    background-color: ${props => props.theme.backgroundSecudary};

    a{
        background-color: ${props => props.theme.backgroundSecudary};
        color: ${props => props.theme.textColor};
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        width: 80px;
        height: 40px;
    }

    i{
        background-color: ${props => props.theme.backgroundSecudary};
    }
`

const DivNameImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 400px;

    h1{
        color: ${props => props.theme.textColor};
        text-transform: capitalize;
        font-size: 80px;
        
        @media(max-width: 425px){
            font-size: 55px;
        }

        @media(max-width: 375px){
            font-size: 45px;
        }
    }

    img{
        width: 300px;
        height: 300px;

        @media(max-width: 425px){
            width: 250px;
            height: 250px;
        }

        @media(max-width: 375px){
            width: 200px;
            height: 200px;
        }
    }

    @media(max-width: 1410px){
        padding: 20px 200px;
    }

    @media(max-width: 1050px){
        padding: 20px 50px;
    }

    @media(max-width: 690px){
        flex-direction: column;
    }
`

const DivDados = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
`

const Link = styled.div`
    display: flex;
    justify-content: center;
    width: 610px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    @media(max-width: 640px){
        width: 490px;
    }

    @media(max-width: 425px){
        width: 380px;
    }

    @media(max-width: 375px){
        width: 360px;
    }

    @media(max-width: 360px){
        width: 310px;
    }
`

const H2 = styled.h2`
    width: 200px;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.pokemonBackgroundColor};

    @media(max-width: 640px){
        width: 160px;
    }

    @media(max-width: 425px){
        width: 125px;
    }

    @media(max-width: 375px){
        width: 115px;
    }

    @media(max-width: 360px){
        width: 100px;
    }
`

const DivContent = styled.div`
    width: 610px;
    background-color: ${props => props.theme.backgroundContent};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    p{
        background-color: ${props => props.theme.backgroundContent};
        text-align: center;
        line-height: 25px;
        font-size: 16px;
        font-weight: 600;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    @media(max-width: 640px){
        width: 490px;
    }

    @media(max-width: 425px){
        width: 380px;
    }

    @media(max-width: 375px){
        width: 360px;
    }

    @media(max-width: 360px){
        width: 310px;
    }
`

export { Header, DivNameImage, Link, H2, DivDados, DivContent }