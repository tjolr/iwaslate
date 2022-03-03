import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import { RecoilRoot } from 'recoil';
import MainPage from './components/MainPage';

export const App = () => {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <MainPage />
          </SnackbarProvider>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};
