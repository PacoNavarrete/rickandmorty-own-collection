import { TextMedium } from '../../styled_components/StyledText';
import {
  PrimaryInput,
  PrimaryButton,
} from '../../styled_components/StyledControls';

export const FormLogin = () => {
  return (
    <>
      <form style={{ textAlign: 'center' }}>
        <PrimaryInput placeholder="Type your name" autoFocus={'true'} />
        <PrimaryButton>
          <TextMedium size="12px" thickness="200" align="center">
            Crate Account
          </TextMedium>
        </PrimaryButton>
      </form>
    </>
  );
};
