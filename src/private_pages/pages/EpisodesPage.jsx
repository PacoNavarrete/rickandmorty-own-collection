import { useState, useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import useFetchEpisodes from '../hooks/useFetchEpisodes';
import useFetchEpisodesByName from '../hooks/useFetchEpisodesByName';

import { SelectContentGroup } from '../components/SelectContentGroup';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MissingCharacters } from '../components/MissingCharacters';
import { filterCharacters } from '../helpers/filterCharacters';
import { TextSmall } from '../../styled_components/StyledText';
import { GridCharactersCard } from '../components/GridCharactersCard';
import { IsLoading } from '../components/IsLoading';

export const EpisodesPage = () => {
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
      {isLoading && <IsLoading />}
      {charactersToRender.length < 1 && (
        <MissingCharacters textVariant="episode" />
      )}
      <GridCharactersCard
        charactersToRender={charactersToRender}
        activeAdd={true}
      />
    </>
  );
};
