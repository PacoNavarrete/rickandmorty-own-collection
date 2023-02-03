import { useState } from 'react';
import useFetchEpisodes from '../hooks/useFetchEpisodes';
import useFetchEpisodesByName from '../hooks/useFetchEpisodesByName';

import { AppNav } from '../../navigation/header/AppNav';
import { SelectContentGroup } from '../components/SelectContentGroup';
import { CardCharacter } from '../components/CardCharacter';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MissingCharacters } from '../components/MissingCharacters';

export const EpisodesPage = () => {
  const [episodeName, setEpisodeName] = useState('S01E01');
  const { residentsByEpisode } = useFetchEpisodesByName(episodeName);
  const { namesOfEpisodes } = useFetchEpisodes();

  return (
    <>
      <AppNav />
      <SelectContentGroup
        names={namesOfEpisodes}
        setName={setEpisodeName}
        description={'Episodes'}
      />
      <FlexBox flexFlow="row wrap" gap="30px" justify="center" margin="90px 0">
        {residentsByEpisode.length < 1 ? (
          <MissingCharacters />
        ) : (
          residentsByEpisode?.map(
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
