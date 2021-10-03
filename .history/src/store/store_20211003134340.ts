import { createStore } from "redux";
import userReducer from "./slices/user-search.slice";

const store = createStore(userReducer);

export default store;
