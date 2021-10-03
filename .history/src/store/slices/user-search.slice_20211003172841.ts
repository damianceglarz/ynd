import { createSlice } from "@reduxjs/toolkit";
import { ResultRepository } from "src/modules/UserSearch/types/UserSearch.types";

type State = {
  searchString: string;
  loading: boolean;
  error: null | string;
  data: ResultRepository[];
};

const initialState: State = {
  searchString: "",
  loading: false,
  error: null,
  data: [],
};

const userSlice = createSlice({
  name: "userSearch",
  initialState,
  reducers: {
    setUserSearchString: (state, action) => {
      state.searchString = action.payload.substring;
      state.data = [];
    },
    searchStart: (state, action) => {
      state.searchString = action.payload.substring;
      state.error = null;
      state.loading = true;
      state.data = [];
    },
    searchSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.data;
    },
    searchError: (state, action) => {
      state.searchString = "";
      state.loading = false;
      state.data = [];
      if (action.payload.exception.response?.status === 404) {
        state.error = "User not found";
      } else {
        state.error = action.payload.exception;
      }
    },
  },
});

export default userSlice;
