import Hero from "./components/Hero";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { SnackbarProvider } from "notistack";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Hero />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};
