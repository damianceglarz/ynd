import { ThemeProvider, createGlobalStyle } from "styled-components";

import { theme } from "src/config";
import { pxToRem } from "src/utils/units";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Helvetica, Arial, Arial;
    font-size: ${pxToRem(16)};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x:hidden;
  }
`;

const AppLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default AppLayout;
