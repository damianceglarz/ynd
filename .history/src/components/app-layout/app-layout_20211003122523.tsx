import { ThemeProvider,import { createGlobalStyle } from "styled-components";

import theme from "src/config/theme";
import { pxToRem } from "src/utils/units";

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
