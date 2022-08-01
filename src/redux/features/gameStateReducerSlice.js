import { createSlice } from "@reduxjs/toolkit";

export const gameStateSlice = createSlice({
  name: "game",
  initialState: {
    isOpen: false,
  },
  reducers: {
    gameCurrentState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { gameCurrentState } = gameStateSlice.actions;

export default gameStateSlice.reducer;
