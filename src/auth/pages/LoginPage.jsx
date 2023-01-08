import { LoginButton } from '../styled_components/LoginButton';
import { LoginTitle } from '../styled_components/LoginTitle';
import { LoginContainer } from '../styled_components/LoginContainer';
import { LoginInput } from '../styled_components/LoginInput';
import { LoginBackground } from '../styled_components/LoginBackground';
import GlobalStyles from '../styled_components/GlobalStyles';

export const LoginPage = () => {
  return (
    <>
      <GlobalStyles />
      <LoginBackground>
        <LoginContainer>
          <LoginTitle> Create your local user </LoginTitle>
          <LoginInput
            type="text"
            placeholder="Type your user name"
            autofocus={'true'}
          />
          <LoginButton>Create Account</LoginButton>
        </LoginContainer>
      </LoginBackground>
    </>
  );
};
