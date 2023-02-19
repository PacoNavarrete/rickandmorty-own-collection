import { useEffect, useState } from 'react';

const useFetchEpisodesByName = (episodeName) => {
  const [resultsByName, setResultsByName] = useState([]);
  const [residentsByEpisode, setResidentsByEpisode] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiEpisodeByName = `https://rickandmortyapi.com/api/episode?episode=${episodeName}`;

  function getEpisodeByName() {
    fetch(apiEpisodeByName)
      .then((res) => res.json())
      .then((resParsed) => {
        getcharactersByEpisode(resParsed);
        setResultsByName(resParsed.results[0]);
      });
  }

  function getcharactersByEpisode(resParsed) {
    const arrOfCharactersByUrl = resParsed.results[0].characters;
    Promise.all(
      arrOfCharactersByUrl.map((character) =>
        fetch(character).then((characters) => characters.json())
      )
    ).then((result) => {
      setResidentsByEpisode(result);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    getEpisodeByName();
  }, [apiEpisodeByName]);

  return {
    resultsByName,
    residentsByEpisode,
    isLoading,
  };
};

export default useFetchEpisodesByName;
