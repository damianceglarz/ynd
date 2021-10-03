import { fetchUserRepositoriesBySubstring } from "src/api/users/users.api";
import userSlice from "../slices/user-search.slice";
import { AppDispatch } from "../store";

export const resetUserRepos = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.reset());
};

export const getUserReposBySubstring =
  (substring: string) => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.searchStart({ substring }));

    try {
      const { data } = await fetchUserRepositoriesBySubstring(substring);

      dispatch(userSlice.actions.searchSuccess({ data }));
    } catch (ex) {
      dispatch(userSlice.actions.searchError({ exception: ex }));
    }
  };
