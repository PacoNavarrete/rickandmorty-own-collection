import styled from 'styled-components';

export const Divider = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  grid-area: ${({ gridArea }) => gridArea};
`;

export const Badge = styled.div`
  width: fit-content;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  padding: 0 5px;
  margin: ${({ margin }) => margin};
  border-radius: 8px;
  align-self: ${({ alignSelf }) => alignSelf};

`;

export const AddToCollection = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 5px;
  font-size: 34px;
  color: #fff;
  align-self: end;
  margin: 0 30px 0 ;
  translate: -10px -40px;

  &:hover {
    cursor: pointer;
  }
`;
