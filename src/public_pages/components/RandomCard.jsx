import { useMotionValue, useTransform } from 'framer-motion';
import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextXSmall, TextXTiny } from '../../styled_components/StyledText';
import { Badge } from '../../styled_components/StyledUtils';
import { useFetchRandomCharacter } from '../hooks/useFetchRandomCharacter';

export const RandomCard = () => {
  const { character } = useFetchRandomCharacter();
  const { name, gender, image, species, status } = character;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(x, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [-100, 100], [-30, 30]);

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
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <TextXSmall margin="5px">{name}</TextXSmall>
      <ImageContainer
        width="280px"
        height="250px"
        borderRadius="40px"
        style={{
          x,
          y,
          rotateX,
          rotateY,
          rotate: '0deg',
          z: 100000,
        }}
        drag
        dragElastic={0.12}
        whileTap={{ cursor: 'grabbing' }}
      >
        <img src={image} alt="name" />
      </ImageContainer>
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
    </CardContainer>
  );
};
