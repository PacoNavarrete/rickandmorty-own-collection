import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useFetchCharacterById } from '../hooks/useFetchCharacterById';

import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextSmall } from '../../styled_components/StyledText';
import { SecondaryButton } from '../../styled_components/StyledControls';
import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';

const CharacterImage = (props) => {
  const { urlImage, name } = props.characterData;
  return (
    <>
      <ImageContainer width="346px" borderRadius="40px">
        <img src={urlImage} alt={name} />
      </ImageContainer>
    </>
  );
};

const CharacterDetails = (props) => {
  const { name, originName, gender, species, status } = props.characterData;
  const returnPrevPage = props.return;

  return (
    <FlexBox
      height="250px"
      flexFlow="column nowrap"
      alignItems="start"
      justify="space-around"
      gap="10px"
    >
      <TextSmall>
        <b>Name</b>: {name}
      </TextSmall>
      <TextSmall>
        <b>Origin</b>: {originName}
      </TextSmall>
      <TextSmall>
        <b>Gender</b>: {gender}
      </TextSmall>
      <TextSmall>
        <b>Species</b>: {species}
      </TextSmall>
      <TextSmall>
        <b>Status</b>: {status}
      </TextSmall>
      <SecondaryButton margin="15px 0" onClick={returnPrevPage}>
        Return
      </SecondaryButton>
    </FlexBox>
  );
};

export const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { characterResult, missingCharacter } = useFetchCharacterById(id);

  const onReturn = () => {
    navigate(-1);
  };

  if (missingCharacter) {
    return <Navigate to="/" />;
  }

  return (
    <FlexBox
      width="100%"
      height="auto"
      margin="20px 0"
      justify="center"
      alignItems="center"
    >
      <CardContainer transparency="0.31" margin="0 30px">
        <FlexBox
          flexFlow="row wrap"
          justify="center"
          alignItems="center"
          gap="30px"
          transparency="0.31"
          padding="55px 40px"
        >
          <CharacterImage characterData={characterResult} />
          <CharacterDetails characterData={characterResult} return={onReturn} />
        </FlexBox>
      </CardContainer>
    </FlexBox>
  );
};
