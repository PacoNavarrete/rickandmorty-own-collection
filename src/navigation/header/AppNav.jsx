import { FlexBox } from '../../styled_components/StyledContainers';
import { SecondaryButton } from '../../styled_components/StyledControls';
import { BrandName, TextSmall, TextXTiny } from '../../styled_components/StyledText';
import { AppHeaderMenu } from '../coponents/AppHeaderMenu';

export const AppNav = () => {
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
          <TextXTiny>Paco Navarrete</TextXTiny>
          <FlexBox 
            width="40px" 
            justify="center" 
            alignItems="center"
            border="1.5px solid #fff"
            radius="20px"
          ><TextSmall>PN</TextSmall></FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};
