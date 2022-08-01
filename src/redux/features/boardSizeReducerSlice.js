import { createSlice } from "@reduxjs/toolkit";

export const boardSizeSlice = createSlice({
  name: "size",
  initialState: {
    size: 7,
  },
  reducers: {
    selectSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { selectSize } = boardSizeSlice.actions;

export default boardSizeSlice.reducer;
