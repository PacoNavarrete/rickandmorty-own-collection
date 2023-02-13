import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextXSmall } from '../../styled_components/StyledText';
import { AddToCollection, Badge } from '../../styled_components/StyledUtils';

import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';

export const CardCharacter = ({ name, status, image, species, gender, id }) => {
  
  const { addCharacter } = useContext(CharacterContext);

  
  const onAddToCollection = () => {
    const character = {
      name,
      status,
      image,
      species,
      gender,
      id,
    };
    addCharacter(character);
  };


  return (
    <>
      <CardContainer
        width="338px"
        height="440px"
        margin="15px 0"
        flexFlow="column nowrap"
        transparency="0.31"
      >
        <TextXSmall margin="0 0 15px 30px">{name}</TextXSmall>
        <ImageContainer width="280px" height="250px" borderRadius="40px">
          <img src={image} alt="name" />
        </ImageContainer>
        <FlexBox
          width="130px"
          justify="start"
          gap="10px"
          alignSelf="start"
          margin="10px 30px"
        >
          <Badge bgColor="orange">{gender}</Badge>
          <Badge bgColor="purple">{species}</Badge>
        </FlexBox>
        <Badge bgColor="red" alignSelf="start" margin="0 30px">
          {status}
        </Badge>
        {}
        <AddToCollection onClick={onAddToCollection}>+</AddToCollection>
      </CardContainer>
    </>
  );
};
