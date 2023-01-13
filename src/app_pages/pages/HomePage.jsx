import {
  FlexContainer,
  TitleLarge,
  Text,
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledComponents';

export const HomePage = () => {
  return (
    <FlexContainer width="80%" flexDir="row" margin="auto auto">
      <FlexContainer width="60%" flexDir="column" align="start">
        <TitleLarge align="start">
          Make your own collection of Rick <br />
          and Morty <br />
          characters
        </TitleLarge>
        <Text size="24px" margin="5px 0 60px 0">
          You can search, filter, collect, make notes, and <br />
          stored it in local storage of your browser.
        </Text>
        <FlexContainer width="270px" justify="space-between" height="content">
          <PrimaryButton>Start now</PrimaryButton>
          <SecondaryButton>How it works</SecondaryButton>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer width="40%">
        <img
          src="https://res.cloudinary.com/paconavarrete/image/upload/v1673555699/RickandMorty/CardCharacter_y0gw5v.png"
          width="350px"
          alt="RickandMorty-Card"
        />
      </FlexContainer>
    </FlexContainer>
  );
};
