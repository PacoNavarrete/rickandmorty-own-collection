import { useState } from 'react';
import { BurgerIcon } from '../../styled_components/StyledNavigation';
import { AppBurgerNav } from '../coponents/AppBurgerNav';

export const BurgerNavigation = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <>
      <AppBurgerNav
        burgerStatus={isBurgerActive}
        setCloseMenu={setIsBurgerActive}
      />
      <BurgerIcon
        iconStatus={isBurgerActive}
        onClick={() => setIsBurgerActive(!isBurgerActive)}
      >
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
    </>
  );
};
