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
      margin="90px auto"
      flexFlow="column nowrap"
      alignItems="center"
    >
      <TitleMedium>Crate your Collection</TitleMedium>
      <TextSmall align="center">
        Getting started with your own collection of Rick and Morty characters
      </TextSmall>
      <FlexBox
        width="90%"
        minHeight="auto"
        flexFlow="row wrap"
        justify="space-around"
        alignContent="center"
        gap="30px"
        margin="60px 0"
      >
        <FlexBox flexFlow="column nowrap" alignItems="center" gap="10px">
          <CardContainer width="180px" height="180px" transparency="0.2">
            <img src={accountIcon} alt="account icon" width="80px" />
          </CardContainer>
          <TextSmall align="center">
            Create your Account <br /> Only type a name
          </TextSmall>
        </FlexBox>
        <FlexBox flexFlow="column nowrap" alignItems="center" gap="10px">
          <CardContainer width="180px" height="180px" transparency="0.2">
            <img src={filterIcon} alt="filter icon" width="80px" />
          </CardContainer>
          <TextSmall align="center">
            Navigate trough all <br /> the characters
          </TextSmall>
        </FlexBox>
        <FlexBox flexFlow="column nowrap" alignItems="center" gap="10px">
          <CardContainer width="180px" height="180px" transparency="0.2">
            <img src={archiveIcon} alt="archive icon" width="80px" />
          </CardContainer>
          <TextSmall align="center">
            Store your own collection, <br /> you can add and delete
          </TextSmall>
        </FlexBox>
      </FlexBox>
      <Link to="/login">
        <PrimaryButton>Start Now</PrimaryButton>
      </Link>
    </FlexBox>
  );
};
