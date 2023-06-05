import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "counter",
  initialState: {
    staffInfo: {},
    studentInfo: {},
    firstName: "",
    lastName: "",
  },
  reducers: {
    newName: (state, action) => {
      state.staffInfo = action.payload;
    },
    newStudent: (state, action) => {
      state.studentInfo = action.payload;
    }
  },
});

export const { newName, newStudent } = portalSlice.actions;
export default portalSlice.reducer;
