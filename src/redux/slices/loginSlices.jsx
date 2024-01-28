// loginSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
 
};

export const loginSlices = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  
  }, 
});

export const { setLoggedIn } = loginSlices.actions;

export default loginSlices.reducer;
