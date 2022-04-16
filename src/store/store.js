import { configureStore } from "@reduxjs/toolkit";

import main from '../reducers/mainReducer';

export const store = configureStore({
    reducer: { main },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});