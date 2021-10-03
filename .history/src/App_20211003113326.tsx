import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";
import { ThemeProvider } from "styled-components";
import store from "./store/store";
import theme from "./config/theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <UserSearch />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
