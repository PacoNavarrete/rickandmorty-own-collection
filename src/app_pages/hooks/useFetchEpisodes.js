import { useEffect, useState } from 'react';

const useFetchEpisodes = (episodeNum) => {
  const url = `https://rickandmortyapi.com/api/episode/${episodeNum}`;

  const [results, setResults] = useState([]);

  const getNewEpisode = async () => {
    const resp = await fetch(url);
    const data = await resp.json();

    try {
      setResults(data);
    } catch (error) {
      console.warn(
        `data not fetched due to the number of episode: '${episodeNum}', does not exist in the API`
      );
      return;
    }
  };

  useEffect(() => {
    getNewEpisode();
  }, [url]);

  return {
    results,
  };
};

export default useFetchEpisodes;
