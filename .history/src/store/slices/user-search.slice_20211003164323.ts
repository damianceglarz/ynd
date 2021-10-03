import { createSlice } from "@reduxjs/toolkit";

const initialState: <{loading: boolean,
 error: null | boolean | data: Array<T>}> = {
  loading: false,
  error: "",
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
