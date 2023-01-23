import { TextLarge } from '../../styled_components/StyledText';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { AppNav } from '../../navigation/header/AppNav';
import { FlexBox } from '../../styled_components/StyledContainers';
import { CardCharacter } from '../components/CardCharacter';
import {
  PrimaryButton,
  PrimaryInput,
} from '../../styled_components/StyledControls';

import SelectControl from '../components/SelectControl';
import useFetchCharacters from '../hooks/useFetchCharacters';
import Grid from '@mui/material/Grid';

export const SearchPage = () => {
  const { results, pageCount } = useFetchCharacters(3, 'rick');

  console.log(results);

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
        />
        <SelectControl
          filterNames={['Alive', 'Dead', 'Unknown']}
          filterTag="Status"
        />
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
        {results.map(({ id, name, status, image, species, gender }) => (
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
