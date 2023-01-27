import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledControls';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextXTiny } from '../../styled_components/StyledText';

const name = 'Ants in my eyes jhonson';
const origin = 'Earth (C-137)';
const gender = 'Male';
const specie = 'Human';
const status = 'Alive';

export const CharacterPage = () => {
  return (
    <>
      <FlexBox
        width="100%"
        minHeight="100vh"
        justify="center"
        alignItems="center"
      >
        <CardContainer transparency="0.31">
          <FlexBox
            flexFlow="row wrap"
            justify="center"
            alignItems="center"
            gap="56px"
            transparency="0.31"
            padding="55px 40px"
          >
            <ImageContainer width="346px" borderRadius="40px">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt=""
              />
            </ImageContainer>
            <FlexBox flexFlow="column nowrap" alignItems="start">
              <TextXTiny>Name: {name}</TextXTiny>
              <TextXTiny>Origin: {origin}</TextXTiny>
              <TextXTiny>Gender: {gender}</TextXTiny>
              <TextXTiny>Specie: {specie}</TextXTiny>
              <TextXTiny>Status: {status}</TextXTiny>
              <PrimaryButton margin="14px 0">Add</PrimaryButton>
              <SecondaryButton>Return </SecondaryButton>
            </FlexBox>
          </FlexBox>
        </CardContainer>
      </FlexBox>
    </>
  );
};
