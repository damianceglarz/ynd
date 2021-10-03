const getUserBySubstring =
  (substring: string) => async (dispatch: AppDispatch) => {
    dispatch(userActions.searchStart);

    try {
      const response = await getUserBySubstring(substring);

      console.log(response);
      // dispatch(userActions.searchError({ data: ex }));
    } catch (ex) {
      dispatch(userActions.searchError({ exception: ex }));
    }
  };
