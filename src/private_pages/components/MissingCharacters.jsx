import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';
import { TextLarge, TextSmall } from '../../styled_components/StyledText';

export const MissingCharacters = ({ textVariant, hideHint }) => {
  return (
    <FlexBox
      initial={{ y: 400 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      flexFlow="row wrap"
      gap="30px"
      justify="center"
      margin="90px 0"
    >
      <CardContainer
        flexFlow="column nowrap"
        transparency="0.41"
        padding="30px"
      >
        <TextLarge color="white">
          Hey! looks like there's no characters here, <br /> try another{' '}
          {textVariant}.
        </TextLarge>
        {hideHint ? (
          false
        ) : (
          <TextSmall color="white">
            Pss... Maybe you have already collect it.
          </TextSmall>
        )}
      </CardContainer>
    </FlexBox>
  );
};
