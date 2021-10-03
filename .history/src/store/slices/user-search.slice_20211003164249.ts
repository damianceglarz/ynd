import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
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
    searchSuccess: (state) => {},
    searchError: (state, action) => {
      state.error = action.payload.exception.toString();
    },
  },
});

export default userSlice;
