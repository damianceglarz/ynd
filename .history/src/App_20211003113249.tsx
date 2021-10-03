import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";
import { ThemeProvider } from "styled-components";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserSearch />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
