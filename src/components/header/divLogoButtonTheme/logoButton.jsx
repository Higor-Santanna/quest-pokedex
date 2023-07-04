import styled from "styled-components";

const DivLogoAndButton = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
background-color: ${props => props.theme.backgroundSecudary};
padding: 20px 55px;

@media(max-width: 414px){
    padding: 20px 30px;
}
`

export { DivLogoAndButton }