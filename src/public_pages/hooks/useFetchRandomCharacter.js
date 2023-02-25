import { useEffect, useState } from 'react';

export function useFetchRandomCharacter() {
  const [character, setCharacter] = useState([]);
  const maxCharacterId = 826;
  const randomId = Math.floor(Math.random() * maxCharacterId);

  const api = `https://rickandmortyapi.com/api/character/${randomId}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((resParsed) => setCharacter(resParsed));
  }, []);

  return { character };
}
