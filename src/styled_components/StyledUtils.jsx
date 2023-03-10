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
  width: 120px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 30px 30px 30px 30px;
  font-size: 34px;
  color: #fff;
  // align-self: center;
  margin: 0 ;

  &:hover {
    cursor: pointer;
  }
`;

export const DeleteCharacterBtn = styled(AddToCollection)`
  background-color: red;
`;

export const LoadingAnimation = styled.div`
  position: relative;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    animation: rick 2s linear infinite;
  }


  @keyframes rick {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const IsActivePage = styled.div`
  border-bottom: 1px solid ${({ isActive }) => (isActive ? 'white' : 'none')};
  padding-bottom: 2px;
`;
