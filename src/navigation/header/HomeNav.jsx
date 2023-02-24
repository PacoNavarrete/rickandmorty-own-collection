import { Link } from 'react-router-dom';
import { FlexBox } from '../../styled_components/StyledContainers';
import { SecondaryButton } from '../../styled_components/StyledControls';
import { BrandName } from '../../styled_components/StyledText';
import { HomeHeaderMenu } from '../coponents/HomeHeaderMenu';

export const HomeNav = ({refHowItWorks}) => {
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
        <HomeHeaderMenu refHowItWorks={refHowItWorks} />
        <Link to="/login">
          <SecondaryButton>Collect</SecondaryButton>
        </Link>
      </FlexBox>
    </>
  );
};
