import { Route, Routes, Navigate } from 'react-router-dom';
import { AppNav } from '../../navigation/header/AppNav';
import {
  CharacterPage,
  EpisodesPage,
  LocationsPage,
  MyCollection,
  SearchPage,
} from '../pages';

export const PrivateAppRoutes = () => {
  return (
    <>
      <AppNav />
      <Routes>
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/Episodes" element={<EpisodesPage />} />
        <Route path="/Locations" element={<LocationsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/my-collection" element={<MyCollection />} />

        <Route path="/" element={<Navigate to="/search" />} />
      </Routes>
    </>
  );
};
