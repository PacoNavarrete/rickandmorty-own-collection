import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useFetchCharacterById } from '../hooks/useFetchCharacterById';

import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextSmall } from '../../styled_components/StyledText';
import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';
import { SecondaryButton } from '../../styled_components/StyledControls';

export const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { characterResult, missingCharacter } = useFetchCharacterById(id);
  const { name, originName, gender, species, status, urlImage } =
    characterResult;

  const onReturn = () => {
    navigate(-1);
  };

  if (missingCharacter) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <FlexBox
        width="100%"
        height="auto"
        margin="20px 0"
        justify="center"
        alignItems="center"
      >
        <CardContainer transparency="0.31">
          <FlexBox
            flexFlow="row wrap"
            justify="center"
            alignItems="center"
            gap="56px"
            transparency="0.31"
            padding="55px 40px"
          >
            <ImageContainer width="346px" borderRadius="40px">
              <img src={urlImage} alt="" />
            </ImageContainer>
            <FlexBox
              height="200px"
              flexFlow="column nowrap"
              alignItems="start"
              justify="space-around"
            >
              <TextSmall>
                <b>Name:</b> {name}
              </TextSmall>
              <TextSmall>
                <b>Origin:</b> {originName}
              </TextSmall>
              <TextSmall>
                <b>Gender</b>: {gender}
              </TextSmall>
              <TextSmall>
                <b>Specie</b>: {species}
              </TextSmall>
              <TextSmall>
                <b>Status</b>: {status}
              </TextSmall>
              <SecondaryButton margin="15px 0" onClick={onReturn}>
                Return
              </SecondaryButton>
            </FlexBox>
          </FlexBox>
        </CardContainer>
      </FlexBox>
    </>
  );
};
