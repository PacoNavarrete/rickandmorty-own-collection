import { Link } from 'react-router-dom';
import { BurgerList } from '../../styled_components/StyledNavigation';
import { TextXSmall } from '../../styled_components/StyledText';

export const AppBurgerNav = ({ burgerStatus }) => {
  return (
    <>
      <BurgerList
        margin="auto"
        flexFlow="column nowrap"
        justify="center"
        alignItems="center"
        width="100%"
        height="100vh"
        gap="30px"
        position="fixed"
        topPos="0"
        showBurger={burgerStatus}
      >
        <li>
          <Link to="/search">
            <TextXSmall>CHARACTERS</TextXSmall>
          </Link>
        </li>
        <li>
          <Link to="/locations">
            <TextXSmall>LOCATIONS</TextXSmall>
          </Link>
        </li>
        <li>
          <Link to="/episodes">
            <TextXSmall>EPISODES</TextXSmall>
          </Link>
        </li>
        <li>
          <Link to="/my-colloction">
            <TextXSmall>MY COLLECTION</TextXSmall>
          </Link>
        </li>
      </BurgerList>
    </>
  );
};
