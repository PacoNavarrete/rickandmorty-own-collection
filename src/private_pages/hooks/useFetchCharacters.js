import { useEffect, useState } from 'react';

const useFetchCharacters = (pageNum, search, charStatus, charGender) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}&status=${charStatus}&gender=${charGender}`;

  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  function getData() {
    fetch(url)
      .then((res) => res.json())
      .then((resParsed) => {
        setResults(resParsed.results);
        setPageCount(resParsed.info.pages);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, [url]);

  return {
    results,
    pageCount,
  };
};

export default useFetchCharacters;
