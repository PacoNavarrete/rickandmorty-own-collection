import { UListBox } from '../../styled_components/StyledNavigation';
import { TextXSmall, TextXTiny } from '../../styled_components/StyledText';

export const HomeHeaderMenu = () => {

  return (
    <UListBox flexFlow="row nowrap" width="300px" color="#fff">
    <li><TextXTiny>HOME</TextXTiny></li>
    <li><TextXTiny>MY COLLECTION</TextXTiny></li>
    <li><TextXTiny>HOW IT WORKS</TextXTiny></li>
    </UListBox>
  );
};

