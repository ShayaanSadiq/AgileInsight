import { createSlice } from "@reduxjs/toolkit";

const initialize = {
  email: "",
};

const currManager = createSlice({
  name: "currManager",
  initialState: initialize,
  reducers: {
    setCurrManager: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { setCurrManager } = currManager.actions;
export default currManager.reducer;
