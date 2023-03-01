import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { AuthContext } from '../../auth/context/AuthContext';

import { FlexBox } from '../../styled_components/StyledContainers';
import { TextMedium } from '../../styled_components/StyledText';
import { MissingCharacters } from '../components/MissingCharacters';
import { GridCharactersCard } from '../components/GridCharactersCard';
import { DeleteButton } from '../../styled_components/StyledControls';

const DeleteAccount = () => {
  const { logout } = useContext(AuthContext);

  function onClickDelete() {
    const response = confirm(
      'This action can not be undone if you clicked on the OK button! Are you sure?'
    );

    if (response) {
      localStorage.removeItem('R&M user');
      localStorage.removeItem('R&M Collection');
      logout();
    }
  }

  return (
    <FlexBox width="100%" justify="center">
      <DeleteButton onClick={onClickDelete}>Delete Account</DeleteButton>
    </FlexBox>
  );
};

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
      <DeleteAccount />
    </>
  );
};
