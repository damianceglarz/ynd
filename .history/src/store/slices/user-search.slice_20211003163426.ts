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

export default userSlice;
