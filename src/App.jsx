import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';
import { MainFooter } from './navigation/footer/MainFooter';
import GlobalStyles from './styled_components/GlobalStyles';
import './main.css';

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
