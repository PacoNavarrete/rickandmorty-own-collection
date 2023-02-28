import { FlexBox } from '../../styled_components/StyledContainers';
import { UListBox } from '../../styled_components/StyledNavigation';
import {
  BrandName,
  TextMedium,
  TextXSmall,
  TextXTiny,
} from '../../styled_components/StyledText';
import { Divider } from '../../styled_components/StyledUtils';

const ContactList = () => {
  return (
    <UListBox color="#fff" width="322px" gridArea="socials">
      <li>
        <a href="https://github.com/PacoNavarrete" target="_blank">
          <TextXTiny cursor="pointer">Github</TextXTiny>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/francisco-cienfuegos-291619164/"
          target="_blank"
        >
          <TextXTiny cursor="pointer">LinkedIn</TextXTiny>
        </a>
      </li>
    </UListBox>
  );
};

const ContactImages = () => {
  return (
    <FlexBox gridArea="icons" gap="10px">
      <a href="https://github.com/PacoNavarrete" target="_blank">
        <img
          src="https://res.cloudinary.com/paconavarrete/image/upload/v1674247926/RickandMorty/github-logo_dokku0.png"
          width="28px"
          height="28px"
          alt="github icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/francisco-cienfuegos-291619164/"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/paconavarrete/image/upload/v1674248406/RickandMorty/linkedin_ja7eg5.png"
          width="28px"
          height="28px"
          alt="linkedin icon"
        />
      </a>
    </FlexBox>
  );
};

export const MainFooter = () => {
  return (
    <>
      <div className="grid-main-footer">
        <BrandName textAlign="start" gridArea="brand">
          Rick And Morty
        </BrandName>
        <TextMedium margin="auto 0" gridArea="contact">
          Get in touch
        </TextMedium>
        <ContactList />
        <Divider
          gridArea="divider"
          width="100%"
          height="0.5px"
          backgroundColor="#F2F2F2"
        />
        <ContactImages />
        <TextXSmall gridArea="madeby">
          Hand Crafted by Paco Navarrete
        </TextXSmall>
      </div>
    </>
  );
};
