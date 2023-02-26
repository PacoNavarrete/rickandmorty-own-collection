import styled from 'styled-components';

export const HeroLayOut = styled.div`
  max-width: 1150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'hero-text hero-text hero-img'
    'hero-text hero-text hero-img'
    'hero-btn hero-btn hero-img';
    margin: 60px auto 0 auto;
  perspective: 2000px;

  @media screen and (max-width: 824px) {
      grid-template-areas:
        'hero-text hero-text hero-text'
        'hero-text hero-text hero-text'
        'hero-img hero-img hero-img'
        'hero-btn hero-btn hero-btn';    
`;
