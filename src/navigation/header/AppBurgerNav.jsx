import { Link } from 'react-router-dom';
import { FlexBox } from '../../styled_components/StyledContainers';
import { BurgerList } from '../../styled_components/StyledNavigation';
import { TextXTiny } from '../../styled_components/StyledText';

export const AppBurgerNav = ({burgerStatus}) => {
  return (
    <>
      <FlexBox>
        <BurgerList
          margin="auto"
          flexFlow="column nowrap"
          justify="center"
          alignItems="center"
          width="100%"
          height="100vh"
          position="fixed"
          topPos="0"
          showBurger={burgerStatus}

        >
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
            <Link to="/my-colloction">
              <TextXTiny>MY COLLECTION</TextXTiny>
            </Link>
          </li>
        </BurgerList>
      </FlexBox>
    </>
  );
};
