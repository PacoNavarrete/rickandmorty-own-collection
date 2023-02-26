import { FlexBox } from '../../styled_components/StyledContainers';
import { CardCharacter } from './CardCharacter';

export const GridCharactersCard = ({ charactersToRender, activeAdd }) => {
  return (
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
            activeAdd={activeAdd}
          />
        )
      )}
    </FlexBox>
  );
};
