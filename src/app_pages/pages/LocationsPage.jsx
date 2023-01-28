import useFetchLocationsByName from '../hooks/useFetchLocationsByName';
import useFetchLocationsByPage from '../hooks/useFetchLocationsByPage';

import { TextLarge } from '../../styled_components/StyledText';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { AppNav } from '../../navigation/header/AppNav';
import { FlexBox } from '../../styled_components/StyledContainers';
import { CardCharacter } from '../components/CardCharacter';
import { PrimaryButton } from '../../styled_components/StyledControls';

import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { SelectOptions } from '../components/SelectOptions';
import CardsPagination from '../components/CardsPagination';

export const LocationsPage = () => {
  const [locationName, setLocationName] = useState("Earth (C-137)");
  const [locationPage, setLocationPage] = useState(1);
  const [locationsList, setLocationsList] = useState([]);
  const [page, setPage] = useState();

  const { resultsByName, residentsByLocation } = useFetchLocationsByName(locationName);
  const { resultsByPage } = useFetchLocationsByPage(locationPage);

  const resultPages = resultsByPage.results?.map((result) => result.name);
  

  console.log(resultsByName);
  console.log(residentsByLocation)

  const onCharacterChange = (event) => {
    // setCharacterName(event.target.value);
  };

  return (
    <>
      <AppNav />
      <FlexBox justify="space-around" alignItems="center">
        <TextLarge>
          Find your <br /> character
        </TextLarge>

        <SelectOptions
          name="locations"
          options={resultPages}
          setChange={setLocationName}
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
        {/* {results?.map(({ id, name, status, image, species, gender }) => (
          <CardCharacter
            key={id}
            name={name}
            status={status}
            image={image}
            species={species}
            gender={gender}
          />
        ))} */}
      </Grid>

      <MainFooter />
    </>
  );
};
