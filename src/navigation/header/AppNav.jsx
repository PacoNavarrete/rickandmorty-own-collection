import { FlexBox } from '../../styled_components/StyledContainers';
import { AppHeaderMenu } from '../coponents/AppHeaderMenu';
import {
  BrandName,
  TextSmall,
  TextXTiny,
} from '../../styled_components/StyledText';

export const AppNav = ({ userName, displayState }) => {
  return (
    <>
      <FlexBox
        flexFlow="row nowrap"
        width="100%"
        height="125px"
        margin="0"
        justify="space-around"
        alignItems="center"
      >
        <BrandName>Rick and Morty</BrandName>
        <AppHeaderMenu />
        <FlexBox gap="10px" justify="center">
          <TextXTiny>{userName}</TextXTiny>
          <FlexBox
            width="40px"
            height="40px"
            justify="center"
            alignItems="center"
            border="1px solid #fff"
            radius="20px"
          >
            <TextSmall>{'TBD'}</TextSmall>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};
