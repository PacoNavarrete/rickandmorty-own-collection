import { useState } from 'react';
import { FlexBox } from '../../styled_components/StyledContainers';
import { TextXTiny } from '../../styled_components/StyledText';
import {
  EditButton,
  PaginationButton,
  PaginationInput,
} from '../../styled_components/StyledControls';

const PaginationContainer = ({ children }) => {
  return (
    <FlexBox
      width="270px"
      height="45px"
      backgroundColor="green"
      radius="5px"
      gap="15px"
      justify="center"
      alignItems="center"
      position="sticky"
      bottomPos="30px"
      margin="90px auto"
      boxShadow="0px 10px 30px #000"
    >
      {children}
    </FlexBox>
  );
};

const PrevButton = (props) => {
  const { inputValue, totalPages, inputAsNumber, setInputValue, setPage } =
    props;
  function onClickPrev() {
    if (inputValue > totalPages) return;
    setInputValue(inputAsNumber - 1);
    setPage(inputAsNumber - 1);
  }
  return (
    <PaginationButton
      disabled={inputAsNumber <= 1 ? true : false}
      onClick={onClickPrev}
    >
      ◀ <br /> Prev
    </PaginationButton>
  );
};

const NextButton = (props) => {
  const { inputValue, inputAsNumber, totalPages, setPage, setInputValue } =
    props;

  function onClickNext() {
    if (inputValue < 1) return;
    setInputValue(inputAsNumber + 1);
    setPage(inputAsNumber + 1);
  }
  return (
    <PaginationButton
      disabled={inputAsNumber >= totalPages ? true : false}
      onClick={onClickNext}
    >
      ▶ <br /> Next
    </PaginationButton>
  );
};

const FormContainer = ({ children }) => {
  return (
    <FlexBox
      width="75px"
      radius="5px"
      justify="center"
      alignItems="center"
      border="1px solid green"
    >
      {children}
    </FlexBox>
  );
};

const SeachCharacterForm = (props) => {
  const {
    inputValue,
    inputAsNumber,
    setInputValue,
    setPage,
    totalPages,
    editInput,
  } = props;

  function onSubmitInput(event) {
    event.preventDefault();

    if (inputAsNumber > 0 && inputAsNumber <= totalPages) {
      setInputValue(inputAsNumber);
      setPage(inputAsNumber);
    } else {
      setInputValue(1);
      setPage(1);
    }
    setEditInput(true);
  }
  return (
    <form onSubmit={onSubmitInput}>
      <PaginationInput
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        min={1}
        max={totalPages}
        disabled={editInput}
      />
      {!editInput && <EditButton>↩</EditButton>}
    </form>
  );
};

export const OwnPagination = (props) => {
  const { totalPages, setPage, setInputValue, inputValue } = props;
  const inputAsNumber = Number(inputValue);
  const [editInput, setEditInput] = useState(true);

  return (
    <>
      <PaginationContainer>
        <PrevButton
          inputValue={inputValue}
          totalPages={totalPages}
          inputAsNumber={inputAsNumber}
          setInputValue={setInputValue}
          setPage={setPage}
        />
        <FormContainer>
          <SeachCharacterForm
            inputValue={inputValue}
            inputAsNumber={inputAsNumber}
            setInputValue={setInputValue}
            setPage={setPage}
            totalPages={totalPages}
            editInput={editInput}
          />
          {editInput && (
            <EditButton className="rote" onClick={() => setEditInput(false)}>
              ✏
            </EditButton>
          )}
        </FormContainer>
        <TextXTiny>of {totalPages}</TextXTiny>
        <NextButton
          inputValue={inputValue}
          totalPages={totalPages}
          inputAsNumber={inputAsNumber}
          setInputValue={setInputValue}
          setPage={setPage}
        />
      </PaginationContainer>
    </>
  );
};
