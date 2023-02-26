import { useState, useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { useFetchLocations } from '../hooks/useFetchLocations';
import useFetchLocationsByName from '../hooks/useFetchLocationsByName';

import { SelectContentGroup } from '../components/SelectContentGroup';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MissingCharacters } from '../components/MissingCharacters';
import { IsLoading } from '../components/IsLoading';
import { filterCharacters } from '../helpers/filterCharacters';
import { TextSmall } from '../../styled_components/StyledText';
import { GridCharactersCard } from '../components/GridCharactersCard';
import { BurgerNavigation } from '../components/BurgerNavigation';

export const LocationsPage = () => {
  const [locationName, setLocationName] = useState('Earth (C-137)');
  const { namesOfLocations } = useFetchLocations();
  const { charactersState } = useContext(CharacterContext);
  const { resultsByName, residentsByLocation, isLoading } =
    useFetchLocationsByName(locationName);

  const charactersToRender = filterCharacters(
    charactersState,
    residentsByLocation
  );

  return (
    <>
      <SelectContentGroup
        names={namesOfLocations}
        setName={setLocationName}
        description={'Locations'}
      />
      <FlexBox flexFlow="column nowrap" justify="center" gap="5px">
        <TextSmall>Location Type: "{resultsByName.type}"</TextSmall>
        <TextSmall>Total Residents: {charactersToRender?.length}</TextSmall>
      </FlexBox>
      {isLoading && <IsLoading />}
      {charactersToRender.length < 1 && (
        <MissingCharacters textVariant="location" />
      )}
      <GridCharactersCard
        charactersToRender={charactersToRender}
        activeAdd={true}
      />
      <BurgerNavigation />
    </>
  );
};
