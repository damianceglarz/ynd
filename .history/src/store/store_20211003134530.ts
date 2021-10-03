import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user-search.reducer";

const store = configureStore(userReducer);

export default store;
