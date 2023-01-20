import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UListBox = styled.ul`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  color: ${({ color }) => color};
  align-items: center;
  justify-content: space-around;
  width: 322px;
  padding: 0;
  font-size: 18px;
  grid-area: ${({ gridArea }) => gridArea};
  
  li {
    list-style: none;
    cursor: pointer;
  }
  li:hover {
    color: #01A606;
  }
`;
