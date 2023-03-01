import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TextXSmall, TextXTiny } from '../../styled_components/StyledText';
import { FlexBox } from '../../styled_components/StyledContainers';
import {
  PrimaryInput,
  PrimaryButton,
} from '../../styled_components/StyledControls';
import { Link } from 'react-router-dom';

const ContreledInput = ({ name, setName }) => {
  return (
    <>
      <PrimaryInput
        required
        placeholder="Type your name"
        autoFocus={true}
        textAlign="center"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <PrimaryButton>
        <TextXSmall size="12px" thickness="200" align="center">
          Crate Account
        </TextXSmall>
      </PrimaryButton>
    </>
  );
};

export const FormLogin = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    login(name);
    setName('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FlexBox
          flexFlow="column nowrap"
          justify="center"
          alignItems="center"
          gap="15px"
        >
          <ContreledInput name={name} setName={setName} />
          <Link to="/">
            <TextXTiny>Go Back to Home</TextXTiny>
          </Link>
        </FlexBox>
      </form>
    </>
  );
};
