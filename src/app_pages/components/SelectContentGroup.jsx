import { FlexBox } from '../../styled_components/StyledContainers';
import { PrimaryButton } from '../../styled_components/StyledControls';
import { TextLarge } from '../../styled_components/StyledText';
import { SelectOptions } from './SelectOptions';

export const SelectContentGroup = ({ names, setName, description }) => {
  return (
    <FlexBox
      flexFlow="row wrap"
      gap="30px"
      margin="0 30px"
      justify="center"
      alignItems="center"
    >
      <TextLarge>{description}</TextLarge>
      <SelectOptions name="locations:" options={names} setChange={setName} />
      <PrimaryButton>Filter</PrimaryButton>
    </FlexBox>
  );
};
