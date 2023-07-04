import styled from 'styled-components'

export const Button = styled.button`
     border: none;
     cursor: pointer;
     color: #000;
     font-size: 14px;
     font-weight: 600;
     background-color: ${props => props.theme.backgroundSecudary};

     i{
          background-color: ${props => props.theme.backgroundSecudary};
          font-size: 14px;
          font-weight: 600;
          display: flex;
          gap: 6px;
          justify-content: center;
          align-itens: center;
          color: ${props => props.theme.textColor};
     }

     p{
          background-color: ${props => props.theme.backgroundSecudary}; 
     }
`