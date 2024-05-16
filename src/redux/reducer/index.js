
import { combineReducers } from "redux";
// import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'
import jobReducer from '../slices/jobSlice';

const rootReducer=combineReducers({
    auth:authReducer,
    job:jobReducer,

    
})

export default rootReducer;