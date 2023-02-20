import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';
import { TextLarge, TextSmall } from '../../styled_components/StyledText';

export const MissingCharacters = ({ textVariant }) => {
  return (
    <CardContainer flexFlow="column nowrap" transparency="0.41" padding="30px">
      <TextLarge color="white">
        Hey! looks like there's no characters here, <br /> try another{' '}
        {textVariant}.
      </TextLarge>
      <TextSmall color="white">
        Pss... Maybe you have already collect it.
      </TextSmall>
    </CardContainer>
  );
};
