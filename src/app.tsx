import { Logo } from "./logo";
import Hero from "./components/Hero";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";


export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>
    </>
  );
};
