import useFetchLocations from '../hooks/useFetchLocations';

export const LocationsPage = () => {
  console.log(useFetchLocations(1));
  return (
    <>
      <h1>Locations Page</h1>
    </>
  );
};
