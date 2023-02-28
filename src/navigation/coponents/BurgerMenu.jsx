import { TextMedium, TextXTiny } from '../../styled_components/StyledText';

const MenuOption = ({option}) => {
  return (
    <li>
      <TextMedium>{option}</TextMedium>
    </li>
  )
}

export const AppBurgerMenu = ({ burgerOpen }) => {
  return (
    <>
      <UListBox
        flexFlow="column nowrap"
        color="#fff"
        backgroundColor="black"
        width="100%"
        height="300px"
        position="absolute"
        margin="0"
        burgerOpen={burgerOpen}
      >
        <MenuOption option={'CHARACTERS'} />
        <MenuOption option={'CHARACTERS'} />
        
        <li>
          <TextMedium>LOCATIONS</TextMedium>
        </li>
        <li>
          <TextXTiny>EPISODES</TextXTiny>
        </li>
        <li>
          <TextXTiny>MY COLLECTION</TextXTiny>
        </li>
      </UListBox>
    </>
  );
};
