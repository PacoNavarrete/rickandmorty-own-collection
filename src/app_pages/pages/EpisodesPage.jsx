import { useState } from 'react';
import { useFetchLocations } from '../hooks/useFetchLocations';
import useFetchLocationsByName from '../hooks/useFetchLocationsByName';
import useFetchEpisodes from '../hooks/useFetchEpisodes';

import { AppNav } from '../../navigation/header/AppNav';
import { SelectContentGroup } from '../components/SelectContentGroup';
import { CardCharacter } from '../components/CardCharacter';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MissingCharacters } from '../components/MissingCharacters';

export const EpisodesPage = () => {
  const [locationName, setLocationName] = useState('Earth (C-137)');
  const { residentsByLocation } = useFetchLocationsByName(locationName);
  const { namesOfLocations } = useFetchLocations();

  useFetchEpisodes();

  

  return (
    <>
      <AppNav />
      <SelectContentGroup
        namesOfLocations={namesOfLocations}
        setLocationName={setLocationName}
      />
      <FlexBox flexFlow="row wrap" gap="30px" justify="center" margin="90px 0">
        {residentsByLocation.length < 1 ? (
          <MissingCharacters />
        ) : (
          residentsByLocation?.map(
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
          )
        )}
      </FlexBox>
      <MainFooter />
    </>
  );
};
