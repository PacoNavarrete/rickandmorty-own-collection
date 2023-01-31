import { AppBurgerMenu } from "../../navigation/coponents/AppBurgerMenu";
import useFetchEpisodes from "../hooks/useFetchEpisodes";

export const EpisodesPage = () => {

  console.log(useFetchEpisodes(2))

  return (
    <>
      <AppBurgerMenu/>
      <h1>Episodes page</h1>
    </>
  );
};
