import styled from "styled-components";
import { themes } from "../../../styles/themes";

const DivLogoAndButton = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
background-color: ${themes.light.backgroudSecudary};
padding: 20px 55px;

@media(max-width: 414px){
    padding: 20px 30px;
}
`

export { DivLogoAndButton }