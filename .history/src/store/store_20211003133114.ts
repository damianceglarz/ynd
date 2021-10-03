import { createStore } from "redux";

import userReducer from "./reducers/user-search";

const store = createStore(userReducer);

export default store;
