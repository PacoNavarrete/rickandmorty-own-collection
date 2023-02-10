import { CharacterContext } from "./CharacterContext"

export const CharacterProvider = ({children}) => {

  const addCharacter = () => {

  }

  return(
    <CharacterContext.Provider value={{addCharacter, }} >
      {children}
    </CharacterContext.Provider>

  )

}