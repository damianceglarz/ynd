import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";
import store from "./store/store";
import { createGlobalStyle } from "styled-components";
import { pxToRem } from "./utils/units";
import { AppLayout } from "./components";

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
