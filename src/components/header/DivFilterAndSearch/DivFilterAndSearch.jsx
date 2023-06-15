import styled from "styled-components";
import { themes } from "../../../styles/themes";

const DivFilterAndSearch = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 20px 55px;

input{
    background-color: ${themes.light.backgroudSecudary};
    border: none;
    border-radius: 3px;
    width: 280px;
    height: 35px;
    padding: 10px
}

select{
    background-color: ${themes.light.backgroudSecudary};
    border: 0;
    border-radius: 3px;
    color: ${themes.light.textColor};
    width: 120px;
    font-weight: 300;
    font-size: 13px;
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