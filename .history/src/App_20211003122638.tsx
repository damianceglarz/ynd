import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";
import store from "./store/store";
import { createGlobalStyle } from "styled-components";
import { pxToRem } from "./utils/units";
import { AppLayout } from "./components";

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
