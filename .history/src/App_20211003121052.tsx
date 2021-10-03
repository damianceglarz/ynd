import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";
import { ThemeProvider } from "styled-components";
import store from "./store/store";
import theme from "./config/theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
    *{

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    }
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserSearch />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
