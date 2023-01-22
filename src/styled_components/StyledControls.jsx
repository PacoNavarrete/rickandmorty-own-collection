import styled from 'styled-components';

export const PrimaryInput = styled.input`
  width: ${(props) => props.width};
  height: 38px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.21);
  outline: 0;
  color: #d7d7d7;
  font-size: 18px;
  align-self: ${({alignSelf})=> alignSelf};
  &:hover{
    border-bottom: 1px solid #000;
  }
  &::placeholder {
    color: #d7d7d7;
  }
`;

export const PrimaryButton = styled.button`
  width: 120px;
  height: 40px;
  background: #01A606;
  border-radius: 3px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-out;
  margin: ${(props) => props.margin};

  &:hover {
    scale: 1.05;
  }
`;

export const SecondaryButton = styled.button`
  width: 120px;
  height: 40px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #d7d7d7;
  color: #d7d7d7;
  cursor: pointer;
  transition: 0.3s ease-out;
  margin: ${(props) => props.margin};

  &:hover {
    scale: 1.05;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
