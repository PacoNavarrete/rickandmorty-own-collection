import { useEffect, useState } from 'react';

const useFetchEpisodes = (episodeNum) => {
  const [isLoading, setIsLoading] = useState(false);
  const [episodesList, setEpisodesList] = useState([]);
  const [namesOfEpisodes, setNamesOfEpisodes] = useState([]);

  const url = `https://rickandmortyapi.com/api/episode`;

  async function getEpisodesProcess() {
    const data = await fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(({ info }) => getEpisodesByIds(info.count));
  }
  getEpisodesProcess();
};

async function getEpisodesByIds(count) {
  const arrayOfIds = new Array(count);

  for (let i = 0; i < count; i++) {
    arrayOfIds[i] = i + 1;
  }

  const episodesNames = await fetch(
    `https://rickandmortyapi.com/api/episode/${arrayOfIds}`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((episodes) => {
      console.log(episodes);
    });
}

export default useFetchEpisodes;
