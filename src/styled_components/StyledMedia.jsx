import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  align-self: center;
  grid-area: ${({ gridArea }) => gridArea};
  
  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    
    @media screen and (max-width: 740px) {
      width: 250px;
    }
  
  };

  


`;
