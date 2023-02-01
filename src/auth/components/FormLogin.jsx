import { TextXSmall } from '../../styled_components/StyledText';
import { FlexBox } from '../../styled_components/StyledContainers';
import {
  PrimaryInput,
  PrimaryButton,
} from '../../styled_components/StyledControls';
import { useState } from 'react';

export const FormLogin = () => {
  const [name, setName] = useState('');
  const [user, setUserLoged] = useState({
    userName: '',
    userLoged: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    setUserLoged({
      userName: name,
      userLoged: true,
    });
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
