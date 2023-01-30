import { useEffect, useState } from 'react';

export const useFetchLocations = () => {

  const [locationsList, setLocationsList] = useState([]);
  const [namesOfLocations, setNamesOfLocations] = useState([]);

  const url = `https://rickandmortyapi.com/api/location`;

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

  const getLocations = async () => {
    const data = await fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(({ info }) => {
        getLocationsByIds(info.count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLocations();
  }, []);

  return {
    locationsList,
    namesOfLocations,
  };
};
