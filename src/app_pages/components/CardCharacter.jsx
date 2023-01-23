import { CardContainer, FlexBox } from '../../styled_components/StyledContainers';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextXSmall, TextXTiny } from '../../styled_components/StyledText';
import { Badge } from '../../styled_components/StyledUtils';

export const CardCharacter = ({ name, status, image, species, gender }) => {
  return (
    <>
      <CardContainer
        width="338px"
        height="440px"
        margin="15px 0"
        flexFlow="column nowrap"
        transparency="0.31"
      >
        <TextXSmall>{name}</TextXSmall>
        <ImageContainer width="280px" height="250px" borderRadius="40px">
          <img src={image} alt="name" />
        </ImageContainer>
        <FlexBox>
          <Badge bgColor="orange">{gender}</Badge>
          <Badge bgColor="purple">{species}</Badge>
          <Badge bgColor="red">{status}</Badge>
        </FlexBox>
      </CardContainer>
    </>
  );
};
