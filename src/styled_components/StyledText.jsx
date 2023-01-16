import styled from 'styled-components';

export const BrandName = styled.p`
  font-size: 32px;
  text-align: center;
  color: #01A606;
  padding: 0 10px;
  margin: 120px 0;
`;

export const Text = styled.p`
  font-size: ${(props) => props.size || '16px'};
  text-align: ${(props) => props.align || 'start'};
  margin: ${(props) => props.margin};
  color: #fff;

  @media screen and (max-width: 1255px) {
    text-align: center;
  }
  @media screen and (max-width: 740px) {
    font-size: 16px;
  }
`;

export const TitleLarge = styled.h1`
  font-size: 62px;
  text-align: ${(props) => props.align || 'center'};
  color: #fff;

  @media screen and (max-width: 1255px) {
    text-align: center;
  }
  @media screen and (max-width: 740px) {
    font-size: 48px;
  }

`;

export const TitleMedium = styled.h2`
  font-size: 48px;
  text-align: center;
  color: #fff;
`;
