import userSlice from "../slices/user-search.slice";

const getUserBySubstring =
  (substring: string) => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.searchStart);

    try {
      const response = await getUserBySubstring(substring);

      console.log(response);
      // dispatch(userActions.searchError({ data: ex }));
    } catch (ex) {
      dispatch(userSlice.actions.searchError({ exception: ex }));
    }
  };
