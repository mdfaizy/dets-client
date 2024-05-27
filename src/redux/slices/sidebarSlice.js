// // src/redux/reducers/sidebarReducer.js

// import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../action/sidebarAction';

// const initialState = {
//   isSidebarOpen: false,
// };

// const sidebarReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case OPEN_SIDEBAR:
//       return { ...state, isSidebarOpen: true };
//     case CLOSE_SIDEBAR:
//       return { ...state, isSidebarOpen: false };
//     default:
//       return state;
//   }
// };

// export default sidebarReducer;



// src/redux/slices/sidebarSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
