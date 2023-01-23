import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth/pages/LoginPage';

import {
  CharacterPage,
  SearchPage,
  MyCollection,
  HomePage,
  EpisodesPage,
  LocationsPage,
} from '../app_pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/Episodes" element={<EpisodesPage />} />
      <Route path="/Locations" element={<LocationsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/my-collection" element={<MyCollection />} />
    </Routes>
  );
};
