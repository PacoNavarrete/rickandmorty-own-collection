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
  const { results, pageCount } = useFetchCharacters(
    currentPage,
    characterName,
    characterStatus,
    characterGender
  );

  return (
    <>
      <SearchContentGroup
        characterName={characterName}
        setCharacterName={setCharacterName}
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
          />
        ))}
      </FlexBox>
      <OwnPagination totalPages={pageCount} setPage={setCurrentPage} />
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
