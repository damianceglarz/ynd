import userSlice from "../slices/user-search.slice";

const getUserBySubstring =
  (substring: string) => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.searchStart);

    try {
      const response = await getUserBySubstring(substring);

      console.log(response);
      // dispatch(userActions.searchError({ data: ex }));
    } catch (ex) {
      dispatch(userActions.searchError({ exception: ex }));
    }
  };
