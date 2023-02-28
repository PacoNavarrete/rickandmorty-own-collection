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

const Card = ({ src, copyText }) => {
  return (
    <FlexBox flexFlow="column nowrap" alignItems="center">
      <CardContainer width="180px" height="180px" transparency="0.2">
        <img src={src} alt="account icon" width="80px" />
      </CardContainer>
      <FlexBox width="180px" margin="5px 0">
        <TextSmall align="center">{copyText}</TextSmall>
      </FlexBox>
    </FlexBox>
  );
};

const WhatToDoCards = () => {
  return (
    <FlexBox
      flexFlow="row wrap"
      justify="space-around"
      width="100%"
      margin="90px 0"
      gap="20px"
    >
      <Card
        src={accountIcon}
        copyText={'Create your account, only type a name.'}
      />
      <Card
        src={filterIcon}
        copyText={'Seach, filter and collect any character.'}
      />
      <Card
        src={archiveIcon}
        copyText={'Store your own collection, you can add and delete'}
      />
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
