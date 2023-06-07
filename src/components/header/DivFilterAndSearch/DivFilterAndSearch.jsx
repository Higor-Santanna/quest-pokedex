import styled from "styled-components";

const DivFilterAndSearch = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 20px 25px;

input{
    background-color: hsl(197, 100%, 84%);
    border: none;
    border-radius: 3px;
    width: 280px;
    height: 35px;
    padding: 10px
}

select{
    background-color: hsl(197, 100%, 84%);
    border: 0;
    border-radius: 3px;
    color: hsl(200, 15%, 8%);
    width: 110px;
    font-weight: 300;
    font-size: 13px;
}
`

export { DivFilterAndSearch }