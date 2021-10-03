import { createSlice } from "@reduxjs/toolkit";

import { ACTIONS } from "../action-types/action-types";
import { ActionType } from "../types/store.types";

// const userReducer = (
//   state: typeof INITIAL_STATE = INITIAL_STATE,
//   action: ActionType
// ) => {
//   switch (action.type) {
//     case ACTIONS.SEARCH_START:
//     case ACTIONS.SEARCH_SUCCESS:
//     case ACTIONS.SEARCH_ERROR:
//     case ACTIONS.SEARCH_CLEAR:
//     default:
//       return state;
//   }
// };

const initialState = {
  loading: false,
  error: null,
  data: [],
};

createSlice({
  name: "userSearch",
  initialState,
  reducers: {
    searchStart: (state) => {
      (state.error = null), (state.loading = true), (state.data = []);
    },
    searchSuccess: (state) => {},
    searchError: (state) => {},
  },
});

export default userReducer;