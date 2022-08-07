import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const gameStateSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    gameCurrentState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { gameCurrentState } = gameStateSlice.actions;

export default gameStateSlice.reducer;
