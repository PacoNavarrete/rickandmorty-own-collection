import { Route, Routes, Navigate } from 'react-router-dom';
import { AppNav } from '../../navigation/header/AppNav';
import { CharacterProvider } from '../context/CharacterProvider';
import {
  CharacterPage,
  EpisodesPage,
  LocationsPage,
  MyCollection,
  SearchPage,
} from '../pages';

export const AppRoutes = () => {
  return (
    <>
      <AppNav />
      <CharacterProvider>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/Locations" element={<LocationsPage />} />
          <Route path="/Episodes" element={<EpisodesPage />} />
          <Route path="/my-collection" element={<MyCollection />} />
          <Route path="/character/:id" element={<CharacterPage />} />

          <Route path="/" element={<Navigate to="/search" />} />
        </Routes>
      </CharacterProvider>
    </>
  );
};
