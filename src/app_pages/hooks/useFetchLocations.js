import { useEffect, useState } from 'react';

export const useFetchLocations = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [locationsList, setLocationsList] = useState([]);
  const [namesOfLocations, setNamesOfLocations] = useState([]);

  const url = `https://rickandmortyapi.com/api/location`;

  // getLocationsprocess: get the number of locations,
  // and usit with getLocationsById to get all the locations by the array of ids.
  const getLocationsProcess = async () => {

    const data = await fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(({ info }) => {
        getLocationsByIds(info.count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Final process to get all the location names
  const getLocationsByIds = async (count) => {

    const arrayOfIds = new Array(count);

    for (let i = 0; i < count; i++) {
      arrayOfIds[i] = i + 1;
    }

    const locationNames = await fetch(
      `https://rickandmortyapi.com/api/location/${arrayOfIds}`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((locations) => {
        setLocationsList(locations);
        setNamesOfLocations(locations.map((location) => location.name));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLocationsProcess();
  }, []);

  return {
    locationsList,
    namesOfLocations,
  };
};
