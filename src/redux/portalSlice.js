import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
  name: "counter",
  initialState: {
    staffInfo: {},
    firstName: "",
    lastName: "",
  },
  reducers: {
    newName: (state, action) => {
      state.staffInfo = action.payload;
    },
  },
});

export const { newName } = portalSlice.actions;
export default portalSlice.reducer;
