import { createSlice } from "@reduxjs/toolkit";
import { ResultRepository } from "src/modules/UserSearch/types/UserSearch.types";

type State = {
  loading: boolean;
  error: null | string;
  data: ResultRepository[];
};

const initialState: State = {
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
    },
    searchSuccess: (state, action) => {
      state.error = null;
      state.loading = true;
      state.data = action.payload.data;
    },
    searchError: (state, action) => {
      if (action.payload.exception.response?.status === 404) {
        state.error = "User not found";
      } else {
        state.error = action.payload.exception;
      }
    },
  },
});

export default userSlice;
