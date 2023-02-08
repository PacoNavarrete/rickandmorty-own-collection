import { useEffect, useState } from 'react';
import { FlexBox } from '../../styled_components/StyledContainers';
import { PaginationButton, PaginationInput } from '../../styled_components/StyledControls';

export const OwnPagination = () => {
  // state of the page number used to display it into the input
  const [inputValue, setInputValue] = useState(1);
  const inputAsNumber = Number(inputValue);
  // state of the page number used to render the pagination in the app
  const [renderPage, setRenderPage] = useState(1);
  const [editInput, setEditInput] = useState(true);

  useEffect(() => {
    console.log('Cambiar a la pagina:');
    console.log(renderPage);
  }, [renderPage]);

  const total = 30;

  const onNextPage = () => {
    setInputValue(inputAsNumber + 1);
    setRenderPage(inputAsNumber + 1);
  };

  const onPrevPage = () => {
    setInputValue(inputAsNumber - 1);
    setRenderPage(inputAsNumber - 1);
  };

  const onSubmitInput = (event) => {
    event.preventDefault();
    setEditInput(true);
    setRenderPage(inputAsNumber);
  };

  return (
    <>
      <FlexBox>
        <PaginationButton
          disabled={inputAsNumber <= 1 ? true : false}
          onClick={onPrevPage}
        >
          Prev
        </PaginationButton>
        <form onSubmit={onSubmitInput}>
          <PaginationInput
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min={1}
            max={total}
            disabled={editInput}
          />
          {!editInput ? <button>Go</button> : ''}
        </form>
        {!editInput ? (
          ''
        ) : (
          <button onClick={() => setEditInput(false)}>Edit</button>
        )}
        <div>of {total}</div>
        <button
          onClick={onNextPage}
          disabled={inputAsNumber >= total ? true : false}
        >
          Next
        </button>
      </FlexBox>
    </>
  );
};
