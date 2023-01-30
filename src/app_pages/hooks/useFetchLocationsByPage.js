import { useEffect, useState } from 'react';

const useFetchLocationsByPage = (pageNum) => {
  const urlByPage = `https://rickandmortyapi.com/api/location?page=${pageNum}`;

  const [resultsByPage, setResultsByPage] = useState([]);

  // const getCharactersFromReults = (async function(){
  //   let a = await fetch()
  // })()


  const getNewLocationByPage = async () => {
    const resp = await fetch(urlByPage);
    const data = await resp.json();

    try {
      setResultsByPage(data);
    } catch (error) {
      console.warn(
        `data not fetched due to the number of episode: '${episodeNum}', does not exist in the API`
      );
      return;
    }
  };

  useEffect(() => {
    getNewLocationByPage();
  }, [urlByPage]);

  return {
    resultsByPage,
  };
};

export default useFetchLocationsByPage;
