import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import { createGlobalStyle } from "styled-components";
import { pxToRem } from "./utils/units";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Helvetica, Arial, Arial;
    font-size: ${pxToRem(16)};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const AppLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserSearch />
    </ThemeProvider>
  );
};

export default AppLayout;
