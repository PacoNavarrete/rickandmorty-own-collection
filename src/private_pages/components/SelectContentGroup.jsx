import { FlexBox } from '../../styled_components/StyledContainers';
import { TextLarge } from '../../styled_components/StyledText';
import { SelectOptions } from './SelectOptions';

export const SelectContentGroup = ({ names, setName, description }) => {
  return (
    <FlexBox
      flexFlow="row wrap"
      gap="30px"
      margin="30px"
      justify="center"
      alignItems="end"
    >
      <TextLarge>{description}</TextLarge>
      <SelectOptions name={description} options={names} setChange={setName} />
    </FlexBox>
  );
};
