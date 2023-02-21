import { AppRouter } from './router/AppRouter';
import GlobalStyles from './styled_components/GlobalStyles';
import './main.css';
import { AuthProvider } from './auth/context/AuthProvider';
import { MainFooter } from './navigation/footer/MainFooter';

export const App = () => {
  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <AppRouter />
        <MainFooter />
      </AuthProvider>
    </>
  );
};
