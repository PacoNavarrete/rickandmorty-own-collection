import { FlexBox } from '../../styled_components/StyledContainers';
import { PrimaryButton } from '../../styled_components/StyledControls';
import { TextLarge } from '../../styled_components/StyledText';
import { SelectOptions } from './SelectOptions';

export const SelectContentGroup = ({ namesOfLocations, setLocationName }) => {
  return (
    <FlexBox flexFlow="row wrap" justify="space-around" alignItems="center">
      <TextLarge>
        Find your <br /> character
      </TextLarge>
      <SelectOptions
        name="locations"
        options={namesOfLocations}
        setChange={setLocationName}
      />
      <PrimaryButton>Filter</PrimaryButton>
    </FlexBox>
  );
};
