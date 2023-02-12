import { useState } from 'react';
import useFetchCharacters from '../hooks/useFetchCharacters';

import { SearchContentGroup } from '../components/SearchContentGroup';
import { CardCharacter } from '../components/CardCharacter';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { AppBurgerNav } from '../../navigation/header/AppBurgerNav';
import { BurgerIcon } from '../../styled_components/StyledNavigation';
import { OwnPagination } from '../components/OwnPagination';

export const SearchPage = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [characterName, setCharacterName] = useState('');
  const [characterStatus, setCharacterStatus] = useState('');
  const [characterGender, setCharacterGender] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState(1);
  const { results, pageCount } = useFetchCharacters(
    currentPage,
    characterName,
    characterStatus,
    characterGender
  );

  const onCharacterChange = (event) => {
    setCharacterName(event.target.value);
    setInputValue(1);
    setCurrentPage(1);
  };

  return (
    <>
      <SearchContentGroup
        characterName={characterName}
        setCharacterName={setCharacterName}
        onCharacterChange={onCharacterChange}
        setCharacterGender={setCharacterGender}
        setCharacterStatus={setCharacterStatus}
      />
      <FlexBox flexFlow="row wrap" gap="30px" justify="center" margin="90px 0">
        {results?.map(({ id, name, status, image, species, gender }) => (
          <CardCharacter
            key={id}
            name={name}
            status={status}
            image={image}
            species={species}
            gender={gender}
            id={id}
          />
        ))}
      </FlexBox>
      <OwnPagination
        totalPages={pageCount}
        setPage={setCurrentPage}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <AppBurgerNav burgerStatus={burgerOpen} />
      <BurgerIcon
        iconStatus={burgerOpen}
        onClick={() => setBurgerOpen(!burgerOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
      <MainFooter />
    </>
  );
};
