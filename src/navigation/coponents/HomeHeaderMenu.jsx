import { UListBox } from '../../styled_components/StyledNavigation';
import { TextXTiny } from '../../styled_components/StyledText';
import { Link } from 'react-router-dom';

export const HomeHeaderMenu = () => {
  return (
    <UListBox flexFlow="row nowrap" width="300px" color="#fff">
      <li>
        <Link to="/">
          <TextXTiny>HOME</TextXTiny>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <TextXTiny>MY COLLECTION</TextXTiny>
        </Link>
      </li>
      <li>
        <TextXTiny>HOW IT WORKS</TextXTiny>
      </li>
    </UListBox>
  );
};
