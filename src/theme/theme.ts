import { createTheme } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export interface CustomTheme {
  bg: {
    main: string;
    light: string;
  };
  text: {
    main: string;
    light: string;
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED1A43',
    },
    secondary: {
      main: '#EFA528',
    },
  },
  bg: {
    main: '#fff',
    light: '#F4F5F7',
  },
  text: {
    main: '#172B4D',
    light: '#262930',
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '4.4rem',
    },
    h2: {
      fontSize: '3.5rem',
    },
  },
});

export default theme;
