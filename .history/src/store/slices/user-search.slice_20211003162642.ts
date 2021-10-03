import { createSlice } from "@reduxjs/toolkit";
import { userActions } from "../actions/store.actions";
import { AppDispatch } from "../store";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const userSlice = createSlice({
  name: "userSearch",
  initialState,
  reducers: {
    searchStart: (state) => {
      state.error = null;
      state.loading = true;
      state.data = [];

      console.log("asd");
    },
    searchSuccess: (state) => {},
    searchError: (state) => {},
  },
});

const getUserBySubstring =
  (substring: string) => async (dispatch: AppDispatch) => {
    dispatch(userActions.searchStart);

    try {
      await getUserBySubstring(substring);
    } catch (ex) {
      dispatch(userActions.searchError, ex);
    }
  };

export default userSlice;
