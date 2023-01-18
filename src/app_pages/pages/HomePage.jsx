import { HomeHeroSection } from '../components/HomeHeroSection';
import { HomeCTASection } from '../components/HomeCTASection';
import { HomeNav } from '../../navigation/header/HomeNav';
import { FlexBox } from '../../styled_components/StyledContainers';

import { x } from '@xstyled/styled-components';

export const HomePage = () => {
  return (
    <x.div
      minH="100vh"
      w="90%"
      m="0 auto"
      display="grid"
      gridTemplateColumns={3}
      gridTemplateAreas={{ xl: '"a a a" "b b c"', md: '"c c b" "c c a"' }}
    >
      <x.div gridArea="a" bg="#00ffff">
        A
      </x.div>
      <x.div gridArea="b" bg="#ff00ff">
        B
      </x.div>
      <x.div gridArea="c" bg="#ff0000">
        C
      </x.div>
    </x.div>
  );

  // return (
  //   <FlexBox flexFlow="column nowrap" minHeight="100vh">
  //     <HomeNav />
  //     <HomeHeroSection />
  //     <HomeCTASection />
  //   </FlexBox>
  // );
};
