import { Link } from 'react-router-dom';

import { RandomCard } from './RandomCard';
import { HeroLayOut } from '../../styled_components/StyledLayOut';
import { FlexBox } from '../../styled_components/StyledContainers';
import { TextSmall, TitleLarge } from '../../styled_components/StyledText';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledControls';

const HeaderTitles = () => {
  return (
    <FlexBox
      initial={{ x: -800 }}
      animate={{ x: 0 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 2 }}
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
  );
};

const CallToActionButtons = ({ onScrollToRef }) => {
  return (
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
      <SecondaryButton onClick={onScrollToRef}>How it Works</SecondaryButton>
    </FlexBox>
  );
};

const RandomCharacterChard = () => {
  return (
    <FlexBox gridArea="hero-img" justify="center">
      <RandomCard />
    </FlexBox>
  );
};

export const HomeHero = ({ refHowItWorks }) => {
  function onScrollToRef() {
    refHowItWorks.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <HeroLayOut>
      <HeaderTitles />
      <CallToActionButtons onScrollToRef={onScrollToRef} />
      <RandomCharacterChard />
    </HeroLayOut>
  );
};
