import { useEffect, useState } from 'react';

const useFetchCharacters = (pageNum, search) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}`;

  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const getNewCharacters = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setResults(data.results);

    try {
      setPageCount(data.info.pages);
    } catch (error) {
      console.warn(
        `data not fetched due to '${search}' does not exist in the API`
      );
      return;
    }
  };

  useEffect(() => {
    getNewCharacters();
  }, [url]);

  return {
    results,
    pageCount,
  };
};

export default useFetchCharacters;
