import { FormLogin } from '../components/FormLogin';
import { TitleMedium } from '../../styled_components/StyledText';

import {
  FlexBox,
  CardContainer,
} from '../../styled_components/StyledContainers';

export const LoginPage = () => {
  return (
    <FlexBox
      width="100%"
      height="100vh"
      justify="center"
      alignItems="center"
      flexFlow="row nowrap"
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.6, 0.01, -0.05, 1], duration: 2 }}
    >
      <CardContainer width="380px" height="450px" flexFlow="column nowrap">
        <TitleMedium lineHeight="44px" margin="35px 0">
          Create your account
        </TitleMedium>
        <FormLogin />
      </CardContainer>
    </FlexBox>
  );
};
