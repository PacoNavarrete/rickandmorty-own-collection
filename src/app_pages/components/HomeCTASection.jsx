import accountIcon from '../../assets/icons/account.svg';
import filterIcon from '../../assets/icons/filter.svg';
import archiveIcon from '../../assets/icons/archive.svg';

import { PrimaryButton } from '../../styled_components/StyledControls';
import { TextSmall, TitleMedium } from '../../styled_components/StyledText';
import {
  CardContainer,
  FlexBox,
} from '../../styled_components/StyledContainers';

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
        width="100%"
        minHeight="auto"
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
          <TextSmall align="center">Create your Account</TextSmall>
        </FlexBox>
        <FlexBox flexFlow="column nowrap" alignItems="center" gap="10px">
          <CardContainer width="150px" height="150px" transparency="0.2">
            <img src={filterIcon} alt="filter icon" />
          </CardContainer>
          <TextSmall align="center">
            Navigate trough all <br /> the characters
          </TextSmall>
        </FlexBox>
        <FlexBox flexFlow="column nowrap" alignItems="center" gap="10px">
          <CardContainer width="150px" height="150px" transparency="0.2">
            <img src={archiveIcon} alt="archive icon" />
          </CardContainer>
          <TextSmall align="center">
            Store your own <br /> collection with notes
          </TextSmall>
        </FlexBox>
      </FlexBox>
      <PrimaryButton>Start Now</PrimaryButton>
    </FlexBox>
  );
};
