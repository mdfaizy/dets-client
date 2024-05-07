// import { combineReducers } from '@reduxjs/toolkit';
// import authReducer from '../slices/authSlice'
// import profileReducer from '../slices/profileSlice';
// // import cartReducer from '../slice/cartSlice';
// import newadmissionReducer from "../slices/newdmissionSlice"
// const rootReducer = combineReducers({
//   auth: authReducer,
//   profile:profileReducer,
// //   cart: cartReducer,
// newadmission: newadmissionReducer,
// });

// export default rootReducer;












import { combineReducers } from "redux";
// import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'


const rootReducer=combineReducers({
    auth:authReducer,
    
    
})

export default rootReducer;