import { TitleLarge } from '../styled_components/TitleLarge';
import { TextMedium } from '../styled_components/TextMedium';
import { ButtonPrimary } from '../styled_components/ButtonPrimary';

export const HomePage = () => {
  return (
    <>
      <TitleLarge>
        Make your own collection of Rick and Morty characters
      </TitleLarge>
      <TextMedium>
        You can search, filter, collect, make notes, and stored it in local
        storage of your browser.
      </TextMedium>
      <img src="" alt="Card image of character" /> <br />
      <ButtonPrimary>
        <h3> Start a collection</h3>
      </ButtonPrimary>
    </>
  );
};
