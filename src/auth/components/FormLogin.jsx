import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TextXSmall } from '../../styled_components/StyledText';
import { FlexBox } from '../../styled_components/StyledContainers';
import {
  PrimaryInput,
  PrimaryButton,
} from '../../styled_components/StyledControls';

export const FormLogin = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
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
        </FlexBox>
      </form>
    </>
  );
};
