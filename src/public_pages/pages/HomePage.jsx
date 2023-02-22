import { HomeNav } from '../../navigation/header/HomeNav';
import { HomeCTASection } from '../components/HomeCTASection';
import { HomeHeroSection } from '../components/HomeHeroSection';

export const HomePage = () => {
  return (
    <>
      <HomeNav />
      <HomeHeroSection />
      <HomeCTASection />
    </>
  );
};
