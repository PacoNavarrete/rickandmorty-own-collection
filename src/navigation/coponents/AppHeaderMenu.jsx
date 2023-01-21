import { UListBox } from '../../styled_components/StyledNavigation';

export const AppHeaderMenu = () => {
  return (
    <UListBox flexFlow="row nowrap" width="540px" color="#fff">
      <li>CHARACTERS</li>
      <li>LOCATIONS</li>
      <li>EPISODES</li>
      <li>MY COLLECTION</li>
    </UListBox>
  );
};
