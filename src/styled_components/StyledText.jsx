import styled from 'styled-components';
import { motion } from 'framer-motion';

/*font-weight for poppins, thin 100, semibold 600, extrabold 800*/
/*font-weight for DM Sans, Regular 400, Bold 700*/
/*font-weight for Abel, Regular 400*/

const mediaScreenMobile = `@media screen and (max-width: 824px) {
  text-align: center;
}`;

const fontSize = {
  h1: 'clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)',
  h2: 'clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)',
  h3: 'clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)',
  pLarge: 'clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)',
  pMedium: 'clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)',
  pSmall: 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
  pXS: 'clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)',
  pTiny: 'clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)',
};

export const TitleLarge = styled.h1`
  font-size: ${fontSize.h1};
  font-weight: ${({ fontWeight }) => fontWeight || '800'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  color: ${({ color }) => color || '#fff'};
  grid-area: ${({ gridArea }) => gridArea};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'inherit'};
  
  ${mediaScreenMobile}
`;

export const TitleMedium = styled.h2`
  font-size: ${fontSize.h2};
  font-weight: ${({ fontWeight }) => fontWeight || '800'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  color: ${({ color }) => color || '#fff'};
  line-height: ${({ lineHeight }) => lineHeight};
  grid-area: ${({ gridArea }) => gridArea};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'inherit'};

  ${mediaScreenMobile}
`;
export const TitleSmall = styled.h2`
  font-size: ${fontSize.h2};
  font-weight: ${({ fontWeight }) => fontWeight || '800'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  color: ${({ color }) => color || '#fff'};
  grid-area: ${({ gridArea }) => gridArea};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor || 'inherit'};

  ${mediaScreenMobile}
`;

export const TextLarge = styled.p`
  font-size: ${fontSize.pLarge};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  color: ${({ color }) => color || '#fff'};
  grid-area: ${({ gridArea }) => gridArea};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'inherit'};

  ${mediaScreenMobile}
`;
export const TextMedium = styled.p`
  font-size: ${fontSize.pMedium};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  color: ${({ color }) => color || '#fff'};
  grid-area: ${({ gridArea }) => gridArea};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'inherit'};

  ${mediaScreenMobile}
`;
export const TextSmall = styled(motion.p)`
  font-size: ${fontSize.pSmall};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  color: ${({ color }) => color || '#fff'};
  grid-area: ${({ gridArea }) => gridArea};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'inherit'};

  ${mediaScreenMobile}
`;
export const TextXSmall = styled.p`
  font-size: ${fontSize.pXS};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  color: ${({ color }) => color || '#fff'};
  grid-area: ${({ gridArea }) => gridArea};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'inherit'};

  ${mediaScreenMobile}
`;
export const TextXTiny = styled.p`
  font-size: ${fontSize.pTiny};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  color: ${({ color }) => color || '#fff'};
  grid-area: ${({ gridArea }) => gridArea};
  margin: ${({ margin }) => margin || '0'};
  cursor: ${({ cursor }) => cursor || 'inherit'};
  
  ${mediaScreenMobile}
`;

export const BrandName = styled.p`
  font-family: 'poppins';
  font-size: 32px;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  align-self: ${({ alignSelf }) => alignSelf};
  font-weight: bold;
  color: #01A606;
  padding: 0 10px;
  margin: auto 0;
  grid-area: ${({ gridArea }) => gridArea};
`;
