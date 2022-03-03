import { CustomTheme } from '../../theme';

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}

  interface ThemeOptions extends CustomTheme {}
}
