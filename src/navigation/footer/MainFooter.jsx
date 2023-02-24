import { Link } from 'react-router-dom';
import { FlexBox } from '../../styled_components/StyledContainers';
import { UListBox } from '../../styled_components/StyledNavigation';
import {
  BrandName,
  TextMedium,
  TextXSmall,
  TextXTiny,
} from '../../styled_components/StyledText';
import { Divider } from '../../styled_components/StyledUtils';

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
        <UListBox color="#fff" width="322px" gridArea="socials">
          <li>
            <Link to="https://github.com/PacoNavarrete">
              <TextXTiny cursor="pointer">Github</TextXTiny>
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/francisco-cienfuegos-291619164/">
              <TextXTiny cursor="pointer">LinkedIn</TextXTiny>
            </Link>
          </li>
        </UListBox>
        <Divider
          gridArea="divider"
          width="100%"
          height="0.5px"
          backgroundColor="#F2F2F2"
        />
        <FlexBox gridArea="icons" gap="10px">
          <img
            src="https://res.cloudinary.com/paconavarrete/image/upload/v1674247926/RickandMorty/github-logo_dokku0.png"
            width="28px"
            height="28px"
            alt="github icon"
          />
          <img
            src="https://res.cloudinary.com/paconavarrete/image/upload/v1674248406/RickandMorty/linkedin_ja7eg5.png"
            width="28px"
            height="28px"
            alt="linkedin icon"
          />
        </FlexBox>
        <TextXSmall gridArea="madeby">
          &lt; developed /&gt; by Paco Navarrete
        </TextXSmall>
      </div>
    </>
  );
};
