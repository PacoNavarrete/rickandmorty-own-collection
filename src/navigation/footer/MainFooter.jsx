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
        <BrandName textAlign="start" gridArea="brand">Rick And Morty</BrandName>
        <TextLarge margin="auto 0" gridArea="contact">
          Get in touch
        </TextLarge>
        <UListBox color="#fff" gridArea="socials">
          <li>github</li>
          <li>linkedIn</li>
          <li>Portfolio</li>
        </UListBox>
        <FlexBox gridArea="icons">
          <img src="" alt="github icon" />
          <img src="" alt="linkedin icon" />
        </FlexBox>
        <TextSmall gridArea="madeby">
          &lt; developed /&gt; by Paco Navarrete
        </TextSmall>
      </div>
    </>
  );
};
