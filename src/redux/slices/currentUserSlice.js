import { createSlice } from "@reduxjs/toolkit";
const currentUserSlice = createSlice({
  name: "rootUser",
  initialState: {},
  reducers: {
    setCurrentUser(state, action) {
      return { ...action.payload };
    },
  },
});
export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
