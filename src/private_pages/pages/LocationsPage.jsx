import { useState } from 'react';
import { useFetchLocations } from '../hooks/useFetchLocations';
import useFetchLocationsByName from '../hooks/useFetchLocationsByName';

import { SelectContentGroup } from '../components/SelectContentGroup';
import { CardCharacter } from '../components/CardCharacter';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MissingCharacters } from '../components/MissingCharacters';
import { AppBurgerNav } from '../../navigation/header/AppBurgerNav';
import { BurgerIcon } from '../../styled_components/StyledNavigation';

export const LocationsPage = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [locationName, setLocationName] = useState('Earth (C-137)');
  const { residentsByLocation } = useFetchLocationsByName(locationName);
  const { namesOfLocations } = useFetchLocations();

  return (
    <>
      <SelectContentGroup
        names={namesOfLocations}
        setName={setLocationName}
        description={'Locations'}
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
