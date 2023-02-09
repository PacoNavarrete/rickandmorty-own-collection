import { useState } from 'react';
import useFetchEpisodes from '../hooks/useFetchEpisodes';
import useFetchEpisodesByName from '../hooks/useFetchEpisodesByName';

import { SelectContentGroup } from '../components/SelectContentGroup';
import { CardCharacter } from '../components/CardCharacter';
import { MainFooter } from '../../navigation/footer/MainFooter';
import { FlexBox } from '../../styled_components/StyledContainers';
import { MissingCharacters } from '../components/MissingCharacters';
import { BurgerIcon } from '../../styled_components/StyledNavigation';
import { AppBurgerNav } from '../../navigation/header/AppBurgerNav';

export const EpisodesPage = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [episodeName, setEpisodeName] = useState('S01E01');
  const { residentsByEpisode } = useFetchEpisodesByName(episodeName);
  const { namesOfEpisodes } = useFetchEpisodes();
  ``;
  return (
    <>
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
                id={id}
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
