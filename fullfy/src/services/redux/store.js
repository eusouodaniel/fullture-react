import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './counter';

export const store = configureStore({
    reducer: {
        page: pageReducer
    }
})