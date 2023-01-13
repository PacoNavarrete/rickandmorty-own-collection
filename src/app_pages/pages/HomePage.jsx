import {
  FlexContainer,
  TitleLarge,
  Text,
} from '../../styled_components/StyledComponents';

export const HomePage = () => {
  return (
    <FlexContainer width="80%" flexDir="row">
      <FlexContainer width="60%" flexDir="column" align="start">
        <TitleLarge align="start">
          Make your own collection of Rick <br />
          and Morty <br />
          characters
        </TitleLarge>
        <Text size="24px">
          You can search, filter, collect, make notes, and <br />
          stored it in local storage of your browser.
        </Text>
      </FlexContainer>
      <FlexContainer width="40%">
        <img
          src="https://res.cloudinary.com/paconavarrete/image/upload/v1673555699/RickandMorty/CardCharacter_y0gw5v.png"
          alt="RickandMorty-Card"
        />
      </FlexContainer>
    </FlexContainer>
  );
};
