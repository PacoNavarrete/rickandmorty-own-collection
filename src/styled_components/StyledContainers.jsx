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

  @media screen and (max-width: 1255px) {
    width: 90%;
    justify-content: center;
    margin: auto auto;
  }
`;

export const FlexItem = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const CardContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid #000;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.61);
  box-shadow: 0px 0px 24px #000;
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  align-items: center;
  justify-content: center;
`;
