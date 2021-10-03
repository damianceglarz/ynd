import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <UserSearch />
    </Provider>
  );
};

export default App;
