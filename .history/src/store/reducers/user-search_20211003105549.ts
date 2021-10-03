import { ACTIONS } from "../constants/store.constants";

const userReducer = (state: typeof INITIAL_STATE = INITIAL_STATE, action) => {
  switch (action) {
    case ACTIONS.SEARCH_START:
    case ACTIONS.SEARCH_SUCCESS:
    case ACTIONS.SEARCH_ERROR:
    case ACTIONS.SEARCH_CLEAR:
    default:
      return state;
  }
};

export default userReducer;
