import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";
import { ThemeProvider } from "styled-components";
import store from "./store/store";
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

const App = () => {
  return (
    <Provider store={store}>
      <AppLayout>
        <UserSearch />
      </AppLayout>
    </Provider>
  );
};

export default App;
