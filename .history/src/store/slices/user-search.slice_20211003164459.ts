import { createSlice } from "@reduxjs/toolkit";
import { ResultUser } from "src/modules/UserSearch/types/UserSearch.types";

type State = {
  loading: boolean;
  error: null | string;
  data: ResultUser[];
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
      state.error = false;
      state.loading = true;
      state.data = [];
    },
    searchSuccess: (state) => {},
    searchError: (state, action) => {
      state.error = action.payload.exception.toString();
    },
  },
});

export default userSlice;
