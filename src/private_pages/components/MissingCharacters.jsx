import { FlexBox } from '../../styled_components/StyledContainers';
import { TextLarge, TextSmall } from '../../styled_components/StyledText';

export const MissingCharacters = ({textVariant}) => {
  return (
    <FlexBox flexFlow="column nowrap" backgroundColor="black" padding="20px" radius="5px"> 
      <TextLarge>
        Hey! looks like there's no characters here, <br /> try
        another {textVariant}.
      </TextLarge>
      <TextSmall>Pss... Maybe you have already collect it.</TextSmall>
    </FlexBox>
  );
};
