import useFetchEpisodes from "../hooks/useFetchEpisodes";

export const EpisodesPage = () => {

  console.log(useFetchEpisodes(2))

  return (
    <h1>Episodes page</h1>
  );
};
