import { createStore } from "redux";
import { createStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user-search";

const store = createStore(userReducer);

export default store;
