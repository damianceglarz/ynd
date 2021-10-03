import { Provider } from "react-redux";
import { UserSearch } from "./modules/UserSearch";

const App = () => {
  return (
    <Provider store={store}>
      <UserSearch />
    </Provider>
  );
};

export default App;
