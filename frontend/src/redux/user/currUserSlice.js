import { createSlice } from "@reduxjs/toolkit";

const initialize = {
  id: "",
};

const currUser = createSlice({
  name: "currUser",
  initialState: initialize,
  reducers: {
    setCurrUser: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { setCurrUser } = currUser.actions;
export default currUser.reducer;
