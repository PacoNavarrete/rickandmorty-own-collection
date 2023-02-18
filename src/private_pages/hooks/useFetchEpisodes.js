import { useState } from 'react';
import { getArrayOfIds } from '../helpers/getArrayOfIds';

const useFetchEpisodes = () => {
  const [namesOfEpisodes, setNamesOfEpisodes] = useState([]);

  function getAllEpisodeNames() {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((res) => res.json())
      .then((resParsed) => getArrayOfIds(resParsed.info.count))
      .then((result) => getEpisodesByIds(result));
  }

  function getEpisodesByIds(arrayOfIds) {
    fetch(`https://rickandmortyapi.com/api/episode/${arrayOfIds}`)
      .then((res) => res.json())
      .then((results) => results.map((result) => result.episode))
      .then((episodes) => setNamesOfEpisodes(episodes));
  }

  getAllEpisodeNames();

  return {
    namesOfEpisodes,
  };
};

export default useFetchEpisodes;
