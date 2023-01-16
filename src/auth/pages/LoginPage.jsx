import { FormLogin } from '../components/FormLogin';
import { TitleMedium } from '../../styled_components/StyledText';

import {
  FlexBox,
  CardContainer,
} from '../../styled_components/StyledContainers';

export const LoginPage = () => {
  return (
    <FlexBox width="100%" height="100vh" flexDir="row">
      <CardContainer width="320px" height="450px" flexDir="column">
        <TitleMedium>Create your account</TitleMedium>
        <FormLogin />
      </CardContainer>
    </FlexBox>
  );
};
