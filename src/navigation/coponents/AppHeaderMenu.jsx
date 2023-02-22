import { UListBox } from '../../styled_components/StyledNavigation';
import { TextXTiny } from '../../styled_components/StyledText';
import { Link, useLocation } from 'react-router-dom';
import { IsActivePage } from '../../styled_components/StyledUtils';

export const AppHeaderMenu = () => {
  const { pathname } = useLocation();

  return (
    <UListBox flexFlow="row nowrap" width="450px" color="#fff">
      <li>
        <Link to="/search">
          <IsActivePage isActive={pathname === '/search' ? true : false}>
            <TextXTiny>CHARACTERS</TextXTiny>
          </IsActivePage>
        </Link>
      </li>
      <li>
        <Link to="/locations">
          <IsActivePage isActive={pathname === '/locations' ? true : false}>
            <TextXTiny>LOCATIONS</TextXTiny>
          </IsActivePage>
        </Link>
      </li>
      <li>
        <Link to="/episodes">
          <IsActivePage isActive={pathname === '/episodes' ? true : false}>
            <TextXTiny>EPISODES</TextXTiny>
          </IsActivePage>
        </Link>
      </li>
      <li>
        <Link to="/my-collection">
          <IsActivePage isActive={pathname === '/my-collection' ? true : false}>
            <TextXTiny>MY COLLECTION</TextXTiny>
          </IsActivePage>
        </Link>
      </li>
    </UListBox>
  );
};
