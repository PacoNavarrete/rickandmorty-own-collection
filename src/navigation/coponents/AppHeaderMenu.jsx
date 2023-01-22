import { UListBox } from '../../styled_components/StyledNavigation';
import { TextXTiny } from '../../styled_components/StyledText';

export const AppHeaderMenu = () => {
  return (
    <UListBox flexFlow="row nowrap" width="450px" color="#fff">
      <li>
        <TextXTiny>CHARACTERS</TextXTiny>
      </li>
      <li>
        <TextXTiny>LOCATIONS</TextXTiny>
      </li>
      <li>
        <TextXTiny>EPISODES</TextXTiny>
      </li>
      <li>
        <TextXTiny>MY COLLECTION</TextXTiny>
      </li>
    </UListBox>
  );
};
