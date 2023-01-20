import { FlexBox } from '../../styled_components/StyledContainers';
import { UListBox } from '../../styled_components/StyledNavigation';
import {
  BrandName,
  TextLarge,
  TextSmall,
} from '../../styled_components/StyledText';

export const MainFooter = () => {
  return (
    <>
      <div className="grid-main-footer">
        <BrandName gridArea="brand">RICK AND MORTY</BrandName>
        <TextLarge gridArea="cotact">Contact</TextLarge>
        <UListBox color="#fff" gridArea="socials">
          <li>github</li>
          <li>linkedIn</li>
          <li>Portfolio</li>
        </UListBox>
        <hr />
        <FlexBox gridArea="icons">
          <img src="" alt="github icon" />
          <img src="" alt="linkedin icon" />
        </FlexBox>
        <TextSmall gridArea="madeby">
          Application developed by Paco Navarrete
        </TextSmall>
      </div>
    </>
  );
};
