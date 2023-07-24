import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "counter",
  initialState: {
    staffInfo: {},
    studentInfo: {},
    firstName: "",
    lastName: "",
    emailVerify: "",
    OTPVerify: false,
    otp: '',
    mySub: [],
    hide_show: false
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
    },
    myOTPVerify: (state, action) => {
      state.OTPVerify = action.payload;
    },
    mySentOTP: (state, action) => {
      state.otp = action.payload
    },
    mySubSub: (state, action) => {
      state.mySub = action.payload
    },
    show_hide_offcanvas: (state, action) => {
      state.hide_show = action.payload
    }
  },
});

export const { newName, newStudent, myEmailVerify, myOTPVerify, mySentOTP, mySubSub, show_hide_offcanvas} = portalSlice.actions;
export default portalSlice.reducer;
