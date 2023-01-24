import { TextLarge } from '../../styled_components/StyledText';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { AppNav } from '../../navigation/header/AppNav';
import { FlexBox } from '../../styled_components/StyledContainers';
import { CardCharacter } from '../components/CardCharacter';
import {
  PrimaryButton,
  PrimaryInput,
  SelectorInput,
} from '../../styled_components/StyledControls';

import SelectControl from '../components/SelectControl';
import useFetchCharacters from '../hooks/useFetchCharacters';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

export const SearchPage = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterStatus, setCharacterStatus] = useState('');
  const { results, pageCount } = useFetchCharacters(
    1,
    characterName,
    characterStatus,
    'male'
  );

  const onCharacterChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleStatus = (event) => {
    setCharacterStatus(event.target.value);
    console.log(event.target);
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
        <SelectControl
          filterNames={['Alive', 'Dead', 'Unknown']}
          filterTag="Status"
        />
        {/* The SelectorInput component is only for testing, I'll create my own selector with syled components */}
        <SelectorInput
          name="character-status"
          id="status-selector"
          onChange={handleStatus}
        >
          <option defaultValue="status" disabled>
            Status
          </option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </SelectorInput>
        <SelectControl
          filterNames={['Female', 'Male', 'Genderless', 'unknown']}
          filterTag="Gender"
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
      <MainFooter />
    </>
  );
};
