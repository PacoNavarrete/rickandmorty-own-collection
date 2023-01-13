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
  justify-content: ${(props) => props.justify || 'center'};
  margin: ${(props) => props.margin} ;
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
  border: 1px solid #d7d7d7;
  color: #d7d7d7;
  cursor: pointer;
  transition: 0.3s ease-out;
  margin: ${(props) => props.margin};

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
  font-size: ${(props) => props.size || '16px'};
  text-align: ${(props) => props.align || 'start'};
  margin: ${(props) => props.margin};
  color: #fff;
`;

export const TitleLarge = styled.h1`
  font-size: 62px;
  text-align: ${(props) => props.align || 'center'};
  color: #fff;
`;

export const TitleMedium = styled.h2`
  font-size: 48px;
  text-align: center;
  color: #fff;
`;
