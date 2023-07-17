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
    mySub: []
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
    }
  },
});

export const { newName, newStudent, myEmailVerify, myOTPVerify, mySentOTP, mySubSub} = portalSlice.actions;
export default portalSlice.reducer;
