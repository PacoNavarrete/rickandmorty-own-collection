import styled from 'styled-components';

export const UListBox = styled.ul`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  color: ${({ color }) => color};
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 0;
  position: ${({ position }) => position};
  bottom: 0;
  margin: ${({ margin }) => margin};
  font-size: 18px;
  grid-area: ${({ gridArea }) => gridArea};
  transition: all 0.5s ease;
  border-radius: 30px 30px 0 0;
  
  a {
    text-decoration: none;
  }
  
  @media screen and (max-width: 824px){
    display: none;
  }

`;

export const BurgerIcon = styled.div`
  width: 100%;
  height: 45px;
  position: sticky;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  cursor: pointer;

  div {
    width: 25px;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    transition: transform 0.3s ease-in;

    &:nth-child(1){
      transform: ${({ iconStatus }) =>
        iconStatus ? 'translateY(3px) rotateZ(45deg)' : ''};
    }
    &:nth-child(2){
      display: ${({ iconStatus }) => (iconStatus ? 'none' : '')};
    }
    &:nth-child(3){
      transform: ${({ iconStatus }) =>
        iconStatus ? 'translateY(-4px) rotateZ(-45deg)' : ''};

    }
  }

  @media screen and (min-width: 824px){
    display: none;
  }
  `;

export const BurgerList = styled.ul`
    display: ${({ showBurger }) => (showBurger ? 'flex' : 'none')};
    flex-flow: ${({ flexFlow }) => flexFlow};
    align-items: center;
    justify-content: ${({ justify }) => justify};
    background-color: #000;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 0;
    margin: ${({ margin }) => margin};
    font-size: 18px;
    grid-area: ${({ gridArea }) => gridArea};
    border-radius: 5px;
    gap: ${({ gap }) => gap};
    position: ${({ position }) => position};
    top: ${({ topPos }) => topPos};
    bottom: ${({ bottomPos }) => bottomPos};
    left: ${({ leftPos }) => leftPos};
    right: ${({ rightPos }) => rightPos};
    
    p{
      transition: transform 0.3s ease-in;
    }
    
    a {
      text-decoration: none;
    }
    li {
      list-style: none;
    }
    P:hover {
      cursor: pointer;
      transform: scale(1.1);
    }

    @media screen and (min-width: 824px){
      display: none;
    }
  `;
