import { Route, Routes } from 'react-router-dom';

import {LoginPage} from '../auth/pages/LoginPage'

import {
  CharacterPage,
  FilterPage,
  SearchPage,
  MyCollection,
  HomePage,
} from '../app_pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/my-collection" element={<MyCollection />} />
    </Routes>
  );
};
