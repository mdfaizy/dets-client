
import { combineReducers } from "redux";
// import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'
import jobReducer from '../slices/jobSlice';
import themeReducer from "../slices/theamSlice";
import sidebarReducer from "../slices/sidebarSlice";
const rootReducer=combineReducers({
    auth:authReducer,
    job:jobReducer,
    theme: themeReducer,
    sidebar: sidebarReducer,

    
})

export default rootReducer;