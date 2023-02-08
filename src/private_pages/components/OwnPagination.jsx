import { useEffect, useState } from 'react';
import { FlexBox } from '../../styled_components/StyledContainers';
import { TextXTiny } from '../../styled_components/StyledText';
import {
  EditButton,
  PaginationButton,
  PaginationInput,
} from '../../styled_components/StyledControls';

export const OwnPagination = ({ totalPages, setPage }) => {
  // state of the page number used to display it into the input
  const [inputValue, setInputValue] = useState(1);
  const inputAsNumber = Number(inputValue);
  // state of the page number used to render the pagination in the app
  const [renderPage, setRenderPage] = useState(1);
  const [editInput, setEditInput] = useState(true);

  useEffect(() => {
    setPage(renderPage);
  }, [renderPage]);

  const total = totalPages;

  const onNextPage = () => {
    if (inputValue < 1) return;
    setInputValue(inputAsNumber + 1);
    setRenderPage(inputAsNumber + 1);
  };

  const onPrevPage = () => {
    if (inputValue > total) return;
    setInputValue(inputAsNumber - 1);
    setRenderPage(inputAsNumber - 1);
  };

  const onSubmitInput = (event) => {
    event.preventDefault();

    if (inputAsNumber > 0 && inputAsNumber <= total) {
      setInputValue(inputAsNumber);
      setRenderPage(inputAsNumber);
    } else {
      setInputValue(1);
      setRenderPage(1);
    }
    setEditInput(true);
  };

  return (
    <>
      <FlexBox
        width="300px"
        backgroundColor="black"
        radius="5px"
        gap="15px"
        justify="center"
        alignItems="center"
        position="sticky"
        bottomPos="30px"
        margin="0 auto"
      >
        <PaginationButton
          disabled={inputAsNumber <= 1 ? true : false}
          onClick={onPrevPage}
        >
          ◀ Prev
        </PaginationButton>
        <FlexBox
          width="75px"
          radius="5px"
          justify="center"
          alignItems="center"
          border="1px solid green"
        >
          <form onSubmit={onSubmitInput}>
            <PaginationInput
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              min={1}
              max={total}
              disabled={editInput}
            />
            {!editInput ? <EditButton>↩</EditButton> : ''}
          </form>
          {!editInput ? (
            ''
          ) : (
            <EditButton className="rote" onClick={() => setEditInput(false)}>
              ✏
            </EditButton>
          )}
        </FlexBox>
        <TextXTiny>of {total}</TextXTiny>
        <PaginationButton
          onClick={onNextPage}
          disabled={inputAsNumber >= total ? true : false}
        >
          Next ▶
        </PaginationButton>
      </FlexBox>
    </>
  );
};
