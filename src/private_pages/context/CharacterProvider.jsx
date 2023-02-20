import { useReducer } from 'react';
import { CharacterContext } from './CharacterContext';
import { characterReducer } from './characterReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('R&M Collection')) ?? [];
};

export const CharacterProvider = ({ children }) => {
  const [charactersState, dispatch] = useReducer(characterReducer, [], init);

  const addCharacter = (characterObj) => {
    const action = {
      type: '[Character] add',
      payload: characterObj,
    };
    dispatch(action);
    localStorage.setItem(
      'R&M Collection',
      JSON.stringify([...charactersState, characterObj])
    );
  };

  const deleteCharacter = (id) => {
    const currentCollection = JSON.parse(
      localStorage.getItem('R&M Collection')
    );
    const newCollection = currentCollection.filter(
      (character) => character.id !== id
    );
    const action = {
      type: '[Character] delete',
      payload: newCollection,
    };
    dispatch(action);
    localStorage.setItem('R&M Collection', JSON.stringify(newCollection));
  };

  return (
    <CharacterContext.Provider
      value={{ addCharacter, charactersState, deleteCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
