import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';
import { TextLarge, TextSmall } from '../../styled_components/StyledText';

const MessageContainer = ({ children }) => {
  return (
    <FlexBox
      initial={{ y: 400 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      flexFlow="row wrap"
      gap="30px"
      justify="center"
      margin="90px 30px"
    >
      {children}
    </FlexBox>
  );
};

const MainMessage = ({ textVariant }) => {
  return (
    <TextLarge color="white">
      Hey! looks like there's no characters here, <br /> try another{' '}
      {textVariant}.
    </TextLarge>
  );
};

const HintMassage = () => {
  return (
    <TextSmall color="white">
      Pss... Maybe you have already collect it.
    </TextSmall>
  );
};

export const MissingCharacters = ({ textVariant, hideHint }) => {
  return (
    <MessageContainer>
      <CardContainer
        flexFlow="column nowrap"
        transparency="0.41"
        padding="30px"
      >
        <MainMessage textVariant={textVariant} />
        {!hideHint && <HintMassage />}
      </CardContainer>
    </MessageContainer>
  );
};
