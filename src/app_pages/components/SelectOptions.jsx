import { FlexBox } from '../../styled_components/StyledContainers';
import { SelectorInput } from '../../styled_components/StyledControls';
import { TextXTiny } from '../../styled_components/StyledText';

export const SelectOptions = ({ options, name, setChange }) => {
  
  const handleChangeOption = (event) => {
    setChange(event.target.value);
  };

  return (
    <FlexBox flexFlow="column nowrap">
      <TextXTiny>{name}</TextXTiny>
      <SelectorInput
        name={name}
        id={name + 'solector'}
        onChange={handleChangeOption}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </SelectorInput>
    </FlexBox>
  );
};