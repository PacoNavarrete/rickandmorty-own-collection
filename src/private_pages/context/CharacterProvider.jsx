import { useReducer } from 'react';
import { CharacterContext } from './CharacterContext';
import { characterReducer } from './characterReducer';

const init = () => {
  const fromLocalStorage = JSON.parse(localStorage.getItem('charCollection'));

  return { fromLocalStorage };
};

export const CharacterProvider = ({ children }) => {
  const [charactersState, dispatch] = useReducer(characterReducer, {}, init);

  const addCharacter = (characterObj) => {
    const action = {
      type: '[Character] add',
      payload: characterObj,
    };
  };

  const deleteCharacter = (stateCharacters, id) => {};

  return (
    <CharacterContext.Provider value={{ addCharacter, deleteCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
