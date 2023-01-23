import { useEffect, useState } from 'react';

const useFetchLocations = (locationNum) => {
  const url = `https://rickandmortyapi.com/api/location/${(locationNum)}`;

  const [results, setResults] = useState([]);

  const getNewLocation = async () => {
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
    getNewLocation();
  }, [url]);

  return {
    results,
  };
};

export default useFetchLocations;
