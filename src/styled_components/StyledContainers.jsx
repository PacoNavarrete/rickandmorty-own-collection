import styled from 'styled-components';

export const FlexBox = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  grid-area: ${({ gridArea }) => gridArea};
  background-color: ${({backgroundColor}) => backgroundColor};
  border: ${({border}) => border};
  border-radius: ${({radius}) => radius};
  box-shadow: ${({boxShadow}) => boxShadow};

  @media screen and (max-width: 824px){
    padding: ${({ mobilePadding }) => mobilePadding};
    justify-content: ${({ mobileJustify }) => mobileJustify};
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
