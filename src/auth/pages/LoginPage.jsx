import { FormLogin } from '../components/FormLogin';
import {
  CardContainer,
  FlexContainer,
  TitleMedium,
} from '../../styled_components/StyledComponents';

export const LoginPage = () => {
  return (
    <FlexContainer width="100%" height="100vh" flexDir="row">
      <CardContainer width="320px" height="450px" flexDir="column">
        <TitleMedium>Create your account</TitleMedium>
        <FormLogin />
      </CardContainer>
    </FlexContainer>
  );
};
