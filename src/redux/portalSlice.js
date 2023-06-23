import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "counter",
  initialState: {
    staffInfo: {},
    studentInfo: {},
    firstName: "",
    lastName: "",
    emailVerify: false,
  },
  reducers: {
    newName: (state, action) => {
      state.staffInfo = action.payload;
    },
    newStudent: (state, action) => {
      state.studentInfo = action.payload;
    },
    myEmailVerify: (state, action) => {
      state.emailVerify = action.payload;
    }
  },
});

export const { newName, newStudent, myEmailVerify } = portalSlice.actions;
export default portalSlice.reducer;
