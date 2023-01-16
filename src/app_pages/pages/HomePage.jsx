import { ImageContainer } from '../../styled_components/StyledMedia';
import {
  FlexBox,
  CardContainer,
} from '../../styled_components/StyledContainers';
import {
  TitleLarge,
  TitleMedium,
  Text,
} from '../../styled_components/StyledText';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../styled_components/StyledControls';

import accountIcon from '../../assets/icons/account.svg';
import filterIcon from '../../assets/icons/filter.svg';
import archiveIcon from '../../assets/icons/archive.svg';

export const HomePage = () => {
  return (
    <>
      <FlexBox
        width="80%"
        height="100vh"
        flexFlow="row wrap"
        margin="auto auto"
        justify="center"
        alignContent="center"
      >
        <FlexBox width="60%" flexFlow="column nowrap">
          <TitleLarge align="start">
            Make your own collection of Rick and Morty characters
          </TitleLarge>
          <Text size="24px" margin="5px 0 60px 0">
            You can search, filter, collect, make notes, and <br />
            stored it in local storage of your browser.
          </Text>
          <FlexBox
            width="100%"
            justify="flex-start"
            gap="30px"
            height="content"
          >
            <PrimaryButton>Start Now</PrimaryButton>
            <SecondaryButton>How it Works</SecondaryButton>
          </FlexBox>
        </FlexBox>
        <ImageContainer width="350px">
          <img
            src="https://res.cloudinary.com/paconavarrete/image/upload/v1673555699/RickandMorty/CardCharacter_y0gw5v.png"
            alt="RickandMorty-Card"
          />
        </ImageContainer>
      </FlexBox>

      <FlexBox
        width="80%"
        height="100vh"
        margin="auto"
        flexFlow="column nowrap"
        alignItems="center"
      >
        <TitleMedium>Crate your Collection</TitleMedium>
        <Text align="center" size="24px">
          Getting started with your own collection of Rick and Morty characters
        </Text>
        <FlexBox
          width="100%"
          height="auto"
          flexFlow="row wrap"
          justify="center"
          alignContent="center"
          gap="30px"
          margin="60px 0"
        >
          <FlexBox flexFlow="column nowrap" alignItems="center" gap="10px">
            <CardContainer width="150px" height="150px" transparency="0.2">
              <img src={accountIcon} alt="account icon" />
            </CardContainer>
            <Text align="center">Create your Account</Text>
          </FlexBox>
          <FlexBox flexFlow="column nowrap" alignItems="center" gap="10px">
            <CardContainer width="150px" height="150px" transparency="0.2">
              <img src={filterIcon} alt="filter icon" />
            </CardContainer>
            <Text align="center">
              Navigate trough all <br /> the characters
            </Text>
          </FlexBox>
          <FlexBox flexFlow="column nowrap" alignItems="center" gap="10px">
            <CardContainer width="150px" height="150px" transparency="0.2">
              <img src={archiveIcon} alt="archive icon" />
            </CardContainer>
            <Text align="center">
              Store your own <br /> collection with notes
            </Text>
          </FlexBox>
        </FlexBox>
        <PrimaryButton>Start Now</PrimaryButton>
      </FlexBox>
    </>
  );
};
