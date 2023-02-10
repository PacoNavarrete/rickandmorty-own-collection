import { FlexBox } from '../../styled_components/StyledContainers';
import { TextLarge } from '../../styled_components/StyledText';
import { SelectOptions } from './SelectOptions';
import { PrimaryInput } from '../../styled_components/StyledControls';

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
    <FlexBox
      flexFlow="row wrap"
      justify="center"
      alignItems="center"
      gap="50px"
      margin="0 30px"
    >
      <FlexBox flexFlow="column nowrap" gap="30px">
        <TextLarge>
          Find your <br /> character
        </TextLarge>
        <PrimaryInput
          width="300px"
          placeholder="Type the character name"
          alignSelf="center"
          value={characterName}
          onChange={onCharacterChange}
        />
      </FlexBox>
      <FlexBox flexFlow="row nowrap" gap="30px">
        <SelectOptions
          name="Status"
          options={['select', 'Alive', 'Dead', 'Unknow']}
          setChange={setCharacterStatus}
        />
        <SelectOptions
          name="Gender"
          options={['select', 'Female', 'Male', 'Genderless', 'unknown']}
          setChange={setCharacterGender}
        />
      </FlexBox>
    </FlexBox>
  );
};
