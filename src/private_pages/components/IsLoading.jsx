import { FlexBox } from '../../styled_components/StyledContainers';
import { TextLarge } from '../../styled_components/StyledText';
import { LoadingAnimation } from '../../styled_components/StyledUtils';

export const IsLoading = () => {
  return (
    <>
      <FlexBox flexFlow="column nowrap" width="100%" height="100vh">
        <LoadingAnimation>
          <span></span>
        </LoadingAnimation>
        <TextLarge>Loading...</TextLarge>
      </FlexBox>
    </>
  );
};
