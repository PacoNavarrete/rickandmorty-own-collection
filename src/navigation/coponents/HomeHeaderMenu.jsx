import { UListBox } from '../../styled_components/StyledNavigation';
import { TextXTiny } from '../../styled_components/StyledText';
import { Link } from 'react-router-dom';

export const HomeHeaderMenu = ({ refHowItWorks }) => {
  function onScrollToRef() {
    refHowItWorks.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <UListBox flexFlow="row nowrap" width="300px" color="#fff">
      <li>
        <Link to="/login">
          <TextXTiny cursor="pointer">MY COLLECTION</TextXTiny>
        </Link>
      </li>
      <li>
        <TextXTiny cursor="pointer" onClick={onScrollToRef}>
          HOW IT WORKS
        </TextXTiny>
      </li>
    </UListBox>
  );
};
