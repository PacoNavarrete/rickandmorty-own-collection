import { useEffect, useState } from 'react';
import { getArrayOfIds } from '../helpers/getArrayOfIds';

export const useFetchLocations = () => {
  const [namesOfLocations, setNamesOfLocations] = useState([]);

  function getAllLocations() {
    const apiLocation = `https://rickandmortyapi.com/api/location`;
    fetch(apiLocation)
      .then((res) => res.json())
      .then((resParsed) => getArrayOfIds(resParsed.info.count))
      .then((results) => getLocationsByIds(results));
  }

  function getLocationsByIds(arrayOfIds) {
    const apiLocationsByIds = `https://rickandmortyapi.com/api/location/${arrayOfIds}`;
    fetch(apiLocationsByIds)
      .then((res) => res.json())
      .then((locations) => {
        setNamesOfLocations(locations.map((location) => location.name));
      });
  }

  useEffect(() => {
    getAllLocations();
  }, []);

  return {
    namesOfLocations,
  };
};
