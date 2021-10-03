import { ACTIONS, INITIAL_STATE } from "../constants/store.constants";

const userReducer = (
  state: typeof INITIAL_STATE = INITIAL_STATE,
  action: typeof ACTIONS
) => {
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
