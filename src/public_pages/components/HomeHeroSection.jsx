import { Link } from 'react-router-dom';
import { FlexBox } from '../../styled_components/StyledContainers';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextSmall, TitleLarge } from '../../styled_components/StyledText';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledControls';

export const HomeHeroSection = () => {
  return (
    <div className="grid-home_hero">
      <FlexBox
        width="100%"
        flexFlow="column nowrap"
        gap="20px"
        gridArea="hero-text"
      >
        <TitleLarge textAlign="start">
          Make your own collection of Rick and Morty characters
        </TitleLarge>
        <TextSmall
          initial={{ y: 210 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          textAlign="start"
        >
          You can search, filter, collect, make notes, and <br />
          stored it in local storage of your browser.
        </TextSmall>
      </FlexBox>

      <FlexBox
        width="100%"
        height="content"
        justify="flex-start"
        alignItems="flex-start"
        gap="30px"
        padding="60px 0 0 0"
        gridArea="hero-btn"
        mobilePadding="0"
        mobileJustify="center"
      >
        <Link to="/login">
          <PrimaryButton>Start Now</PrimaryButton>
        </Link>
        <SecondaryButton>How it Works</SecondaryButton>
      </FlexBox>

      <ImageContainer
        width="350px"
        gridArea="hero-img"
        placeSelf="center center"
      >
        <img
          src="https://res.cloudinary.com/paconavarrete/image/upload/v1673555699/RickandMorty/CardCharacter_y0gw5v.png"
          alt="RickandMorty-Card"
        />
      </ImageContainer>
    </div>
  );
};
