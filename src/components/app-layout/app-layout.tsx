import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { pxToRem } from 'src/utils/units';

import { theme } from 'src/config';

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
