import { useEffect, useState } from 'react';
import { useFetchLocations } from '../hooks/useFetchLocations';

import { TextLarge } from '../../styled_components/StyledText';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { AppNav } from '../../navigation/header/AppNav';
import { FlexBox } from '../../styled_components/StyledContainers';
import { CardCharacter } from '../components/CardCharacter';
import { PrimaryButton } from '../../styled_components/StyledControls';

import Grid from '@mui/material/Grid';
import { SelectOptions } from '../components/SelectOptions';
import CardsPagination from '../components/CardsPagination';
import useFetchLocationsByName from '../hooks/useFetchLocationsByName';

export const LocationsPage = () => {
  const [locationName, setLocationName] = useState('Earth (C-137)');

  const { locationsList, namesOfLocations } = useFetchLocations();
  const { residentsByLocation, resultsByName } =
    useFetchLocationsByName(locationName);

  useEffect(() => {
    console.log(locationsList);
    console.log(namesOfLocations);
    console.log(residentsByLocation);
    console.log(resultsByName);
  }, [locationsList, namesOfLocations, residentsByLocation, resultsByName]);

  return (
    <>
      <AppNav />
      <FlexBox justify="space-around" alignItems="center">
        <TextLarge>
          Find your <br /> character
        </TextLarge>

        <SelectOptions
          name="locations"
          options={namesOfLocations}
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
        {residentsByLocation?.map(
          ({ id, name, status, image, species, gender }) => (
            <CardCharacter
              key={id}
              name={name}
              status={status}
              image={image}
              species={species}
              gender={gender}
            />
          )
        )}
      </Grid>

      <MainFooter />
    </>
  );
};
