import { CharacterContext } from '../context/CharacterContext';
import { FlexBox } from '../../styled_components/StyledContainers';
import { useContext } from 'react';

import { CardCharacter } from '../components/CardCharacter';

export const MyCollection = () => {
  const { charactersState } = useContext(CharacterContext);

  console.log(charactersState)
  
  return (
    <FlexBox flexFlow="row wrap" gap="30px" justify="center" margin="90px 0">
      {charactersState.map(({ name, status, image, species, gender, id }) => (
        <CardCharacter
          key={id}
          name={name}
          status={status}
          image={image}
          species={species}
          gender={gender}
          id={id}
        />
      ))}
      ;
    </FlexBox>
  );
};
