import { useState } from "react";
import { AppBurgerMenu } from "../../navigation/coponents/AppBurgerMenu";
import { BurgerIcon } from "../../styled_components/StyledNavigation";




export const EpisodesPage = () => {

  const [burgerOpen, SetBurgerOpen] = useState(false)


  const handleBurgerIcon = () => {
    SetBurgerOpen(!burgerOpen)
    console.log(burgerOpen)
  }
  return (
    <>
      <AppBurgerMenu 
        burgerOpen={burgerOpen}
      />
      <h1>Episodes page</h1>
      <BurgerIcon 
        onClick={handleBurgerIcon}          
        iconStatus={burgerOpen}
      >
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
    </>
  );
};
