import { Link } from 'react-router-dom';

import { PrimaryButton } from '../../styled_components/StyledControls';
import { TextSmall, TitleMedium } from '../../styled_components/StyledText';
import accountIcon from '../../assets/icons/account.svg';
import filterIcon from '../../assets/icons/filter.svg';
import archiveIcon from '../../assets/icons/archive.svg';
import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';

const WhatToDoCards = () => {
  return (
    <FlexBox
      flexFlow="row wrap"
      justify="space-around"
      width="100%"
      margin="90px 0"
      gap="20px"
    >
      <FlexBox flexFlow="column nowrap" alignItems="center">
        <CardContainer width="180px" height="180px" transparency="0.2">
          <img src={accountIcon} alt="account icon" width="80px" />
        </CardContainer>
        <TextSmall align="center">
          Create your Account <br /> Only type a name
        </TextSmall>
      </FlexBox>
      <FlexBox flexFlow="column nowrap" alignItems="center">
        <CardContainer width="180px" height="180px" transparency="0.2">
          <img src={filterIcon} alt="account icon" width="80px" />
        </CardContainer>
        <TextSmall align="center">
          Seach, filter and <br /> collect any character.
        </TextSmall>
      </FlexBox>
      <FlexBox flexFlow="column nowrap" alignItems="center">
        <CardContainer width="180px" height="180px" transparency="0.2">
          <img src={archiveIcon} alt="account icon" width="80px" />
        </CardContainer>
        <TextSmall align="center">
          Store your own collection, <br /> you can add and delete
        </TextSmall>
      </FlexBox>
    </FlexBox>
  );
};

export const HowItWorks = ({ anchorRef }) => {
  return (
    <FlexBox
      maxWidth="1150px"
      margin="98px auto 90px auto"
      flexFlow="column nowrap"
      alignItems="center"
      padding="0 30px"
      ref={anchorRef}
    >
      <TitleMedium>Crate your Collection</TitleMedium>
      <TextSmall align="center">
        Getting started with your own collection of Rick and Morty characters.
      </TextSmall>
      <WhatToDoCards />
      <Link to="/login">
        <PrimaryButton>Start Now</PrimaryButton>
      </Link>
    </FlexBox>
  );
};
