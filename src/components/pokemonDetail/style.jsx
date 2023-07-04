import styled  from "styled-components";

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

const DivNameTypeImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 75px;

    h1{
        color: ${props => props.theme.textColor};
        text-transform: capitalize;
        font-size: 80px;
    }

    h3{
        color: ${props => props.theme.textColor}; 
        text-transform: capitalize;
        
    }

    img{
        width: 300px;
        height: 300px;
    }
`

export { Header, DivNameTypeImage }