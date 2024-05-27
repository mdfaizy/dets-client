// // src/redux/reducers/themeReducer.js

// import { TOGGLE_THEME } from '../slices/themeSlice';
// import { LIGHT_THEME, DARK_THEME } from '../../utils/constant';

// const initialState = {
//   theme: window.localStorage.getItem('themeMode') || LIGHT_THEME,
// };

// const themeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_THEME:
//       const newTheme = state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
//       window.localStorage.setItem('themeMode', newTheme);
//       return { ...state, theme: newTheme };
//     default:
//       return state;
//   }
// };

// export default themeReducer;




// src/redux/reducers/themeReducer.js
// src/redux/slices/themeSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { LIGHT_THEME, DARK_THEME } from '../../utils/constant'; // Ensure the path is correct

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('themeMode') || LIGHT_THEME;
  }
  return LIGHT_THEME;
};

const initialState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('themeMode', state.theme);
      }
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
