import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';
import { PrimaryButton } from '../../styled_components/StyledControls';
import { TextSmall, TitleMedium } from '../../styled_components/StyledText';

import accountIcon from '../../assets/icons/account.svg';
import archiveIcon from '../../assets/icons/archive.svg';
import filterIcon from '../../assets/icons/filter.svg';

export const HomeCTASection = () => {
  return (
    <FlexBox
      width="80%"
      minHeight="100vh"
      margin="140px auto 0 auto"
      flexFlow="column nowrap"
      alignItems="center"
    >
      <TitleMedium>Crate your Collection</TitleMedium>
      <TextSmall align="center">
        Getting started with your own collection of Rick and Morty characters.
      </TextSmall>
      <FlexBox
        border="2px solid #000"
        radius="5px"
        boxShadow="15px 20px 15px -10px black"
        maxWidth="840px"
        margin="60px"
      >
        <ReactPlayer
          url="https://res.cloudinary.com/paconavarrete/video/upload/v1677044637/RickandMorty/rickandmortyvideo_jklj0f.mov"
          playing={true}
          loop={true}
          width="100%"
          height="100%"
        />
      </FlexBox>
      <Link to="/login">
        <PrimaryButton>Start Now</PrimaryButton>
      </Link>
    </FlexBox>
  );
};
