import { useEffect, useState } from 'react';

const useFetchEpisodesByName = (episodeName) => {
  const urlByName = `https://rickandmortyapi.com/api/episode?episode=${episodeName}`;

  const [resultsByName, setResultsByName] = useState([]);
  const [residentsByEpisode, setResidentsByEpisode] = useState([]);

  function getEpisodeByName() {
    fetch(urlByName)
      .then((res) => res.json())
      .then((resParsed) => {
        getcharactersByEpisode(resParsed);
        setResultsByName(resParsed.results[0]);
      });
  }

  function getcharactersByEpisode(resParsed) {
    const arrOfCharactersByUrl = resParsed.results[0].characters;
    arrOfCharactersByUrl.map((character) =>
      fetch(character)
        .then((res) => res.json())
        .then((charactersParsed) => {
          // setResidentsByEpisode(charactersParsed)
          console.log(charactersParsed);
        })
    );
  }

  async function getAllCharactersByEpisode(resParsed) {
    const arrOfCharacterByUrl = resParsed.results[0].characters;
    const promiseAll = new Promise.all()

  }

  useEffect(() => {
    getEpisodeByName();
  }, [urlByName]);

  return {
    resultsByName,
    residentsByEpisode,
  };
};

export default useFetchEpisodesByName;
