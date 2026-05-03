import { createSlice } from "@reduxjs/toolkit";

const initialize = {
  id: "",
};

const currManager = createSlice({
  name: "currManager",
  initialState: initialize,
  reducers: {
    setCurrManager: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { setCurrManager } = currManager.actions;
export default currManager.reducer;
