import { fetchUserRepositoriesBySubstring } from 'src/api/users/users.api';

import userSearchSlice from '../slices/user-search.slice';
import { AppDispatch } from '../store';

export const getUserReposBySubstring =
    (substring: string) => async (dispatch: AppDispatch) => {
        dispatch(userSearchSlice.actions.searchStart({ substring }));

        try {
            const { data } = await fetchUserRepositoriesBySubstring(substring);
            dispatch(userSearchSlice.actions.searchSuccess({ data }));
        } catch (ex)  
            dispatch(userSearchSlice.actions.searchError({ exception: ex }));
        }
    };
