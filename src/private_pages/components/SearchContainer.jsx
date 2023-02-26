import { useContext, useState } from "react";
import { CharacterContext } from "../context/CharacterContext";
import useFetchCharacters from "../hooks/useFetchCharacters";


export const SearchContainer = ({children}) => {

  const [characterName, setCharacterName] = useState('');
  const [characterStatus, setCharacterStatus] = useState('');
  const [characterGender, setCharacterGender] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState(1);
  const { charactersState } = useContext(CharacterContext);
  const { results, pageCount } = useFetchCharacters(
    currentPage,
    characterName,
    characterStatus,
    characterGender
  );

  return(
    <>
      {children}
    </>
  )

}