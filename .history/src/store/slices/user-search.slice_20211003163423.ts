import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { userActions } from "../actionCreators/store.actions";
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
    searchError: (state, action) => {},
  },
});

const getUserBySubstring =
  (substring: string) => async (dispatch: AppDispatch) => {
    dispatch(userActions.searchStart);

    try {
      const response = await getUserBySubstring(substring);

      console.log(response);
      // dispatch(userActions.searchError({ data: ex }));
    } catch (ex) {
      dispatch(userActions.searchError({ exception: ex }));
    }
  };

export default userSlice;
