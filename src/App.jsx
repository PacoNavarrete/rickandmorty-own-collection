import { AppRouter } from './router/AppRouter';
import GlobalStyles from './styled_components/GlobalStyles';
import './main.css';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};
