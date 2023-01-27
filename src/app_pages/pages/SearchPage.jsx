import { TextLarge } from '../../styled_components/StyledText';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { AppNav } from '../../navigation/header/AppNav';
import { FlexBox } from '../../styled_components/StyledContainers';
import { CardCharacter } from '../components/CardCharacter';
import {
  PrimaryButton,
  PrimaryInput,
} from '../../styled_components/StyledControls';

import useFetchCharacters from '../hooks/useFetchCharacters';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { SelectOptions } from '../components/SelectOptions';
import CardsPagination from '../components/CardsPagination';

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

  const onCharacterChange = (event) => {
    setCharacterName(event.target.value);
  };

  return (
    <>
      <AppNav />
      <FlexBox justify="space-around" alignItems="center">
        <TextLarge>
          Find your <br /> character
        </TextLarge>
        <PrimaryInput
          placeholder="Type the character name"
          alignSelf="center"
          value={characterName}
          onChange={onCharacterChange}
        />
        <SelectOptions
          name="Status"
          options={['', 'Alive', 'Dead', 'Unknow']}
          setChange={setCharacterStatus}
        />

        <SelectOptions
          name="Gender"
          options={['', 'Female', 'Male', 'Genderless', 'unknown']}
          setChange={setCharacterGender}
        />
        <PrimaryButton>Filter</PrimaryButton>
      </FlexBox>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-around',
          alignContent: 'center',
        }}
      >
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
      </Grid>
      <CardsPagination
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MainFooter />
    </>
  );
};
