// store.js

import { configureStore } from '@reduxjs/toolkit';
import loginSlices from '../slices/loginSlices';
import signupSlices from './slices/signupSlices';

const store = configureStore({
  reducer: {
    login: loginSlices,
    signup: signupSlices,
    // Add other reducers if needed
  },
});

export default store;
