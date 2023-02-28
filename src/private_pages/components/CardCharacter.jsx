import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextXSmall, TextXTiny } from '../../styled_components/StyledText';
import {
  AddToCollection,
  Badge,
  DeleteCharacterBtn,
} from '../../styled_components/StyledUtils';

import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';

const CharacterContainer = ({ children }) => {
  return (
    <CardContainer
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      width="338px"
      height="440px"
      margin="15px 0"
      flexFlow="column nowrap"
      transparency="0.31"
    >
      {children}
    </CardContainer>
  );
};

const HeaderChard = ({ name, id }) => {
  return (
    <>
      <TextXSmall margin="5px">{name}</TextXSmall>
      <Link to={`/character/${id}`}>
        <TextXTiny color="orange" margin="0 0 5px 0">
          See more...
        </TextXTiny>
      </Link>
    </>
  );
};

const ImageCharacter = ({ image }) => {
  return (
    <ImageContainer width="280px" height="250px" borderRadius="40px">
      <img src={image} alt="name" />
    </ImageContainer>
  );
};

const CharacterDetails = (props) => {
  const { gender, species, status } = props;
  return (
    <FlexBox width="130px" justify="center" gap="10px" margin="15px 0">
      <FlexBox flexFlow="column nowrap" gap="3px">
        <TextXTiny>Gender</TextXTiny>
        <Badge bgColor="orange">{gender}</Badge>
      </FlexBox>
      <FlexBox flexFlow="column nowrap" gap="3px">
        <TextXTiny>Species</TextXTiny>
        <Badge bgColor="purple">{species}</Badge>
      </FlexBox>
      <FlexBox flexFlow="column nowrap" gap="3px">
        <TextXTiny>Status</TextXTiny>
        <Badge bgColor="red">{status}</Badge>
      </FlexBox>
    </FlexBox>
  );
};

const AddButton = ({ handleAdd }) => {
  return (
    <AddToCollection onClick={handleAdd}>
      <TextXTiny>Collect</TextXTiny>
    </AddToCollection>
  );
};

const DeleteButton = ({ handleDelete }) => {
  return (
    <DeleteCharacterBtn onClick={handleDelete}>
      <TextXTiny>Delete</TextXTiny>
    </DeleteCharacterBtn>
  );
};

export const CardCharacter = (props) => {
  const { name, status, image, species, gender, id, activeAdd } = props;
  const { addCharacter, deleteCharacter } = useContext(CharacterContext);
  const onAddToCollection = () => {
    const character = { ...props };
    addCharacter(character);
  };
  const onDeleteCharacter = () => {
    deleteCharacter(id);
  };

  return (
    <CharacterContainer>
      <HeaderChard name={name} id={id} />
      <ImageCharacter image={image} />
      <CharacterDetails gender={gender} species={species} status={status} />
      {activeAdd && <AddButton handleAdd={onAddToCollection} />}
      {!activeAdd && <DeleteButton handleDelete={onDeleteCharacter} />}
    </CharacterContainer>
  );
};
