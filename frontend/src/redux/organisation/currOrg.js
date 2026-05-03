import { createSlice } from "@reduxjs/toolkit";

const initialize = {
  id: "",
};

const currOrg = createSlice({
  name: "currOrg",
  initialState: initialize,
  reducers: {
    setCurrOrg: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { setCurrOrg } = currOrg.actions;
export default currOrg.reducer;
