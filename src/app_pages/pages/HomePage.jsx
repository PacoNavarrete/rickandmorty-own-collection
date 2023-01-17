import { HomeHeroSection } from '../components/HomeHeroSection';
import { HomeCTASection } from '../components/HomeCTASection';
import { HomeNav } from '../../navigation/header/HomeNav';
import { FlexBox } from '../../styled_components/StyledContainers';

export const HomePage = () => {
  return (
    <FlexBox flexFlow="column nowrap" minHeight="100vh">
      <HomeNav />
      <HomeHeroSection />
      <HomeCTASection />
    </FlexBox>
  );
};
