import { useState } from 'react';
import useFetchCharacters from '../hooks/useFetchCharacters';

import { AppNav } from '../../navigation/header/AppNav';
import { SearchContentGroup } from '../components/SearchContentGroup';
import { CardCharacter } from '../components/CardCharacter';
import { FlexBox } from '../../styled_components/StyledContainers';
import CardsPagination from '../components/CardsPagination';
import { MainFooter } from '../../navigation/footer/MainFooter';

export const SearchPage = () => {
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
      <AppNav />
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
      <CardsPagination
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MainFooter />
    </>
  );
};
