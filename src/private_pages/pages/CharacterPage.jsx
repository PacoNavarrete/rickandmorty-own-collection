import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useFetchCharacterById } from '../hooks/useFetchCharacterById';

import { ImageContainer } from '../../styled_components/StyledMedia';
import { TextXTiny } from '../../styled_components/StyledText';
import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledControls';

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
        minHeight="100vh"
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
            <FlexBox flexFlow="column nowrap" alignItems="start">
              <TextXTiny>Name: {name}</TextXTiny>
              <TextXTiny>Origin: {originName}</TextXTiny>
              <TextXTiny>Gender: {gender}</TextXTiny>
              <TextXTiny>Specie: {species}</TextXTiny>
              <TextXTiny>Status: {status}</TextXTiny>
              <SecondaryButton onClick={onReturn}>Return </SecondaryButton>
            </FlexBox>
          </FlexBox>
        </CardContainer>
      </FlexBox>
    </>
  );
};
