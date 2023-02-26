import {useState} from 'react'
import { AppBurgerNav } from '../../navigation/header/AppBurgerNav'
import { BurgerIcon } from '../../styled_components/StyledNavigation'

export const BurgerNavigation = () => {

  const [isBurgerActive, setIsBurgerActive] = useState(false)

  return (
    <>
      <AppBurgerNav burgerStatus={isBurgerActive} />
      <BurgerIcon
        iconStatus={isBurgerActive}
        onClick={() => setIsBurgerActive(!isBurgerActive)}
      >
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
    </>
  )
}