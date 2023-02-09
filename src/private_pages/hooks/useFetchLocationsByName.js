import { useEffect, useState } from 'react';

const useFetchLocationsByName = (locationName) => {
  const urlByName = `https://rickandmortyapi.com/api/location?name=${locationName}`;

  const [resultsByName, setResultsByName] = useState([]);
  const [residentsByLocation, setResidentsByLocation] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(false)
  }, [residentsByLocation]);

  const getNewLocationByName = async () => {
    setLoadingState(true);
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
        `data not fetched due to the number of episode: does not exist in the API`
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
    loadingState,
  };
};

export default useFetchLocationsByName;
