import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { FlexBox } from '../../styled_components/StyledContainers';
import { AppHeaderMenu } from '../coponents/AppHeaderMenu';
import {
  BrandName,
  TextSmall,
  TextXTiny,
} from '../../styled_components/StyledText';

const AppNavContainer = ({ children }) => {
  return (
    <FlexBox
      flexFlow="row nowrap"
      width="100%"
      height="125px"
      margin="0 0 60px 0"
      padding="0 50px"
      justify="space-between"
      alignItems="center"
    >
      {children}
    </FlexBox>
  );
};

const UserNameLogged = ({ userName }) => {
  return (
    <FlexBox gap="10px" justify="space-arround" alignItems="center">
      <TextXTiny>{userName}</TextXTiny>
      <FlexBox
        width="40px"
        height="40px"
        justify="center"
        alignItems="center"
        border="1px solid #fff"
        radius="20px"
      >
        <TextSmall>{userName[0]}</TextSmall>
      </FlexBox>
    </FlexBox>
  );
};

export const AppNav = () => {
  const { authState } = useContext(AuthContext);
  const userName = authState.user.userName;

  return (
    <AppNavContainer>
      <BrandName>Rick and Morty</BrandName>
      <AppHeaderMenu />
      <UserNameLogged userName={userName} />
    </AppNavContainer>
  );
};
