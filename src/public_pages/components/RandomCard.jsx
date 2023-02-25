import { useFetchRandomCharacter } from '../hooks/useFetchRandomCharacter';
import { TextXSmall, TextXTiny } from '../../styled_components/StyledText';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { Badge } from '../../styled_components/StyledUtils';
import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';

const CharacterImage = ({ image }) => {
  return (
    <ImageContainer
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.01, -0.05, 1], duration: 2 }}
      width="280px"
      height="250px"
      borderRadius="40px"
    >
      <img src={image} alt="random character image" />
    </ImageContainer>
  );
};

const CharacterDetails = ({ gender, species, status }) => {
  return (
    <FlexBox width="130px" justify="center" gap="10px" margin="15px 0">
      <FlexBox flexFlow="column nowrap" gap="3px">
        <TextXTiny>Gender</TextXTiny>
        <Badge bgColor="orange">{gender}</Badge>
      </FlexBox>
      <FlexBox flexFlow="column nowrap" gap="3px">
        <TextXTiny>Species</TextXTiny>
        <Badge bgColor="purple">{species}</Badge>
      </FlexBox>
      <FlexBox flexFlow="column nowrap" gap="3px">
        <TextXTiny>Status</TextXTiny>
        <Badge bgColor="red">{status}</Badge>
      </FlexBox>
    </FlexBox>
  );
};

const FakeCollectButton = () => {
  return (
    <FlexBox
      width="120px"
      height="30px"
      justify="center"
      alignItems="center"
      backgroundColor="blue"
      radius="15px"
    >
      <TextXTiny>Collect</TextXTiny>
    </FlexBox>
  );
};

export const RandomCard = () => {
  const { character } = useFetchRandomCharacter();
  const { name, gender, image, species, status } = character;

  return (
    <CardContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      width="338px"
      height="440px"
      margin="15px 0"
      flexFlow="column nowrap"
      transparency="0.31"
      style={{
        rotateX: 22,
        rotateY: 22,
      }}
    >
      <TextXSmall margin="5px">{name}</TextXSmall>
      <CharacterImage image={image} />
      <CharacterDetails gender={gender} species={species} status={status} />
      <FakeCollectButton />
    </CardContainer>
  );
};
