import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: 7,
};

export const boardSizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    selectSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { selectSize } = boardSizeSlice.actions;

export default boardSizeSlice.reducer;
