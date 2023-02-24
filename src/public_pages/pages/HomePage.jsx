import { useRef } from 'react';
import { HomeNav } from '../../navigation/header/HomeNav';
import { HomeCTASection } from '../components/HomeCTASection';
import { HomeHeroSection } from '../components/HomeHeroSection';

export const HomePage = () => {

  const refHowItWorks = useRef(null)

  return (
    <>
      <HomeNav refHowItWorks ={refHowItWorks} />
      <HomeHeroSection refHowItWorks = {refHowItWorks} />
      <HomeCTASection refHowItWorks = {refHowItWorks} />
    </>
  );
};
