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



`;
