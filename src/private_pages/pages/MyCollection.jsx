import { FlexBox } from '../../styled_components/StyledContainers';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { PrimaryButton } from '../../styled_components/StyledControls';

export const MyCollection = () => {
  const { logout } = useContext(AuthContext);

  const onClickLogout = () => {
    logout();
  };

  return (
    <FlexBox flexFlow="column nowrap" justify="center" alignItems="center">
      <h1>My Collection</h1>
      <PrimaryButton onClick={onClickLogout}>
        logout and delete my account
      </PrimaryButton>
    </FlexBox>
  );
};
