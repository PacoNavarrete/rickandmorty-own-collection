import { useEffect, useState } from 'react';

export function useFetchRandomCharacter() {
  const [character, setCharacter] = useState([]);
  const maxCharacterId = 826;
  const id = Math.floor(Math.random() * maxCharacterId);
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((resParsed) => setCharacter(resParsed));
  }, []);

  return { character };
}
