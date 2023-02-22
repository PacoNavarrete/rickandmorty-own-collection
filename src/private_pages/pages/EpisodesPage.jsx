import { useState, useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import useFetchEpisodes from '../hooks/useFetchEpisodes';
import useFetchEpisodesByName from '../hooks/useFetchEpisodesByName';

import { SelectContentGroup } from '../components/SelectContentGroup';
import { CardCharacter } from '../components/CardCharacter';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MissingCharacters } from '../components/MissingCharacters';
import { BurgerIcon } from '../../styled_components/StyledNavigation';
import { AppBurgerNav } from '../../navigation/header/AppBurgerNav';
import { filterCharacters } from '../helpers/filterCharacters';
import { TextSmall } from '../../styled_components/StyledText';

export const EpisodesPage = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [episodeName, setEpisodeName] = useState('S01E01');
  const { resultsByName, residentsByEpisode, isLoading } =
    useFetchEpisodesByName(episodeName);
  const { namesOfEpisodes } = useFetchEpisodes();
  const { charactersState } = useContext(CharacterContext);

  const charactersToRender = filterCharacters(
    charactersState,
    residentsByEpisode
  );

  return (
    <>
      <SelectContentGroup
        names={namesOfEpisodes}
        setName={setEpisodeName}
        description={'Episodes'}
      />
      <FlexBox flexFlow="column nowrap" justify="center" gap="5px">
        <TextSmall>Episode name: "{resultsByName.name}"</TextSmall>
        <TextSmall>Air date: {resultsByName.air_date}</TextSmall>
      </FlexBox>
      {charactersToRender.length < 1 && (
        <MissingCharacters textVariant="episode" />
      )}
      <FlexBox
        layout
        flexFlow="row wrap"
        gap="30px"
        justify="center"
        margin="90px 0"
      >
        {charactersToRender?.map(
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
    </>
  );
};
