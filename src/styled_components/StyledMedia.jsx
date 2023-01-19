import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  align-self: center;
  grid-area: ${({ gridArea }) => gridArea};
  place-self: ${({placeSelf}) => placeSelf};
  
  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    
    @media screen and (max-width: 1024px) {
      width: 290px;
    }
  
  };

  


`;
