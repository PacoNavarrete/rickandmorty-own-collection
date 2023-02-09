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

export const LoadingAnimation = styled.div`
  position: relative;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0,0,0,0.55);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: 20px;
    background: transparent;
    border: 1px dashed#444;
    border-radius: 50%;
    box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
    inset 5px 5px 35px rgba(0,0,0,0.25);
  }

  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px dashed#444;
    box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
    inset 5px 5px 35px rgba(0,0,0,0.25);
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    animation: radar81 2s linear infinite;
    border-top: 1px dashed #fff;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: seagreen;
      transform-origin: top left;
      transform: rotate(-55deg);
      filter: blur(30px) drop-shadow(20px 20px 20px seagreen);
    }

  }

  @keyframes radar81 {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }




`;
