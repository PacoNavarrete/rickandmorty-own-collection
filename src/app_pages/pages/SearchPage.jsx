import { TextLarge } from '../../styled_components/StyledText';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { AppNav } from '../../navigation/header/AppNav';
import { FlexBox } from '../../styled_components/StyledContainers';
import {
  PrimaryButton,
  PrimaryInput,
} from '../../styled_components/StyledControls';

import SelectControl from '../components/SelectControl';
import useFetchCharacters from '../hooks/useFetchCharacters';
import Grid from '@mui/material/Grid';

export const SearchPage = () => {
  const { results, pageCount } = useFetchCharacters(2, 'rick');

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
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyItems: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        {results.map(({ id, name, status }) => (
          <Grid item xs={2} sm={4} md={4} key={id}>
            <p>{name}</p>
            <p>{status}</p>
          </Grid>
        ))}
      </Grid>
      <MainFooter />
    </>
  );
};
