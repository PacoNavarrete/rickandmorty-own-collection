import { useState, useContext } from 'react';
import useFetchCharacters from '../hooks/useFetchCharacters';
import { CharacterContext } from '../context/CharacterContext';

import { SearchContentGroup } from '../components/SearchContentGroup';
import { OwnPagination } from '../components/OwnPagination';
import { filterCharacters } from '../helpers/filterCharacters';
import { MissingCharacters } from '../components/MissingCharacters';
import { GridCharactersCard } from '../components/GridCharactersCard';

export const SearchPage = () => {
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

  const charactersToRender = filterCharacters(charactersState, results);

  return (
    <>
      <SearchContentGroup
        characterName={characterName}
        setCharacterName={setCharacterName}
        setCharacterGender={setCharacterGender}
        setCharacterStatus={setCharacterStatus}
        setCurrentPage={setCurrentPage}
        setInputValue={setInputValue}
      />
      {charactersToRender.length < 1 && (
        <MissingCharacters textVariant="search or page" />
      )}
      <GridCharactersCard
        charactersToRender={charactersToRender}
        activeAdd={true}
      />
      <OwnPagination
        totalPages={pageCount}
        setPage={setCurrentPage}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </>
  );
};
