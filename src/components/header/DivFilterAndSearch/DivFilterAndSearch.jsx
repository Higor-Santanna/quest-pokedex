import styled from "styled-components";

const DivFilterAndSearch = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 20px 55px;

div {
    background-color: ${props => props.theme.backgroundSecudary};
    padding: 2px 10px;
    border-radius: 3px;
    box-shadow: ${props => props.theme.boxShadow};
}

i {
    background-color: ${props => props.theme.backgroundSecudary}; 
    color: ${props => props.theme.textColor};
    font-size: 14px;
}

input{
    background-color: ${props => props.theme.backgroundSecudary};
    border: none;
    width: 240px;
    height: 35px;
    padding: 10px;
    color: ${props => props.theme.textColor};
}

select{
    background-color: ${props => props.theme.backgroundSecudary};
    border: 0;
    border-radius: 3px;
    color: ${props => props.theme.textColor};
    width: 120px;
    font-weight: 300;
    font-size: 13px;
    box-shadow: ${props => props.theme.boxShadow};
}

@media (max-width: 500px){
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    select{
        height: 35px;
    }
}

@media(max-width: 414px){
    padding: 20px 35px;
}
`

export { DivFilterAndSearch }