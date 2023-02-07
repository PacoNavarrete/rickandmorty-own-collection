import { UListBox } from '../../styled_components/StyledNavigation';
import { TextXTiny } from '../../styled_components/StyledText';
import { Link } from 'react-router-dom';

export const AppHeaderMenu = () => {
  return (
    <UListBox flexFlow="row nowrap" width="450px" color="#fff">
      <li>
        <Link to="/search">
          <TextXTiny>CHARACTERS</TextXTiny>
        </Link>
      </li>
      <li>
        <Link to="/locations">
          <TextXTiny>LOCATIONS</TextXTiny>
        </Link>
      </li>
      <li>
        <Link to="/episodes">
          <TextXTiny>EPISODES</TextXTiny>
        </Link>
      </li>
      <li>
        <Link to="/my-collection">
          <TextXTiny>MY COLLECTION</TextXTiny>
        </Link>
      </li>
    </UListBox>
  );
};
