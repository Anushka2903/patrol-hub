import { combineReducers } from "redux";
import userSlice from "./Slice/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userSlice,
  // other reducers...
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
