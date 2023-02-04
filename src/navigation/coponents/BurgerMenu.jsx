import { BrandName, TextXTiny } from '../../styled_components/StyledText';

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
        <li>
          <TextXTiny>CHARACTERS</TextXTiny>
        </li>
        <li>
          <TextXTiny>LOCATIONS</TextXTiny>
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
