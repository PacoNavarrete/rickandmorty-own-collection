import { Link } from 'react-router-dom';
import { FlexBox } from '../../styled_components/StyledContainers';
import { TextSmall, TitleLarge } from '../../styled_components/StyledText';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledControls';
import { RandomCard } from './RandomCard';

export const HomeHeroSection = () => {
  return (
    <div className="grid-home_hero">
      <FlexBox
        initial={{ x: -800 }}
        animate={{ x: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        width="100%"
        flexFlow="column nowrap"
        gap="20px"
        gridArea="hero-text"
      >
        <TitleLarge textAlign="start">
          Make your own collection of Rick and Morty characters
        </TitleLarge>
        <TextSmall textAlign="start">
          You can search, filter and collect characters, <br />
          all saved to local storage of your browser.
        </TextSmall>
      </FlexBox>

      <FlexBox
        width="100%"
        height="content"
        justify="flex-start"
        alignItems="flex-start"
        gap="30px"
        margin="auto"
        gridArea="hero-btn"
        mobilePadding="0"
        mobileJustify="center"
      >
        <Link to="/login">
          <PrimaryButton>Start Now</PrimaryButton>
        </Link>
        <SecondaryButton>How it Works</SecondaryButton>
      </FlexBox>
      <FlexBox gridArea="hero-img" justify="center">
        <RandomCard />
      </FlexBox>
    </div>
  );
};
