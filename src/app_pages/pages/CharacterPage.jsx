import { FlexBox, GridSection } from '../../styled_components/StyledContainers';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledControls';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { Text, TitleLarge } from '../../styled_components/StyledText';

export const CharacterPage = () => {
  return (
    <>
      <GridSection
        templateColumns="repeat(3, 1fr)"
        templateRows
        templateAreas="
          home-text home-text home-image
          home-text home-text home-image
          home-btns home-btns home-image
        "
      >
        <FlexBox
          flexFlow="column nowrap"
          alignItems="center"
          gridArea="home-text"
        >
          <TitleLarge>
            This is a Title Large, so common try it your self and get confidance
          </TitleLarge>
          <Text>
            This is a paragraph, so I will type something without sense
          </Text>
        </FlexBox>

        <FlexBox
          flexFlow="row nowrap"
          justify="center"
          gap="15px"
          margin="30px 0 0 0"
          gridArea="home-btns"
        >
          <PrimaryButton>Go ahead</PrimaryButton>
          <SecondaryButton>Go ahead</SecondaryButton>
        </FlexBox>

        <ImageContainer width="350px" gridArea="home-image">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZETmrCSoT3JwlUEpWQZSswHaEK%26pid%3DApi&f=1&ipt=b5c7968f29e769e245716bd3495ef6fe931f7e20f553d91c0b567779fe79b80e&ipo=images" />
        </ImageContainer>
      </GridSection>
    </>
  );
};
