import styled from 'styled-components';

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

export const FlexContainer = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100vh'};
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  align-items: ${(props) => props.align || 'center'};
  justify-content: center;
  margin: auto auto ;
`;

export const BrandName = styled.p`
  font-size: 32px;
  text-align: center;
  color: #01A606;
  padding: 0 10px;
  margin: 120px 0;
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
  margin: 30px 0;

  &:hover {
    scale: 1.05;
  }
`;

export const SecondaryButton = styled.button`
  width: 120px;
  height: 40px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  color: #d7d7d7;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    scale: 1.05;
  }
`;

export const PrimaryInput = styled.input`
  width: ${(props) => props.width};
  height: 38px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #d7d7d7;
  outline: 0;
  color: #d7d7d7;
  font-size: 18px;

  &::placeholder {
    color: #d7d7d7;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.size};
  font-weigth: ${(props) => props.thickness};
  text-align: ${(props) => props.align};
  color: #fff;
`;

export const TitleLarge = styled.h1`
  font-size: 72px;
  text-align: ${(props) => props.align || 'center'};
  color: #fff;
`;

export const TitleMedium = styled.h2`
  font-size: 48px;
  text-align: center;
  color: #fff;
`;
