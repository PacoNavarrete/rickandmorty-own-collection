import { useEffect, useState } from 'react';

const useFetchEpisodesByName = (episodeName) => {
  const urlByName = `https://rickandmortyapi.com/api/episode?episode=${episodeName}`;

  const [resultsByName, setResultsByName] = useState([]);
  const [residentsByEpisode, setResidentsByEpisode] = useState([]);

  const getNewEpisodesByName = async () => {
    const resp = await fetch(urlByName);
    const data = await resp.json();

    let residents = await Promise.all(
      data.results[0].characters.map(async (character) => {
        return fetch(character).then((resp) => resp.json());
      })
    );

    try {
      setResultsByName(data.results[0]);
      setResidentsByEpisode(residents);
    } catch (error) {
      console.warn(
        `data not fetched due to the number of episode: does not exist in the API`
      );
      return;
    }
  };

  useEffect(() => {
    getNewEpisodesByName();
  }, [urlByName]);

  return {
    resultsByName,
    residentsByEpisode,
  };
};

export default useFetchEpisodesByName;
