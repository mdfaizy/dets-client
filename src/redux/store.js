import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/index';

const store = configureStore({
  reducer: rootReducer,
});

export default store; 



// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import thunk from 'redux-thunk';
// import rootReducer from './reducer/index';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk, ...getDefaultMiddleware()]
// });

// export default store;
