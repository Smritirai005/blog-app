// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authslice';  // Default import

const store = configureStore({
    reducer: {
        auth: authReducer,  // Assign the reducer to 'auth'
    },
});

export default store;
