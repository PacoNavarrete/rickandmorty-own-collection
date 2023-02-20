import { useEffect, useState } from 'react';
import { handleFetchRequest } from '../helpers/handleFetcRequest';

export const useFetchCharacterById = (id) => {
  const [missingCharacter, setMissingCharacter] = useState(false);
  const [characterResult, setCaharacterResult] = useState({
    name: '',
    originName: '',
    gender: '',
    species: '',
    status: '',
    urlImage: '',
  });

  const apiCharacter = `https://rickandmortyapi.com/api/character/${id}`;
  function getCharacter() {
    fetch(apiCharacter)
      .then((res) => handleFetchRequest(res))
      .then((resParsed) =>
        setCaharacterResult({
          name: resParsed.name,
          originName: resParsed.origin.name,
          gender: resParsed.gender,
          species: resParsed.species,
          status: resParsed.status,
          urlImage: resParsed.image,
        })
      )
      .catch((err) => {
        console.warn(err);
        setMissingCharacter(true);
      });
  }

  useEffect(() => getCharacter(), []);

  return {
    characterResult,
    missingCharacter,
  };
};
