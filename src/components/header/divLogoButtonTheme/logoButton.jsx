import styled from "styled-components";

const DivLogoAndButton = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 20px 25px;
background-color: hsl(197, 100%, 84%);

button{
    border: none;
    cursor: pointer;
    color: hsl(200, 15%, 8%);
    font-size: 14px;
    font-weight: 600;
    background-color: hsl(197, 100%, 84%);
}

button i{
    margin-right: 3px;
}
`

export { DivLogoAndButton }