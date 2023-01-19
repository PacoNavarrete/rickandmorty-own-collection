import { HomeHeroSection } from '../components/HomeHeroSection';
import { HomeCTASection } from '../components/HomeCTASection';
import { HomeNav } from '../../navigation/header/HomeNav';

export const HomePage = () => {
  return (
    <>
      <HomeNav />
      <HomeHeroSection />
      <HomeCTASection />
    </>
  );
};
