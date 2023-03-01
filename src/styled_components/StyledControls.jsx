import styled from 'styled-components';

export const PrimaryInput = styled.input`
  width: ${(props) => props.width};
  height: 38px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #01A606;
  outline: 0;
  color: #d7d7d7;
  font-size: 18px;
  align-self: ${({ alignSelf }) => alignSelf};
  text-align: ${({ textAlign }) => textAlign};
   
  &::placeholder {
    color: #d7d7d7;
  }

`;

export const PrimaryButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #01A606;
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: scale 0.3s ease-out;
  margin: ${({ margin }) => margin};

  &:hover {
    scale: 1.05;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 2px solid #d7d7d7;
  color: #d7d7d7;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const DeleteButton = styled(PrimaryButton)`
  background-color: red;
`;

export const SelectorInput = styled.select`
  min-width: 90px;
  height: 45px;
  background: transparent;
  color: #fff;
  font-size: 18px;
  border: 1px solid #01A606;
  padding: 5px;
  option {
    color: #000;
    font-size: 16px;
    text-align: center;
  }  
`;

export const PaginationButton = styled.button`
  width: fit-content;
  height: 30px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translateY(-2px);
  }
  &:disabled {
    color: gray;
    transform: none;
  }
`;
export const PaginationInput = styled.input`

  width: 44px;
  height: 30px;
  text-align: center;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const EditButton = styled.button`
  with: 32px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  &.rote {
    transform: rotate(145deg);
  }


`;
