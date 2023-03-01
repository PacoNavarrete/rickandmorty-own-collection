import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

import { AppRoutes } from '../private_pages/routes/AppRoutes';
import { LoginPage } from '../auth/pages/LoginPage';
import { HomePage } from '../public_pages/pages/HomePage';
import { BurgerNavigation } from '../navigation/footer/BurgerNavigation';
import { MainFooter } from '../navigation/footer/MainFooter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        }
      />
      <Route
        path="/"
        element={
          <PublicRoutes>
            <HomePage />
            <MainFooter />
          </PublicRoutes>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <AppRoutes />
            <MainFooter />
            <BurgerNavigation />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
