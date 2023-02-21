import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FlexBox = styled(motion.div)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  align-self: ${({ alignSelf }) => alignSelf};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  grid-area: ${({ gridArea }) => gridArea};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  position: ${({ position }) => position};
  top: ${({ topPos }) => topPos};
  bottom: ${({ bottomPos }) => bottomPos};
  left: ${({ leftPos }) => leftPos};
  right: ${({ rightPos }) => rightPos};
`;

export const CardContainer = styled(motion.div)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  ${({ border }) => border && `border: 2px solid #000;`}
  border-radius: 30px;
  background: rgba(0, 0, 0, ${({ transparency }) => transparency || '0.60'});
  ${({ boxShadow }) => boxShadow && `box-shadow: 0px 0px 24px #000;`}
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
