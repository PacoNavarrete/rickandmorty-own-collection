import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { FlexBox } from '../../styled_components/StyledContainers';

import { TextMedium } from '../../styled_components/StyledText';
import { MissingCharacters } from '../components/MissingCharacters';
import { GridCharactersCard } from '../components/GridCharactersCard';
import { BurgerNavigation } from '../components/BurgerNavigation';

export const MyCollection = () => {
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
        <MissingCharacters textVariant="Page to collect characters" hideHint />
      )}
      <GridCharactersCard
        charactersToRender={charactersToRender}
        activeAdd={false}
      />
      <BurgerNavigation />
    </>
  );
};
