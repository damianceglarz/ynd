import { createSlice } from "@reduxjs/toolkit";
import { userActions } from "../actions/store.actions";

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

const getUserBySubstring = (substring: string) => (dispatch) => {
  dispatch(userActions.searchStart);
};

export default userSlice;
