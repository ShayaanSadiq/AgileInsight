import { createSlice } from "@reduxjs/toolkit";

const initialize = {
  email: "",
};

const currOrg = createSlice({
  name: "currOrg",
  initialState: initialize,
  reducers: {
    setCurrOrg: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { setCurrOrg } = currOrg.actions;
export default currOrg.reducer;
