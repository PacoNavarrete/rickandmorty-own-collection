import { useEffect, useState } from 'react';

const useFetchLocationsByName = (locationName) => {
  const urlByName = `https://rickandmortyapi.com/api/location?name=${locationName}`;

  const [resultsByName, setResultsByName] = useState([]);

  const [residentsByLocation, setResidentsByLocation] = useState([]);

  const getNewLocationByName = async () => {
    const resp = await fetch(urlByName);
    const data = await resp.json();

    let residents = await Promise.all(
      data.results[0].residents.map(async (character) => {
        return fetch(character).then((resp) => resp.json());
      })
    );

    try {
      setResultsByName(data.results[0]);
      setResidentsByLocation(residents);
    } catch (error) {
      console.warn(
        `data not fetched due to the number of episode: '${episodeNum}', does not exist in the API`
      );
      return;
    }
  };

  useEffect(() => {
    getNewLocationByName();
  }, [urlByName]);

  return {
    resultsByName,
    residentsByLocation,
  };
};

export default useFetchLocationsByName;
