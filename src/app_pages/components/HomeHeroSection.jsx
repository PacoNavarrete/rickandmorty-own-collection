import { FlexBox } from '../../styled_components/StyledContainers';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { Text, TitleLarge } from '../../styled_components/StyledText';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledControls';

export const HomeHeroSection = () => {
  return (
    <FlexBox
      width="80%"
      minHeight="100vh"
      flexFlow="row wrap"
      margin="auto auto"
      justify="center"
      alignContent="center"
    >
      <FlexBox width="60%" flexFlow="column nowrap">
        <TitleLarge align="start">
          Make your own collection of Rick and Morty characters
        </TitleLarge>
        <Text size="24px" margin="5px 0 60px 0">
          You can search, filter, collect, make notes, and <br />
          stored it in local storage of your browser.
        </Text>
        <FlexBox width="100%" justify="flex-start" gap="30px" height="content">
          <PrimaryButton>Start Now</PrimaryButton>
          <SecondaryButton>How it Works</SecondaryButton>
        </FlexBox>
      </FlexBox>
      <ImageContainer width="350px">
        <img
          src="https://res.cloudinary.com/paconavarrete/image/upload/v1673555699/RickandMorty/CardCharacter_y0gw5v.png"
          alt="RickandMorty-Card"
        />
      </ImageContainer>
    </FlexBox>
  );
};
