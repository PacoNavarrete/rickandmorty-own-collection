import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UListBox = styled.ul`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  color: ${({ color }) => color};
  align-items: center;
  justify-content: space-around;
  width: ${({width}) => width};
  padding: 0;
  font-size: 18px;
  grid-area: ${({ gridArea }) => gridArea};
  
  li {
    list-style: none;
    cursor: pointer;
  }
  P:hover {
    color: #01A606;
  }
`;


export const BurgerIconSpantop = styled.div`
 
`
