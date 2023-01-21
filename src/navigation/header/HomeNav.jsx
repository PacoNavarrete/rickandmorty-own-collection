import { FlexBox } from '../../styled_components/StyledContainers';
import { SecondaryButton } from '../../styled_components/StyledControls';
import { BrandName } from '../../styled_components/StyledText';
import { HomeHeaderMenu } from '../coponents/HomeHeaderMenu';

export const HomeNav = () => {
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
        <HomeHeaderMenu />
        <SecondaryButton>Collect</SecondaryButton>
      </FlexBox>
    </>
  );
};
