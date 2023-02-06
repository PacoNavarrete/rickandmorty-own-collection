import { FlexBox } from '../../styled_components/StyledContainers';
import { SelectorInput } from '../../styled_components/StyledControls';
import { TextXTiny } from '../../styled_components/StyledText';

export const SelectOptions = ({ options, name, setChange }) => {
  const handleChangeOption = (event) => {
    setChange(event.target.value);
  };

  return (
    <FlexBox flexFlow="column nowrap">
      <label htmlFor={name + 'selector'}>
        <TextXTiny>{name}:</TextXTiny>
      </label>
      <SelectorInput
        name={name}
        id={name + 'selector'}
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
