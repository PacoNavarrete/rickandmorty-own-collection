import { Link } from 'react-router-dom';
import { BurgerList } from '../../styled_components/StyledNavigation';
import { TextMedium, TextXSmall } from '../../styled_components/StyledText';

export const AppBurgerNav = ({ burgerStatus }) => {
  return (
    <>
      <BurgerList
        margin="auto"
        flexFlow="column nowrap"
        justify="center"
        alignItems="center"
        width="100%"
        height="40vh"
        gap="30px"
        position="fixed"
        bottomPos="0"
        showBurger={burgerStatus}
      >
        <li>
          <Link to="/search">
            <TextMedium>CHARACTERS</TextMedium>
          </Link>
        </li>
        <li>
          <Link to="/locations">
            <TextMedium>LOCATIONS</TextMedium>
          </Link>
        </li>
        <li>
          <Link to="/episodes">
            <TextMedium>EPISODES</TextMedium>
          </Link>
        </li>
        <li>
          <Link to="/my-collection">
            <TextMedium>MY COLLECTION</TextMedium>
          </Link>
        </li>
      </BurgerList>
    </>
  );
};
