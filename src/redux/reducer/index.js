import { combineReducers } from "redux";
// import { combineReducers } from '@reduxjs/toolkit';
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import jobReducer from "../slices/jobSlice";
import themeReducer from "../slices/theamSlice";
import sidebarReducer from "../slices/sidebarSlice";
import pgReducer from "../slices/pgStudentSlice";
import exitStudentReducer from "../slices/exitSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  profile:profileReducer,
  job: jobReducer,
  pg: pgReducer,
  exitstudent: exitStudentReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
