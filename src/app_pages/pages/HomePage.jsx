import { HomeHeroSection } from '../components/HomeHeroSection';
import { HomeCTASection } from '../components/HomeCTASection';
import { HomeNav } from '../../navigation/header/HomeNav';
import { MainFooter } from '../../navigation/footer/MainFooter';

export const HomePage = () => {
  return (
    <>
      <HomeNav />
      <HomeHeroSection />
      <HomeCTASection />
      <MainFooter/>
    </>
  );
};
