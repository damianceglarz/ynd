import { fetchUserRepositoriesBySubstring } from "src/api/users/users.api";
import userSlice from "../slices/user-search.slice";
import { AppDispatch } from "../store";

export const getUserReposBySubstring =
  (substring: string) => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.searchStart());

    try {
      const { data } = await fetchUserRepositoriesBySubstring(substring);

      dispatch(userActions.searchError({ data }));
    } catch (ex) {
      dispatch(userSlice.actions.searchError({ exception: ex }));
    }
  };
