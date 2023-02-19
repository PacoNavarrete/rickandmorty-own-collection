import { useState, useEffect } from 'react';
import { getArrayOfIds } from '../helpers/getArrayOfIds';

const useFetchEpisodes = () => {
  const [namesOfEpisodes, setNamesOfEpisodes] = useState([]);

  function getAllEpisodeNames() {
    const apiEpisodes = 'https://rickandmortyapi.com/api/episode';
    fetch(apiEpisodes)
      .then((res) => res.json())
      .then((resParsed) => getArrayOfIds(resParsed.info.count))
      .then((result) => getEpisodesByIds(result));
  }

  function getEpisodesByIds(arrayOfIds) {
    const apiCharactersByEpisodeIds = `https://rickandmortyapi.com/api/episode/${arrayOfIds}`;
    fetch(apiCharactersByEpisodeIds)
      .then((res) => res.json())
      .then((results) => results.map((result) => result.episode))
      .then((episodes) => setNamesOfEpisodes(episodes));
  }

  useEffect(() => {
    getAllEpisodeNames();
  }, []);

  return {
    namesOfEpisodes,
  };
};

export default useFetchEpisodes;
