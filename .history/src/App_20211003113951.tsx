import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";
import { ThemeProvider } from "styled-components";
import store from "./store/store";
import theme from "./config/theme";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`

const App = () => {
  return (
    <GlobalStyle whiteColor />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <UserSearch />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
