import { Text } from '../../styled_components/StyledText';
import {
  PrimaryInput,
  PrimaryButton,
} from '../../styled_components/StyledControls';

export const FormLogin = () => {
  return (
    <>
      <form style={{ textAlign: 'center' }}>
        <PrimaryInput placeholder="Type your name" autofocus={'true'} />
        <PrimaryButton>
          <Text size="12px" thickness="200" align="center">
            Crate Account
          </Text>
        </PrimaryButton>
      </form>
    </>
  );
};
