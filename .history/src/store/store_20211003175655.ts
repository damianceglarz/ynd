import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user-search.slice';

const store = configureStore({
    reducer: {
        user: userReducer.reducer,
    },
});

export default store;
