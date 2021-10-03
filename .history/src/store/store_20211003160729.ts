import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-search.slice";

const store = configureStore({
  reducer: {
    user: userReducer.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
