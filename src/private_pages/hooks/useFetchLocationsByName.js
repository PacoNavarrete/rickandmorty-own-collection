import { useEffect, useState } from 'react';

const useFetchLocationsByName = (locationName) => {
  const [resultsByName, setResultsByName] = useState([]);
  const [residentsByLocation, setResidentsByLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiByLocation = `https://rickandmortyapi.com/api/location?name=${locationName}`;

  function getLocationByName() {
    fetch(apiByLocation)
      .then((res) => res.json())
      .then((resParsed) => {
        const locationResults = resParsed.results[0];
        setResultsByName(locationResults);
        Promise.all(
          locationResults.residents.map((resident) =>
            fetch(resident).then((res) => res.json())
          )
        ).then((resResidents) => {
          setResidentsByLocation(resResidents);
          setIsLoading(false);
        });
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getLocationByName();
  }, [apiByLocation]);

  return {
    resultsByName,
    residentsByLocation,
    isLoading,
  };
};

export default useFetchLocationsByName;
