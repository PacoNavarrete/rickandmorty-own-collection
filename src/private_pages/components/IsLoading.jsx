import { FlexBox } from '../../styled_components/StyledContainers';
import { TextLarge, TextMedium } from '../../styled_components/StyledText';
import { LoadingAnimation } from '../../styled_components/StyledUtils';

export const IsLoading = () => {
  return (
    <>
      <FlexBox flexFlow="column nowrap" width="100%" height="100vh">
        <LoadingAnimation>
          <img
            width="250px"
            src="https://res.cloudinary.com/paconavarrete/image/upload/v1676000229/RickandMorty/spiner_sowxwm.png"
            alt="logo-loading"
          />
        </LoadingAnimation>
        <TextMedium color="gray">Loading</TextMedium>
      </FlexBox>
    </>
  );
};
