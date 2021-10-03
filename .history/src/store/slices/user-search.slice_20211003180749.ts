import { createSlice } from '@reduxjs/toolkit';

import { ResultRepository } from 'src/modules/UserSearch/types/UserSearch.types';

type State = {
    searchString: string;
    loading: boolean;
    error: null | string;
    data: null | ResultRepository[];
};

const initialState: State = {
    searchString: '',
    loading: false,
    error: null,
    data: null,
};

const userSearchSlice = createSlice({
    name: 'userSearch',
    initialState,
    reducers: {
        setUserSearchString: (state, action) => {
            state.searchString = action.payload.substring;

            if (action.payload.substring === '') {
                state.error = null;
                state.data = null;
            }
        },
        searchStart: (state, action) => {
            if (!state.loading) {
                state.searchString = action.payload.substring;
                state.error = null;
                state.loading = true;
                state.data = null;
            }
        },
        searchSuccess: (state, action) => {
            state.error = null;
            state.loading = false;
            state.data = action.payload.data;
        },
        searchError: (state, action) => {
            state.loading = false;
            state.data = null;

            if (action.payload.exception.response?.status === 404) {
                state.error = 'User not found';
            } else {
                state.error = action.payload.exception.toString();
            }
        },
    },
});

export default userSearchSlice;
