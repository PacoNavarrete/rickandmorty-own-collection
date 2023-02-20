import { useState, useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { useFetchLocations } from '../hooks/useFetchLocations';
import useFetchLocationsByName from '../hooks/useFetchLocationsByName';

import { SelectContentGroup } from '../components/SelectContentGroup';
import { CardCharacter } from '../components/CardCharacter';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MissingCharacters } from '../components/MissingCharacters';
import { AppBurgerNav } from '../../navigation/header/AppBurgerNav';
import { BurgerIcon } from '../../styled_components/StyledNavigation';
import { IsLoading } from '../components/IsLoading';
import { filterCharacters } from '../helpers/filterCharacters';
import { TextSmall } from '../../styled_components/StyledText';

export const LocationsPage = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
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
      <FlexBox flexFlow="row wrap" gap="30px" justify="center" margin="90px 0">
        {isLoading && <IsLoading />}
        {!isLoading && charactersToRender.length > 0 ? (
          charactersToRender?.map(
            ({ id, name, status, image, species, gender }) => (
              <CardCharacter
                key={id}
                name={name}
                status={status}
                image={image}
                species={species}
                gender={gender}
                id={id}
                addBtn={true}
              />
            )
          )
        ) : (
          <MissingCharacters textVariant="location" />
        )}
      </FlexBox>
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
