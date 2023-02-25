import { useRef } from 'react';
import { HomeNav } from '../../navigation/header/HomeNav';
import { HomeHero } from '../components/HomeHero';
import { HowItWorks } from '../components/HowItWorks';

export const HomePage = () => {
  const refHowItWorks = useRef(null);

  return (
    <>
      <HomeNav refHowItWorks={refHowItWorks} />
      <HomeHero refHowItWorks={refHowItWorks} />
      <HowItWorks anchorRef={refHowItWorks} />
    </>
  );
};
