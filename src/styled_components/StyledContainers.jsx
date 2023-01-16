import styled from 'styled-components';

export const FlexBox = styled.div`
  width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};
  order: ${({ flexOrder }) => flexOrder};
  margin: ${({ margin }) => margin};

  // add a rule: if props is spaceL, M or S
  // add a rule: if Props screen L, M, or S return the media screen values acconding to props.

  @media screen and (max-width: 1255px) {
    width: 90%;
    justify-content: center;
    margin: auto auto;
  }
`;

export const CardContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ border }) => border && `border: 2px solid #000;`}
  border-radius: 30px;
  background: rgba(0, 0, 0, ${({ transparency }) => transparency || '0.60'});
  ${({ boxShadow }) => boxShadow && `box-shadow: 0px 0px 24px #000;`}
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
  align-items: center;
  justify-content: center;
`;
