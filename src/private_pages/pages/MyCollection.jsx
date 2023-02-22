import { useContext, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { FlexBox } from '../../styled_components/StyledContainers';

import { CardCharacter } from '../components/CardCharacter';
import { TextMedium } from '../../styled_components/StyledText';
import { AppBurgerNav } from '../../navigation/header/AppBurgerNav';
import { BurgerIcon } from '../../styled_components/StyledNavigation';
import { MissingCharacters } from '../components/MissingCharacters';

export const MyCollection = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { charactersState } = useContext(CharacterContext);
  const charactersToRender = [...charactersState].reverse();
  return (
    <>
      <FlexBox justify="center">
        <TextMedium>
          I have {charactersState.length} Characters here!
        </TextMedium>
      </FlexBox>
      {charactersToRender.length < 1 && (
        <MissingCharacters textVariant="Page to collect characters" hideHint/>
      )}
      <FlexBox
        layout
        flexFlow="row wrap"
        gap="30px"
        justify="center"
        margin="90px 0"
      >
        {charactersToRender?.map(
          ({ name, status, image, species, gender, id }) => (
            <CardCharacter
              key={id}
              name={name}
              status={status}
              image={image}
              species={species}
              gender={gender}
              id={id}
              addBtn={false}
            />
          )
        )}
      </FlexBox>
      <AppBurgerNav burgerStatus={burgerOpen} />
      <BurgerIcon
        iconStatus={burgerOpen}
        onClick={() => setBurgerOpen(!burgerOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
    </>
  );
};
