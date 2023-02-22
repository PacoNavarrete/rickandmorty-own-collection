import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ImageContainer = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  align-self: center;
  grid-area: ${({ gridArea }) => gridArea};
  place-self: ${({ placeSelf }) => placeSelf};
  
  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: ${({ borderRadius }) => borderRadius};
    
    @media screen and (max-width: 1024px) {
      width: 290px;
    }
  
  };

  


`;
