import { combineReducers } from "@reduxjs/toolkit";
import companySlice from "./companySlice";
import technicianSlice from "./technicianSlice";
import rootUserSlice from "./currentUserSlice";
import resumeSlice from "./resumeSlice";
export const rootReducer = combineReducers({
  currentUser: rootUserSlice,
  company: companySlice,
  technician: technicianSlice,
  resume: resumeSlice,
});
