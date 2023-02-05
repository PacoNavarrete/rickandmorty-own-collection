import { AppRouter } from './router/AppRouter';
import GlobalStyles from './styled_components/GlobalStyles';
import './main.css';
import { AuthProvider } from './auth/context/AuthProvider';

export const App = () => {
  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <AppRouter />
      </AuthProvider>
    </>
  );
};
