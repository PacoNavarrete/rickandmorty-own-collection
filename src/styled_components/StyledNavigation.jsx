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
  
  li {
    list-style: none;
    cursor: pointer;
  }
  P:hover {
    color: #01A606;
  }

  @media screen and (max-width: 824px){
    display: none;
  }

`;

export const BurgerIcon = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: 4px;
  background-color: red;
  border-radius: 5px;

  div {
    width: 24px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    
    &:nth-child(1){
      transform: ${({ iconStatus }) => (iconStatus ? 'rotate(45deg)' : '')};
    }
    &:nth-child(2){
      display: ${({ iconStatus }) => (iconStatus ? 'none' : '')};
    }
    &:nth-child(3){
      transform: ${({ iconStatus }) => (iconStatus ? 'rotate(-55deg)' : '')};

    }
  }

  @media screen and (min-width: 824px){
    display: none;
  }
  `;

export const BurgerList = styled.ul`
    display: ${({ showBurger }) => (showBurger ? 'flex' : 'none')};
    flex-flow: ${({ flexFlow }) => flexFlow};
    color: ${({ color }) => color};
    align-items: center;
    justify-content: ${({ justify }) => justify};
    // background-color: ${({ backgroundColor }) => backgroundColor};
    background-color: rgba(0,0,0,0.8);
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 0;
    margin: ${({ margin }) => margin};
    font-size: 18px;
    grid-area: ${({ gridArea }) => gridArea};
    transition: all 0.5s ease;
    border-radius: 30px 30px 0 0;
    position: ${({ position }) => position};
    top: ${({ topPos }) => topPos};
    bottom: ${({ bottomPos }) => bottomPos};
    left: ${({ leftPos }) => leftPos};
    right: ${({ rightPos }) => rightPos};
    
    li {
      list-style: none;
      cursor: pointer;
    }
    P:hover {
      color: #01A606;
    }
  `;
