import styled from "styled-components";

const Img = styled.img`
width: 150px;
background-color: ${props => props.theme.backgroundSecudary};

@media(max-width: 414px){
    width: 130px;
}

@media(max-width: 320px){
    width: 100px;
}
`
export { Img }