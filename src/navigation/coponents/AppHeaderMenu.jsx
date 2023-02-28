import { UListBox } from '../../styled_components/StyledNavigation';
import { TextXTiny } from '../../styled_components/StyledText';
import { Link, useLocation } from 'react-router-dom';
import { IsActivePage } from '../../styled_components/StyledUtils';

const MenuOption = ({ goToPath, currentPath, title }) => {
  return (
    <li>
      <Link to={goToPath}>
        <IsActivePage isActive={currentPath === goToPath ? true : false}>
          <TextXTiny>{title}</TextXTiny>
        </IsActivePage>
      </Link>
    </li>
  );
};

export const AppHeaderMenu = () => {
  const { pathname } = useLocation();

  return (
    <UListBox flexFlow="row nowrap" width="450px" color="#fff">
      <MenuOption
        currentPath={pathname}
        goToPath={'/search'}
        title={'CHARACTERS'}
      />
      <MenuOption
        currentPath={pathname}
        goToPath={'/locations'}
        title={'LOCATIONS'}
      />
      <MenuOption
        currentPath={pathname}
        goToPath={'/episodes'}
        title={'EPISODES'}
      />
      <MenuOption
        currentPath={pathname}
        goToPath={'/my-collection'}
        title={'MY COLLECTION'}
      />
    </UListBox>
  );
};
