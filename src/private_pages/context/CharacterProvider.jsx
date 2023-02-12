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

  return (
    <CharacterContext.Provider value={{ addCharacter, charactersState }}>
      {children}
    </CharacterContext.Provider>
  );
};
