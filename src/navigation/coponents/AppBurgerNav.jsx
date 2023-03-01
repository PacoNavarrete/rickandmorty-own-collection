import { Link } from 'react-router-dom';
import { BurgerList } from '../../styled_components/StyledNavigation';
import { TextXSmall } from '../../styled_components/StyledText';

const MenuContainer = ({ children, burgerStatus }) => {
  return (
    <BurgerList
      margin="auto"
      flexFlow="column nowrap"
      justify="center"
      alignItems="center"
      width="100%"
      height="40vh"
      gap="30px"
      position="sticky"
      bottomPos="45px"
      showBurger={burgerStatus}
    >
      {children}
    </BurgerList>
  );
};

const MenuOption = ({ goToPath, title }) => {
  return (
    <li>
      <Link to={goToPath}>
        <TextXSmall color="#fff">{title}</TextXSmall>
      </Link>
    </li>
  );
};

export const AppBurgerNav = ({ burgerStatus }) => {
  return (
    <MenuContainer burgerStatus={burgerStatus}>
      <MenuOption goToPath={'/search'} title={'CHARACTERS'} />
      <MenuOption goToPath={'/locations'} title={'LOCATIONS'} />
      <MenuOption goToPath={'/episodes'} title={'EPISODES'} />
      <MenuOption goToPath={'/my-collection'} title={'MY COLLECTION'} />
    </MenuContainer>
  );
};
