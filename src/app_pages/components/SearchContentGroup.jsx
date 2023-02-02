import { FlexBox } from '../../styled_components/StyledContainers';
import { TextLarge } from '../../styled_components/StyledText';
import { SelectOptions } from './SelectOptions';
import {
  PrimaryButton,
  PrimaryInput,
} from '../../styled_components/StyledControls';

export const SearchContentGroup = ({
  characterName,
  setCharacterName,
  setCharacterStatus,
  setCharacterGender,
}) => {
  const onCharacterChange = (event) => {
    setCharacterName(event.target.value);
  };

  return (
    <FlexBox justify="space-around" alignItems="center">
      <TextLarge>
        Find your <br /> character
      </TextLarge>
      <PrimaryInput
        placeholder="Type the character name"
        alignSelf="center"
        value={characterName}
        onChange={onCharacterChange}
      />
      <SelectOptions
        name="Status"
        options={['', 'Alive', 'Dead', 'Unknow']}
        setChange={setCharacterStatus}
      />

      <SelectOptions
        name="Gender"
        options={['', 'Female', 'Male', 'Genderless', 'unknown']}
        setChange={setCharacterGender}
      />
      <PrimaryButton>Filter</PrimaryButton>
    </FlexBox>
  );
};
